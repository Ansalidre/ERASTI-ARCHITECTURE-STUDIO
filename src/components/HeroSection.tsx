import { useLanguage } from "@/hooks/useLanguage";
import houseRC from "@/assets/house-rc.png";

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-background">
      <div className="absolute inset-0">
        <img
          src={houseRC}
          alt="House RC – Contemporary residential architecture by Erasti"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pb-20 lg:pb-28">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-tight mb-8">
          ERASTI GERMANY
        </h1>
        <p className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-primary-foreground/90 leading-relaxed max-w-2xl mb-2">
          International Architectural Excellence.
        </p>
        <p className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-primary-foreground/90 leading-relaxed max-w-2xl mb-12">
          German Project Execution.
        </p>
        <p className="text-sm tracking-widest text-primary-foreground/70 uppercase mb-10">
          Premium Residential Projects · Hamburg 2026
        </p>
        <a
          href="mailto:info@erasti-germany.de"
          className="inline-block border border-primary-foreground/80 text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-primary-foreground hover:text-primary transition-colors"
        >
          {lang === "en" ? "Request Introduction" : "Vorstellung anfragen"}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
