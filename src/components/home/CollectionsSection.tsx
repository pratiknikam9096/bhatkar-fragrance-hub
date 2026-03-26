import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { collections } from "@/data/products";

import collectionPerfumeSets from "@/assets/generated/collection-men.png";
import collectionBhatkar from "@/assets/generated/collection-women.png";
import collectionNewArrivals from "@/assets/generated/collection-unisex.png";

const collectionImages = [
  collectionPerfumeSets,
  collectionBhatkar,
  collectionNewArrivals,
];

export function CollectionsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Curated Collections
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            Explore our thoughtfully curated collections, each telling a unique olfactory story
          </p>
        </motion.div>

        {/* Horizontal Scrollable Category Section */}
        <div
          className="flex gap-6 overflow-x-auto no-scrollbar pb-2 md:pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {collections.map((collection, index) => {
            const isNewArrivals = collection.id === "new-arrivals";
            return (
              <motion.div
                key={collection.id}
                className="snap-start shrink-0 w-64 md:w-80 relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Link
                  to={`/shop?collection=${collection.id}`}
                  className={`block overflow-hidden rounded-2xl shadow-lg relative aspect-[4/5] bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ${isNewArrivals ? 'ring-2 ring-gold animate-glow' : ''}`}
                  style={{ backgroundImage: `url(${collectionImages[index]})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                  {/* Category Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col items-start">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-ivory drop-shadow mb-1">
                      {collection.name}
                    </h3>
                    <span className="text-ivory/80 text-sm font-medium drop-shadow">
                      {collection.description}
                    </span>
                  </div>
                  {/* Glow animation for New Arrivals */}
                  {isNewArrivals && (
                    <span className="absolute inset-0 rounded-2xl pointer-events-none animate-pulse-glow" />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="gold-outline" size="lg" asChild>
            <Link to="/shop">
              View More Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
      {/* Custom styles for no-scrollbar and glow animation */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.5); }
          70% { box-shadow: 0 0 24px 12px rgba(255, 215, 0, 0.25); }
          100% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.5); }
        }
        .animate-glow { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.5); animation: pulse-glow 2.5s infinite; }
        .animate-pulse-glow { animation: pulse-glow 2.5s infinite; }
      `}</style>
    </section>
  );
}
