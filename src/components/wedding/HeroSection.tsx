import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const petals = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 8,
  duration: 8 + Math.random() * 6,
  size: 12 + Math.random() * 14,
}));

const HeroSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(30 50% 96%) 0%, hsl(20 60% 92%) 30%, hsl(35 45% 93%) 60%, hsl(340 35% 90%) 100%)",
      }}
    >
      {/* Floating petals */}
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-petal pointer-events-none"
          style={{
            left: p.left,
            top: "-20px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: `${p.size}px`,
            opacity: 0,
          }}
        >
          🌸
        </div>
      ))}

      {/* Decorative top border with mango leaves */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
      <div className="absolute top-4 left-0 right-0 flex justify-around px-4 opacity-60">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="text-2xl">🍃</span>
        ))}
      </div>

      <motion.div
        className="text-center px-6 z-10 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Decorative lotus corners */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl opacity-70">🪷</div>
        <div className="absolute top-1/2 -left-4 sm:-left-8 -translate-y-1/2 text-3xl opacity-50 hidden sm:block">🪷</div>
        <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 text-3xl opacity-50 hidden sm:block">🪷</div>
        
        <p className="font-script text-lg md:text-xl text-muted-foreground italic mb-6 tracking-wide">
          With the blessings of our families
        </p>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground animate-golden-glow leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          Vijaybarathi
        </motion.h1>

        <motion.p
          className="font-script text-2xl md:text-3xl text-gold my-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          &
        </motion.p>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground animate-golden-glow leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.6 }}
        >
          DivyaBarathi
        </motion.h1>

        <motion.p
          className="font-script text-base md:text-lg text-muted-foreground mt-8 italic"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.2 }}
        >
          Request the honour of your presence at their wedding celebration
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 animate-bounce-arrow text-gold"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 3 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
      
      {/* Decorative oil lamps at bottom */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-8 opacity-60">
        <span className="text-2xl">🪔</span>
        <span className="text-2xl">🪔</span>
        <span className="text-2xl">🪔</span>
      </div>
    </section>
  );
};

export default HeroSection;
