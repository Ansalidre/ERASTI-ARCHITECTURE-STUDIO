import { useLanguage } from "@/hooks/useLanguage";
import houseMM from "@/assets/house-mm.png";
import ring from "@/assets/ring.png";

const AboutSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-32 lg:py-48 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-24">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-12 leading-tight">
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
                  private villas, multi-residential buildings and large-scale
                  developments.
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
              </>
            )}
          </div>
          <div className="mt-14">
            <p className="font-serif text-lg text-foreground font-light leading-loose">
              {lang === "en" ? (
                <>
                  Timeless architecture.<br />
                  Context-driven design.<br />
                  Built quality.
                </>
              ) : (
                <>
                  Zeitlose Architektur.<br />
                  Kontextbezogenes Design.<br />
                  Gebaut mit Qualität.
                </>
              )}
            </p>
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
