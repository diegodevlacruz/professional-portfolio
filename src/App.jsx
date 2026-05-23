import { useEffect, useState } from "react";
import { RESUME, SECTIONS } from "./data.js";
import { TopBar, SideNav, Footer } from "./components/Chrome.jsx";
import { Intro } from "./components/Intro.jsx";
import { Experience } from "./components/Experience.jsx";
import { Learning } from "./components/Learning.jsx";
import { OffHours } from "./components/OffHours.jsx";

export default function App() {
  // Theme persists across reloads
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "dark";
  });
  const [active, setActive] = useState("intro");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Track which section is in view for the side-nav
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
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
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
      <SideNav sections={SECTIONS} active={active} onJump={scrollTo} />
      <TopBar
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
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
