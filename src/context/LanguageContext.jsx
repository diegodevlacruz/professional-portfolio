import { createContext, useContext, useState } from "react";
import { translations } from "../translations.js";

// ─── Context ──────────────────────────────────────────────────────────────────
const LanguageContext = createContext(null);

// ─── Provider ─────────────────────────────────────────────────────────────────
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("lang") || "en";   // "en" es el predeterminado
  });

  const t = translations[lang];

  const toggleLang = () => {
    const next = lang === "en" ? "es" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  return ctx;
}
