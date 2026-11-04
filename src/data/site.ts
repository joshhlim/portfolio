// Site content lives here so updates don't require touching page layouts.

export const site = {
  name: 'Josh Lim',
  description: 'Josh Lim, AI Engineer in Singapore',
  tagline: 'Increasing the efficiency and outreach of Healthcare, one build at a time.',
};

export const navLinks = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/experience', 'Experience'],
  ['/projects', 'Projects'],
  ['/now', 'Now'],
  ['/contact', 'Contact'],
];

export const pageDescriptions = {
  home: 'Josh Lim is an AI Engineer in Singapore who builds practical AI tools for healthcare and everyday work.',
  about: "Josh Lim's education, certifications, skills and interests. NUS Business Analytics graduate and AI Engineer in Singapore.",
  experience: "Josh Lim's work experience in AI engineering and risk analytics at Ng Teng Fong General Hospital, InsourceAI and ByteDance.",
  projects: "Josh Lim's projects, including healthcare AI work at Ng Teng Fong General Hospital and GamBROle, a multiplayer score keeping app.",
  now: 'What Josh Lim is building and learning right now, with recent GitHub activity.',
  contact: 'Get in touch with Josh Lim on LinkedIn, GitHub or email.',
};

/* ---------- Home ---------- */

export const home = {
  eyebrow: 'AI Engineer · Singapore',
  headline: "Hi, I'm Josh. I build practical AI tools that make work easier.",
  intro: "I'm an AI Engineer at Ng Teng Fong General Hospital and a 2026 Business Analytics graduate of NUS School of Computing. I enjoy turning messy data and documents into tools people actually use, from document-understanding pipelines to interactive analytics apps.",
  cards: [
    { eyebrow: 'Now', title: 'AI Engineer', detail: 'Ng Teng Fong General Hospital' },
    { eyebrow: 'Previously', title: 'InsourceAI · ByteDance', detail: 'AI engineering and risk analytics' },
    { eyebrow: 'Education', title: 'NUS, Business Analytics', detail: 'School of Computing, class of 2026' },
  ],
};

/* ---------- About ---------- */

export const about = {
  intro: 'I studied Business Analytics at NUS School of Computing and now work as an AI Engineer at Ng Teng Fong General Hospital. My path runs through risk analytics at ByteDance and AI engineering at the startup InsourceAI, so I care about both the model and the decisions it supports.',
  education: {
    school: 'National University of Singapore',
    degree: 'Bachelor of Science in Business Analytics, School of Computing',
    when: 'Graduated 2026',
  },
  certifications: [
    {
      badge: 'AWS',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services Training and Certification',
      status: 'Earned July 2026',
      url: 'https://www.credly.com/badges/58187e27-5848-41bd-96bb-a3ae56c506bc/public_url',
    },
  ],
  certificationsInProgress: [
    {
      badge: 'MS',
      name: 'Microsoft Certified: Azure AI Apps and Agents Developer Associate (Exam AI-103)',
      issuer: 'Microsoft',
      status: 'In progress',
    },
    {
      badge: 'AWS',
      name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
      issuer: 'Amazon Web Services',
      status: 'In progress: enrolled in the exam prep plan',
    },
  ],
  interests: [
    { title: '3D computer vision', detail: 'Exploring how machines perceive and reconstruct the 3D world.' },
    { title: 'AI in everyday life', detail: 'Learning to use AI more effectively in my own personal life.' },
  ],
  hobbies: [
    { title: 'Guitar', detail: 'Picking up the guitar whenever I get the chance.' },
    { title: 'Music', detail: 'Listening to and enjoying music of all kinds.' },
    { title: 'Social games', detail: 'Social gambling with friends over Big Two and Mahjong, the inspiration behind GamBROle.' },
  ],
  skills: ['Python', 'TypeScript', 'FastAPI', 'Flask', 'Streamlit', 'scikit-learn', 'NumPy', 'pandas', 'Jupyter', 'SQL / SQLite', 'Supabase', 'Dashboards', 'ETL pipelines', 'Vercel / Render', 'pytest · ruff · mypy', 'CI'],
};

/* ---------- Experience ---------- */

export const experience = [
  {
    role: 'AI Engineer',
    org: 'Ng Teng Fong General Hospital',
    when: '2026 – Present',
    location: 'Singapore',
    linkToProjects: true,
    points: [
      'Building a staff rostering system with constraint programming, now in UAT.',
      'Developing CarePal, an assistant for post-discharge patient calls, and a multilingual patient-facing avatar on Azure.',
      "Guide non-technical staff in creating and sharing AI agents on Synapxe's AgentSea platform, and set agents up for them when needed.",
    ],
  },
  {
    role: 'AI Engineer',
    org: 'InsourceAI',
    when: 'Aug 2025 – Jan 2026',
    location: 'Internship · Startup',
    points: [
      'Built AI tools that extract text from documents and interpret the contents.',
      'Used the extracted and interpreted information to generate bills automatically.',
    ],
  },
  {
    role: 'Risk Analyst',
    org: 'ByteDance',
    when: 'Jan 2025 – Jul 2025',
    location: 'Internship',
    points: [
      'Built dashboards to track key risk signals.',
      'Ran both high-level and deep-dive data analyses to surface trends and issues.',
      'Drafted reports and shared findings with relevant stakeholders.',
      'Monitored risk on an ongoing basis and took action when issues came up.',
    ],
  },
];

/* ---------- Projects ---------- */

export const workProjects = {
  intro: 'Internal AI projects at Ng Teng Fong General Hospital.',
  items: [
    {
      name: 'Staff Rostering Solution',
      icon: 'cal',
      status: 'In UAT',
      detail: 'A constraint programming system that assigns staff to shifts and locations based on a defined set of constraints.',
      tags: ['Constraint programming', 'AWS EC2'],
    },
    {
      name: 'CarePal',
      icon: 'phone',
      status: 'In development',
      detail: 'Supports care connectors on post-discharge calls. It gives patients call summaries, asks post-discharge questions to check on their wellbeing, offers guidance to help prevent readmissions, and answers patient questions as a Q&A bot.',
      tags: ['Azure', 'Conversational AI'],
    },
    {
      name: 'AgentSea Enablement',
      icon: 'book',
      status: null,
      detail: "Helping non-technical staff create and share AI agents on Synapxe's AgentSea platform, from writing system prompts to setting up knowledge spaces, and setting agents up for them when needed.",
      tags: ['AgentSea', 'Enablement', 'Prompt design'],
    },
    {
      name: 'Patient-facing Avatar',
      icon: 'avatar',
      status: 'In development',
      detail: 'Takes multilingual voice input and answers clinical onboarding questions using RAG, with a custom avatar that speaks the answers.',
      tags: ['Azure', 'RAG', 'Speech'],
    },
  ],
};

export const gambrole = {
  tags: ['Python', 'FastAPI', 'TypeScript', 'Supabase', 'Vercel', 'Render', 'pytest'],
  liveUrl: 'https://gambrole.vercel.app',
  repoUrl: 'https://github.com/joshhlim/gambrole',
  originUrl: 'https://github.com/joshhlim/taidi-tracker',
  features: [
    { title: 'Configurable house rules', detail: 'Scoring for Big Two (Taidi) and Mahjong, set up to match how each group plays.' },
    { title: 'Multiplayer rooms', detail: 'Everyone joins from their own phone and the scores stay in sync.' },
    { title: 'Lifetime analytics', detail: 'Tracks stats and settlements across every game night.' },
  ],
};

export const smallerBuilds = [
  {
    name: 'Ask Josh',
    detail: 'An AI assistant on this site that answers questions about me using only the site content, with links to its sources. It streams answers through Vercel AI Gateway and is rate limited.',
    tags: ['TypeScript', 'Astro', 'AI SDK', 'Vercel AI Gateway'],
    liveUrl: '/#ask',
    liveLabel: 'Try it',
    repoUrl: 'https://github.com/joshhlim/portfolio',
  },
  {
    name: 'Digital name card template',
    detail: 'A template for building your own digital name card, with a step-by-step guide so no coding is needed. It includes a QR code, contact download and offline support.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://joshlim.pages.dev',
    liveLabel: 'My card',
    repoUrl: 'https://github.com/joshhlim/Digital-namecard-template',
  },
];

/* ---------- Now: bump `updated` whenever this section changes ---------- */

export const now = {
  updated: '2026-11-03',
  building: [
    {
      title: 'Healthcare AI tools',
      detail: 'At Ng Teng Fong General Hospital: staff rostering, post-discharge patient support and a patient-facing avatar.',
    },
    {
      title: 'GamBROle',
      detail: 'Score keeping and settlements for Big Two (Taidi) and Mahjong nights.',
      url: 'https://github.com/joshhlim/gambrole',
    },
    {
      title: 'Digital name card template',
      detail: 'A template for building your own digital name card from one config file, with a QR code, contact download and offline support.',
      url: 'https://github.com/joshhlim/Digital-namecard-template',
    },
  ],
  outside: [
    {
      title: 'Learning on guitar',
      items: [
        { name: 'Pride and Joy', by: 'Stevie Ray Vaughan', note: "The Texas shuffle, and a style I'm not used to" },
        { name: 'Cliffs of Dover', by: 'Eric Johnson', note: 'Keeping up with the speed' },
        { name: 'The Best of Times', by: 'Dream Theater', note: 'Keeping up with the speed' },
      ],
    },
    {
      title: 'On repeat',
      lang: 'zh-Hant',
      items: [
        { name: '黃昏 (Huang Hun)', by: '周傳雄 Steve Chou' },
        { name: '愛情陷阱 (Ai Qing Xian Jing)', by: '譚詠麟 Alan Tam' },
        { name: '我喜歡你 (Wo Xi Huan Ni)', by: '芒果醬 Mango Jump' },
      ],
    },
    {
      title: 'AI in my everyday life',
      detail: "A recent GrokBot fan. I've built bots for site management, plus Telegram bots friends can message to help plan my calendar. Smaller ones clean up my computer and recommend dinner.",
    },
    {
      title: 'Game night record',
      detail: 'Up overall after 15 sessions of Big Two and Mahjong, the game nights that inspired GamBROle.',
    },
  ],
};

/* ---------- Contact ---------- */

export const contact = {
  intro: "I'm always happy to talk about applied AI, data and interesting problems. Reach out on any of these:",
  channels: [
    { label: 'LinkedIn', value: 'linkedin.com/in/joshhlim', url: 'https://www.linkedin.com/in/joshhlim' },
    { label: 'GitHub', value: 'github.com/joshhlim', url: 'https://github.com/joshhlim' },
    { label: 'Email', value: 'joshhlim2606@gmail.com', url: 'mailto:joshhlim2606@gmail.com' },
  ],
};

/* ---------- Digital card (/card), details from the original joshlim.pages.dev card ---------- */

export const card = {
  title: 'AI Engineer',
  org: 'National University Health System (NUHS)',
  photo: '/img/photo.jpg',
  logo: '/img/nuhs-logo.png',
  vcf: '/josh-lim.vcf',
  emails: [
    { label: 'NUHS', value: 'josh_lim@nuhs.edu.sg' },
    { label: 'Personal', value: 'joshhlim2606@gmail.com' },
  ],
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/joshhlim' },
    { label: 'GitHub', url: 'https://github.com/joshhlim' },
  ],
};
