import { TechIcon } from "./Icons.jsx";

export function SectionHeader({ idx, kicker, title, sub }) {
  return (
    <header className="sec-header">
      <div className="sec-header-meta mono">
        <span className="sec-idx">{idx}</span>
        <span className="sec-kicker">{kicker}</span>
      </div>
      <h2 className="sec-title">{title}</h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </header>
  );
}

export function TopBar({ theme, onToggleTheme }) {
  return (
    <header className="topbar">
      <div className="topbar-mark">
        <span className="mono">D.dlC</span>
      </div>
      <div className="topbar-right">
        <button
          className="theme-toggle mono"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀ Light" : "☾ Dark"}
        </button>
        <div className="topbar-meta mono">
          <span className="dot" /> Available · Q2 2026
        </div>
      </div>
    </header>
  );
}

export function SideNav({ sections, active, onJump }) {
  return (
    <nav className="sidenav" aria-label="Section navigation">
      <ul>
        {sections.map((s) => (
          <li key={s.id} className={active === s.id ? "is-active" : ""}>
            <button onClick={() => onJump(s.id)}>
              <span className="mono nav-idx">{s.idx}</span>
              <span className="nav-label">{s.label}</span>
              <span className="nav-rule" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer({ email, site }) {
  return (
    <footer className="foot">
      <div className="foot-mono mono">
        <span>© 2026 · Powered by Claude Design</span>
        <span>·</span>
        <span>{email}</span>
        <span>·</span>
        <span>{site}</span>
      </div>
    </footer>
  );
}
