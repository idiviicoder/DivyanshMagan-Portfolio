import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-border bg-card/60 backdrop-blur-md pt-16 pb-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-border">
          
          {/* Brand & Handwritten Note */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-serif font-bold text-xl text-foreground">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono text-muted-foreground bg-card-subtle px-2 py-0.5 rounded border border-border">
                Portfolio
              </span>
            </div>

            <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
              Software Engineer specializing in production LLM/RAG systems, search infrastructure, and scalable data pipelines.
            </p>

            {/* Currently exploring status line */}
            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Exploring Agentic RAG & Hybrid Vector Indices</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-muted-foreground">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-cursor={link.name}
                className="hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            data-cursor="Top"
            className="p-3 rounded-xl bg-card hover:bg-card-subtle border border-border text-muted-foreground hover:text-foreground shadow-subtle transition-all group flex items-center gap-2 text-xs font-semibold"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Bar with Handwritten Touch */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-handwriting text-base text-foreground font-bold">
              Designed & engineered with care ✦
            </span>
            <span>·</span>
            <span>© {new Date().getFullYear()} Divyansh Magan</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GitHub"
              className="hover:text-foreground transition-colors p-1"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="LinkedIn"
              className="hover:text-foreground transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              data-cursor="Email"
              className="hover:text-foreground transition-colors p-1"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
