import { Layout } from "@/components/layout/Layout";
import { ImageCarousel } from "@/components/home/ImageCarousel";
import { ScrollingText } from "@/components/home/ScrollingText";
import { ThreeCollectionsSection } from "@/components/home/ThreeCollectionsSection";
import { ProductHighlights } from "@/components/home/ProductHighlights";
import { DashboardStats } from "@/components/home/DashboardStats";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <ImageCarousel />
      <ScrollingText />
      <ThreeCollectionsSection />
      <ProductHighlights />
      <WhyUsSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
