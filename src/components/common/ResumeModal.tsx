import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_DATA, ACHIEVEMENTS, SKILL_CATEGORIES } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    onShowToast('Downloading Divyansh_Magan_Resume.pdf...');
    // Create a simulated resume blob or trigger download
    const element = document.createElement('a');
    element.setAttribute('href', '#');
    element.setAttribute('download', 'Divyansh_Magan_Resume.pdf');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-card text-card-foreground rounded-2xl border border-border shadow-lift flex flex-col overflow-hidden z-10 my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card-subtle/80 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent-rose/80" />
              <div className="w-3 h-3 rounded-full bg-accent-amber/80" />
              <div className="w-3 h-3 rounded-full bg-accent-emerald/80" />
              <span className="ml-3 text-xs font-mono text-muted-foreground">Divyansh_Magan_Resume.pdf</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors hidden sm:flex items-center gap-1.5 text-xs font-medium"
                title="Print resume"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors ml-2"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 md:p-10 overflow-y-auto space-y-8 bg-card text-foreground font-sans">
            {/* Header */}
            <div className="border-b border-border pb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold font-serif tracking-tight text-foreground">{PERSONAL_INFO.name}</h1>
                  <p className="text-primary font-semibold mt-1 text-sm">Software Engineer · LLM & RAG Systems Builder</p>
                </div>
                <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-primary" /> {PERSONAL_INFO.location}</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-primary transition-colors"><Mail className="w-3.5 h-3.5 text-primary" /> {PERSONAL_INFO.email}</a>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors"><Phone className="w-3.5 h-3.5 text-primary" /> {PERSONAL_INFO.phone}</a>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <span className="font-semibold text-primary">LinkedIn:</span> linkedin.com/in/divyansh-magan
                  </a>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Professional Summary</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{PERSONAL_INFO.bio}</p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Work Experience
              </h2>
              <div className="space-y-6">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-base font-semibold text-foreground">{exp.role} <span className="text-primary font-medium">@ {exp.company}</span></h3>
                      <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">{exp.period}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-muted-foreground list-disc list-outside ml-4">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="p-3.5 rounded-xl bg-card-subtle border border-border">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xs font-bold text-foreground">{edu.degree}</h3>
                      <span className="text-[10px] font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded font-bold">GPA: {edu.grade}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{edu.institution}</p>
                    <p className="text-[11px] text-muted-foreground/80 mt-0.5">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Technical Skills
              </h2>
              <div className="space-y-2 text-xs">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <span className="font-semibold text-foreground min-w-[140px] text-primary">{cat.category}:</span>
                    <span className="text-muted-foreground">{cat.skills.map(s => s.name).join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Achievements */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" /> Honors & Leadership
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {ACHIEVEMENTS.map((ach) => (
                  <div key={ach.id} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">{ach.title}</strong> — {ach.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
