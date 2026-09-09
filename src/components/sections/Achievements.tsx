import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Flame, Rocket, Users, Award, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../../data/portfolioData';

export const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-accent-amber" />;
      case 'Medal':
        return <Medal className="w-5 h-5 text-accent-amber" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-accent-rose" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-accent-cyan" />;
      case 'Users':
        return <Users className="w-5 h-5 text-primary" />;
      default:
        return <Award className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-border pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-accent-amber text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-subtle">
              <Trophy className="w-3.5 h-3.5" />
              Honors & Leadership
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-foreground">
              Distinctions & <span className="italic font-normal text-primary">Competitive Podiums</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-xs text-left md:text-right">
            University rank certificates, national hackathon podiums, and student leadership.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-3xl bg-card border border-border p-6 shadow-card flex flex-col justify-between relative overflow-hidden photo-lift-card"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-card-subtle border border-border">
                    {getIcon(item.icon)}
                  </div>
                  {item.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-card-subtle border border-border text-[11px] font-mono text-muted-foreground font-semibold">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-foreground font-serif">
                  {item.title}
                </h3>
                <p className="text-xs text-primary font-semibold mt-1">
                  {item.organization} {item.date ? `· ${item.date}` : ''}
                </p>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-border flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                <Sparkles className="w-3 h-3 text-accent-amber" />
                <span>Verified Academic & Hackathon Record</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
