import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const BlessingsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 px-6 relative"
      style={{
        background: "linear-gradient(180deg, hsl(40 40% 95%) 0%, hsl(30 50% 96%) 100%)",
      }}
    >
      {/* Decorative diyas/lamps for blessings */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-6 opacity-50">
        <span className="text-2xl">🪔</span>
        <span className="text-3xl">🕉️</span>
        <span className="text-2xl">🪔</span>
      </div>
      
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="h-px flex-1 max-w-[80px] bg-gold/40" />
          <div className="flex items-center gap-2">
            <span className="text-xl opacity-70">🪷</span>
            <span className="text-gold text-2xl">🙏</span>
            <span className="text-xl opacity-70">🪷</span>
          </div>
          <div className="h-px flex-1 max-w-[80px] bg-gold/40" />
        </motion.div>

        <motion.h2
          className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Family Blessings
        </motion.h2>

        <motion.p
          className="font-script text-lg md:text-xl text-muted-foreground italic"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          With the blessings of our beloved parents and elders
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="h-px flex-1 max-w-[80px] bg-gold/40" />
          <div className="w-2 h-2 rounded-full bg-gold/40" />
          <div className="h-px flex-1 max-w-[80px] bg-gold/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default BlessingsSection;
