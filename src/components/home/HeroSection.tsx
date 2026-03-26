import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import luxuryPerfumeSet from "@/assets/categories/Luxury_perfume_set.png";
import sixPerfumeBottles1 from "@/assets/categories/Six_perfume_bottles_1.png";
import sixPerfumeBottles2 from "@/assets/categories/Six_perfume_bottles_2.png";

export function HeroSection() {
  // Carousel images and text
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

  // Auto-scroll logic
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Horizontal Auto-Scrolling Carousel */}
      <div className="w-full h-full flex items-center justify-center relative">
        {heroSlides.map((slide, idx) => (
          <motion.div
            key={slide.title}
            className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-700 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            animate={{ opacity: current === idx ? 1 : 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`object-cover w-full h-[60vh] md:h-[80vh] rounded-3xl shadow-xl transition-transform duration-700 ${current === idx ? 'scale-100' : 'scale-105'} ${slide.highlight ? 'ring-4 ring-gold animate-glow' : ''}`}
              style={{ maxWidth: '1100px', filter: 'brightness(0.92)' }}
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold text-ivory drop-shadow mb-4 text-center tracking-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-gold font-medium mb-8 text-center drop-shadow">
                {slide.subtitle}
              </p>
              <Button asChild size="lg" variant="gold">
                <Link to={`/shop?collection=${slide.title.toLowerCase().replace(/ /g, '-')}`}>
                  Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            {/* Glow animation for New Arrivals */}
            {slide.highlight && (
              <span className="absolute inset-0 rounded-3xl pointer-events-none animate-pulse-glow" />
            )}
          </motion.div>
        ))}
      </div>
      {/* Custom styles for glow animation */}
      <style>{`
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
