import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ObjectiveSection from '@/components/ObjectiveSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ObjectiveSection />
      <FeaturesSection />
      <AboutSection />
      <FAQSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}