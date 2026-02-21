const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif text-sm text-foreground tracking-wider">
          ERASTI GERMANY
        </span>
        <span className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Erasti Architecture
        </span>
      </div>
    </footer>
  );
};

export default Footer;
