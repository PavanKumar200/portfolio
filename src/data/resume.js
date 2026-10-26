// Central source of truth — everything on the site is generated from this file.

export const profile = {
  name: 'Pavankumar S',
  firstName: 'Pavan',
  role: 'AI/ML Engineer & Full-Stack Developer',
  email: 'pavancheery600@gmail.com',
  phone: '+91 88613 29951',
  location: 'Chamarajpet, Bangalore — 18',
  linkedin: 'https://www.linkedin.com/in/pavankumar-s',
  github: 'https://github.com/Pavankumar200',
}

export const typedRoles = [
  'AI & Automation Enthusiast',
  'React + Tailwind Developer',
  'LangGraph / RAG Builder',
  'n8n Workflow Automator',
  'Lifelong Debugger',
]

export const heroStats = [
  { value: '9.1', label: 'BCA CGPA' },
  { value: '4', label: 'Internships' },
  { value: '3+', label: 'Live Projects' },
  { value: '5', label: 'Languages Spoken' },
]

export const summary =
  'BCA graduate and MCA (AI/ML) student with hands-on experience in Python, debugging, and troubleshooting technical systems. I build and test LangGraph/RAG assistants, automate real workflows with n8n, and independently ship and maintain live client websites. Quick to learn, reliable under deadlines, and comfortable collaborating with teams.'

export const skillCategories = [
  {
    id: 'programming',
    title: 'Programming & Scripting',
    icon: '⌨️',
    accent: 'cyan',
    blurb: 'The languages I reach for first.',
    skills: ['Python', 'C++', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Git & GitHub'],
    bars: { Python: 92, JavaScript: 85, 'C++': 78 },
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting & Support',
    icon: '🔧',
    accent: 'amber',
    blurb: 'Root-cause first, band-aids never.',
    skills: [
      'Debugging',
      'Root-Cause Analysis',
      'Prompt / Output Testing',
      'Post-launch Maintenance',
      'Documentation',
    ],
    bars: { Debugging: 95, 'Root-Cause Analysis': 90 },
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    icon: '🤖',
    accent: 'purple',
    blurb: 'Where my current obsession lives.',
    skills: [
      'LangChain',
      'LangGraph',
      'RAG',
      'ChromaDB',
      'Human-in-the-Loop (HITL)',
      'n8n Workflow Automation',
      'Prompt Design',
    ],
    bars: { LangGraph: 88, RAG: 90, n8n: 86 },
  },
  {
    id: 'web',
    title: 'Web & Data',
    icon: '🌐',
    accent: 'pink',
    blurb: 'Ship it, style it, chart it.',
    skills: [
      'Flask',
      'React.js (Vite)',
      'Tailwind CSS',
      'pandas',
      'numpy',
      'Scikit-Learn',
      'Power BI',
    ],
    bars: { React: 85, Flask: 80, 'Scikit-Learn': 82 },
  },
  {
    id: 'collab',
    title: 'Collaboration Tools',
    icon: '🤝',
    accent: 'lime',
    blurb: 'Working well with humans too.',
    skills: [
      'Figma',
      'Canva',
      'VS Code',
      'Client Communication',
      'Requirements Gathering',
      'Progress Tracking',
    ],
    bars: { Figma: 84, 'Client Communication': 92 },
  },
]

export const experience = [
  {
    id: 'agentic-ai',
    role: 'Agentic AI Intern',
    org: 'Innomatics Research Labs',
    period: 'Feb 2026 – May 2026',
    color: 'purple',
    points: [
      'Identified and troubleshot accuracy and reliability gaps in a LangGraph-orchestrated RAG customer-support workflow, iteratively testing prompts to reduce ambiguous outputs.',
      'Implemented Human-in-the-Loop escalation logic that routes low-confidence responses for human review — a real reliability upgrade for production-style scenarios.',
    ],
    tags: ['LangGraph', 'RAG', 'HITL', 'Prompt Testing'],
  },
  {
    id: 'freelance',
    role: 'Freelance Full-Stack Developer',
    org: 'Independent Client Projects',
    period: '2026 – Ongoing',
    color: 'cyan',
    points: [
      'Owned end-to-end delivery of a live production website for Cliniquora Solutions: requirements, build, launch on a custom domain, and ongoing maintenance.',
      'Managed a multi-workstream engagement for a surgical clinic — website, pricing tools, marketing and brand assets — reporting progress directly to the client to hit deadlines.',
    ],
    tags: ['React.js', 'Flask', 'Client Work', 'Deployment'],
  },
  {
    id: 'uiux',
    role: 'UI/UX Intern',
    org: 'Advorix Technologies',
    period: 'Jan 2026 – Apr 2026',
    color: 'pink',
    points: [
      'Designed wireframes and user interfaces, translating stakeholder requirements into clear, usable flows and folding in team feedback fast.',
    ],
    tags: ['Figma', 'Wireframes', 'UX Flows'],
  },
  {
    id: 'webdev',
    role: 'Website Design & Development Intern',
    org: 'Internship Studio',
    period: 'Oct 2025 – Dec 2025',
    color: 'amber',
    points: [
      'Built responsive web pages using HTML, CSS, and JavaScript — my first taste of shipping real front-ends.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
]

export const projects = [
  {
    id: 'rag-assistant',
    emoji: '🧠',
    title: 'RAG-Based Customer Support Assistant',
    tagline: 'Multistep reasoning — with a human safety net.',
    description:
      'Python assistant that combines PDF ingestion and vector search with a LangGraph workflow for query routing and multistep reasoning. HITL review catches low-confidence responses before they reach users.',
    stack: ['LangChain', 'LangGraph', 'ChromaDB', 'Python'],
    accent: 'purple',
    highlight: 'HITL escalation routing',
  },
  {
    id: 'secusafe',
    emoji: '🛡️',
    title: 'SecuSafe — Security-as-a-Service Portal',
    tagline: 'Final year project. Real-time threat detection.',
    description:
      'Full-stack portal that detects phishing and malicious URLs in real time by combining rule-based heuristics with an ML model targeting 90%+ detection accuracy. Includes a scraping / feature-extraction pipeline and a Telegram Bot for cross-platform verification.',
    stack: ['React.js (Vite)', 'Flask', 'Scikit-Learn', 'Telegram Bot'],
    accent: 'pink',
    highlight: '90%+ target detection accuracy',
  },
  {
    id: 'newsletter',
    emoji: '📨',
    title: 'Automated Weekly AI Newsletter',
    tagline: 'A manual chore, turned into a pipeline.',
    description:
      'Spot-timed automation: an n8n workflow that gathers, structures, and summarizes content from multiple sources into a polished weekly AI newsletter — eliminating roughly 4 hours of manual effort every week.',
    stack: ['n8n', 'JavaScript', 'Claude AI'],
    accent: 'lime',
    highlight: '~4 hrs/week reclaimed',
  },
]

export const education = [
  {
    degree: 'MCA — AI / Machine Learning (Distance Learning)',
    school: 'Pursuing, 2026 – 2028',
    detail: 'Deepening the AI/ML specialization while working full-time on real projects.',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Computer Applications',
    school: 'Dr. Manmohan Singh Bengaluru City University · 2023 – 2026',
    detail: 'Graduated with a CGPA of 9.1.',
    icon: '📘',
  },
]

export const certifications = [
  { name: 'Prompt Engineering & Programming with OpenAI', org: 'Columbia University' },
  { name: 'Data Analytics Job Simulation', org: 'Deloitte Australia (Forage)' },
  { name: 'JavaScript Essentials 1', org: 'Cisco' },
]

export const extras = {
  languages: ['English', 'Kannada', 'Telugu', 'Tamil', 'Hindi'],
  hobbies: ['Swimming', 'Reading Books', 'Video Editing'],
}

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
