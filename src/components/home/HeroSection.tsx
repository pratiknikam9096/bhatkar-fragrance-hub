import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import luxuryPerfumeSet from "@/assets/categories/Luxury_perfume_set.png";
import sixPerfumeBottles1 from "@/assets/categories/Six_perfume_bottles_1.png";
import sixPerfumeBottles2 from "@/assets/categories/Six_perfume_bottles_2.png";

export function HeroSection() {
  // Category images and text
  const heroSlides = [
    {
      image: luxuryPerfumeSet,
      title: "Perfume Sets",
      subtitle: "Premium curated gift sets for every occasion."
    },
    {
      image: sixPerfumeBottles1,
      title: "The Bhatkar Collection",
      subtitle: "Signature scents, crafted for distinction."
    },
    {
      image: sixPerfumeBottles2,
      title: "New Arrivals",
      subtitle: "Discover the latest in luxury fragrance.",
      highlight: true
    }
  ];

  // Horizontal scroll ref and auto-scroll logic
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scroll = () => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const scrollAmount = container.offsetWidth * 0.8;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };
    const interval = setInterval(scroll, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Horizontal Scrollable Category Row */}
      <div
        ref={scrollRef}
        className="flex flex-row gap-8 overflow-x-auto no-scrollbar w-full px-4 py-8 items-center snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
      >
        {heroSlides.map((slide, idx) => (
          <motion.div
            key={slide.title}
            className={`shrink-0 w-[85vw] max-w-[420px] md:w-[420px] relative group snap-start`}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
          >
            <Link to={`/shop?collection=${slide.title.toLowerCase().replace(/ /g, '-')}`}
              className={`block overflow-hidden rounded-3xl shadow-xl relative h-[60vw] max-h-[420px] md:h-[420px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${slide.highlight ? 'ring-4 ring-gold animate-glow' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-3xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-ivory drop-shadow mb-3 text-center tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-base md:text-xl text-gold font-medium mb-6 text-center drop-shadow">
                  {slide.subtitle}
                </p>
                <Button asChild size="lg" variant="gold">
                  <span>
                    Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </div>
              {/* Glow animation for New Arrivals */}
              {slide.highlight && (
                <span className="absolute inset-0 rounded-3xl pointer-events-none animate-pulse-glow" />
              )}
            </Link>
          </motion.div>
        ))}
      </div>
      {/* Custom styles for glow animation and no-scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.5); }
          70% { box-shadow: 0 0 48px 24px rgba(255, 215, 0, 0.18); }
          100% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.5); }
        }
        .animate-glow { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.5); animation: pulse-glow 2.5s infinite; }
        .animate-pulse-glow { animation: pulse-glow 2.5s infinite; }
      `}</style>
    </section>
  );
}
