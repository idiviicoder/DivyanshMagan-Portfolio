import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Component: Custom Magnetic Cursor with Contextual Labels
// Integration: React Bits inspired cursor interaction with earthy sage & warm tan accents

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on fine pointer devices (desktops)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('button, a, [data-cursor], .cursor-pointer, [role="button"]') as HTMLElement;
      
      if (interactiveEl) {
        setIsHovered(true);
        const label = interactiveEl.getAttribute('data-cursor') || '';
        setCursorText(label);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central dot follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2.5 h-2.5 rounded-full bg-primary"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovered && cursorText ? 0 : isHovered ? 1.5 : 1,
          opacity: 1,
        }}
        transition={{ type: 'spring', stiffness: 900, damping: 45 }}
      />

      {/* Outer magnetic ring / label bubble */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-primary/50 bg-card/85 backdrop-blur-sm shadow-subtle flex items-center justify-center overflow-hidden"
        animate={{
          x: cursorText ? mousePosition.x - 36 : isHovered ? mousePosition.x - 22 : mousePosition.x - 14,
          y: cursorText ? mousePosition.y - 36 : isHovered ? mousePosition.y - 22 : mousePosition.y - 14,
          width: cursorText ? 72 : isHovered ? 44 : 28,
          height: cursorText ? 72 : isHovered ? 44 : 28,
          borderColor: isHovered ? 'var(--primary)' : 'var(--border)',
          backgroundColor: cursorText ? 'var(--card)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 26 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[11px] font-mono font-bold text-foreground uppercase tracking-wider select-none text-center px-1"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};

