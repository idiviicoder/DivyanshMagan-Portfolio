import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    onShowToast('Preparing resume for download...');
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-card text-card-foreground rounded-2xl border border-border shadow-lift flex flex-col overflow-hidden z-10 my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-border bg-card-subtle/80 backdrop-blur-sm print:hidden">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent-rose/80" />
              <div className="w-3 h-3 rounded-full bg-accent-amber/80" />
              <div className="w-3 h-3 rounded-full bg-accent-emerald/80" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">Divyansh_Magan_Resume.pdf</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors hidden sm:flex items-center gap-1.5 text-xs font-medium"
                title="Print resume"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save / Print PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors ml-2"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Paper Body */}
          <div className="p-6 sm:p-10 md:p-12 overflow-y-auto space-y-6 bg-card text-foreground font-sans print:p-0 print:space-y-4 print:bg-white print:text-black">
            
            {/* 1. Header */}
            <div className="text-center border-b border-border pb-4 print:border-black/20">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif text-foreground uppercase print:text-black">
                DIVYANSH MAGAN
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-1.5 text-xs text-muted-foreground print:text-black/80">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Delhi, India</span>
                <span>|</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Mail className="w-3 h-3" /> {PERSONAL_INFO.email}
                </a>
                <span>|</span>
                <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {PERSONAL_INFO.phone}</span>
                <span>|</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium inline-flex items-center gap-0.5">
                  <Linkedin className="w-3 h-3" /> LinkedIn
                </a>
                <span>|</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium inline-flex items-center gap-0.5">
                  <Github className="w-3 h-3" /> GitHub
                </a>
                <span>|</span>
                <a href="#hero" onClick={onClose} className="text-primary hover:underline font-medium inline-flex items-center gap-0.5">
                  <Globe className="w-3 h-3" /> Portfolio
                </a>
              </div>
            </div>

            {/* 2. SUMMARY */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-border pb-1 mb-2 font-mono print:text-black print:border-black/30">
                SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed text-justify print:text-black">
                <strong>AI/LLM Software Engineer (15 months in production)</strong> transitioning into <strong>Developer Relations and GTM Engineering</strong>. Builds <strong>RAG pipelines</strong>, <strong>agentic data workflows</strong> and internal developer-facing tools (Pinecone, Azure AI Search, Gemini, GPT, FastAPI), and is currently leading R&D on a <strong>signal-based prospect-intelligence platform</strong>. Brings hands-on go-to-market experience across <strong>CRM-led outbound</strong>, <strong>paid and organic social</strong>, <strong>channel strategy</strong>, <strong>competitive analysis</strong> and <strong>brand strategy</strong>, plus community leadership (<strong>ACM chapter Vice-Chair</strong>, 50+ members) and hackathon experience as both organizer and finalist. Motivated to help teams building AI agents test and ship them reliably, and to bring developers and products closer together.
              </p>
            </div>

            {/* 3. EXPERIENCE */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-border pb-1 mb-3 font-mono print:text-black print:border-black/30">
                EXPERIENCE
              </h2>
              
              <div className="space-y-4">
                {/* RAS LSS Consulting */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-foreground print:text-black">
                        Software Developer Engineer | AI & GTM Systems
                      </h3>
                      <p className="text-xs italic text-muted-foreground print:text-black/70">
                        RAS LSS Consulting, Delhi, India
                      </p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground print:text-black">
                      Sept 2025 – Present
                    </span>
                  </div>

                  {/* Signals-to-Intelligence Platform */}
                  <div className="pl-1 sm:pl-2 space-y-1">
                    <p className="text-xs font-bold text-primary italic print:text-black">
                      Signals-to-Intelligence: Prospect Intelligence & BD Platform (R&D, in progress)
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-foreground/90 print:text-black">
                      <li>
                        Leading R&D and requirements mapping for an internal <strong>signal-based prospect-intelligence platform</strong> that turns public signals (company filings, investor-relations material, trial registries, earnings transcripts) into verified <strong>account research</strong> and personalized, review-gated <strong>BD outreach</strong> for analysts.
                      </li>
                      <li>
                        Defined a <strong>four-stage architecture</strong>: evidence collection → shared company knowledge vault → isolated prospect workspaces → outreach preparation and CRM/outreach-platform handoff.
                      </li>
                      <li>
                        Specified a <strong>versioned evidence store</strong> (source URL, date, document hash) so every claim carries provenance, with differential refresh that re-analyzes only changed sections.
                      </li>
                      <li>
                        Designed a <strong>personalization engine</strong> that matches company findings to a prospect’s role, focus area and our consulting capability, producing tailored BD angles with evidence links and uncertainty labels (<strong>personalization at scale</strong>, ICP/persona fit).
                      </li>
                      <li>
                        Built in <strong>human-in-the-loop approval</strong> for every outreach draft, update propagation that flags affected insights when source data changes, and export to Word/PowerPoint and CRM.
                      </li>
                    </ul>
                  </div>

                  {/* AI & Platform Engineering */}
                  <div className="pl-1 sm:pl-2 space-y-1 pt-1.5">
                    <p className="text-xs font-bold text-primary italic print:text-black">
                      AI & Platform Engineering
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-foreground/90 print:text-black">
                      <li>
                        Architected a <strong>RAG querying system</strong> (Pinecone, Azure AI Search, Blob Storage) for semantic search and contextual Q&A over large unstructured datasets; reduced manual research/lookup time by <strong>~50%</strong>.
                      </li>
                      <li>
                        Built a multi-stage <strong>LLM newsletter pipeline</strong>: ingestion, structured fact extraction (Gemini, Document AI), entity enrichment (GPT, Tavily) and templated executive summaries (Jinja); cut manual curation by <strong>~20 hours/week per analyst</strong>.
                      </li>
                      <li>
                        Built monitoring systems (clinical trial tracker, news pipeline) that detect updates, apply domain filters and surface high-relevance insights for time-sensitive decisions.
                      </li>
                      <li>
                        Designed a resilient <strong>web scraping and data-acquisition layer</strong> (Playwright, BeautifulSoup, ScrapingGraphAI, ScrapingBee, Decodo) for ClinicalTrials.gov and EudraCT, handling anti-bot measures and dynamic pages, with a full-stack UI to manage workflows.
                      </li>
                      <li>
                        Built <strong>REST APIs</strong> (FastAPI, Express.js), a <strong>Pharma Matchmaking SaaS</strong> (heuristic recommendations, Elasticsearch semantic matching) and a React/Node/MongoDB News Dashboard, contributing to new client conversions.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Freelance Growth & GTM */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-foreground print:text-black">
                        Growth & Go-To-Market Strategist (Freelance)
                      </h3>
                      <p className="text-xs italic text-muted-foreground print:text-black/70">
                        Sanatan Seva Sansthan, Pooja Samagri & Devotional Products
                      </p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground print:text-black">
                      Freelance
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-foreground/90 print:text-black">
                    <li>
                      Owned <strong>go-to-market and demand generation</strong> for a pooja samagri product line, with a focus on driving sales through a <strong>multi-channel distribution strategy</strong>.
                    </li>
                    <li>
                      Configured and ran a channel mix across <strong>ATL, BTL and TTL</strong>: paid ad campaigns, organic social media promotion, and tele-calling outreach.
                    </li>
                    <li>
                      Implemented <strong>Tele-CRM software</strong> for lead capture and pipeline tracking, and turned CRM insights into actionable lead data for the tele-calling team, closing the loop between <strong>data, sales and campaigns</strong>.
                    </li>
                    <li>
                      Iterated on channels using campaign and CRM feedback, the same instrument-measure-iterate loop used in <strong>developer funnels and GTM engineering</strong>.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. ENTREPRENEURIAL & BUSINESS EXPERIENCE */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-border pb-1 mb-3 font-mono print:text-black print:border-black/30">
                ENTREPRENEURIAL & BUSINESS EXPERIENCE
              </h2>
              <div className="space-y-3">
                {/* Brand Builder */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-xs sm:text-sm font-bold text-foreground print:text-black">
                      Brand Builder, Isabgol (Psyllium Husk) Product
                    </h3>
                    <span className="text-xs italic text-muted-foreground font-mono print:text-black">
                      Independent Venture (Pre-launch)
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-foreground/90 mt-1 print:text-black">
                    <li>
                      Researching and planning an own-brand consumer product: <strong>market research</strong>, <strong>competitor analysis</strong> and <strong>customer positioning</strong>.
                    </li>
                    <li>
                      Engaged vendors and suppliers and explored product sampling for early feedback; drafting sales strategy, <strong>branding and packaging direction</strong> ahead of launch.
                    </li>
                  </ul>
                </div>

                {/* Digital Marketing & Social Commerce */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-foreground print:text-black">
                        Digital Marketing & Social Commerce
                      </h3>
                      <p className="text-xs italic text-muted-foreground print:text-black/70">
                        Menswear Retail Business
                      </p>
                    </div>
                    <span className="text-xs italic text-muted-foreground font-mono print:text-black">
                      Family Business
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-foreground/90 mt-1 print:text-black">
                    <li>
                      Managed social media presence: product listings, video content, and <strong>WhatsApp broadcast channels</strong> for customer engagement.
                    </li>
                    <li>
                      Working knowledge of <strong>ATL, BTL and TTL distribution</strong> and how each channel supports reach, conversion and retention.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. LEADERSHIP, COMMUNITY & HACKATHONS */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-border pb-1 mb-2 font-mono print:text-black print:border-black/30">
                LEADERSHIP, COMMUNITY & HACKATHONS
              </h2>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-foreground/90 print:text-black">
                <li>
                  <strong>Vice-Chair, ACM DDUC Chapter:</strong> Led a team of 50+ to organize workshops, hackathons and guest lectures, covering speaker coordination, event planning and participant engagement.
                </li>
                <li>
                  <strong>Hackathon participant:</strong> Finalist, <strong>SPACECON Webathon</strong>, NSUT (Feb 2025); <strong>Top 10, HackCBS 7.0</strong>, India’s largest student-run hackathon. Brings a dual organizer-and-builder perspective.
                </li>
              </ul>
            </div>

            {/* 6. PROJECTS */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-border pb-1 mb-2 font-mono print:text-black print:border-black/30">
                PROJECTS
              </h2>
              <div className="space-y-3">
                {/* DryRun */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-foreground print:text-black">
                        DryRun — AI Career Simulation Engine
                      </h3>
                      <a
                        href="https://dry-run-rho.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-0.5 print:hidden"
                      >
                        Live App <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground print:text-black">
                      React, FastAPI, Gemini API
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-foreground/90 mt-1 print:text-black">
                    <li>
                      Built a <strong>6-step AI diagnostic funnel</strong> (Resume Parsing → Ikigai Engine → 10-Year Roadmap) grounded in the <strong>O*NET labor taxonomy</strong> to reduce hallucination risk.
                    </li>
                    <li>
                      Designed the product layer solo: <strong>freemium monetization gate</strong>, <strong>ed-tech affiliate pipeline</strong> and a localized context engine adapting salary projections by geography.
                    </li>
                  </ul>
                </div>

                {/* SmartEats */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-foreground print:text-black">
                        SmartEats — Health-Focused Food Analysis Web App
                      </h3>
                      <a
                        href="https://github.com/Smart-Eats/SmartEats"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-0.5 print:hidden"
                      >
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground print:text-black">
                      React.js, Node.js, Express.js, MongoDB, Tesseract.js, Open Food Facts API
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-foreground/90 mt-1 print:text-black">
                    <li>
                      Built a MERN app analyzing food ingredients via OCR and barcode scanning (<strong>95% OCR accuracy</strong>), with JWT/Google OAuth and an AI-powered Nutrition Finder.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 7. SKILLS */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-border pb-1 mb-2 font-mono print:text-black print:border-black/30">
                SKILLS
              </h2>
              <div className="space-y-1.5 text-xs text-foreground/90 print:text-black">
                <p>
                  <strong>AI & Agent Systems:</strong> RAG pipelines, multi-stage LLM workflows, Gemini, GPT, Document AI, Tavily, VoyageAI, evidence/provenance design
                </p>
                <p>
                  <strong>Languages & Backend:</strong> Python, JavaScript, C++, FastAPI, Node.js, Express.js, React, REST APIs, Jinja
                </p>
                <p>
                  <strong>Data & Search:</strong> Pinecone, Azure AI Search, Elasticsearch, MongoDB, MySQL, Azure Blob Storage
                </p>
                <p>
                  <strong>Automation:</strong> Playwright, BeautifulSoup, ScrapingGraphAI, ScrapingBee, Decodo, RSS.app, Git, GitHub
                </p>
                <p>
                  <strong>GTM & Growth:</strong> CRM workflows, lead management, signal-based prospecting, funnel thinking, paid and organic social, channel strategy, market and competitor research, branding
                </p>
                <p>
                  <strong>Developer Community:</strong> Hackathons, workshops, webinars, buildathons, meetups; Luma, Meetup.com, X, LinkedIn, Reddit, Hacker News, dev.to, Substack; public speaking
                </p>
              </div>
            </div>

            {/* 8. EDUCATION */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary border-b border-border pb-1 mb-2 font-mono print:text-black print:border-black/30">
                EDUCATION
              </h2>
              <div className="space-y-2 text-xs text-foreground/90 print:text-black">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="font-mono text-muted-foreground mr-3 print:text-black">Sept 2024 – May 2026</span>
                    <strong>CDAC, GGSIPU</strong> — MCA (Rank 4)
                  </div>
                  <span className="font-mono font-bold text-primary print:text-black">GPA: 9.1 / 10</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="font-mono text-muted-foreground mr-3 print:text-black">Nov 2020 – May 2023</span>
                    <strong>Deen Dayal Upadhyaya College, DU</strong> — B.Sc. (Hons) Computer Science (Rank 2)
                  </div>
                  <span className="font-mono font-bold text-primary print:text-black">GPA: 9.28 / 10</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="font-mono text-muted-foreground mr-3 print:text-black">Apr 2019 – Mar 2020</span>
                    <strong>Bhai Parmanand Vidya Mandir, CBSE</strong> — Higher Secondary
                  </div>
                  <span className="font-mono font-bold text-primary print:text-black">92.8%</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="font-mono text-muted-foreground mr-3 print:text-black">Apr 2017 – Mar 2018</span>
                    <strong>Bhai Parmanand Vidya Mandir, CBSE</strong> — Senior Secondary
                  </div>
                  <span className="font-mono font-bold text-primary print:text-black">88.8%</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
