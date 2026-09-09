import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Sparkles, Layers, ArrowUpRight, CheckCircle2, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';

// Component: Projects Section with Multi-Image Screenshot Gallery & 3D Tilt Card
// Integration: SkipperUI & React Bits inspired interactive project card with tilt, glare & multi-view gallery

// 3D Tilt Card Component using Framer Motion
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Project multi-image views metadata
// [ADD PHOTO: Drop additional project screenshot paths below]
const DRYRUN_GALLERY = [
  {
    id: 'dashboard',
    label: 'Dashboard Overview',
    src: '/images/dryrun-preview.png', // [ADD PHOTO: Primary DryRun live preview]
    caption: 'Real-time pipeline simulator with O*NET career taxonomy mapping',
  },
  {
    id: 'taxonomy',
    label: 'Taxonomy Graph',
    src: '/images/dryrun-preview.png', // [ADD PHOTO: Swap for DryRun taxonomy/graph screenshot]
    caption: 'Entity graph & structured skill gap breakdown',
  },
  {
    id: 'evaluation',
    label: 'Benchmark View',
    src: '/images/dryrun-preview.png', // [ADD PHOTO: Swap for DryRun evaluation metrics screenshot]
    caption: 'Low-latency similarity calculation and prompt output verification',
  },
];

export const Projects: React.FC = () => {
  const flagshipProject = PROJECTS.find((p) => p.id === 'dryrun') || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => p.id !== 'dryrun');

  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % secondaryProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + secondaryProjects.length) % secondaryProjects.length);
  };

  const currentProject = secondaryProjects[currentSlide];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-subtle">
              <Layers className="w-3.5 h-3.5" />
              Featured Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
              Production <span className="italic font-normal text-primary">Applications</span> & AI Engines
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-xs text-left md:text-right">
            Zero-hallucination systems built with structured taxonomies and high-performance backends.
          </p>
        </div>

        {/* 1. Flagship Spotlight: DryRun with Multi-Image Gallery & 3D Tilt */}
        <div className="mb-16 relative">
          <TiltCard className="rounded-3xl bg-card border border-border p-6 sm:p-9 shadow-card">
            {/* Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3.5 border-b border-border">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Flagship AI Product
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-mono text-primary font-bold">Live in Production</span>
              </div>
            </div>

            {/* Split Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black font-serif text-foreground tracking-tight">
                        {flagshipProject.title}
                      </h3>
                      <p className="text-primary text-sm font-semibold mt-1">
                        {flagshipProject.tagline}
                      </p>
                    </div>

                    <a
                      href={flagshipProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="Live Demo"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold shadow-card transition-all group shrink-0"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    {flagshipProject.description}
                  </p>

                  <div className="mt-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
                    {flagshipProject.highlights.slice(0, 3).map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="leading-snug text-foreground/90">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {flagshipProject.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-card-subtle border border-border text-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Multi-Image Screenshot Gallery with View Tabs */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-card-subtle border border-border p-3 shadow-subtle flex flex-col justify-between group">
                  
                  {/* Gallery View Selector Tabs */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-border text-xs">
                    <div className="flex items-center gap-1">
                      {DRYRUN_GALLERY.map((view, vIdx) => (
                        <button
                          key={view.id}
                          onClick={() => setActiveGalleryIndex(vIdx)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                            activeGalleryIndex === vIdx
                              ? 'bg-primary text-primary-foreground shadow-subtle'
                              : 'text-muted-foreground hover:text-foreground hover:bg-card'
                          }`}
                        >
                          {view.label}
                        </button>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground hidden sm:inline">
                      View 0{activeGalleryIndex + 1}/0{DRYRUN_GALLERY.length}
                    </span>
                  </div>

                  {/* Active Screenshot Display with Smooth Fade */}
                  <div className="rounded-xl overflow-hidden border border-border shadow-card relative group/img aspect-[16/10] bg-card">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeGalleryIndex}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full relative"
                      >
                        <img
                          src={DRYRUN_GALLERY[activeGalleryIndex].src}
                          alt={`DryRun - ${DRYRUN_GALLERY[activeGalleryIndex].label}`}
                          className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500 ease-out"
                        />
                        
                        {/* Caption Overlay */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-3 pt-6 text-white text-[11px] font-sans flex items-center justify-between">
                          <span className="truncate">{DRYRUN_GALLERY[activeGalleryIndex].caption}</span>
                          <span className="text-[10px] font-mono opacity-80 shrink-0 ml-2">[ADD PHOTO]</span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Interactive Button */}
                  <a
                    href={flagshipProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="Open"
                    className="w-full mt-3 py-2 px-4 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-bold flex items-center justify-center gap-2 shadow-subtle transition-all"
                  >
                    <span>Launch DryRun Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </TiltCard>
        </div>

        {/* 2. Interactive Carousel for Other Projects */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-foreground">
              More Engineering Projects
            </h3>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-muted-foreground mr-2">
                0{currentSlide + 1} / 0{secondaryProjects.length}
              </span>
              <button
                onClick={prevSlide}
                data-cursor="Prev"
                className="p-2 rounded-xl bg-card border border-border text-foreground hover:bg-card-subtle transition-colors shadow-subtle"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                data-cursor="Next"
                className="p-2 rounded-xl bg-card border border-border text-foreground hover:bg-card-subtle transition-colors shadow-subtle"
                aria-label="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Slide Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-card"
              >
                <div className={`grid grid-cols-1 ${currentProject.imageUrl ? 'lg:grid-cols-12 gap-8' : 'gap-6'} items-center`}>
                  
                  <div className={`space-y-3 ${currentProject.imageUrl ? 'lg:col-span-7' : ''} flex-1`}>
                    {/* Project Type Badge */}
                    {currentProject.id === 'pharma-matchmaking' && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-amber/15 text-accent-amber border border-accent-amber/30 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                        <span className="w-2 h-2 rounded-full bg-accent-amber animate-pulse" />
                        Company Project · In Progress
                      </div>
                    )}

                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold font-serif text-foreground">
                          {currentProject.title}
                        </h4>
                        <p className="text-primary text-xs sm:text-sm font-semibold mt-0.5">
                          {currentProject.tagline}
                        </p>
                      </div>

                      {currentProject.githubUrl && (
                        <a
                          href={currentProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="Source"
                          className="p-2 rounded-xl bg-card-subtle hover:bg-muted border border-border text-muted-foreground hover:text-foreground shadow-subtle transition-colors"
                          title="View Source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {currentProject.description}
                    </p>

                    {currentProject.longDescription && (
                      <p className="text-xs text-muted-foreground/80 leading-relaxed">
                        {currentProject.longDescription}
                      </p>
                    )}

                    <div className="space-y-1.5 pt-2">
                      {currentProject.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                          <span className="text-foreground/90">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="pt-3 border-t border-border flex flex-wrap gap-1.5">
                      {currentProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-card-subtle border border-border text-foreground font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Optional Project Screenshot Preview */}
                  {currentProject.imageUrl && (
                    <div className="lg:col-span-5">
                      <div className="rounded-2xl bg-card-subtle border border-border p-2.5 shadow-subtle group/img overflow-hidden">
                        <div className="rounded-xl overflow-hidden border border-border shadow-card relative aspect-[16/10] bg-card">
                          <img
                            src={currentProject.imageUrl}
                            alt={`${currentProject.title} Preview`}
                            className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500 ease-out"
                          />
                          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-2.5 pt-5 text-white text-[11px] font-sans flex items-center justify-between">
                            <span className="truncate">{currentProject.title} Dashboard & OCR Nutrition Scanner</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 pt-2">
            {secondaryProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  currentSlide === idx ? 'w-6 bg-primary' : 'w-1.5 bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

