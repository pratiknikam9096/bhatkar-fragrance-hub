import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ParallaxHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const heroHeight = container.offsetHeight;
      
      // Calculate how far user has scrolled relative to hero section
      // When rect.top is -heroHeight, we've scrolled past the entire hero
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / (heroHeight * 0.8)); // Full animation at 80% scroll
      
      setScrollProgress(progress);
      
      // Hide text when scrolled significantly
      setIsVisible(progress < 0.7);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Parallax Layers */}
      <div className="absolute inset-0 w-full h-full">
        {/* Layer 1: Base Gradient - Black to Gold */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-slate-900"
          style={{
            transform: `translateY(${scrollProgress * 30}px)`,
            pointerEvents: "none",
          }}
        />

        {/* Layer 2: Soft Gradient Overlay - Gold/Beige */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-charcoal/20 to-transparent"
          style={{
            transform: `translateY(${scrollProgress * 40}px)`,
            pointerEvents: "none",
          }}
        />

        {/* Layer 3: Subtle Blush Accent - Right side */}
        <div
          className="absolute -right-1/4 top-0 w-1/2 h-full rounded-full blur-3xl bg-rose-900/15"
          style={{
            transform: `translateY(${scrollProgress * 20}px)`,
            pointerEvents: "none",
          }}
        />

        {/* Layer 4: Mist/Smoke Effect - Center */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          style={{
            transform: `translateY(${scrollProgress * 50}px)`,
            pointerEvents: "none",
            backdropFilter: "blur(0.5px)",
          }}
        />

        {/* Animated Particles/Mist - Subtle floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-32 h-32 rounded-full blur-2xl opacity-20"
            style={{
              background: i % 2 === 0 
                ? "radial-gradient(circle, rgba(217,119,6,0.3), transparent)"
                : "radial-gradient(circle, rgba(120,53,15,0.2), transparent)",
              left: `${20 + i * 15}%`,
              top: `${10 + i * 8}%`,
              pointerEvents: "none",
            }}
            animate={{
              y: [0, 30 * (i + 1), 0],
              x: [0, 15 * Math.sin(i), 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div
        className="relative h-screen w-full flex items-center justify-center"
        style={{ pointerEvents: scrollProgress > 0.9 ? "none" : "auto" }}
      >
        {/* Centered Perfume Bottle and Text */}
        <div className="relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-6">

          {/* Animated Brand Name - Top */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-1/4 sm:top-1/3 text-center pointer-events-none"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 tracking-tight">
              BHATKAR
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-light text-amber-100/80 tracking-widest mt-2 uppercase">
              Essence of Elegance
            </p>
          </motion.div>

          {/* Perfume Bottle - Center with Parallax */}
          <motion.div
            ref={bottleRef}
            className="absolute pointer-events-none"
            style={{
              transform: `translate3d(0, ${scrollProgress * 150}px, 0) scale(${1 - scrollProgress * 0.3})`,
              willChange: "transform",
              opacity: Math.max(0.3, 1 - scrollProgress),
            }}
          >
            {/* Bottle Container with Glow */}
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl opacity-50"
                style={{
                  background: "radial-gradient(circle, rgba(217,119,6,0.4), transparent)",
                  width: "200px",
                  height: "200px",
                  marginLeft: "-50px",
                  marginTop: "-50px",
                }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Minimal SVG Perfume Bottle - Premium Design */}
              <svg
                width="160"
                height="240"
                viewBox="0 0 160 240"
                className="relative z-10 drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Sprayer Top */}
                <rect x="65" y="0" width="30" height="20" rx="4" fill="#d97706" opacity="0.9" />
                <rect x="60" y="18" width="40" height="8" rx="2" fill="#b45309" opacity="0.8" />

                {/* Bottle Cap/Neck */}
                <path
                  d="M 45 26 L 50 35 L 110 35 L 115 26 Z"
                  fill="#8b5cf6"
                  opacity="0.7"
                  className="transition-opacity"
                />

                {/* Main Bottle Body - Elegant shape */}
                <defs>
                  <linearGradient id="bottleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
                    <stop offset="40%" stopColor="#d97706" stopOpacity="0.6" />
                    <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#b45309" stopOpacity="0.3" />
                  </linearGradient>
                  <filter id="glassEffect">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.8" />
                    </feComponentTransfer>
                  </filter>
                </defs>

                {/* Bottle glass with gradient */}
                <path
                  d="M 50 35 Q 40 50, 35 80 Q 30 120, 32 160 Q 33 180, 40 200 L 120 200 Q 127 180, 128 160 Q 130 120, 125 80 Q 120 50, 110 35 Z"
                  fill="url(#bottleGradient)"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  opacity="0.8"
                  filter="url(#glassEffect)"
                />

                {/* Bottle Highlight - Glass shine */}
                <ellipse cx="70" cy="60" rx="12" ry="25" fill="white" opacity="0.25" />
                <ellipse cx="75" cy="100" rx="8" ry="40" fill="white" opacity="0.15" />

                {/* Liquid inside bottle */}
                <path
                  d="M 52 140 Q 45 150, 45 170 Q 46 185, 50 195 L 110 195 Q 114 185, 115 170 Q 115 150, 108 140 Z"
                  fill="#d97706"
                  opacity="0.4"
                />

                {/* Bottle Base */}
                <ellipse cx="80" cy="205" rx="38" ry="8" fill="#92400e" opacity="0.6" />
              </svg>
            </div>
          </motion.div>

          {/* CTA Button - Bottom with fade in/out */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-1/4 sm:bottom-1/3 pointer-events-auto"
          >
            <Link to="/shop">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white/95 font-semibold px-8 sm:px-12 py-6 sm:py-7 text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-400/30 hover:border-amber-300/50"
              >
                <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                Explore Collection
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Scroll Indicator - Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 sm:bottom-12 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-amber-200/60 font-medium uppercase tracking-widest">
                Scroll
              </span>
              <motion.div className="w-6 h-10 rounded-full border-2 border-amber-400/40 flex items-start justify-center p-2 hover:border-amber-300/60 transition-colors">
                <motion.div
                  animate={{ y: [2, 6, 2] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-2 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Floral Texture Overlay - Very subtle */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${scrollProgress * 20}px)`,
        }}
      />
    </section>
  );
}
