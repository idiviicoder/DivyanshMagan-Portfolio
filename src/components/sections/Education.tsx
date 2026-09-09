import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Star, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
import { EDUCATION_DATA, ACHIEVEMENTS } from '../../data/portfolioData';

export const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'achievements'>('education');
  const [achievementSlide, setAchievementSlide] = useState(0);

  const nextAchievement = () => {
    setAchievementSlide((prev) => (prev + 1) % ACHIEVEMENTS.length);
  };

  const prevAchievement = () => {
    setAchievementSlide((prev) => (prev - 1 + ACHIEVEMENTS.length) % ACHIEVEMENTS.length);
  };

  const currentAch = ACHIEVEMENTS[achievementSlide];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-topographic">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-subtle">
              <GraduationCap className="w-3.5 h-3.5" />
              Pedigree & Distinctions
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
              Education & <span className="italic font-normal text-primary">Competitive Honors</span>
            </h2>
          </div>

          {/* Tab Switcher & Cursive Tag */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="font-handwriting text-accent-amber text-lg font-bold -rotate-2 hidden sm:inline select-none">
              ★ Rank 2 DU & 9.1 MCA GPA
            </span>
            <div className="flex items-center gap-2 bg-card p-1 rounded-2xl border border-border shadow-subtle">
              <button
                onClick={() => setActiveTab('education')}
                data-cursor="Degrees"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'education'
                    ? 'bg-primary text-primary-foreground shadow-subtle font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Degrees</span>
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                data-cursor="Honors"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'achievements'
                    ? 'bg-primary text-primary-foreground shadow-subtle font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Honors ({ACHIEVEMENTS.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'education' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.id}
                className="rounded-2xl bg-card border border-border p-5 sm:p-6 shadow-subtle flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base sm:text-lg font-bold font-serif text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono font-bold text-xs shrink-0">
                      <Star className="w-3 h-3 fill-primary text-primary" />
                      <span>{edu.grade}</span>
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-primary">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground mt-1.5">
                    <Calendar className="w-3 h-3 text-primary" />
                    <span>{edu.period}</span>
                  </div>

                  {edu.highlights && (
                    <div className="mt-3 space-y-1 pt-2.5 border-t border-border">
                      {edu.highlights.map((h, hIdx) => (
                        <p key={hIdx} className="text-xs text-muted-foreground leading-snug flex items-start gap-1.5">
                          <span className="text-primary font-bold">•</span>
                          <span>{h}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {edu.id === 'mca' && (
                  <div className="mt-3 pt-2 border-t border-border/50 flex justify-end">
                    <span className="font-handwriting text-primary text-sm font-bold rotate-1 select-none">
                      ~ top 1% academic merit
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Honors Carousel */
          <div className="space-y-4">
            <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-card relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-accent-amber" />
                  <span className="text-xs font-mono text-muted-foreground font-semibold">
                    Distinction 0{achievementSlide + 1} of 0{ACHIEVEMENTS.length}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevAchievement}
                    data-cursor="Prev"
                    className="p-1.5 rounded-lg bg-card-subtle border border-border hover:bg-muted text-foreground transition-colors"
                    aria-label="Previous honor"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextAchievement}
                    data-cursor="Next"
                    className="p-1.5 rounded-lg bg-card-subtle border border-border hover:bg-muted text-foreground transition-colors"
                    aria-label="Next honor"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAch.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold font-serif text-foreground">
                        {currentAch.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-primary font-semibold mt-0.5">
                        {currentAch.organization} {currentAch.date ? `· ${currentAch.date}` : ''}
                      </p>
                    </div>

                    {currentAch.badge && (
                      <span className="px-3 py-1 rounded-full bg-accent-amber/10 border border-accent-amber/30 text-accent-amber text-xs font-mono font-bold">
                        {currentAch.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                    {currentAch.description}
                  </p>

                  <div className="pt-2 flex justify-end">
                    <span className="font-handwriting text-accent-amber text-base font-bold -rotate-1 select-none">
                      ~ verified academic distinction 🎓
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-1.5 pt-1">
              {ACHIEVEMENTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setAchievementSlide(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    achievementSlide === idx ? 'w-6 bg-primary' : 'w-1.5 bg-border hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to distinction ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
