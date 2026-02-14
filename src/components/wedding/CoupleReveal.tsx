import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CoupleReveal = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-cream relative">
      {/* Decorative peacock feathers in corners */}
      <div className="absolute top-8 left-8 text-4xl opacity-40 hidden md:block">🦚</div>
      <div className="absolute top-8 right-8 text-4xl opacity-40 hidden md:block scale-x-[-1]">🦚</div>
      
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-10">
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            DivyaBarathi
          </motion.h2>

          <motion.span
            className="font-script text-2xl text-gold"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            &
          </motion.span>

          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Vijaybarathi
          </motion.h2>
        </div>

        <motion.p
          className="font-script text-lg md:text-xl text-muted-foreground italic mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Together with their families invite you to celebrate their wedding
        </motion.p>

        {/* Kolam-style mandala divider with lotus */}
        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-gold" />
          <div className="flex items-center gap-2">
            <span className="text-2xl opacity-60">🪷</span>
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-gold">
              <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.6" />
              <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              <circle cx="20" cy="8" r="2" fill="currentColor" opacity="0.3" />
              <circle cx="20" cy="32" r="2" fill="currentColor" opacity="0.3" />
              <circle cx="8" cy="20" r="2" fill="currentColor" opacity="0.3" />
              <circle cx="32" cy="20" r="2" fill="currentColor" opacity="0.3" />
            </svg>
            <span className="text-2xl opacity-60">🪷</span>
          </div>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-gold" />
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleReveal;
