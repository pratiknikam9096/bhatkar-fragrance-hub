import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import luxuryPerfumeSet from "@/assets/categories/Luxury_perfume_set_202603241824 (1).png";
import sixPerfumeBottles1 from "@/assets/categories/Six_perfume_bottles_202603241818 (1).png";
import sixPerfumeBottles2 from "@/assets/categories/Six_perfume_bottles_202603241816 (1).png";

const collections = [
  {
    id: "perfume-sets",
    title: "Perfume Sets",
    description: "Premium curated gift sets for every occasion.",
    image: luxuryPerfumeSet,
    path: "/shop?collection=perfume-sets"
  },
  {
    id: "bhatkar-collection",
    title: "The Bhatkar Collection",
    description: "Signature scents, crafted for distinction.",
    image: sixPerfumeBottles1,
    path: "/shop?collection=bhatkar-collection"
  },
  {
    id: "new-arrivals",
    title: "New Arrivals",
    description: "Discover the latest in luxury fragrance.",
    image: sixPerfumeBottles2,
    path: "/shop?collection=new-arrivals",
    highlight: true
  }
];

export function ThreeCollectionsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group h-full"
            >
              <div
                className={`h-full flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 bg-white ${
                  collection.highlight 
                    ? 'border-gold' 
                    : 'border-gray-200 hover:border-gold'
                }`}
              >
                {/* Image Container */}
                <div className="w-full h-48 md:h-56 overflow-hidden bg-gray-100">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content Container */}
                <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-8 text-center w-full">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                  >
                    {collection.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="text-base md:text-lg text-gold font-medium mb-6"
                  >
                    {collection.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button 
                      className="bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-2 rounded-lg transition-all"
                      asChild
                    >
                      <Link to={collection.path}>
                        Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                {/* Glow effect for highlight */}
                {collection.highlight && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(255, 215, 0, 0.3)',
                        '0 0 20px 10px rgba(255, 215, 0, 0.15)',
                        '0 0 0 0 rgba(255, 215, 0, 0.3)'
                      ]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
