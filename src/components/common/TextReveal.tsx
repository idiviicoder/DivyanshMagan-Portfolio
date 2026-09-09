import React from 'react';
import { motion } from 'framer-motion';

// Component: React Bits inspired TextReveal & SplitText component
// Integration: ReactBits (https://reactbits.dev) Text Animations with custom earthy typography

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0.1,
}) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (customDelay: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: customDelay,
      },
    }),
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        damping: 18,
        stiffness: 140,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.28em] gap-y-[0.1em] ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {words.map((word, wIdx) => (
        <motion.span
          key={wIdx}
          variants={childVariants}
          className="inline-block whitespace-nowrap will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
