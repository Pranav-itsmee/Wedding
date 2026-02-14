import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const events = [
  {
    title: "Reception",
    date: "21st February 2026",
    time: "Evening",
    icon: "🪔",
  },
  {
    title: "Muhurtham",
    date: "22nd February 2026",
    time: "5:00 AM – 6:00 AM",
    icon: "🔥",
  },
  {
    title: "Lunch",
    date: "22nd February 2026",
    time: "Afternoon",
    icon: "🍽️",
  },
];

const EventsTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-cream relative">
      {/* Decorative garland border */}
      <div className="absolute top-0 left-0 right-0 flex justify-around px-4 pt-4 opacity-50">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="text-xl">{i % 3 === 0 ? '🌺' : i % 3 === 1 ? '🌸' : '🌼'}</span>
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-14 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative lotus around title */}
          <span className="absolute left-1/2 -translate-x-1/2 -top-8 text-3xl opacity-60">🪷</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
            Wedding Events
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              className="group bg-card rounded-2xl p-8 text-center border border-gold/15 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {event.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {event.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-1">{event.date}</p>
              <p className="font-script text-base text-gold italic">{event.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;
