import { useLanguage } from "@/hooks/useLanguage";
import filippo from "@/assets/filippo.png";

const ModelSection = () => {
  const { lang } = useLanguage();

  const points =
    lang === "en"
      ? [
          "Clear communication in German and English",
          "Alignment with local authorities",
          "Structured project processes",
          "Professional coordination between all stakeholders",
          "Reliable execution standards",
        ]
      : [
          "Klare Kommunikation auf Deutsch und Englisch",
          "Abstimmung mit lokalen Behörden",
          "Strukturierte Projektabläufe",
          "Professionelle Koordination aller Beteiligten",
          "Zuverlässige Ausführungsstandards",
        ];

  return (
    <section className="py-32 lg:py-48 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-10 leading-tight">
              {lang === "en"
                ? "The Germany Model"
                : "Das Modell in Deutschland"}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              {lang === "en"
                ? "Erasti Germany combines international architectural authorship with structured German project coordination."
                : "Erasti Germany verbindet internationale Architekturqualität mit strukturierter deutscher Projektkoordination."}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-14">
              {lang === "en"
                ? "This structure ensures international design quality while maintaining full compliance with German regulations and project standards."
                : "Diese Struktur gewährleistet internationale Entwurfsqualität bei vollständiger Einhaltung deutscher Vorschriften und Projektstandards."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14">
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  {lang === "en" ? "Architecture & Design" : "Architektur & Entwurf"}
                </p>
                <p className="font-serif text-xl text-foreground">Filippo Erasti</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  {lang === "en"
                    ? "Germany Market & Project Leadership"
                    : "Markt- & Projektleitung Deutschland"}
                </p>
                <p className="font-serif text-xl text-foreground">André Weihrauch</p>
              </div>
            </div>

            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
              {lang === "en"
                ? "This structure ensures:"
                : "Diese Struktur gewährleistet:"}
            </p>
            <ul className="space-y-3">
              {points.map((point) => (
                <li
                  key={point}
                  className="text-muted-foreground text-base flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-64 lg:w-72">
              <div className="aspect-[3/4] overflow-hidden mb-4">
                <img
                  src={filippo}
                  alt="Filippo Erasti – Architect"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="font-serif text-sm text-foreground">Filippo Erasti</p>
              <p className="text-xs text-muted-foreground">Architect, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
