import { useState } from "react";
import { SectionHeader } from "./Chrome.jsx";

export function Experience({ jobs }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="experience" data-screen-label="02 Experience" className="sec sec-exp">
      <SectionHeader
        idx="02"
        kicker="The work"
        title="Experience"
        sub="Nine years building reliable Java & full-stack systems for banking and enterprise."
      />

      <ol className="timeline">
        {jobs.map((job, i) => (
          <li key={i} className={`tl-item ${openIdx === i ? "is-open" : ""}`}>
            <button
              className="tl-card"
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            >
              <div className="tl-rail">
                <span className={`tl-node ${job.current ? "tl-node-current" : ""}`} />
                {i < jobs.length - 1 && <span className="tl-line" />}
              </div>

              <div className="tl-head">
                <div className="tl-period mono">{job.period}</div>
                <h3 className="tl-role">{job.role}</h3>
                <div className="tl-co">
                  <span className="tl-co-name">{job.company}</span>
                  {job.current && <span className="tl-now mono">NOW</span>}
                </div>
              </div>

              <div className="tl-body">
                <p className="tl-summary">{job.summary}</p>
                <ul className="tl-tags">
                  {job.tags.map((tag) => (
                    <li key={tag} className="tl-tag mono">{tag}</li>
                  ))}
                </ul>
              </div>

              <span className="tl-expand mono" aria-hidden="true">
                {openIdx === i ? "−" : "+"}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
