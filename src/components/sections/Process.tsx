import React from 'react';
import { motion } from 'framer-motion';
import { Database, Search, ShieldCheck, Rocket, Workflow } from 'lucide-react';

// Component: Engineering Process & Workflow Section
// Integration: 4-Stage Signals-to-Intelligence Architecture & GTM Engineering Closed Loop

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Evidence Ingestion & Provenance',
    tag: 'Signals & Web Scraping',
    icon: Database,
    description: 'Ingest public signals (filings, trial registries, transcripts) with Playwright & BeautifulSoup into a versioned evidence store with source URLs, dates, and document hashes.',
  },
  {
    step: '02',
    title: 'Knowledge Vault & Differential Refresh',
    tag: 'Pinecone, Azure & Gemini',
    icon: Search,
    description: 'Structure raw data into a shared knowledge vault with hybrid semantic retrieval (Pinecone, Azure AI Search) and differential refresh that re-analyzes only changed sections.',
  },
  {
    step: '03',
    title: 'Persona Fit & Uncertainty Labels',
    tag: 'Personalization at Scale',
    icon: ShieldCheck,
    description: 'Match company findings to prospect roles and consulting capabilities, generating tailored BD angles with evidence links, confidence intervals, and uncertainty labels.',
  },
  {
    step: '04',
    title: 'Review Gating & GTM Closed Loop',
    tag: 'Human-in-the-Loop & CRM',
    icon: Rocket,
    description: 'Human-in-the-loop review for outreach drafts, update propagation flagging affected insights, and handoff to CRM via the instrument-measure-iterate loop.',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-card/30">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 border-b border-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-subtle">
              <Workflow className="w-3.5 h-3.5" />
              Signals-to-Intelligence Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
              How I Build <span className="italic font-normal text-primary">AI & GTM Systems</span>
            </h2>
          </div>
          <span className="font-handwriting text-accent-amber text-lg font-bold -rotate-1 select-none">
            ~ 4-stage architecture & closed loop ✦
          </span>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROCESS_STEPS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl bg-card border border-border p-5 shadow-subtle hover:border-primary/50 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Step Number Stamp */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-primary px-2.5 py-1 rounded-lg bg-card-subtle border border-border/80">
                    Stage {item.step}
                  </span>
                  <div className="p-2 rounded-xl bg-card-subtle text-primary group-hover:scale-110 transition-transform">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase font-bold tracking-wider">
                    {item.tag}
                  </span>
                  <h3 className="text-base font-bold font-serif text-foreground mt-0.5 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Subtle progress indicator */}
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                  <span>Stage {idx + 1} of 4</span>
                  <span className="text-accent-emerald font-bold">✓ Grounded</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
