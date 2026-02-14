import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DateSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const dateDigits = ["2", "2"];
  const month = "February";
  const year = "2026";

  return (
    <section
      ref={ref}
      className="py-24 px-6 relative"
      style={{
        background: "linear-gradient(180deg, hsl(40 40% 95%) 0%, hsl(30 50% 96%) 100%)",
      }}
    >
      {/* Decorative bells */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-4 opacity-50">
        <span className="text-2xl">🔔</span>
        <span className="text-3xl">🔔</span>
        <span className="text-2xl">🔔</span>
      </div>
      
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          className="font-script text-lg text-muted-foreground italic mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Save the Date
        </motion.p>

        {/* Date display with flip-card style */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {dateDigits.map((d, i) => (
            <motion.div
              key={i}
              className="w-20 h-24 sm:w-24 sm:h-28 rounded-lg bg-card shadow-lg flex items-center justify-center border border-gold/20"
              initial={{ opacity: 0, rotateX: -90 }}
              animate={inView ? { opacity: 1, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15, type: "spring" }}
            >
              <span className="font-display text-5xl sm:text-6xl font-bold text-gold">{d}</span>
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {month} {year}
        </motion.h2>

        <motion.div
          className="mt-8 inline-block px-6 py-3 rounded-full border border-gold/30 bg-card/50 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Decorative flowers around muhurtham */}
          <span className="absolute -top-2 -left-2 text-xl">🌺</span>
          <span className="absolute -top-2 -right-2 text-xl">🌺</span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xl">🌸</span>
          
          <p className="font-script text-base md:text-lg text-foreground">
            <span className="text-gold font-semibold">Muhurtham</span> — 5:00 AM – 6:00 AM
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DateSection;
