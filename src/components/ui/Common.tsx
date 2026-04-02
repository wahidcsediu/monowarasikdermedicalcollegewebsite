import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  glowColor?: string;
  children: React.ReactNode;
  className?: string;
}

export const NeonButton = ({ 
  children, 
  className, 
  variant = 'primary', 
  glowColor = 'rgba(16, 185, 129, 0.8)', 
  ...props 
}: NeonButtonProps) => {
  const variants = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.5)]',
    secondary: 'bg-white text-emerald-900 hover:bg-emerald-50 shadow-2xl',
    outline: 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]',
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.02, 
        boxShadow: `0 0 40px ${glowColor}`,
        y: -2
      }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'px-6 py-3 rounded-xl font-bold transition-all duration-300 uppercase tracking-wider text-sm',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const GlassCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn(
      'bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl shadow-xl p-6',
      className
    )}>
      {children}
    </div>
  );
};

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-emerald-500/10 blur-3xl"
          style={{
            width: Math.random() * 400 + 200,
            height: Math.random() * 400 + 200,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(parseFloat(start.toFixed(2)));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [hasStarted, value]);

  return (
    <motion.span
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true }}
    >
      {count}{suffix}
    </motion.span>
  );
};

export const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export const TextReveal = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(" ");
  
  return (
    <div className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-flex whitespace-nowrap mr-[0.25em]">
          {word.split("").map((char, charIdx) => {
            const index = text.split("").slice(0, text.indexOf(word, wordIdx > 0 ? text.indexOf(words[wordIdx-1]) + words[wordIdx-1].length : 0)).length + charIdx;
            return (
              <motion.span
                key={charIdx}
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: delay + index * 0.02,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </div>
  );
};

export const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionHeader = ({ title, subtitle, centered = false, dark = false }: { title: string; subtitle: string; centered?: boolean; dark?: boolean }) => (
  <div className={cn("mb-12", centered && "text-center", centered ? "mx-auto" : "")}>
    <p className={cn("text-sm font-bold uppercase tracking-widest mb-4", (dark || centered) ? "text-emerald-400" : "text-emerald-600 dark:text-emerald-400")}>
      {subtitle}
    </p>
    <h2 className={cn("text-3xl md:text-4xl font-bold", (dark || centered) ? "text-white" : "text-emerald-950 dark:text-white")}>
      <TextReveal text={title} />
    </h2>
  </div>
);
