import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ParallaxHeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-[url('/images/backgound-mobile.png')] lg:bg-[url('/images/backgound.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          BHATKAR
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-amber-100/90">
          Essence of Elegance
        </p>

        <div className="mt-8">
          <Link to="/shop">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition-transform hover:-translate-y-0.5"
            >
              Explore Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
