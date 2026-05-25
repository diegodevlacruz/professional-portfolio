import { TechIcon } from "./Icons.jsx";
import { SectionHeader } from "./Chrome.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export function OffHours({ hobbies }) {
  const { t } = useLanguage();

  // Los íconos vienen de data.js; título y detalle se traducen
  const translatedHobbies = hobbies.map((h, i) => ({
    ...h,
    title:  t.resume.hobbies?.[i]?.title  ?? h.title,
    detail: t.resume.hobbies?.[i]?.detail ?? h.detail,
  }));

  return (
    <section id="off-hours" data-screen-label="04 Off-hours" className="sec sec-hobbies">
      <SectionHeader
        idx="04"
        kicker={t.offHours.kicker}
        title={t.offHours.title}
        sub={t.offHours.sub}
      />

      <ul className="hobby-grid">
        {translatedHobbies.map((h, i) => {
          const Icon = TechIcon[h.icon] || TechIcon.Spark;
          return (
            <li key={i} className="hobby-card">
              <div className="hobby-icon"><Icon size={26} /></div>
              <h4 className="hobby-title">{h.title}</h4>
              <p className="hobby-detail">{h.detail}</p>
              <div className="hobby-idx mono">0{i + 1}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
