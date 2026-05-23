import { TechIcon } from "./Icons.jsx";
import { SectionHeader } from "./Chrome.jsx";

export function Learning({ resume }) {
  return (
    <section id="learning" data-screen-label="03 Learning" className="sec sec-learn">
      <SectionHeader
        idx="03"
        kicker="Always shipping, always learning"
        title="Recent courses & education"
        sub="Continuous upskilling — most recent first."
      />

      <div className="learn-grid">
        <div className="learn-col">
          <h4 className="col-head mono">
            <TechIcon.Book size={16} /> Latest courses
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

        <div className="learn-col">
          <h4 className="col-head mono">
            <TechIcon.Cap size={16} /> Education
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
            <TechIcon.Award size={16} /> Awards & certs
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

      <LanguagesAndSkills resume={resume} />
    </section>
  );
}

function LanguagesAndSkills({ resume }) {
  return (
    <div className="lang-skills">
      <div className="lang-block">
        <div className="ls-label mono">Languages</div>
        <ul className="lang-list">
          {resume.languages.map((l) => (
            <li key={l.name} className="lang-row">
              <div className="lang-row-head">
                <span className="lang-name">{l.name}</span>
                <span className="lang-level mono">{l.level}</span>
              </div>
              <div className="lang-bar">
                <div className="lang-bar-fill" style={{ width: `${l.value * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="skill-block">
        <div className="ls-label mono">Soft skills</div>
        <ul className="skill-list">
          {resume.skills.map((s) => (
            <li key={s} className="skill-pill">{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
