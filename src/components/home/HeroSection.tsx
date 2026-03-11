import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Flower2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import luxuryHero from "@/assets/generated/luxury-hero.png";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onReady = () => {
      try {
        // Dispatch an event so any external controller can safely initialize
        window.dispatchEvent(new CustomEvent('videoControllerReady', { detail: { video: v } }));
      } catch (err) {
        // ignore
      }
    };

    v.addEventListener('loadedmetadata', onReady);
    // also try canplay as fallback
    v.addEventListener('canplay', onReady);

    return () => {
      v.removeEventListener('loadedmetadata', onReady);
      v.removeEventListener('canplay', onReady);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "brightness(0.9)" }}
        poster={luxuryHero}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        <source src="/videos/hero-bg.webm" type="video/webm" />
        {/* Fallback Gradient Backdrop if no video or poster */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background opacity-50" />
      </video>

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-charcoal/5 via-transparent to-charcoal/5" />

      {/* Enhanced Floating Elements */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl z-2"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-accent/8 blur-3xl z-2"
      />

      {/* Decorative Circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/40 rounded-full z-2"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-accent/40 rounded-full z-2"
      />

      {/* Intentionally keeping only the background hero media for a clean premium look */}
      <div className="relative z-10" />

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-2 hover:border-primary/60 transition-colors">
            <motion.div
              animate={{ y: [2, 6, 2] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-gradient-to-b from-primary to-accent rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
