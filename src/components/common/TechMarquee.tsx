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
  Cloud,
  Users,
  TrendingUp,
  FileText
} from 'lucide-react';

// Component: Infinite Tech & Capabilities Marquee
// Features AI & Agent Systems, Data & Search, Automation, and GTM & DevRel ecosystems

const TECH_ITEMS = [
  { name: 'Gemini', category: 'LLM & Multimodal', icon: Sparkles },
  { name: 'Pinecone', category: 'Vector Search', icon: Database },
  { name: 'Azure AI Search', category: 'Hybrid Retrieval', icon: Cloud },
  { name: 'FastAPI', category: 'Async Backend', icon: Server },
  { name: 'GPT', category: 'Entity Enrichment', icon: Cpu },
  { name: 'Document AI', category: 'Fact Extraction', icon: FileText },
  { name: 'Tavily', category: 'Agent Search API', icon: Globe },
  { name: 'VoyageAI', category: 'Dense Embeddings', icon: Sparkles },
  { name: 'Playwright', category: 'Resilient Scraping', icon: Terminal },
  { name: 'Elasticsearch', category: 'Semantic Matching', icon: Search },
  { name: 'Tele-CRM', category: 'GTM & Pipeline', icon: TrendingUp },
  { name: 'React & TypeScript', category: 'Full-Stack UI', icon: Code2 },
  { name: 'Jinja', category: 'Templated Reports', icon: Layers },
  { name: 'Luma & Meetups', category: 'Dev Community', icon: Users },
  { name: 'Git & GitHub', category: 'DevOps & PRs', icon: Boxes },
  { name: 'RAG Pipelines', category: 'Architecture', icon: Workflow },
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
