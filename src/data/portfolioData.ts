import { Project, ExperienceItem, SkillCategory, EducationItem, AchievementItem, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Divyansh Magan',
  title: 'Software Engineer & AI Systems Builder',
  roles: [
    'Software Engineer · RAG & AI Infrastructure',
    'Backend & Distributed Systems',
    'Full-Stack Data Pipelines',
  ],
  tagline: 'I build production LLM/RAG systems and scalable data pipelines that turn unstructured chaos into structured insight.',
  location: 'Delhi, India',
  availability: 'Open to opportunities',
  email: 'divyanshmagan1234@gmail.com',
  phone: '+91-9873918104',
  github: 'https://github.com/divyanshmagan',
  linkedin: 'https://www.linkedin.com/in/divyansh-magan/',
  bio: 'Software Engineer specializing in LLM/RAG systems, search infrastructure, and scalable data pipelines. Proven track record in building production semantic-search and retrieval systems (Pinecone, Azure AI Search), multi-stage LLM content pipelines, and resilient large-scale web scraping infrastructure. Strong grounding in Data Structures, OOD, and system design, with proven delivery across Python, FastAPI, Node.js, and React.',
};

export const STATS: StatItem[] = [
  {
    id: 'research-reduction',
    numericValue: 50,
    prefix: '~',
    suffix: '%',
    label: 'Research Time Cut',
    sublabel: 'RAG search & contextual Q&A over unstructured data',
    icon: 'TrendingDown',
  },
  {
    id: 'hours-saved',
    numericValue: 20,
    prefix: '',
    suffix: '+ hrs/wk',
    label: 'Saved Per Analyst',
    sublabel: 'Multi-stage Gemini & Document AI content pipeline',
    icon: 'Clock',
  },
  {
    id: 'mca-gpa',
    numericValue: 9.1,
    prefix: '',
    suffix: ' / 10',
    label: 'MCA GPA',
    sublabel: 'CDAC Noida, GGSIPU (Rank 4)',
    icon: 'Award',
  },
  {
    id: 'du-rank',
    numericValue: 2,
    prefix: 'Rank #',
    suffix: '',
    label: 'B.Sc. CS Rank',
    sublabel: 'University of Delhi (9.28/10 GPA)',
    icon: 'GraduationCap',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'ras-lss',
    role: 'Software Development Engineer',
    company: 'RAS LSS Consulting',
    location: 'Delhi, India',
    period: 'Sept 2024 – Present',
    isCurrent: true,
    description: 'Spearheading AI infrastructure, high-throughput RAG systems, and resilient data acquisition pipelines for enterprise intelligence and pharmaceutical decision-making.',
    bullets: [
      'Architected a RAG-based querying system using Pinecone and Azure AI Search integrated with Blob Storage for high-accuracy semantic search and contextual Q&A over large-scale unstructured datasets, reducing manual research/lookup time by ~50%.',
      'Built a multi-stage LLM-driven newsletter generation pipeline ingesting news (RSS.app) and documents, performing structured fact extraction (Gemini, Document AI), entity normalization/enrichment (GPT, Tavily), and generating executive-level summaries and templated outputs (Jinja) — cutting manual content curation time by ~20 hours/week per analyst.',
      'Developed intelligent monitoring systems including a clinical trial tracker and news pipeline that continuously detect updates, apply domain-specific filtering, and surface high-relevance insights for time-sensitive decision-making.',
      'Designed a scalable adaptive web scraping and data acquisition layer (Python, Playwright, BeautifulSoup, ScrapingGraphAI, ScrapingBee, Decodo) to reliably extract data from large registries (ClinicalTrials.gov, EudraCT), handling anti-bot measures and dynamic page structures with a full-stack UI for workflow management.',
      'Built scalable RESTful APIs (FastAPI, Express.js) for data ingestion/retrieval; engineered a Pharma Matchmaking SaaS with heuristic recommendations and Elasticsearch-powered semantic matching.',
      'Developed a full-stack real-time News Dashboard for real-time news aggregation, filtering, and category-wise analysis (React.js, Node.js/Express.js, MongoDB).',
      'Contributions drove measurable business impact — ~50% reduction in manual research time, saving ~20 hours/week per analyst, and directly supporting new enterprise client conversions.'
    ],
    impactBadges: [
      '50% Research Speedup',
      '20+ Hrs/Wk Saved',
      'Production RAG',
      'ClinicalTrials.gov Scraping'
    ],
    technologies: [
      'Pinecone',
      'Azure AI Search',
      'Gemini 1.5',
      'GPT-4',
      'Document AI',
      'FastAPI',
      'Python',
      'Elasticsearch',
      'Playwright',
      'React.js',
      'MongoDB'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'dryrun',
    title: 'DryRun',
    tagline: 'AI Career Simulation Engine & 10-Year Trajectory Modeler',
    description: 'Flagship AI career simulation engine featuring a 6-step diagnostic funnel (Resume Parsing → Ikigai Engine → 10-Year Roadmap) grounded in the O*NET labor taxonomy to eliminate LLM hallucinations.',
    longDescription: 'Designed and built full end-to-end product architecture including freemium monetization strategies and a localized context engine that dynamically adapts salary and job projection curves based on geographic cost-of-living and hiring indices.',
    highlights: [
      '6-Step AI Diagnostic Funnel with zero-hallucination guarantee using O*NET occupational taxonomies',
      'Dynamic 10-Year Career Roadmap with branch simulations and milestone checkpoints',
      'Localized context engine scaling salary projections across global and Indian tech markets',
      'Production-ready UI with micro-interactions, dark mode, and seamless export capabilities'
    ],
    tags: ['AI Product Strategy', 'LLM Pipelines', 'O*NET Taxonomy', 'Freemium Model', 'Next.js / React', 'TypeScript', 'Tailwind CSS'],
    category: 'Flagship',
    liveUrl: 'https://dry-run-rho.vercel.app/',
    featured: true,
    metrics: ['Zero Hallucination with O*NET', '6-Step AI Diagnostic Funnel', 'Dynamic Career Branching']
  },
  {
    id: 'smarteats',
    title: 'SmartEats',
    tagline: 'Health-Focused Food Analysis & Nutrition AI Engine',
    description: 'Full-stack MERN health platform analyzing food ingredients via real-time OCR and barcode scanning with 95% OCR accuracy, coupled with an AI Nutrition Finder.',
    longDescription: 'Engineered an intelligent nutrition scanner combining camera-based label reading via Tesseract.js with the Open Food Facts API and generative nutrition breakdowns to flag harmful additives and allergen warnings.',
    highlights: [
      'High-accuracy optical character recognition (95% accuracy) powered by Tesseract.js',
      'Barcode lookup integrated directly with Open Food Facts global database',
      'Secure authentication with JWT & Google OAuth 2.0',
      'AI-powered Nutrition Finder calculating macros, micronutrients, and clean alternative foods'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tesseract.js', 'Open Food Facts API', 'OAuth 2.0'],
    category: 'Full-Stack & AI',
    githubUrl: 'https://github.com/Smart-Eats/SmartEats',
    imageUrl: '/images/smarteats-preview.jpg',
    featured: true,
    metrics: ['95% OCR Accuracy', 'Real-time Barcode Scanner', 'Additive Risk Analysis']
  },
  {
    id: 'pharma-matchmaking',
    title: 'Pharma Matchmaking & Semantic Search SaaS',
    tagline: 'Company Project · In Progress',
    description: 'Proprietary enterprise B2B platform leveraging Elasticsearch semantic vector search and heuristic recommendation algorithms to match pharmaceutical companies with CROs and service providers.',
    longDescription: 'Engineered high-throughput FastAPI endpoints, custom ranking algorithms, and faceted search filters to enable pharmaceutical business development teams to find clinical partners in seconds (Under Active Development).',
    highlights: [
      'Company project currently under active development & deployment',
      'Hybrid semantic vector search and BM25 full-text ranking in Elasticsearch',
      'Custom heuristic matchmaking algorithm evaluating capability match and geographic proximity',
      'Real-time inquiry dispatch pipeline and partner verification workflows'
    ],
    tags: ['Company Project', 'FastAPI', 'Elasticsearch', 'Python', 'React.js', 'Docker', 'Vector Search'],
    category: 'Infrastructure & Data',
    featured: false,
    metrics: ['Company Project · In Progress', 'Sub-50ms Query Latency', 'Hybrid BM25 + Vector Search']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'AI / ML & Search',
    iconName: 'Cpu',
    skills: [
      { name: 'RAG Pipelines', level: 'Expert', featured: true, description: 'Chunking, embedding, re-ranking, & hybrid retrieval' },
      { name: 'Azure AI Search', level: 'Expert', featured: true, description: 'Hybrid search, semantic ranker, index management' },
      { name: 'Pinecone', level: 'Expert', featured: true, description: 'High-scale vector indexing, metadata filtering' },
      { name: 'Gemini & GPT-4', level: 'Expert', featured: true, description: 'Structured JSON output, prompt chains, function calling' },
      { name: 'Document AI', level: 'Advanced', featured: true, description: 'Document parsing, layout analysis, table extraction' },
      { name: 'VoyageAI', level: 'Advanced', description: 'Domain-specific dense embedding models' },
      { name: 'Elasticsearch', level: 'Advanced', featured: true, description: 'Vector search, BM25, complex aggregation pipelines' },
      { name: 'LangChain & LlamaIndex', level: 'Advanced', description: 'Agentic workflows, tool routing, memory management' },
    ]
  },
  {
    category: 'Languages',
    iconName: 'Code2',
    skills: [
      { name: 'Python', level: 'Expert', featured: true, description: 'Asyncio, FastAPI, Pydantic, data processing' },
      { name: 'TypeScript', level: 'Advanced', featured: true, description: 'Type-safe React, Node.js, enterprise frontends' },
      { name: 'JavaScript (ES6+)', level: 'Expert', featured: true, description: 'Modern asynchronous runtime, full-stack dev' },
      { name: 'C++', level: 'Proficient', featured: true, description: 'Strong foundations in DSA, memory management & OOD' },
      { name: 'SQL', level: 'Advanced', description: 'Complex joins, indexing, query optimization' },
    ]
  },
  {
    category: 'Web & Backend Development',
    iconName: 'Globe',
    skills: [
      { name: 'FastAPI', level: 'Expert', featured: true, description: 'High-throughput async RESTful APIs, OpenAPI' },
      { name: 'React.js', level: 'Advanced', featured: true, description: 'Hooks, state management, modern animations' },
      { name: 'Node.js & Express', level: 'Advanced', featured: true, description: 'Event-driven microservices, auth, middleware' },
      { name: 'Tailwind CSS', level: 'Expert', description: 'Modern responsive utility styling & design systems' },
      { name: 'Jinja2', level: 'Advanced', description: 'Dynamic HTML & markdown automated document templating' },
      { name: 'HTML5 & CSS3', level: 'Expert', description: 'Semantic structure, animations, accessibility' },
    ]
  },
  {
    category: 'Databases & Storage',
    iconName: 'Database',
    skills: [
      { name: 'MongoDB', level: 'Advanced', featured: true, description: 'Document stores, aggregation framework, Mongoose' },
      { name: 'Azure Blob Storage', level: 'Advanced', featured: true, description: 'Cloud object storage for unstructured document lakes' },
      { name: 'MySQL', level: 'Proficient', description: 'Relational data modeling, ACID transactions' },
      { name: 'Redis', level: 'Advanced', description: 'In-memory caching, rate limiting, pub/sub' },
    ]
  },
  {
    category: 'Tools & Web Scraping',
    iconName: 'Wrench',
    skills: [
      { name: 'Playwright', level: 'Expert', featured: true, description: 'Headless browser automation, resilient selector pipelines' },
      { name: 'BeautifulSoup', level: 'Expert', featured: true, description: 'DOM traversal, rapid HTML parsing' },
      { name: 'ScrapingGraphAI', level: 'Advanced', featured: true, description: 'LLM-directed autonomous web scraping agents' },
      { name: 'ScrapingBee & Decodo', level: 'Advanced', description: 'Residential proxies, CAPTCHA & anti-bot evasion' },
      { name: 'Git & GitHub', level: 'Expert', featured: true, description: 'CI/CD, version control, PR workflows' },
      { name: 'Docker', level: 'Proficient', description: 'Containerization, reproducible deployment environments' },
      { name: 'RSS.app', level: 'Advanced', description: 'Feed ingestion, real-time alert trigger pipelines' },
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'CDAC Noida (Affiliated to GGSIPU)',
    period: 'Sept 2024 – May 2026',
    grade: '9.1 / 10',
    gradeType: 'GPA',
    highlights: [
      'Ranked #4 across entire MCA cohort at CDAC Noida',
      'Specialized in Advanced Artificial Intelligence, Distributed Systems, and High-Performance Cloud Architecture'
    ]
  },
  {
    id: 'bsc-cs',
    degree: 'B.Sc. (Hons) Computer Science',
    institution: 'Deen Dayal Upadhyaya College, University of Delhi',
    period: 'Nov 2020 – May 2023',
    grade: '9.28 / 10',
    gradeType: 'GPA',
    highlights: [
      'Awarded University Academic Rank 2 across University of Delhi',
      'Vice-Chair of ACM DDUC Chapter — led 50+ members conducting tech workshops, hackathons, and speaker summits'
    ]
  },
  {
    id: 'higher-secondary',
    degree: 'Higher Secondary Examination (Class XII)',
    institution: 'Bhai Parmanand Vidya Mandir (CBSE)',
    period: 'Apr 2019 – Mar 2020',
    grade: '92.8%',
    gradeType: 'Percentage',
    highlights: ['Focus in Physics, Chemistry, Mathematics, and Computer Science']
  },
  {
    id: 'senior-secondary',
    degree: 'Senior Secondary Examination (Class X)',
    institution: 'Bhai Parmanand Vidya Mandir (CBSE)',
    period: 'Apr 2017 – Mar 2018',
    grade: '88.8%',
    gradeType: 'Percentage',
    highlights: ['Merit in Mathematics & Computer Applications']
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'du-rank-2',
    title: 'Academic Rank 2 — University of Delhi',
    organization: 'University of Delhi',
    date: 'May 2023',
    badge: 'University Honor',
    description: 'Secured Academic Rank 2 among thousands of Computer Science Honours students across the entire University of Delhi with a 9.28/10 CGPA.',
    icon: 'Trophy'
  },
  {
    id: 'mca-rank-4',
    title: 'Academic Rank 4 — MCA Cohort',
    organization: 'CDAC Noida (GGSIPU)',
    date: '2025',
    badge: 'Top Scholar',
    description: 'Maintained Rank 4 with an outstanding 9.1/10 GPA in Master of Computer Applications at CDAC Noida.',
    icon: 'Medal'
  },
  {
    id: 'hackcbs-top10',
    title: 'Top 10 Finalist — HackCBS 7.0',
    organization: 'India\'s Largest Student-Run Hackathon',
    date: 'Nov 2024',
    badge: 'National Hackathon',
    description: 'Ranked in the Top 10 out of hundreds of competing engineering teams across India for building an innovative AI application.',
    icon: 'Flame'
  },
  {
    id: 'spacecon-finalist',
    title: 'Finalist — SPACECON Webathon',
    organization: 'Netaji Subhas University of Technology (NSUT)',
    date: 'Feb 2025',
    badge: 'Webathon Finalist',
    description: 'Selected as a premier finalist for architecting high-performance real-time web applications under tight 24-hour sprint conditions.',
    icon: 'Rocket'
  },
  {
    id: 'acm-vice-chair',
    title: 'Vice-Chair — ACM DDUC Chapter',
    organization: 'Association for Computing Machinery (ACM)',
    date: '2022 – 2023',
    badge: 'Leadership',
    description: 'Spearheaded an executive board and 50+ core team members organizing annual tech fests, competitive coding bootcamps, and developer workshops.',
    icon: 'Users'
  }
];
