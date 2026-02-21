import { useLanguage } from "@/hooks/useLanguage";
import andre from "@/assets/andre.jpg";

const ContactSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-32 lg:py-48 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-lg">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-14 leading-tight">
            {lang === "en" ? "Germany Representation" : "Vertretung Deutschland"}
          </h2>

          <div className="w-48 lg:w-56 mb-8">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={andre}
                alt="André Weihrauch – Germany Market & Project Lead"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <p className="font-serif text-xl text-foreground mb-1">
            André Weihrauch
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            {lang === "en"
              ? "Germany Market & Project Lead"
              : "Markt- & Projektleitung Deutschland"}
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-md">
            {lang === "en"
              ? "Responsible for German market integration, client interface and structured project coordination."
              : "Verantwortlich für die deutsche Marktintegration, Kundenschnittstelle und strukturierte Projektkoordination."}
          </p>
          <div className="space-y-2">
            <a
              href="mailto:info@erasti-germany.de"
              className="block text-foreground text-base hover:text-muted-foreground transition-colors"
            >
              info@erasti-germany.de
            </a>
            <a
              href="tel:+491629209108"
              className="block text-foreground text-base hover:text-muted-foreground transition-colors"
            >
              +49 162 9209108
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
