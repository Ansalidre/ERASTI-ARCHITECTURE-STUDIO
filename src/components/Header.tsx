import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { lang, toggle } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-6 px-6 lg:px-12">
        <span className="font-serif text-xl tracking-wider font-semibold text-foreground">
          ERASTI GERMANY
        </span>
        <button
          onClick={toggle}
          className="text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors uppercase"
        >
          {lang === "en" ? "DE" : "EN"}
        </button>
      </div>
    </header>
  );
};

export default Header;
