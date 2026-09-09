import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { MagneticButton } from '../common/MagneticButton';
import { ThreeCanvas } from '../common/ThreeCanvas';
import { TextReveal } from '../common/TextReveal';

// Component: Hero Section with Three.js interactive geometry & React Bits text animation
// Integration: Three.js canvas in earthy sage/tan + React Bits split text reveal

interface HeroProps {
  onShowToast: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onShowToast }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    onShowToast('Email copied to clipboard!');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-topographic"
    >
      {/* Background Interactive 3D Neural Knowledge Graph Canvas */}
      <div className="absolute right-0 sm:right-6 lg:right-12 top-1/2 -translate-y-1/2 w-[320px] sm:w-[460px] lg:w-[540px] h-[320px] sm:h-[460px] lg:h-[540px] opacity-45 dark:opacity-55 pointer-events-none z-0">
        <ThreeCanvas />
      </div>

      <div className="max-w-5xl mx-auto w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Editorial Title Mix (Serif + React Bits Reveal) */}
            <div className="space-y-3 relative w-full">
              <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-foreground leading-[1.08]">
                <TextReveal text="Crafting reliable AI & data systems." delay={0.1} />
              </h1>

              {/* Rotating Role Badge */}
              <div className="h-9 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="text-lg sm:text-xl font-bold font-sans text-muted-foreground flex items-center gap-2"
                  >
                    <span className="text-primary font-mono font-normal">&gt;</span>
                    <span className="text-foreground">
                      {PERSONAL_INFO.roles[roleIndex]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* High-impact factual pitch */}
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg font-normal">
              {PERSONAL_INFO.tagline}
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <MagneticButton strength={0.2}>
                <button
                  onClick={() => scrollTo('contact')}
                  data-cursor="Contact"
                  className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm shadow-card hover:bg-primary-hover transition-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get In Touch</span>
                </button>
              </MagneticButton>

              {/* Social Channels & Click to Copy */}
              <div className="flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="GitHub"
                  className="p-2.5 rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground shadow-subtle transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="LinkedIn"
                  className="p-2.5 rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground shadow-subtle transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  data-cursor="Copy"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border border-border text-xs font-mono text-muted-foreground hover:text-foreground shadow-subtle transition-all"
                  title="Click to copy email"
                >
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <span className="hidden sm:inline">{PERSONAL_INFO.email}</span>
                  <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-sans font-semibold">Copy</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Framed Portrait with Open to Opportunities Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Main Editorial Frame */}
            <div className="relative w-full max-w-[290px] sm:max-w-[320px] rounded-2xl bg-card border border-border p-3.5 shadow-card photo-lift-card">
              
              {/* Profile Photo Frame */}
              <div className="relative aspect-[4/4.8] w-full rounded-xl bg-card-subtle border border-border overflow-hidden group shadow-subtle">
                <img
                  src="/images/profile.jpg"
                  alt="Divyansh Magan - Software Engineer & AI Systems Builder"
                  className="w-full h-full object-cover object-top filter brightness-[1.01] contrast-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 pointer-events-none" />

                {/* Open to Opportunities Badge on Profile Photo */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-border shadow-subtle flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-xs font-semibold text-foreground tracking-tight">
                    {PERSONAL_INFO.availability}
                  </span>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-3 pt-2.5 border-t border-border flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-[11px] text-muted-foreground">Focus:</span>
                </div>
                <span className="font-semibold text-foreground text-xs">Softwares and AI</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

