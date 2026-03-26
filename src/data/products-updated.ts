import perfumeHero from "@/assets/perfume-hero-1.jpg";
import perfumeCollection from "@/assets/perfume-collection.jpg";
import perfumeOud from "@/assets/perfume-oud.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: "perfume-sets" | "the-bhatkar-collection" | "new-arrivals";
  fragranceType: "woody" | "floral" | "citrus" | "oriental" | "fresh" | "spicy";
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  sizes: {
    ml: number;
    price: number;
  }[];
  longevity: "light" | "moderate" | "long-lasting" | "intense";
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isLuxury?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Oud Noir",
    description: "A majestic blend of rare oud wood, smoky incense, and warm amber. This opulent fragrance captures the essence of Arabian nights with its deep, mysterious character.",
    price: 4999,
    originalPrice: 5999,
    images: [perfumeOud],
    category: "perfume-sets",
    fragranceType: "oriental",
    notes: {
      top: ["Bergamot", "Pink Pepper", "Saffron"],
      middle: ["Oud", "Rose", "Incense"],
      base: ["Amber", "Sandalwood", "Musk"]
    },
    sizes: [
      { ml: 8, price: 799 },
      { ml: 30, price: 2499 },
      { ml: 50, price: 3999 },
      { ml: 100, price: 4999 }
    ],
    longevity: "intense",
    rating: 4.9,
    reviewCount: 128,
    inStock: true,
    isBestSeller: true,
    isLuxury: true
  },
  {
    id: "2",
    name: "Velvet Rose Garden",
    description: "An enchanting floral symphony featuring Bulgarian rose, velvety peony, and delicate white musk. A romantic tribute to eternal gardens.",
    price: 3499,
    images: [perfumeCollection],
    category: "new-arrivals",
    fragranceType: "floral",
    notes: {
      top: ["Lychee", "Raspberry", "Pink Pepper"],
      middle: ["Bulgarian Rose", "Peony", "Magnolia"],
      base: ["White Musk", "Cedarwood", "Vanilla"]
    },
    sizes: [
      { ml: 8, price: 499 },
      { ml: 30, price: 1899 },
      { ml: 50, price: 2799 },
      { ml: 100, price: 3499 }
    ],
    longevity: "long-lasting",
    rating: 4.8,
    reviewCount: 95,
    inStock: true,
    isNewArrival: true
  },
  {
    id: "3",
    name: "Gentleman's Code",
    description: "Bold and sophisticated, this woody aromatic fragrance speaks of confidence and refined taste. Crafted for the modern gentleman.",
    price: 3999,
    originalPrice: 4499,
    images: [perfumeHero],
    category: "the-bhatkar-collection",
    fragranceType: "woody",
    notes: {
      top: ["Grapefruit", "Cardamom", "Lavender"],
      middle: ["Geranium", "Violet Leaf", "Cinnamon"],
      base: ["Vetiver", "Leather", "Tonka Bean"]
    },
    sizes: [
      { ml: 8, price: 599 },
      { ml: 30, price: 2199 },
      { ml: 50, price: 3199 },
      { ml: 100, price: 3999 }
    ],
    longevity: "long-lasting",
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    isBestSeller: true
  },
  {
    id: "4",
    name: "Mediterranean Sunrise",
    description: "Fresh and invigorating, capturing the essence of sun-kissed citrus groves along the Mediterranean coast. Pure energy in a bottle.",
    price: 2799,
    images: [perfumeHero],
    category: "perfume-sets",
    fragranceType: "citrus",
    notes: {
      top: ["Sicilian Lemon", "Bergamot", "Orange Blossom"],
      middle: ["Neroli", "Jasmine", "Green Tea"],
      base: ["White Cedar", "Musk", "Ambrox"]
    },
    sizes: [
      { ml: 30, price: 1599 },
      { ml: 50, price: 2199 },
      { ml: 100, price: 2799 }
    ],
    longevity: "moderate",
    rating: 4.6,
    reviewCount: 82,
    inStock: true,
    isNewArrival: true
  },
  {
    id: "5",
    name: "Mystic Amber",
    description: "A seductive oriental fragrance with warm amber, exotic spices, and precious resins. An olfactory journey to ancient temples.",
    price: 4499,
    images: [perfumeOud],
    category: "new-arrivals",
    fragranceType: "oriental",
    notes: {
      top: ["Cinnamon", "Cardamom", "Pink Pepper"],
      middle: ["Frankincense", "Myrrh", "Jasmine"],
      base: ["Amber", "Benzoin", "Vanilla"]
    },
    sizes: [
      { ml: 30, price: 2399 },
      { ml: 50, price: 3599 },
      { ml: 100, price: 4499 }
    ],
    longevity: "intense",
    rating: 4.8,
    reviewCount: 67,
    inStock: true,
    isLuxury: true
  },
  {
    id: "6",
    name: "Ocean Breeze",
    description: "A fresh aquatic fragrance that captures the spirit of the open sea. Clean, crisp, and effortlessly masculine.",
    price: 2499,
    images: [perfumeHero],
    category: "perfume-sets",
    fragranceType: "fresh",
    notes Ascending 2
notes: {
      top: ["Sea Salt", "Bergamot", "Grapefruit"],
      middle: ["Lavender", "Geranium", "Marine Notes"],
      base: ["Driftwood", "Musk", "Ambergris"]
    },
    sizes: [
      { ml: 30, price: 1399 },
      { ml: 50, price: 1999 },
      { ml: 100, price: 2499 }
    ],
    longevity: "moderate",
    rating: 4.5,
    reviewCount: 134,
    inStock: true,
    isBestSeller: true
  },
  {
    id: "7",
    name: "Midnight Jasmine",
    description: "Intoxicating and sensual, featuring night-blooming jasmine, tuberose, and warm sandalwood. For those who embrace the mystery of the night.",
    price: 3799,
    images: [perfumeCollection],
    category: "the-bhatkar-collection",
    fragranceType: "floral",
    notes: {
      top: ["Ylang-Ylang", "Orange Blossom", "Bergamot"],
      middle: ["Jasmine Sambac", "Tuberose", "Gardenia"],
      base: ["Sandalwood", "Vanilla", "Musk"]
    },
    sizes: [
      { ml: 30, price: 2099 },
      { ml: 50, price: 2999 },
      { ml: 100, price: 3799 }
    ],
    longevity Ascending: "long-lasting",
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    isLuxury: true
  },
  {
    id: "8",
    name: "Spice Trader",
    description: "An adventurous spicy oriental blend inspired by ancient spice routes. Bold, warm, and utterly captivating.",
    price: 3299,
    images: [perfumeOud],
    category: "new-arrivals",
    fragranceType: "spicy",
    notes: {
      top: ["Black Pepper", "Ginger", "Elemi"],
      middle: ["Cardamom", "Nutmeg", "Saffron"],
      base: ["Oud", "Tobacco", "Benzoin"]
    },
    sizes: [
      { ml: 30, Ascending price: 1799 },
      { ml: 50, price: 2599 },
      { ml: 100, price: 3299 }
    ],
    longevity: "long-lasting",
    rating: 4.6,
    reviewCount: 72,
    inStock: true,
    isNewArrival: true
  }
];

export const collections = [
  {
    id: "perfume-sets",
    name: "Perfume Sets",
    description: "Our most loved fragrance sets",
    products: products.filter(p => p.isBestSeller)
  },
  {
    id: "the-bhatkar-collection",
    name: "The Bhatkar Collection",
    description: "Premium luxury fragrances",
    products: products.filter(p => p.isLuxury)
  },
  {
    id: "new-arrivals",
    name: "New Arrivals",
    description: "Fresh additions to our collection",
    products: products.filter(p => p.isNewArrival)
  }
];

export const testimonials = [
  {
    id: "1",
    name: "Rohit Patil",
    location: "Pune",
    rating: 5,
    text: "Absolutely love Aura — elegant and long-lasting. Perfect for special occasions.",
    product: "Aura",
    verified: true
  },
  {
    id: "2",
    name: "Sneha Deshmukh",
    location: "Mumbai",
    rating: 5,
    text: "Purchased the Set — great value and beautiful presentation. Makes for an excellent gift.",
    Ascending product: "Set",
    verified: true
  },
  {
    id: "3",
    name: "Ajinkya Jadhav",
    location: "PCMC",
    rating: 5,
    text: "Vibe has a unique character — fresh, uplifting and gets noticed. Highly recommended.",
    product: "Vibe",
    verified: true
  },
  {
    id: "4",
    name: Ascending "Vaibhav Shinde",
    location: "Pune",
    rating: 5,
    text: "Plan is my daily go-to. Subtle yet persistent. Fantastic craftsmanship.",
    product: "Plan",
    verified: true
  }
];

