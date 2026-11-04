import { chromium, devices } from 'playwright';
const b = await chromium.launch();
for (const [name, opts] of [['desktop', { viewport: { width: 1280, height: 900 } }], ['mobile', devices['iPhone 13']]]) {
  const p = await (await b.newContext(opts)).newPage();
  p.on('pageerror', e => console.log('pageerror', e.message));
  p.on('response', async r => { if (r.url().includes('/api/')) console.log(name, 'api', r.status()); });
  await p.goto('https://joshlim.vercel.app/projects/receipt');
  await p.setInputFiles('#rx-file', '/workspace/portfolio-check/samples/receipt.png');
  await p.waitForSelector('#rx-go:not([disabled])'); await p.click('#rx-go');
  await p.waitForFunction(() => document.getElementById('rx-go').textContent === 'Extract', null, { timeout: 45000 });
  if (name === 'mobile') await p.locator('#rx-res').scrollIntoViewIfNeeded();
  await p.screenshot({ path: `/workspace/portfolio-check/receipt-${name}.png`, fullPage: name === 'mobile' });
  console.log(name, (await p.locator('.rx-out').textContent()).replace(/\s+/g, ' ').slice(0, 250));
}
await b.close();
