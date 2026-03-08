import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { lang, toggle } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-8 px-6 lg:px-12">
        <span
          className="font-sans text-xs tracking-[0.3em] uppercase"
          style={{ color: 'hsl(var(--hero-text))' }}
        >
          Erasti Architecture Studio
        </span>
        <button
          onClick={toggle}
          className="text-xs tracking-[0.3em] uppercase transition-opacity duration-300 hover:opacity-60"
          style={{ color: 'hsl(var(--hero-text) / 0.8)' }}
        >
          {lang === "en" ? "DE" : "EN"}
        </button>
      </div>
    </header>
  );
};

export default Header;
