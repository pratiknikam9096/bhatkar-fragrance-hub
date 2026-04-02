import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const scrollTexts = [
  "✨ Premium Fragrances Crafted with Excellence",
  "🌟 Luxury Perfumes for Every Occasion",
  "💎 Signature Collections by Bhatkar",
  "🎁 Perfect Gifts for Loved Ones",
  "🌹 Discover Your Signature Scent",
  "✨ Premium Fragrances Crafted with Excellence",
];

export function ScrollingText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clone text for infinite scroll effect
    const textElement = container.querySelector('.scrolling-text-track');
    if (!textElement) return;

    // Set initial animation
    const animateScroll = () => {
      textElement.animate(
        [
          { transform: 'translateX(100%)' },
          { transform: 'translateX(-100%)' }
        ],
        {
          duration: 15000, // 15 seconds for complete scroll
          iterations: Infinity,
          easing: 'linear'
        }
      );
    };

    animateScroll();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-gradient-to-r from-gold/20 via-transparent to-gold/20 py-6 md:py-8 overflow-hidden border-y border-gold/30"
    >
      <div className="relative w-full">
        <motion.div
          className="scrolling-text-track whitespace-nowrap flex gap-12"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {scrollTexts.map((text, index) => (
            <span
              key={index}
              className="text-xl md:text-2xl font-bold text-gold/90 hover:text-gold transition-colors shrink-0"
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}
