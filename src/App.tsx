import React, { useState, useEffect } from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { ParticleBackground } from './components/common/ParticleBackground';
import { CustomCursor } from './components/common/CustomCursor';
import { Toast, ToastMessage } from './components/common/Toast';
import { ResumeModal } from './components/common/ResumeModal';

export const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false); // Default to warm beige/cream light theme per prompt
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.colorScheme = 'light';
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      dismissToast(id);
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-primary/20 selection:text-foreground">
      {/* Interactive Custom Magnetic Cursor with Context Labels */}
      <CustomCursor />

      {/* Subtle Neural Particle Constellation in Earthy Tones */}
      <ParticleBackground />

      {/* Floating Toast Notification Center */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

      {/* Full Screen Resume Preview / Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onShowToast={showToast}
      />

      {/* Sticky Navigation Header */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Single Page Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero onShowToast={showToast} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

