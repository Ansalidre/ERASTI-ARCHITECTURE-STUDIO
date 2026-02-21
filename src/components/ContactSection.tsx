import { useLanguage } from "@/hooks/useLanguage";

const ContactSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-28 lg:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-lg">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-10 leading-tight">
            {lang === "en" ? "Germany Representation" : "Vertretung Deutschland"}
          </h2>
          <p className="font-serif text-xl text-foreground mb-1">
            André Weihrauch
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            {lang === "en"
              ? "Germany Market & Project Lead"
              : "Markt- & Projektleitung Deutschland"}
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
