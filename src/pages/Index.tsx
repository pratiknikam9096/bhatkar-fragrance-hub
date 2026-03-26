import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductHighlights } from "@/components/home/ProductHighlights";
import { DashboardStats } from "@/components/home/DashboardStats";
import { CollectionsSection } from "@/components/home/CollectionsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CollectionsSection />
      <WhyUsSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
