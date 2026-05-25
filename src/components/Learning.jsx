import { TechIcon } from "./Icons.jsx";
import { SectionHeader } from "./Chrome.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export function Learning({ resume }) {
  const { t } = useLanguage();

  // Idiomas hablados: usa los de translations (incluye nombre/nivel traducido)
  const languages = t.resume.languages;
  // Habilidades blandas: usa las de translations
  const skills = t.resume.skills;

  return (
    <section id="learning" data-screen-label="03 Learning" className="sec sec-learn">
      <SectionHeader
        idx="03"
        kicker={t.learning.kicker}
        title={t.learning.title}
        sub={t.learning.sub}
      />

      <div className="learn-grid">
        {/* Columna izquierda — Cursos */}
        <div className="learn-col">
          <h4 className="col-head mono">
            <TechIcon.Book size={16} /> {t.learning.courses}
          </h4>
          <ul className="course-list">
            {resume.courses.map((c, i) => (
              <li key={i} className="course-row">
                <span className="course-date mono">{c.date}</span>
                <span className="course-body">
                  <span className="course-name">{c.name}</span>
                  <span className="course-prov mono">{c.provider}</span>
                </span>
                <span className="course-arrow"><TechIcon.Arrow size={14} /></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna derecha — Educación y Certificaciones */}
        <div className="learn-col">
          <h4 className="col-head mono">
            <TechIcon.Cap size={16} /> {t.learning.education}
          </h4>
          <ul className="edu-list">
            {resume.education.map((e, i) => (
              <li key={i} className="edu-row">
                <div className="edu-date mono">{e.date}</div>
                <div className="edu-title">{e.title}</div>
                <div className="edu-org mono">{e.org}</div>
              </li>
            ))}
          </ul>

          <h4 className="col-head mono col-head-2">
            <TechIcon.Award size={16} /> {t.learning.awards}
          </h4>
          <ul className="edu-list">
            {resume.awards.map((a, i) => (
              <li key={i} className="edu-row">
                <div className="edu-date mono">{a.date}</div>
                <div className="edu-title">{a.title}</div>
                <div className="edu-org mono">{a.org}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <LanguagesAndSkills languages={languages} skills={skills} tLabels={t.learning} />
    </section>
  );
}

function LanguagesAndSkills({ languages, skills, tLabels }) {
  // Mantiene los valores numéricos de data.js para las barras de progreso
  const langValues = { Spanish: 1, Español: 1, English: 0.85, Inglés: 0.85, Japanese: 0.10, Japonés: 0.10 };

  return (
    <div className="lang-skills">
      <div className="lang-block">
        <div className="ls-label mono">{tLabels.languages}</div>
        <ul className="lang-list">
          {languages.map((l) => (
            <li key={l.name} className="lang-row">
              <div className="lang-row-head">
                <span className="lang-name">{l.name}</span>
                <span className="lang-level mono">{l.level}</span>
              </div>
              <div className="lang-bar">
                <div
                  className="lang-bar-fill"
                  style={{ width: `${(langValues[l.name] ?? 0.8) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="skill-block">
        <div className="ls-label mono">{tLabels.softSkills}</div>
        <ul className="skill-list">
          {skills.map((s) => (
            <li key={s} className="skill-pill">{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
