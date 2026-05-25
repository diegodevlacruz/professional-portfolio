import { useEffect, useState } from "react";
import { RESUME } from "./data.js";
import { LanguageProvider, useLanguage } from "./context/LanguageContext.jsx";
import { TopBar, SideNav, Footer } from "./components/Chrome.jsx";
import { Intro } from "./components/Intro.jsx";
import { Experience } from "./components/Experience.jsx";
import { Learning } from "./components/Learning.jsx";
import { OffHours } from "./components/OffHours.jsx";

// IDs de las secciones — nunca cambian, son anclas del DOM
const SECTION_IDS = ["intro", "experience", "learning", "off-hours"];

function AppContent() {
  const { t, toggleLang } = useLanguage();

  // El tema persiste entre recargas
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "dark";
  });
  const [active, setActive] = useState("intro");

  // Secciones con etiquetas traducidas
  const sections = [
    { id: "intro",      label: t.nav.intro,      idx: "01" },
    { id: "experience", label: t.nav.experience,  idx: "02" },
    { id: "learning",   label: t.nav.learning,    idx: "03" },
    { id: "off-hours",  label: t.nav.offHours,    idx: "04" },
  ];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Detecta qué sección está visible para resaltar en la nav lateral
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 24, behavior: "smooth" });
  };

  return (
    <>
      <SideNav sections={sections} active={active} onJump={scrollTo} />
      <TopBar
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        onToggleLang={toggleLang}
        t={t}
      />
      <main className="stage">
        <Intro resume={RESUME} />
        <Experience jobs={RESUME.experience} />
        <Learning resume={RESUME} />
        <OffHours hobbies={RESUME.hobbies} />
        <Footer email={RESUME.email} site={RESUME.site} />
      </main>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
