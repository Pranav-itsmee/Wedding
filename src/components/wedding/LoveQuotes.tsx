import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const quotes = [
  "Two souls, one heart.",
  "From this day forward, you shall not walk alone.",
  "Our love story begins a new chapter.",
  "In all the world, there is no love for you like mine.",
  "Together is a beautiful place to be.",
];

const hearts = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${10 + Math.random() * 80}%`,
  delay: Math.random() * 6,
  size: 10 + Math.random() * 14,
}));

const LoveQuotes = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % quotes.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden bg-peach/40">
      {/* Decorative border with roses and lotus */}
      <div className="absolute top-0 left-0 right-0 flex justify-center gap-6 pt-6 opacity-40">
        <span className="text-2xl">🌹</span>
        <span className="text-2xl">🪷</span>
        <span className="text-2xl">🌹</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-6 pb-6 opacity-40">
        <span className="text-2xl">🌺</span>
        <span className="text-2xl">💐</span>
        <span className="text-2xl">🌺</span>
      </div>
      
      {/* Floating hearts */}
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute animate-float-heart pointer-events-none text-accent/40"
          style={{
            left: h.left,
            bottom: "10%",
            animationDelay: `${h.delay}s`,
            fontSize: `${h.size}px`,
          }}
        >
          ♥
        </div>
      ))}

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Words of Love
          </p>

          <div className="h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                className="font-display text-xl sm:text-2xl md:text-3xl italic text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                "{quotes[current]}"
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveQuotes;
