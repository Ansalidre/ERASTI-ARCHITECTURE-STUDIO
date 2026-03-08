import { useLanguage } from "@/hooks/useLanguage";
import houseRC from "@/assets/house-rc.png";

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col bg-background">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={houseRC}
          alt="House RC – Contemporary residential architecture by Erasti"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.28)' }} />
      </div>

      {/* Hero content – vertically centered, left aligned */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-[6.5rem] font-light leading-[0.95] tracking-tight mb-10"
                style={{ color: 'hsl(var(--hero-text))' }}>
              ERASTI
              <br />
              <span className="text-5xl md:text-6xl lg:text-[5rem]">ARCHITECTURE STUDIO</span>
            </h1>

            <div className="space-y-1 mb-10">
              <p className="font-serif text-xl md:text-2xl font-light"
                 style={{ color: 'hsl(var(--hero-text-secondary))' }}>
                International Architectural Excellence.
              </p>
              <p className="font-serif text-xl md:text-2xl font-light"
                 style={{ color: 'hsl(var(--hero-text-secondary))' }}>
                German Market Representation.
              </p>
            </div>

            <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-14"
               style={{ color: 'hsl(var(--hero-text-secondary) / 0.7)' }}>
              Hamburg 2026 — Premium Residential
            </p>

            <a
              href="mailto:info@erasti-germany.de"
              className="inline-block border text-sm tracking-[0.2em] uppercase transition-colors duration-300"
              style={{
                color: 'hsl(var(--hero-text))',
                borderColor: 'hsl(var(--hero-text) / 0.8)',
                padding: '14px 32px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--hero-text))';
                e.currentTarget.style.color = 'hsl(var(--hero-overlay))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'hsl(var(--hero-text))';
              }}
            >
              {lang === "en" ? "Request Introduction" : "Vorstellung anfragen"}
            </a>

            <div className="mt-10">
              <a
                href="https://filippoerasti.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wide hover:underline transition-colors duration-300"
                style={{ color: '#D0D0D0' }}
              >
                {lang === "en"
                  ? "Explore the full international portfolio → filippoerasti.com"
                  : "Das internationale Portfolio entdecken → filippoerasti.com"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
