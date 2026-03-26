import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Star, Users } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  inView: boolean;
  index: number;
}

function StatItem({ icon, value, suffix = "", label, inView, index }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const countUpStarted = useRef(false);

  useEffect(() => {
    if (!inView || countUpStarted.current) return;

    countUpStarted.current = true;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let stepCount = 0;

    const timer = setInterval(() => {
      if (stepCount >= steps) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        current += increment;
        setDisplayValue(Math.floor(current));
        stepCount++;
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-gradient-to-br from-white/5 via-white/0 to-white/0 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      {/* Glow on hover */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(600px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(217, 119, 6, 0.1), transparent 80%)",
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
          animate={{ rotate: [0, 10, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="text-amber-300">{icon}</div>
        </motion.div>

        {/* Value with Animation */}
        <motion.div className="text-4xl sm:text-5xl font-serif font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">
          {displayValue}
          <span className="text-2xl sm:text-3xl ml-1">{suffix}</span>
        </motion.div>

        {/* Label */}
        <p className="text-sm sm:text-base text-white/60">{label}</p>
      </div>
    </motion.div>
  );
}

export function DashboardStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: 150,
      suffix: "K+",
      label: "Sales This Month",
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: 98,
      suffix: "%",
      label: "Customer Rating",
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: 45,
      suffix: "K",
      label: "Happy Customers",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 rounded-full blur-3xl bg-amber-900/10"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl bg-rose-900/5"
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
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
            Our Success
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Trusted by thousands of fragrance enthusiasts worldwide
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              {...stat}
              inView={inView}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-amber-400/40"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </section>
  );
}
