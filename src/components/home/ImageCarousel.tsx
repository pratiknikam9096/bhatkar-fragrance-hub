import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import luxuryPerfumeSet from "@/assets/categories/Luxury_perfume_set_202603241824 (1).png";
import sixPerfumeBottles1 from "@/assets/categories/Six_perfume_bottles_202603241818 (1).png";
import sixPerfumeBottles2 from "@/assets/categories/Six_perfume_bottles_202603241816 (1).png";

const carouselImages = [
  {
    image: luxuryPerfumeSet,
    title: "Premium Fragrance Collection",
    description: "Discover our essence"
  },
  {
    image: sixPerfumeBottles1,
    title: "Luxury Scent Collection",
    description: "Experience elegance"
  },
  {
    image: sixPerfumeBottles2,
    title: "New Arrivals",
    description: "Latest fragrances await"
  }
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 2000); // 2 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 to-black py-8 md:py-12">
      <div className="container px-4 mx-auto">
        {/* Carousel Container */}
        <div className="relative w-full max-h-96 md:max-h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img
                src={carouselImages[currentIndex].image}
                alt={carouselImages[currentIndex].title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl md:text-4xl font-bold text-white mb-2"
                >
                  {carouselImages[currentIndex].title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-200"
                >
                  {carouselImages[currentIndex].description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {carouselImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  index === currentIndex
                    ? 'bg-gold w-8'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            key={currentIndex}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'linear' }}
            className="h-full bg-gold"
          />
        </div>
      </div>
    </section>
  );
}
