import { useLanguage } from "@/hooks/useLanguage";
import houseMM from "@/assets/house-mm.png";
import ring from "@/assets/ring.png";

const AboutSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-28 lg:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-10 leading-tight">
            {lang === "en"
              ? "International Architectural Excellence"
              : "Internationale Architekturkompetenz"}
          </h2>
          <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
            {lang === "en" ? (
              <>
                <p>
                  Erasti Architecture represents a contemporary design language
                  defined by clarity, proportion and material precision.
                </p>
                <p>
                  Projects span across Europe and the Middle East, including
                  residential villas, multi-residential buildings and large-scale
                  developments.
                </p>
                <p className="text-foreground font-light font-serif text-lg leading-loose">
                  Timeless architecture.
                  <br />
                  Context-driven design.
                  <br />
                  Built quality.
                </p>
              </>
            ) : (
              <>
                <p>
                  Erasti Architecture steht für eine zeitgenössische
                  Architektursprache mit klaren Proportionen, präziser
                  Materialität und nachhaltiger Formensprache.
                </p>
                <p>
                  Projekte entstehen in Europa und im Nahen Osten – von
                  hochwertigen Wohnhäusern bis zu großvolumigen Entwicklungen.
                </p>
                <p className="text-foreground font-light font-serif text-lg leading-loose">
                  Zeitlose Architektur.
                  <br />
                  Kontextbezogenes Design.
                  <br />
                  Gebaut mit Qualität.
                </p>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={houseMM}
              alt="House MM – Contemporary villa by Erasti Architecture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={ring}
              alt="Ring – Multi-residential building by Erasti Architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
