import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code2, Database, Wrench, Layers, TrendingUp, Users } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].category);

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'AI & Agent Systems':
        return <Cpu className="w-4 h-4 text-primary" />;
      case 'Languages & Backend':
        return <Code2 className="w-4 h-4 text-accent-amber" />;
      case 'Data & Search':
        return <Database className="w-4 h-4 text-primary" />;
      case 'Automation & Scraping':
        return <Wrench className="w-4 h-4 text-accent-amber" />;
      case 'GTM & Growth':
        return <TrendingUp className="w-4 h-4 text-primary" />;
      case 'Developer Community':
        return <Users className="w-4 h-4 text-accent-amber" />;
      default:
        return <Layers className="w-4 h-4 text-primary" />;
    }
  };

  const selectedGroup = SKILL_CATEGORIES.find((c) => c.category === activeCategory) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-topographic">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-subtle">
              <Layers className="w-3.5 h-3.5" />
              Technical & GTM Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
              Core <span className="italic font-normal text-primary">Capabilities</span> & Frameworks
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="font-handwriting text-accent-amber text-lg font-bold -rotate-1 select-none">
              click around to inspect toolbelt ⤷
            </span>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xs text-left md:text-right">
              Production AI pipelines, GTM workflows, and developer community tooling.
            </p>
          </div>
        </div>

        {/* Clean Category Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {SKILL_CATEGORIES.map((group) => {
            const isActive = activeCategory === group.category;
            return (
              <button
                key={group.category}
                onClick={() => setActiveCategory(group.category)}
                data-cursor="Category"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-card font-bold'
                    : 'bg-card text-muted-foreground border border-border hover:text-foreground hover:bg-card-subtle'
                }`}
              >
                {getCategoryIcon(group.category)}
                <span>{group.category}</span>
                <span className="text-[10px] font-mono opacity-80">({group.skills.length})</span>
              </button>
            );
          })}
        </div>

        {/* Unified Interactive Skills Matrix */}
        <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-card relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedGroup.category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-card-subtle border border-border">
                    {getCategoryIcon(selectedGroup.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-serif">
                      {selectedGroup.category}
                    </h3>
                    <p className="text-xs text-muted-foreground">Production ready & verified in real systems</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-handwriting text-primary text-base font-bold rotate-1 hidden sm:inline select-none">
                    ~ verified in production ✦
                  </span>
                  <span className="text-xs font-mono text-primary font-bold hidden md:inline">
                    {selectedGroup.skills.length} Capabilities
                  </span>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {selectedGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3 rounded-xl transition-all flex flex-col justify-between ${
                      skill.featured
                        ? 'bg-card-subtle border border-primary/40 text-foreground shadow-subtle'
                        : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-semibold text-xs text-foreground">{skill.name}</span>
                      {skill.level === 'Expert' && (
                        <span className="text-[10px] font-mono text-primary bg-primary/10 px-1 rounded font-bold">
                          Core
                        </span>
                      )}
                    </div>

                    {skill.description && (
                      <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
