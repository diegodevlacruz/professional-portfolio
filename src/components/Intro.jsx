import { TechIcon } from "./Icons.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export function Intro({ resume, showDots = true }) {
  const { t } = useLanguage();

  return (
    <section id="intro" data-screen-label="01 Intro" className="sec sec-intro">
      {showDots && <DotField />}

      <div className="intro-grid">
        <div className="intro-text">
          <p className="eyebrow mono">
            <span className="eyebrow-idx">01</span>
            <span className="eyebrow-divider" />
            <span>{t.intro.eyebrow}</span>
          </p>

          <h1 className="display">
            <span className="display-line">
              {resume.name.split(" ").slice(0, 2).join(" ")}
            </span>
            <span className="display-line accent-line">
              {resume.name.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          <div className="title-row">
            <h2 className="role-title">{resume.title}</h2>
            <span className="years-pill mono">{resume.yearsExp}+ yrs</span>
          </div>

          {/* Descripción "about" traducida */}
          <p className="lede">{t.resume.about}</p>

          <div className="contact-row mono">
            <ContactBit icon="Pin"   text={resume.location} />
            <ContactBit icon="Mail"  text={resume.email} />
            <ContactBit icon="Phone" text={resume.phone} />
            <ContactBit icon="Globe" text={resume.site} />
          </div>
        </div>

        <div className="intro-photo">
          <PhotoSlot />
          <div className="photo-tag mono">
            <span className="photo-tag-dot" />
            <span>{t.intro.timezone}</span>
          </div>
        </div>
      </div>

      <TechMarquee stack={resume.stack} stackNotes={t.resume.stackNotes} label={t.intro.stackLabel} />
    </section>
  );
}

function ContactBit({ icon, text }) {
  const Icon = TechIcon[icon];
  return (
    <span className="contact-bit">
      <Icon size={14} />
      <span>{text}</span>
    </span>
  );
}

function PhotoSlot() {
  return (
    <div className="photo-frame">
      <image-slot
        id="diego-portrait"
        shape="rounded"
        radius="6px"
        src="/portrait.jpg"
        placeholder="Drop your portrait here"
        style={{ width: "100%", height: "auto", aspectRatio: "1 / 1", display: "block" }}
      />
      <div className="photo-corner photo-corner-tl" />
      <div className="photo-corner photo-corner-tr" />
      <div className="photo-corner photo-corner-bl" />
      <div className="photo-corner photo-corner-br" />
    </div>
  );
}

function DotField() {
  return (
    <svg className="dot-field" aria-hidden="true">
      <defs>
        <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

function TechMarquee({ stack, stackNotes, label }) {
  return (
    <div className="tech-marquee">
      <div className="tech-marquee-label mono">{label}</div>
      <ul className="tech-marquee-list">
        {stack.map((s) => {
          const Icon = TechIcon[s.icon];
          // Usa la nota traducida si existe, si no cae al original de data.js
          const note = stackNotes?.[s.key] ?? s.note;
          return (
            <li key={s.key} className="tech-chip">
              <span className="tech-chip-icon"><Icon size={20} /></span>
              <span className="tech-chip-body">
                <span className="tech-chip-name">{s.key}</span>
                <span className="tech-chip-note mono">{note}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
