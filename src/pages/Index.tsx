import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import OEMSection from "@/components/OEMSection";
import SellSection from "@/components/SellSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ImageDivider from "@/components/ImageDivider";
import heroBg from "@/assets/hero-bg.png";
import dividerHeartbeat from "@/assets/divider-heartbeat.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="fixed inset-0 bg-black/60 z-0" />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ServicesSection />
        <ImageDivider src={dividerHeartbeat} alt="Medical technology" />
        <OEMSection />
        <SellSection />
        <WhyChooseUsSection />
        <ServiceAreaSection />
        <AboutSection />
        <ImageDivider src={dividerHeartbeat} alt="Medical technology" />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
