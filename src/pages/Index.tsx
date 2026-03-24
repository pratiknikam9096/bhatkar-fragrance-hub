import { Layout } from "@/components/layout/Layout";
import { ParallaxHeroSection } from "@/components/home/ParallaxHeroSection";
import { ProductHighlights } from "@/components/home/ProductHighlights";
import { DashboardStats } from "@/components/home/DashboardStats";
import { CollectionsSection } from "@/components/home/CollectionsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/images/backgound.png')",
      }}
    >
      <Layout>
        <ParallaxHeroSection />
        <ProductHighlights />
        <DashboardStats />
        <CollectionsSection />
        <WhyUsSection />
        <TestimonialsSection />
      </Layout>
    </div>
  );
};

export default Index;
