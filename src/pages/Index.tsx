import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { USPSection } from '@/components/USPSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AboutSection } from '@/components/AboutSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { CTABand } from '@/components/CTABand';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Subtle noise overlay for premium feel */}
      <div className="noise-overlay" />
      
      <Header />
      <main>
        <HeroSection />
        <USPSection />
        <ServicesSection />
        <AboutSection />
        <ReviewsSection />
        <CTABand />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
