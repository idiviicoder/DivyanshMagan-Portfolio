import { Project, ExperienceItem, SkillCategory, EducationItem, AchievementItem, StatItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Divyansh Magan',
  title: 'AI/LLM Software Engineer · Developer Relations & GTM Engineering',
  roles: [
    'AI/LLM Software Engineer · 15 Mos. in Production',
    'Developer Relations & GTM Engineering',
    'RAG Pipelines & Agentic Data Workflows',
    'Signals-to-Intelligence Platform R&D',
  ],
  tagline: 'AI/LLM Software Engineer (15 months in production) transitioning into Developer Relations and GTM Engineering. Building RAG pipelines, agentic workflows, and signal-based prospect intelligence.',
  location: 'Delhi, India',
  availability: 'Open to opportunities',
  email: 'divyanshmagan1234@gmail.com',
  phone: '+91-9873918104',
  github: 'https://github.com/divyanshmagan',
  linkedin: 'https://www.linkedin.com/in/divyansh-magan/',
  bio: 'AI/LLM Software Engineer with 15 months in production, transitioning into Developer Relations and GTM Engineering. Builds RAG pipelines, agentic data workflows, and internal developer-facing tools (Pinecone, Azure AI Search, Gemini, GPT, FastAPI), and is currently leading R&D on a signal-based prospect-intelligence platform. Brings hands-on go-to-market experience across CRM-led outbound, paid and organic social, channel strategy, competitive analysis, and brand strategy, plus community leadership (ACM chapter Vice-Chair, 50+ members) and hackathon experience as both organizer and finalist. Motivated to help teams building AI agents test and ship them reliably, and to bring developers and products closer together.',
};

export const STATS: StatItem[] = [
  {
    id: 'production-exp',
    numericValue: 15,
    prefix: '',
    suffix: ' Mos',
    label: 'Production AI Experience',
    sublabel: 'RAG pipelines, agentic workflows & search infrastructure',
    icon: 'Cpu',
  },
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
    prefix: '~',
    suffix: ' hrs/wk',
    label: 'Saved Per Analyst',
    sublabel: 'Multi-stage Gemini & Document AI content pipeline',
    icon: 'Clock',
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
    role: 'Software Developer Engineer | AI & GTM Systems',
    company: 'RAS LSS Consulting',
    location: 'Delhi, India',
    period: 'Sept 2025 – Present',
    isCurrent: true,
    type: 'Full-Time',
    category: 'AI & GTM Systems',
    description: 'Leading R&D for an internal signal-based prospect-intelligence platform while engineering production RAG pipelines, clinical trial trackers, and resilient web data acquisition workflows.',
    subSections: [
      {
        title: 'Signals-to-Intelligence: Prospect Intelligence & BD Platform',
        subtitle: 'R&D, in progress',
        bullets: [
          'Leading R&D and requirements mapping for an internal signal-based prospect-intelligence platform that turns public signals (company filings, investor-relations material, trial registries, earnings transcripts) into verified account research and personalized, review-gated BD outreach for analysts.',
          'Defined a four-stage architecture: evidence collection → shared company knowledge vault → isolated prospect workspaces → outreach preparation and CRM/outreach-platform handoff.',
          'Specified a versioned evidence store (source URL, date, document hash) so every claim carries provenance, with differential refresh that re-analyzes only changed sections.',
          'Designed a personalization engine that matches company findings to a prospect’s role, focus area and our consulting capability, producing tailored BD angles with evidence links and uncertainty labels (personalization at scale, ICP/persona fit).',
          'Built in human-in-the-loop approval for every outreach draft, update propagation that flags affected insights when source data changes, and export to Word/PowerPoint and CRM.'
        ]
      },
      {
        title: 'AI & Platform Engineering',
        subtitle: 'Production Systems',
        bullets: [
          'Architected a RAG querying system (Pinecone, Azure AI Search, Blob Storage) for semantic search and contextual Q&A over large unstructured datasets; reduced manual research/lookup time by ~50%.',
          'Built a multi-stage LLM newsletter pipeline: ingestion, structured fact extraction (Gemini, Document AI), entity enrichment (GPT, Tavily) and templated executive summaries (Jinja); cut manual curation by ~20 hours/week per analyst.',
          'Built monitoring systems (clinical trial tracker, news pipeline) that detect updates, apply domain filters and surface high-relevance insights for time-sensitive decisions.',
          'Designed a resilient web scraping and data-acquisition layer (Playwright, BeautifulSoup, ScrapingGraphAI, ScrapingBee, Decodo) for ClinicalTrials.gov and EudraCT, handling anti-bot measures and dynamic pages, with a full-stack UI to manage workflows.',
          'Built REST APIs (FastAPI, Express.js), a Pharma Matchmaking SaaS (heuristic recommendations, Elasticsearch semantic matching) and a React/Node/MongoDB News Dashboard, contributing to new client conversions.'
        ]
      }
    ],
    bullets: [
      'Leading R&D on an internal signal-based prospect-intelligence platform (Signals-to-Intelligence) turning public filings and transcripts into verified account research and review-gated BD outreach.',
      'Defined a four-stage architecture: evidence collection → shared knowledge vault → isolated prospect workspaces → CRM/outreach handoff.',
      'Specified a versioned evidence store (source URL, date, document hash) with differential refresh for end-to-end data provenance.',
      'Designed a personalization engine matching company findings to prospect roles and consulting capabilities with uncertainty labels.',
      'Architected a RAG querying system (Pinecone, Azure AI Search, Blob Storage) reducing manual research time by ~50%.',
      'Built a multi-stage LLM newsletter pipeline (Gemini, Document AI, GPT, Tavily, Jinja) cutting manual curation by ~20 hours/week per analyst.',
      'Built monitoring systems (clinical trial tracker, news pipeline) detecting updates and filtering high-relevance insights.',
      'Engineered a resilient scraping layer (Playwright, BeautifulSoup, ScrapingGraphAI, ScrapingBee, Decodo) for clinical registries with anti-bot handling.',
      'Built FastAPI/Express REST APIs, an Elasticsearch Pharma Matchmaking SaaS, and a React/Node/MongoDB News Dashboard driving new client conversions.'
    ],
    impactBadges: [
      'Signals-to-Intelligence Platform',
      '50% Research Speedup',
      '20+ Hrs/Wk Saved',
      'RAG & Provenance Store',
      'ClinicalTrials.gov Scraping'
    ],
    technologies: [
      'Pinecone',
      'Azure AI Search',
      'Gemini',
      'GPT',
      'Document AI',
      'Tavily',
      'FastAPI',
      'Python',
      'Elasticsearch',
      'Playwright',
      'React.js',
      'MongoDB',
      'Jinja'
    ]
  },
  {
    id: 'sanatan-seva',
    role: 'Growth & Go-To-Market Strategist (Freelance)',
    company: 'Sanatan Seva Sansthan',
    location: 'Pooja Samagri & Devotional Products',
    period: 'Freelance',
    isCurrent: false,
    type: 'Freelance',
    category: 'Growth & GTM',
    description: 'Owned end-to-end go-to-market strategy, demand generation, and Tele-CRM pipeline integration for a pooja samagri consumer product line.',
    bullets: [
      'Owned go-to-market and demand generation for a pooja samagri product line, with a focus on driving sales through a multi-channel distribution strategy.',
      'Configured and ran a channel mix across ATL, BTL and TTL: paid ad campaigns, organic social media promotion, and tele-calling outreach.',
      'Implemented Tele-CRM software for lead capture and pipeline tracking, and turned CRM insights into actionable lead data for the tele-calling team, closing the loop between data, sales and campaigns.',
      'Iterated on channels using campaign and CRM feedback, the same instrument-measure-iterate loop used in developer funnels and GTM engineering.'
    ],
    impactBadges: [
      'ATL, BTL & TTL Channel Mix',
      'Tele-CRM Implementation',
      'Data-to-Sales Closed Loop',
      'Instrument-Measure-Iterate'
    ],
    technologies: [
      'Tele-CRM',
      'Paid Ad Campaigns',
      'Organic Social',
      'Pipeline Tracking',
      'Lead Qualification',
      'Funnel Analytics'
    ]
  },
  {
    id: 'brand-builder-isabgol',
    role: 'Brand Builder, Isabgol (Psyllium Husk) Product',
    company: 'Independent Venture',
    location: 'Pre-launch',
    period: 'Independent Venture (Pre-launch)',
    isCurrent: true,
    type: 'Independent Venture',
    category: 'Entrepreneurship',
    description: 'Spearheading research, positioning, vendor sampling, and sales strategy ahead of launching an own-brand consumer health product.',
    bullets: [
      'Researching and planning an own-brand consumer product: market research, competitor analysis and customer positioning.',
      'Engaged vendors and suppliers and explored product sampling for early feedback; drafting sales strategy, branding and packaging direction ahead of launch.'
    ],
    impactBadges: [
      'Market & Competitor Analysis',
      'Vendor & Supplier Sourcing',
      'Product Sampling',
      'Brand & Packaging Strategy'
    ],
    technologies: [
      'Market Research',
      'Competitor Benchmarking',
      'Customer Positioning',
      'Supplier Logistics',
      'Brand Packaging'
    ]
  },
  {
    id: 'digital-marketing-retail',
    role: 'Digital Marketing & Social Commerce',
    company: 'Family Business',
    location: 'Menswear Retail Business',
    period: 'Family Business',
    isCurrent: false,
    type: 'Family Business',
    category: 'Growth & GTM',
    description: 'Directed digital presence, social commerce content, and customer broadcast workflows across omni-channel retail distribution.',
    bullets: [
      'Managed social media presence: product listings, video content, and WhatsApp broadcast channels for customer engagement.',
      'Working knowledge of ATL, BTL and TTL distribution and how each channel supports reach, conversion and retention.'
    ],
    impactBadges: [
      'WhatsApp Broadcast Channels',
      'Social Commerce & Video',
      'Omni-channel Reach',
      'Retention Strategy'
    ],
    technologies: [
      'WhatsApp Broadcast',
      'Social Media Marketing',
      'Customer Retention',
      'Content Creation',
      'Retail Merchandising'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'dryrun',
    title: 'DryRun',
    tagline: 'AI Career Simulation Engine & 10-Year Trajectory Modeler',
    description: 'Flagship AI career simulation engine featuring a 6-step diagnostic funnel (Resume Parsing → Ikigai Engine → 10-Year Roadmap) grounded in the O*NET labor taxonomy to eliminate hallucination risk.',
    longDescription: 'Designed the product layer solo: built a freemium monetization gate, an ed-tech affiliate pipeline, and a localized context engine dynamically adapting salary projections by geography.',
    highlights: [
      'Built a 6-step AI diagnostic funnel (Resume Parsing → Ikigai Engine → 10-Year Roadmap) grounded in the O*NET labor taxonomy to reduce hallucination risk',
      'Designed the product layer solo: freemium monetization gate, ed-tech affiliate pipeline and a localized context engine adapting salary projections by geography',
      'Dynamic 10-Year Career Roadmap with milestone checkpoints and branch simulations',
      'Production-ready UI with micro-interactions, dark mode, and seamless export capabilities'
    ],
    tags: ['React', 'FastAPI', 'Gemini API', 'O*NET Taxonomy', 'Freemium Gate', 'Affiliate Engine', 'TypeScript'],
    category: 'Flagship',
    liveUrl: 'https://dry-run-rho.vercel.app/',
    featured: true,
    metrics: ['Grounded in O*NET Taxonomy', '6-Step AI Diagnostic Funnel', 'Dynamic Career Branching']
  },
  {
    id: 'smarteats',
    title: 'SmartEats',
    tagline: 'Health-Focused Food Analysis & Nutrition AI Web App',
    description: 'Full-stack MERN health app analyzing food ingredients via OCR and barcode scanning (95% OCR accuracy), with JWT/Google OAuth and an AI-powered Nutrition Finder.',
    longDescription: 'Engineered an intelligent nutrition scanner combining camera-based label reading via Tesseract.js with Open Food Facts API and AI nutrition breakdown to flag harmful additives and allergen warnings.',
    highlights: [
      'Built a MERN app analyzing food ingredients via OCR and barcode scanning (95% OCR accuracy)',
      'Secure authentication with JWT & Google OAuth',
      'AI-powered Nutrition Finder with clean food alternative recommendations',
      'Real-time barcode scanning integrated with Open Food Facts API'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tesseract.js', 'Open Food Facts API', 'OAuth 2.0'],
    category: 'Full-Stack & AI',
    githubUrl: 'https://github.com/Smart-Eats/SmartEats',
    imageUrl: '/images/smarteats-preview.jpg',
    featured: true,
    metrics: ['95% OCR Accuracy', 'Real-time Barcode Scanner', 'Additive Risk Analysis']
  },
  {
    id: 'signals-to-intelligence',
    title: 'Signals-to-Intelligence Platform',
    tagline: 'Internal Prospect Intelligence & BD Platform · R&D in Progress',
    description: 'Signal-based intelligence platform turning public signals (company filings, investor relations, clinical registries, earnings transcripts) into verified account research and review-gated outreach.',
    longDescription: 'Defined a four-stage architecture (evidence collection → shared company knowledge vault → isolated prospect workspaces → outreach preparation and CRM handoff). Features versioned evidence store and personalization engine with uncertainty labels.',
    highlights: [
      'Four-stage architecture: evidence collection → knowledge vault → prospect workspaces → CRM handoff',
      'Versioned evidence store (source URL, date, document hash) with differential refresh',
      'Personalization engine matching company findings to prospect role and ICP fit with uncertainty labels',
      'Human-in-the-loop review gating with update propagation flagging affected insights'
    ],
    tags: ['Enterprise R&D', 'RAG Architecture', 'FastAPI', 'Gemini', 'Evidence Store', 'CRM Integration'],
    category: 'Infrastructure & Data',
    featured: true,
    metrics: ['4-Stage Pipeline', 'Versioned Provenance Store', 'Review-Gated BD Outreach']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'AI & Agent Systems',
    iconName: 'Cpu',
    skills: [
      { name: 'RAG Pipelines', level: 'Expert', featured: true, description: 'Chunking, embedding, re-ranking, & hybrid retrieval' },
      { name: 'Multi-Stage LLM Workflows', level: 'Expert', featured: true, description: 'Chained fact extraction, entity enrichment, Jinja templating' },
      { name: 'Gemini', level: 'Expert', featured: true, description: 'Structured JSON output, multimodal reasoning, prompt chains' },
      { name: 'GPT', level: 'Expert', featured: true, description: 'Entity normalization, reasoning, function calling' },
      { name: 'Document AI', level: 'Advanced', featured: true, description: 'Document parsing, layout analysis, table extraction' },
      { name: 'Tavily', level: 'Advanced', featured: true, description: 'Real-time web search API for LLM agent enrichment' },
      { name: 'VoyageAI', level: 'Advanced', description: 'Domain-specific dense embedding models' },
      { name: 'Evidence/Provenance Design', level: 'Expert', featured: true, description: 'Source URL, date, document hash & differential refresh' },
    ]
  },
  {
    category: 'Languages & Backend',
    iconName: 'Code2',
    skills: [
      { name: 'Python', level: 'Expert', featured: true, description: 'Asyncio, FastAPI, Pydantic, data processing' },
      { name: 'FastAPI', level: 'Expert', featured: true, description: 'High-throughput async RESTful APIs, OpenAPI schemas' },
      { name: 'JavaScript', level: 'Expert', featured: true, description: 'Modern asynchronous runtime, full-stack dev' },
      { name: 'React', level: 'Advanced', featured: true, description: 'Hooks, responsive UI, state management, modern animations' },
      { name: 'Node.js & Express.js', level: 'Advanced', featured: true, description: 'Event-driven backend services, middleware, auth' },
      { name: 'REST APIs', level: 'Expert', featured: true, description: 'Clean RESTful architectural patterns, caching, pagination' },
      { name: 'Jinja', level: 'Advanced', description: 'Templated executive summaries & dynamic document generation' },
      { name: 'C++', level: 'Proficient', description: 'Strong foundations in DSA, memory management & OOD' },
    ]
  },
  {
    category: 'Data & Search',
    iconName: 'Database',
    skills: [
      { name: 'Pinecone', level: 'Expert', featured: true, description: 'High-scale vector indexing, metadata filtering, semantic search' },
      { name: 'Azure AI Search', level: 'Expert', featured: true, description: 'Hybrid search, semantic ranker, index management' },
      { name: 'Elasticsearch', level: 'Advanced', featured: true, description: 'Semantic vector search, BM25 text ranking, complex filters' },
      { name: 'MongoDB', level: 'Advanced', featured: true, description: 'Document stores, aggregation pipelines, Mongoose schemas' },
      { name: 'MySQL', level: 'Proficient', description: 'Relational data modeling, schema normalization, indexing' },
      { name: 'Azure Blob Storage', level: 'Advanced', description: 'Cloud object storage for unstructured document lakes' },
    ]
  },
  {
    category: 'Automation & Scraping',
    iconName: 'Wrench',
    skills: [
      { name: 'Playwright', level: 'Expert', featured: true, description: 'Headless browser automation, resilient selector pipelines' },
      { name: 'BeautifulSoup', level: 'Expert', featured: true, description: 'DOM traversal, rapid HTML parsing' },
      { name: 'ScrapingGraphAI', level: 'Advanced', featured: true, description: 'LLM-directed autonomous web scraping workflows' },
      { name: 'ScrapingBee & Decodo', level: 'Advanced', description: 'Residential proxies, CAPTCHA & anti-bot evasion' },
      { name: 'RSS.app', level: 'Advanced', description: 'Feed ingestion, real-time alert trigger pipelines' },
      { name: 'Git & GitHub', level: 'Expert', featured: true, description: 'CI/CD, version control, PR workflows' },
    ]
  },
  {
    category: 'GTM & Growth',
    iconName: 'TrendingUp',
    skills: [
      { name: 'CRM Workflows', level: 'Expert', featured: true, description: 'Lead capture, pipeline tracking & Tele-CRM integration' },
      { name: 'Signal-Based Prospecting', level: 'Expert', featured: true, description: 'Turning public signals into verified account research & BD outreach' },
      { name: 'Funnel Thinking', level: 'Expert', featured: true, description: 'Instrument-measure-iterate loop across developer & sales funnels' },
      { name: 'Lead Management', level: 'Advanced', description: 'Data-to-sales qualification, routing, and feedback loops' },
      { name: 'Paid & Organic Social', level: 'Advanced', description: 'Campaign configuration across ATL, BTL and TTL distribution' },
      { name: 'Channel Strategy', level: 'Advanced', description: 'Multi-channel distribution, reach, conversion and retention' },
      { name: 'Market & Competitor Research', level: 'Advanced', description: 'Competitive analysis, ICP/persona fit, customer positioning' },
      { name: 'Branding', level: 'Advanced', description: 'Brand strategy, packaging direction, value proposition design' },
    ]
  },
  {
    category: 'Developer Community',
    iconName: 'Users',
    skills: [
      { name: 'Hackathons & Buildathons', level: 'Expert', featured: true, description: 'Dual experience as organizer and national podium finalist' },
      { name: 'Workshops & Webinars', level: 'Expert', featured: true, description: 'Technical workshops, speaker coordination & hands-on demos' },
      { name: 'Meetups & Community', level: 'Expert', featured: true, description: 'ACM Chapter Vice-Chair leading 50+ core member team' },
      { name: 'Luma & Meetup.com', level: 'Advanced', description: 'Event hosting, developer registrations, and attendee engagement' },
      { name: 'Developer Channels', level: 'Advanced', description: 'X, LinkedIn, Reddit, Hacker News, dev.to, Substack' },
      { name: 'Public Speaking', level: 'Advanced', description: 'Developer presentations, guest lectures, and tech demos' },
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'mca',
    degree: 'CDAC, GGSIPU — MCA (Rank 4)',
    institution: 'Centre for Development of Advanced Computing (CDAC Noida), GGSIPU',
    period: 'Sept 2024 – May 2026',
    grade: '9.1 / 10',
    gradeType: 'GPA',
    highlights: [
      'Ranked #4 across entire MCA cohort at CDAC Noida',
      'Advanced Artificial Intelligence, Distributed Systems, and Cloud Architecture'
    ]
  },
  {
    id: 'bsc-cs',
    degree: 'Deen Dayal Upadhyaya College, DU — B.Sc. (Hons) Computer Science (Rank 2)',
    institution: 'Deen Dayal Upadhyaya College, University of Delhi',
    period: 'Nov 2020 – May 2023',
    grade: '9.28 / 10',
    gradeType: 'GPA',
    highlights: [
      'Awarded University Academic Rank 2 across University of Delhi',
      'Vice-Chair of ACM DDUC Chapter — led 50+ members conducting tech workshops, hackathons, and guest lectures'
    ]
  },
  {
    id: 'higher-secondary',
    degree: 'Bhai Parmanand Vidya Mandir, CBSE — Higher Secondary',
    institution: 'Bhai Parmanand Vidya Mandir (CBSE)',
    period: 'Apr 2019 – Mar 2020',
    grade: '92.8%',
    gradeType: 'Percentage',
    highlights: ['Focus in Physics, Chemistry, Mathematics, and Computer Science']
  },
  {
    id: 'senior-secondary',
    degree: 'Bhai Parmanand Vidya Mandir, CBSE — Senior Secondary',
    institution: 'Bhai Parmanand Vidya Mandir (CBSE)',
    period: 'Apr 2017 – Mar 2018',
    grade: '88.8%',
    gradeType: 'Percentage',
    highlights: ['Merit in Mathematics & Computer Applications']
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'acm-vice-chair',
    title: 'Vice-Chair — ACM DDUC Chapter',
    organization: 'Association for Computing Machinery (ACM)',
    date: '50+ Members',
    badge: 'Community Leadership',
    description: 'Led a team of 50+ to organize workshops, hackathons and guest lectures, covering speaker coordination, event planning and participant engagement.',
    icon: 'Users'
  },
  {
    id: 'spacecon-finalist',
    title: 'Finalist — SPACECON Webathon',
    organization: 'Netaji Subhas University of Technology (NSUT)',
    date: 'Feb 2025',
    badge: 'Hackathon Finalist',
    description: 'Selected as finalist at SPACECON Webathon, NSUT. Brings a dual organizer-and-builder perspective to developer challenges.',
    icon: 'Rocket'
  },
  {
    id: 'hackcbs-top10',
    title: 'Top 10 Finalist — HackCBS 7.0',
    organization: 'India\'s Largest Student-Run Hackathon',
    date: 'HackCBS 7.0',
    badge: 'National Podium',
    description: 'Ranked in the Top 10 at HackCBS 7.0, India\'s largest student-run hackathon, out of hundreds of engineering teams nationwide.',
    icon: 'Flame'
  },
  {
    id: 'du-rank-2',
    title: 'Academic Rank 2 — University of Delhi',
    organization: 'University of Delhi',
    date: 'B.Sc. (Hons) CS',
    badge: 'University Honor',
    description: 'Secured Academic Rank 2 across University of Delhi with a 9.28/10 GPA in B.Sc. (Hons) Computer Science.',
    icon: 'Trophy'
  },
  {
    id: 'mca-rank-4',
    title: 'Academic Rank 4 — MCA Cohort',
    organization: 'CDAC Noida (GGSIPU)',
    date: 'MCA Cohort',
    badge: 'Top Scholar',
    description: 'Maintained Rank 4 with a 9.1/10 GPA in Master of Computer Applications at CDAC Noida.',
    icon: 'Medal'
  }
];
