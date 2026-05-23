// Original abstract icons representing concepts — not branded logos.
// Each is a single-color line/shape glyph designed to live inside a badge.

export const TechIcon = {
  // Java — abstract coffee bean with steam wisps (concept of "Java" the drink)
  Java: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 11h11a3 3 0 0 1 0 6h-1" />
      <path d="M5 11v4a4 4 0 0 0 4 4h3a4 4 0 0 0 4-4" />
      <path d="M9 3c-1 1.2-1 2.3 0 3.5s1 2.3 0 3.5" />
      <path d="M13 3.5c-.8 1-.8 1.9 0 2.9s.8 1.9 0 2.9" />
    </svg>
  ),

  // Spring — abstract sprouting leaf (concept of "spring/growth")
  Spring: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20c0-7 4-12 16-13-1 9-5 14-12 14-3 0-4-1-4-1z" />
      <path d="M4 20c4-5 8-7 13-8" />
    </svg>
  ),

  // React — abstract overlapping ellipses suggesting orbits (original geometry)
  ReactJS: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1.6" fill={stroke} stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    </svg>
  ),

  // AWS — simple cloud outline
  AWS: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 17 Q4 13 7 13 Q6 8 11 8 Q10 4 15 6 Q16 3 19 6 Q22.5 7 22 12 Q22.5 15 20 17 L4 17 Z" />
    </svg>
  ),

  // AI — Claude-inspired rounded diamond mark
  AI: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="12" height="12" rx="3.5" transform="rotate(45 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill={stroke} stroke="none" />
    </svg>
  ),

  // Scrum — circular flow arrows (concept of iteration / sprint cycle)
  Scrum: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 12a8 8 0 0 1-13.5 5.8" />
      <path d="M4 12a8 8 0 0 1 13.5-5.8" />
      <path d="M17 3v4h4" />
      <path d="M7 21v-4H3" />
    </svg>
  ),

  // Git — branch graph
  Git: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="5" r="2" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="12" r="2" />
      <path d="M6 7v10" />
      <path d="M6 12h6a4 4 0 0 1 4-2" />
    </svg>
  ),

  // REST/API — HTTPS label
  API: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <text x="12" y="15" textAnchor="middle" fontSize="7" fontWeight="700"
        fontFamily="monospace" fill={stroke} stroke="none" letterSpacing="0.4">
        HTTPS
      </text>
    </svg>
  ),

  // SQL / DB — cylinder
  Database: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="7" ry="2.5" />
      <path d="M5 5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
      <path d="M5 11v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </svg>
  ),

  // Mongo / NoSQL — leaf-ish drop
  Mongo: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c3 4 5 8 5 12s-2 6-5 6-5-2-5-6 2-8 5-12z" />
      <path d="M12 22v-3" />
    </svg>
  ),

  // Generic award
  Award: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="6" />
      <path d="M8 14l-2 7 6-3 6 3-2-7" />
    </svg>
  ),

  // Book
  Book: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z" />
      <path d="M20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z" />
    </svg>
  ),

  // Cap (education)
  Cap: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9l10-4 10 4-10 4z" />
      <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" />
      <path d="M22 9v5" />
    </svg>
  ),

  // Arrow
  Arrow: ({ size = 16, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),

  // Pin
  Pin: ({ size = 16, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),

  // Mail
  Mail: ({ size = 16, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),

  // Phone
  Phone: ({ size = 16, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  ),

  // Globe
  Globe: ({ size = 16, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  ),

  // Hobbies / spark
  Spark: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" />
    </svg>
  ),

  // Mountain (travel/outdoors)
  Mountain: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 20l6-10 4 6 2-3 6 7z" />
      <circle cx="17" cy="6" r="1.5" />
    </svg>
  ),

  // Game controller
  Controller: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8h12a3 3 0 0 1 3 3v3a3 3 0 0 1-5 2l-1-1H9l-1 1a3 3 0 0 1-5-2v-3a3 3 0 0 1 3-3z" />
      <path d="M8 11v2M7 12h2" />
      <circle cx="15" cy="11.5" r=".8" fill={stroke} />
      <circle cx="17" cy="13" r=".8" fill={stroke} />
    </svg>
  ),

  // Headphones
  Headphones: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14a9 9 0 0 1 18 0" />
      <rect x="3" y="13" width="4" height="7" rx="1.5" />
      <rect x="17" y="13" width="4" height="7" rx="1.5" />
    </svg>
  ),

  // Plus / Sun (sunrise meditation)
  Sun: ({ size = 24, stroke = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M5.5 18.5l1.4-1.4M17.1 6.9l1.4-1.4" />
    </svg>
  ),
};
