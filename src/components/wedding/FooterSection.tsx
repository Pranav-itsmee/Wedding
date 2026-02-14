import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FooterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(30 50% 96%) 0%, hsl(25 35% 88%) 100%)",
      }}
    >
      {/* Decorative top border with flowers */}
      <div className="absolute top-0 left-0 right-0 flex justify-around px-4 pt-4 opacity-40">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="text-xl">{i % 2 === 0 ? '🌺' : '🌸'}</span>
        ))}
      </div>
      
      {/* Temple bells */}
      <div className="flex justify-center gap-8 mb-10">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="text-3xl animate-bell-swing"
            style={{ animationDelay: `${i * 0.3}s` }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.6 } : {}}
            transition={{ delay: i * 0.2 }}
          >
            🔔
          </motion.span>
        ))}
      </div>

      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          We look forward to celebrating with you
        </motion.h2>

        <motion.p
          className="font-script text-base text-muted-foreground italic mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Your presence is the greatest gift
        </motion.p>

        {/* Decorative RSVP button */}
        <motion.button
          className="px-10 py-3 rounded-full border-2 border-gold/40 text-gold font-display text-lg tracking-wider cursor-default hover:bg-gold/5 transition-colors"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          aria-label="RSVP decorative button"
        >
          RSVP
        </motion.button>

        <motion.p
          className="mt-12 text-xs text-muted-foreground/60 font-body"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          Vijayabharathi & Divyabharathi · 22 February 2026
        </motion.p>
        
        {/* Decorative bottom elements */}
        <motion.div
          className="mt-8 flex justify-center gap-6 opacity-50"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.5 } : {}}
          transition={{ delay: 1.2 }}
        >
          <span className="text-2xl">🪔</span>
          <span className="text-2xl">🪷</span>
          <span className="text-2xl">🪔</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
