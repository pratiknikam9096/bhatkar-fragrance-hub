import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import luxuryPerfumeSet from "@/assets/categories/Luxury_perfume_set_202603241824 (1).png";
import sixPerfumeBottles1 from "@/assets/categories/Six_perfume_bottles_202603241818 (1).png";
import sixPerfumeBottles2 from "@/assets/categories/Six_perfume_bottles_202603241816 (1).png";

const images = [
  {
    id: 1,
    src: luxuryPerfumeSet,
    title: "Premium Fragrance Collection",
  },
  {
    id: 2,
    src: sixPerfumeBottles1,
    title: "Luxury Scent Collection",
  },
  {
    id: 3,
    src: sixPerfumeBottles2,
    title: "New Arrivals",
  }
];

export function FullScreenImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsAutoPlay(true), 5000);
    return () => clearTimeout(timeout);
  }, [isAutoPlay]);

  return (
    <section className="w-full h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -1000, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Previous Button */}
      <motion.button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      {/* Next Button */}
      <motion.button
        onClick={handleNext}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-lg transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all cursor-pointer ${
              index === currentIndex
                ? 'bg-gold w-10 h-3'
                : 'bg-white/60 w-3 h-3 hover:bg-white/80'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-8 right-8 z-20 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold">
        {currentIndex + 1} / {images.length}
      </div>
    </section>
  );
}
