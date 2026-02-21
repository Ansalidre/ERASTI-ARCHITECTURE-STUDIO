import { useLanguage } from "@/hooks/useLanguage";
import houseH from "@/assets/house-h.png";

const HamburgSection = () => {
  const { lang } = useLanguage();

  const locations = ["Blankenese", "Nienstedten", "Eppendorf", "Winterhude"];

  return (
    <section className="py-32 lg:py-48 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-10 leading-tight">
              {lang === "en"
                ? "Market Entry: Hamburg 2026"
                : "Markteintritt: Hamburg 2026"}
            </h2>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
              {lang === "en" ? "Current Focus:" : "Aktueller Fokus:"}
            </p>
            <p className="font-serif text-lg text-foreground mb-8">
              {lang === "en"
                ? "Premium Residential"
                : "Hochwertige Wohnprojekte"}
            </p>
            <p className="text-muted-foreground text-base mb-12">
              {locations.join(" · ")}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed max-w-lg">
              {lang === "en"
                ? "Selected partnerships with brokers, developers and private clients are currently being established."
                : "Der Aufbau ausgewählter Partnerschaften mit Maklern, Projektentwicklern und privaten Bauherren erfolgt derzeit."}
            </p>
          </div>
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={houseH}
              alt="House H – Residential project in Germany"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HamburgSection;
