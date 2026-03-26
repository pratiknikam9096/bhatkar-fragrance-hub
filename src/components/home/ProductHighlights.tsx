import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Flower2, Trees, Citrus } from "lucide-react";

interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  notes: string[];
  index: number;
}

function HighlightCard({ icon, title, description, notes, index }: HighlightCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "50px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden"
    >
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300" />

      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(217, 119, 6, 0.15), transparent 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
        {/* Icon and Title */}
        <div>
          <motion.div
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="text-amber-300">{icon}</div>
          </motion.div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Notes Tags */}
        <div className="flex flex-wrap gap-2">
          {notes.map((note, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
              className="text-xs px-3 py-1 rounded-full bg-white/10 text-amber-100 border border-amber-300/30 backdrop-blur-sm"
            >
              {note}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ProductHighlights() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const highlights = [
    {
      icon: <Flower2 className="w-6 h-6" />,
      title: "Floral Essence",
      description: "Rose, jasmine, and peony create a romantic, enchanting fragrance that captures the beauty of a blooming garden.",
      notes: ["Rose", "Jasmine", "Peony"],
    },
    {
      icon: <Trees className="w-6 h-6" />,
      title: "Woody Warmth",
      description: "Sandalwood and cedar provide a deep, grounding base that lingers elegantly throughout the day.",
      notes: ["Sandalwood", "Cedar", "Vetiver"],
    },
    {
      icon: <Citrus className="w-6 h-6" />,
      title: "Citrus Brightness",
      description: "Fresh bergamot and zesty lemon notes awaken the senses with an uplifting, energizing burst.",
      notes: ["Bergamot", "Lemon", "Grapefruit"],
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-blank"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-1/2 h-full rounded-full blur-3xl bg-amber-900/10" />
        <div className="absolute -bottom-1/2 -left-1/4 w-1/2 h-full rounded-full blur-3xl bg-rose-900/10" />
      </div>

      {/* Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300">
            Fragrance Notes
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the carefully curated notes that make our fragrances truly exceptional
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((highlight, index) => (
            <HighlightCard
              key={index}
              {...highlight}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
