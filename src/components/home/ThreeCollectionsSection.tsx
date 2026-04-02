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
    <section className="py-12 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container px-4 mx-auto">
        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Link
                to={collection.path}
                className={`block overflow-hidden rounded-2xl relative aspect-square bg-cover bg-center shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  collection.highlight ? 'ring-2 ring-gold' : ''
                }`}
                style={{
                  backgroundImage: `url(${collection.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 group-hover:from-black/90 group-hover:via-black/50 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-white text-center mb-3 drop-shadow-lg"
                  >
                    {collection.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="text-base md:text-lg text-gold font-medium text-center mb-6 drop-shadow-lg"
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
                      className="bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-3 rounded-lg transition-all"
                    >
                      Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>

                {/* Glow effect for highlight */}
                {collection.highlight && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(255, 215, 0, 0.4)',
                        '0 0 30px 15px rgba(255, 215, 0, 0.2)',
                        '0 0 0 0 rgba(255, 215, 0, 0.4)'
                      ]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
