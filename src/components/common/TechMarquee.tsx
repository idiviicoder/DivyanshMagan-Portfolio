import React from 'react';
import { 
  Database, 
  Cpu, 
  Terminal, 
  Layers, 
  Globe, 
  Server, 
  Search, 
  Code2, 
  Boxes, 
  Workflow, 
  Sparkles,
  Cloud
} from 'lucide-react';

// Component: SkipperUI inspired Infinite Tech Marquee
// Integration: SkipperUI (https://skiper-ui.com) Continuous Marquee with pause on hover & warm earthy badges

const TECH_ITEMS = [
  { name: 'FastAPI', category: 'Backend', icon: Server },
  { name: 'LangChain', category: 'AI / RAG', icon: Workflow },
  { name: 'Elasticsearch', category: 'Search Engine', icon: Search },
  { name: 'Redis Cache', category: 'In-Memory DB', icon: Database },
  { name: 'VoyageAI Embeddings', category: 'Vector Search', icon: Sparkles },
  { name: 'Python (NumPy / PyTorch)', category: 'Core Language', icon: Terminal },
  { name: 'Azure OpenAI', category: 'LLM Infrastructure', icon: Cloud },
  { name: 'Docker', category: 'Containerization', icon: Boxes },
  { name: 'React & TypeScript', category: 'Frontend', icon: Code2 },
  { name: 'PostgreSQL', category: 'Relational DB', icon: Database },
  { name: 'Playwright & Scrapy', category: 'Scraping', icon: Globe },
  { name: 'Hybrid Dense/Sparse RAG', category: 'Architecture', icon: Cpu },
  { name: 'CI/CD & Git', category: 'DevOps', icon: Layers },
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-6 border-y border-border bg-card/60 backdrop-blur-sm">
      {/* Edge gradient masks for seamless fade */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Marquee Track (Repeated 2x for seamless CSS keyframe loop) */}
      <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused] select-none">
        {[...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-card border border-border/80 shadow-subtle hover:border-primary/50 transition-colors group shrink-0"
            >
              <div className="p-1.5 rounded-lg bg-card-subtle text-primary group-hover:text-foreground transition-colors">
                <IconComponent className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-foreground tracking-tight font-sans">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  {item.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
