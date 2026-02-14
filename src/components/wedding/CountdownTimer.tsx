import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const WEDDING_DATE = new Date("2026-02-22T05:00:00+05:30").getTime();

const CountdownTimer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, WEDDING_DATE - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-blush/30 relative">
      {/* Decorative hearts and flowers floating */}
      <div className="absolute top-8 left-8 text-3xl opacity-40 animate-float">💐</div>
      <div className="absolute top-12 right-8 text-3xl opacity-40 animate-float" style={{ animationDelay: '1s' }}>💝</div>
      <div className="absolute bottom-12 left-12 text-2xl opacity-40 animate-float" style={{ animationDelay: '2s' }}>🌸</div>
      <div className="absolute bottom-8 right-12 text-2xl opacity-40 animate-float" style={{ animationDelay: '1.5s' }}>💕</div>
      
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          className="font-script text-xl md:text-2xl text-foreground italic mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Counting down to our forever 💛
        </motion.p>

        <div className="flex justify-center gap-3 sm:gap-5">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-card border border-gold/25 flex items-center justify-center animate-timer-glow">
                <span className="font-display text-2xl sm:text-3xl font-bold text-gold">
                  {String(u.value).padStart(2, "0")}
                </span>
              </div>
              <span className="mt-2 text-xs sm:text-sm font-body text-muted-foreground tracking-wider uppercase">
                {u.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
