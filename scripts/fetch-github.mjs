// Fetches contribution counts and the repos listed in src/data/github-config.json,
// then writes src/data/github.json. Run locally with:
//   GITHUB_TOKEN=$(gh auth token) npm run fetch:github
//
// Privacy: only repos named in the config are requested, and a private one is an
// error. Private work otherwise appears solely as anonymous daily counts.
// Any failure exits before writing, so the site keeps its last good data.
import { readFile, rename, writeFile } from 'node:fs/promises';

const CONFIG_URL = new URL('../src/data/github-config.json', import.meta.url);
const OUTPUT_URL = new URL('../src/data/github.json', import.meta.url);
const LEVELS = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };

const token = process.env.GITHUB_TOKEN;
if (!token) throw new Error('GITHUB_TOKEN is not set');

async function graphql(query, variables) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'portfolio-github-refresh' },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
  const body = await res.json();
  if (body.errors?.length) throw new Error(body.errors.map((e) => e.message).join('; '));
  return body.data;
}

const config = JSON.parse(await readFile(CONFIG_URL, 'utf8'));
for (const name of config.repos) {
  if (!/^[\w.-]+$/.test(name)) throw new Error(`Invalid repo name: ${name}`);
}

// GitHub rejects windows over a year, so the start date rolls forward once the
// configured date is more than a year old.
const to = new Date();
const oneYearAgo = new Date(to);
oneYearAgo.setUTCFullYear(to.getUTCFullYear() - 1);
oneYearAgo.setUTCDate(oneYearAgo.getUTCDate() + 1);
const since = new Date(config.since);
const from = since > oneYearAgo ? since : oneYearAgo;

const { user } = await graphql(
  `query ($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      id
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { date contributionCount contributionLevel } }
        }
      }
    }
  }`,
  { login: config.login, from: from.toISOString(), to: to.toISOString() },
);

// Uses the owner's latest commit rather than pushedAt, which the daily data
// refresh would otherwise bump to "today" for this repo.
const repoFields = config.repos
  .map((name, i) => `r${i}: repository(owner: $login, name: "${name}") {
      name description url isPrivate
      primaryLanguage { name }
      defaultBranchRef { target { ... on Commit {
        history(first: 1, author: { id: $id }) { nodes { committedDate } }
      } } }
    }`)
  .join('\n');
const repoData = await graphql(`query ($login: String!, $id: ID!) { ${repoFields} }`, { login: config.login, id: user.id });

const repos = Object.values(repoData)
  .map((repo) => {
    if (repo.isPrivate) throw new Error(`Refusing to publish private repo: ${repo.name}`);
    return {
      name: repo.name,
      description: repo.description,
      url: repo.url,
      language: repo.primaryLanguage?.name ?? null,
      lastCommitAt: repo.defaultBranchRef?.target?.history?.nodes?.[0]?.committedDate ?? null,
    };
  })
  .sort((a, b) => (b.lastCommitAt ?? '').localeCompare(a.lastCommitAt ?? ''));

const calendar = user.contributionsCollection.contributionCalendar;
const days = calendar.weeks
  .flatMap((week) => week.contributionDays)
  .map((day) => ({ date: day.date, count: day.contributionCount, level: LEVELS[day.contributionLevel] ?? 0 }));
if (days.length === 0) throw new Error('GitHub returned an empty contribution calendar');

// The timestamp changes on every run, which also keeps the repo active so GitHub
// doesn't pause the scheduled workflow after 60 quiet days.
const output = { fetchedAt: to.toISOString(), total: calendar.totalContributions, days, repos };

const tempUrl = new URL(`${OUTPUT_URL.href}.tmp`);
await writeFile(tempUrl, `${JSON.stringify(output, null, 2)}\n`);
await rename(tempUrl, OUTPUT_URL);
console.log(`Wrote ${days.length} days, ${output.total} contributions, ${repos.length} repos`);
