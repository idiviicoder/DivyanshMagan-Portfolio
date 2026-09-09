import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle, Database, Search, Cpu, Bot, Terminal, Globe } from 'lucide-react';
import { EXPERIENCES } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  const getBulletIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-4 h-4 text-primary shrink-0" />;
      case 1:
        return <Bot className="w-4 h-4 text-accent-amber shrink-0" />;
      case 2:
        return <Sparkles className="w-4 h-4 text-primary shrink-0" />;
      case 3:
        return <Globe className="w-4 h-4 text-accent-amber shrink-0" />;
      case 4:
        return <Cpu className="w-4 h-4 text-primary shrink-0" />;
      case 5:
        return <Database className="w-4 h-4 text-primary shrink-0" />;
      default:
        return <CheckCircle className="w-4 h-4 text-primary shrink-0" />;
    }
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Editorial Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-border pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-subtle">
              <Briefcase className="w-3.5 h-3.5" />
              Career Timeline
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-foreground">
              Production <span className="italic font-normal text-primary">Engineering</span> Track Record
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="font-handwriting text-accent-amber text-lg font-bold -rotate-1 select-none">
              where real impact happened ✦
            </span>
            <span className="text-xs font-mono text-muted-foreground bg-card-subtle px-3 py-1.5 rounded-full border border-border">
              Sept 2024 – Present
            </span>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-border hidden sm:block" />

          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative mb-12 last:mb-0">
              
              {/* Timeline Tactile Stamp Node */}
              <div className="hidden sm:flex absolute left-8 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-card border-2 border-primary items-center justify-center shadow-subtle z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="sm:ml-16 rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-card relative overflow-hidden"
              >
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-border">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold font-serif text-foreground">
                        {exp.role}
                      </h3>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                        Full-Time
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{exp.company}</span>
                      <span className="flex items-center gap-1 text-xs">
                        <MapPin className="w-3.5 h-3.5 text-primary" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start md:self-auto">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-xl bg-card-subtle border border-border text-foreground font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Impact Highlight Badges with Cursive Side Tag */}
                <div className="py-4 flex flex-wrap items-center justify-between gap-2 border-b border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {exp.impactBadges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-xs font-semibold flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3" />
                        {badge}
                      </span>
                    ))}
                  </div>

                  <span className="font-handwriting text-accent-emerald text-base font-bold rotate-1 select-none">
                    ~ automated 20+ hrs/wk of manual pharma search!
                  </span>
                </div>

                {/* Detailed Contribution Bullets */}
                <div className="mt-6 space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed p-3 rounded-xl bg-card-subtle/50 hover:bg-card-subtle transition-colors border border-border/40"
                    >
                      <div className="mt-1">{getBulletIcon(bIdx)}</div>
                      <span className="flex-1 text-foreground font-normal">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2 font-bold">
                    <Terminal className="w-3.5 h-3.5 text-primary" /> Stack & Ecosystem
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-lg bg-card-subtle border border-border text-foreground hover:border-primary/50 transition-colors shadow-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
