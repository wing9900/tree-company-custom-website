import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import FAQSection from "@/components/sections/FAQSection";
import ChatWidgetSection from "@/components/sections/ChatWidgetSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <GalleryPreview />
      <ServiceAreasSection />
      <FAQSection />
      <ChatWidgetSection />
    </Layout>
  );
};

export default Index;
