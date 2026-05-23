import { TechIcon } from "./Icons.jsx";
import { SectionHeader } from "./Chrome.jsx";

export function OffHours({ hobbies }) {
  return (
    <section id="off-hours" data-screen-label="04 Off-hours" className="sec sec-hobbies">
      <SectionHeader
        idx="04"
        kicker="When the IDE is closed"
        title="Off-hours"
        sub="What I do when I'm not pushing to main."
      />

      <ul className="hobby-grid">
        {hobbies.map((h, i) => {
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
