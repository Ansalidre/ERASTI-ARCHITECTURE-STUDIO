import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "de";

const LanguageContext = createContext<{
  lang: Language;
  toggle: () => void;
}>({ lang: "en", toggle: () => {} });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");
  const toggle = () => setLang((l) => (l === "en" ? "de" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
