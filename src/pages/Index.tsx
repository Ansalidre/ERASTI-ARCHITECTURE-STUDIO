import { LanguageProvider } from "@/hooks/useLanguage";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ModelSection from "@/components/ModelSection";
import HamburgSection from "@/components/HamburgSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ModelSection />
        <HamburgSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

export default Index;
