import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../../data/portfolioData';

// Animated CountUp component
interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const StatCounter: React.FC<CounterProps> = ({ value, prefix = '', suffix = '', duration = 1.6 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = easeProgress * value;

      setCount(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  const displayCount = value % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return (
    <span ref={ref} className="font-serif font-black tracking-tight text-foreground text-3xl sm:text-4xl">
      {prefix}{displayCount}{suffix}
    </span>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-topographic">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header with Cursive Annotation */}
        <div className="mb-12 border-b border-border pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-subtle">
              <Brain className="w-3.5 h-3.5" />
              Background & Approach
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
              Turning unstructured chaos into <span className="italic font-normal text-primary">proven intelligence</span>.
            </h2>
          </div>
          <span className="font-handwriting text-accent-amber text-lg sm:text-xl -rotate-2 font-bold shrink-0 self-start sm:self-end">
            (the backstory ✍️)
          </span>
        </div>

        {/* Narrative & Focus - Open, clean editorial layout without nested boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg text-foreground leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>
            {/* Cursive Marginal Quote */}
            <p className="font-handwriting text-primary text-lg sm:text-xl rotate-1 pt-1 font-semibold">
              ~ "Obsessed with eliminating retrieval latency & building deterministic agent pipelines."
            </p>
          </div>

          <div className="lg:col-span-5 space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>
                <strong className="text-foreground">Production AI Focus:</strong> Low-latency hybrid retrieval, domain embeddings (VoyageAI, Azure), and multi-stage LLM chains.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>
                <strong className="text-foreground">Scale & Resilience:</strong> Distributed scraping handling anti-bot protections and sub-second queries with FastAPI & Elasticsearch.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>
                <strong className="text-foreground">Academic Rigor:</strong> University of Delhi Rank 2 in CS, building on solid algorithmic and data structure foundations.
              </span>
            </div>
          </div>
        </div>

        {/* Minimalist Stat Strip with Cursive Lead-in */}
        <div className="relative">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="font-mono text-xs text-muted-foreground uppercase font-semibold">Key Metrics</span>
            <span className="font-handwriting text-primary text-base font-bold rotate-1 select-none">
              proven engineering impact, zero vanity ⤷
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-card border border-border p-6 shadow-card grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-border"
          >
            {STATS.map((stat) => (
              <div key={stat.id} className="pt-4 md:pt-0 md:px-5 first:pt-0 first:pl-0 last:pr-0 flex flex-col justify-between">
                <div className="mb-1">
                  <StatCounter
                    value={stat.numericValue}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-foreground">{stat.label}</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{stat.sublabel}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
