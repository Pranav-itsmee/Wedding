import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

const VenueSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 px-6 relative"
      style={{
        background: "linear-gradient(180deg, hsl(30 50% 96%) 0%, hsl(40 40% 95%) 100%)",
      }}
    >
      {/* Decorative temple elements */}
      <div className="absolute top-8 left-8 text-3xl opacity-40">🕉️</div>
      <div className="absolute top-8 right-8 text-3xl opacity-40">🕉️</div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 opacity-50">
        <span className="text-2xl">🌺</span>
        <span className="text-2xl">🌺</span>
        <span className="text-2xl">🌺</span>
      </div>
      
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          className="inline-block mb-6 text-gold animate-pin-bounce"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <MapPin size={40} />
        </motion.div>

        <motion.h2
          className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Sri Annamar Mahal
        </motion.h2>

        <motion.p
          className="font-script text-base md:text-lg text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Anumanpalli Road, Vellode, Erode District
        </motion.p>

        <motion.a
          href="https://maps.app.goo.gl/Fv4t84noxC63t54a9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gold text-primary-foreground font-body font-medium tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <MapPin size={18} />
          Get Directions
        </motion.a>
      </div>
    </section>
  );
};

export default VenueSection;
