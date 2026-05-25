// ============================================================
// translations.js — Traducciones del portafolio / Portfolio translations
// ============================================================
// Para editar el español busca la sección "es:" más abajo.
// Para editar el inglés busca la sección "en:".
//
// Estructura: translations[idioma][sección][clave]
//   - "en" es el idioma predeterminado (fuente de verdad en data.js)
//   - "es" sobreescribe los textos en pantalla al cambiar de idioma
// ============================================================

export const translations = {

  // ============================================================
  // INGLÉS — English (default)
  // ============================================================
  en: {

    // ----------------------------------------------------------
    // Navegación lateral / Side navigation
    // ----------------------------------------------------------
    nav: {
      intro:      "Intro",
      experience: "Experience",
      learning:   "Learning",
      offHours:   "Off-hours",
    },

    // ----------------------------------------------------------
    // Barra superior / Top bar
    // ----------------------------------------------------------
    topbar: {
      themeLight:  "☀ Light",
      themeDark:   "☾ Dark",
      available:   "Available · Q2 2026",
      langButton:  "Español",   // texto del botón cuando el idioma activo es inglés
    },

    // ----------------------------------------------------------
    // Sección 01 — Intro
    // ----------------------------------------------------------
    intro: {
      eyebrow:    "Hello — currently leading APIs in Mexico City",
      timezone:   "Mexico City · GMT-6",
      stackLabel: "Tech stack",
    },

    // ----------------------------------------------------------
    // Sección 02 — Experiencia / Experience
    // ----------------------------------------------------------
    experience: {
      kicker:   "The work",
      title:    "Experience",
      sub:      "9 years building reliable Java & full-stack systems for banking and enterprise.",
      nowBadge: "NOW",
    },

    // ----------------------------------------------------------
    // Sección 03 — Aprendizaje / Learning
    // ----------------------------------------------------------
    learning: {
      kicker:    "Always empowering, always learning",
      title:     "Recent courses & education",
      sub:       "Continuous upskilling — most recent first.",
      courses:   "Latest courses",
      education: "Education",
      awards:    "Awards & certs",
      languages: "Languages",
      softSkills: "Soft skills",
    },

    // ----------------------------------------------------------
    // Sección 04 — Fuera de horas / Off-hours
    // ----------------------------------------------------------
    offHours: {
      kicker: "When the IDE is closed",
      title:  "Off-hours",
      sub:    "What I do when I'm not pushing to main.",
    },

    // ----------------------------------------------------------
    // Footer
    // ----------------------------------------------------------
    footer: {
      copy: "© 2026 · Powered by Claude Design",
    },

    // ----------------------------------------------------------
    // Contenido narrativo del resume (inglés — igual que data.js)
    // ----------------------------------------------------------
    resume: {
      about:
        "Full Stack Developer with 9+ years building scalable backend systems and full-stack solutions for enterprise environments. " +
        "Skilled in Java, Spring Boot, REST APIs and modern frontend frameworks. Adept at optimizing performance, improving development processes, " +
        "and delivering high-impact features. Familiar with AWS cloud services and currently strengthening skills in AI and machine learning " +
        "to integrate intelligent capabilities into software products.",

      // Notas de la barra de tecnologías (por clave de stack)
      stackNotes: {
        "Java":       "Java 8 → 21",
        "Spring Boot":"Spring Security · JWT",
        "React":      "Modern frontend",
        "AWS":        "Cloud Practitioner '23",
        "AI":         "AI Practitioner course",
        "Scrum":      "Agile metodology",
        "REST APIs":  "SOAP · Restful",
        "Databases":  "Oracle · PostgreSQL · Mongo",
      },

      // Resúmenes de experiencia — mismo orden que RESUME.experience en data.js
      experienceSummaries: [
        "Developing APIs with Spring Boot and Java 21 from team-provided designs. Securing access via Spring Security and JWT, applying best practices, testing tools and CI/CD.",
        "Developing APIs with Spring Boot and Java 21 from team-provided designs. Securing access via Spring Security and JWT, applying best practices, testing tools and CI/CD.",
        "Built, supported and improved critical systems for a banking entity, implementing full-stack solutions with Java 17, Spring Boot, React and CI/CD workflows.",
        "Designed, created and improved ticket and user-management systems for a bank — applying Java 8, Spring framework, Oracle DB, Git, a full testing suite and Jira-driven project management.",
        "Implemented and developed APIs decoupling a robust monolithic banking system — SOAP and Restful web services with Java EE 7, JUnit, SonarQube, JBoss EAP 5/7 — delivered under Scrum.",
        "Where it began — developed SOAP webservices with Java EE 7, JUnit tests, SVN, Informix DB on IBM WebSphere under Kanban. Frontend work with Angular 2.",
      ],

      // Pasatiempos — mismo orden que RESUME.hobbies en data.js
      hobbies: [
        { title: "Open-source tinkering", detail: "Side projects that turn into Friday-night refactors." },
        { title: "Trail hiking",          detail: "Weekends out of the city — Ajusco, Nevado de Toluca, Cumbres." },
        { title: "Reading tech & sci-fi", detail: "Currently on clean-architecture and Ted Chiang." },
        { title: "Strategy games",        detail: "Co-op campaigns and turn-based — same brain as debugging." },
        { title: "Music & podcasts",      detail: "Lo-fi while coding, podcasts on AI and software craft." },
        { title: "Early mornings",        detail: "Coffee, run, deep work — the most productive 90 minutes of the day." },
      ],

      // Habilidades blandas / Soft skills
      skills: ["Adaptability", "Communication", "Leadership", "Responsibility", "Self-taught"],

      // Idiomas hablados / Spoken languages
      languages: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "C1"     },
        { name: "Japanese",  level: "Begginer"}
      ],
    },
  },


  // ============================================================
  // ESPAÑOL — Spanish (secondary)
  // ============================================================
  es: {

    // ----------------------------------------------------------
    // Navegación lateral / Side navigation
    // ----------------------------------------------------------
    nav: {
      intro:      "Intro",
      experience: "Experiencia",
      learning:   "Aprendizaje",
      offHours:   "Pasatiempos",
    },

    // ----------------------------------------------------------
    // Barra superior / Top bar
    // ----------------------------------------------------------
    topbar: {
      themeLight:  "☀ Claro",
      themeDark:   "☾ Oscuro",
      available:   "Disponible · Q2 2026",
      langButton:  "English",   // texto del botón cuando el idioma activo es español
    },

    // ----------------------------------------------------------
    // Sección 01 — Intro
    // ----------------------------------------------------------
    intro: {
      eyebrow:    "Actualmente desarrollando APIs y mejores sistemas en la Ciudad de México",
      timezone:   "Ciudad de México · GMT-6",
      stackLabel: "Tecnologías",
    },

    // ----------------------------------------------------------
    // Sección 02 — Experiencia / Experience
    // ----------------------------------------------------------
    experience: {
      kicker:   "Trabajo",
      title:    "Experiencia",
      sub:      "9 años desarrollando sistemas Java confiables y soluciones full-stack para el rubro bancario y empresarial.",
      nowBadge: "ACTUAL",
    },

    // ----------------------------------------------------------
    // Sección 03 — Aprendizaje / Learning
    // ----------------------------------------------------------
    learning: {
      kicker:    "Siempre creciendo y aprendiendo",
      title:     "Cursos recientes y educación",
      sub:       "Actualización continua — el más reciente primero.",
      courses:   "Últimos cursos",
      education: "Educación",
      awards:    "Premios y certificaciones",
      languages: "Idiomas",
      softSkills: "Habilidades blandas",
    },

    // ----------------------------------------------------------
    // Sección 04 — Fuera de horas / Off-hours
    // ----------------------------------------------------------
    offHours: {
      kicker: "Cuando no estoy trabajando en algo",
      title:  "Fuera de mis horas laborales",
      sub:    "Lo que hago cuando no estoy haciendo push a main.",
    },

    // ----------------------------------------------------------
    // Footer
    // ----------------------------------------------------------
    footer: {
      copy: "© 2026 · Hecho con Claude Design",
    },

    // ----------------------------------------------------------
    // Contenido narrativo del resume (español)
    // ----------------------------------------------------------
    resume: {
      about:
        "Desarrollador Full Stack con más de 9 años construyendo sistemas backend escalables y soluciones full-stack para entornos empresariales. " +
        "Especializado en Java, Spring Boot, APIs REST y frameworks frontend modernos. Hábil en optimización de rendimiento, mejora de procesos de desarrollo " +
        "y entrega de funcionalidades de alto impacto. Familiarizado con servicios AWS y actualmente fortaleciendo habilidades en IA y aprendizaje automático " +
        "para integrar capacidades inteligentes en productos de software.",

      // Notas de la barra de tecnologías (por clave de stack)
      stackNotes: {
        "Java":       "Java 8 → 21",
        "Spring Boot":"Spring Security · JWT",
        "React":      "Frontend moderno",
        "AWS":        "Cloud Practitioner '23",
        "AI":         "Curso AI Practitioner",
        "Scrum":      "Metodologia ágil",
        "REST APIs":  "SOAP · RESTful",
        "Databases":  "Oracle · PostgreSQL · Mongo",
      },

      // Resúmenes de experiencia — mismo orden que RESUME.experience en data.js
      experienceSummaries: [
        "Desarrollo de APIs con Spring Boot y Java 21 a partir de diseños del equipo. Asegurando el acceso mediante Spring Security y JWT, aplicando buenas prácticas, herramientas de prueba y CI/CD.",
        "Desarrollo de APIs con Spring Boot y Java 21 a partir de diseños del equipo. Asegurando el acceso mediante Spring Security y JWT, aplicando buenas prácticas, herramientas de prueba y CI/CD.",
        "Construí, di sporte y mejoré sistemas críticos para una entidad bancaria, implementando soluciones full-stack con Java 17, Spring Boot, React y flujos de CI/CD.",
        "Diseñé, creé y mejoré sistemas de gestión de tickets y usuarios para un banco — aplicando Java 8, Spring framework, Oracle DB, Git, un conjunto completo de pruebas y gestión de proyectos con Jira.",
        "Implementé y desarrollé APIs desacoplando un robusto sistema bancario monolítico — servicios web SOAP y RESTful con Java EE 7, JUnit, SonarQube, JBoss EAP 5/7 — entregado bajo Scrum.",
        "Donde todo comenzó — desarrollé servicios web SOAP con Java EE 7, pruebas JUnit, SVN, Informix DB en IBM WebSphere bajo Kanban. Trabajo de frontend con Angular 2.",
      ],

      // Pasatiempos — mismo orden que RESUME.hobbies en data.js
      hobbies: [
        { title: "Proyectos open-source",    detail: "Proyectos personales que se convierten en refactorizaciones de viernes por la noche." },
        { title: "Senderismo",               detail: "Fines de semana fuera de la ciudad — Ajusco, Nevado de Toluca, Cumbres." },
        { title: "Lectura de tech y sci-fi", detail: "Actualmente leyendo la guerra de los mundos y El origen de Dan Brown" },
        { title: "Juegos de estrategia",     detail: "Campañas cooperativas y por turnos — el mismo cerebro que al depurar." },
        { title: "Música y podcasts",        detail: "Lo-fi mientras programo, podcasts de IA y desarrollo de software." },
        { title: "Mañanas temprano",         detail: "Café, correr, trabajo profundo — los 90 minutos más productivos del día." },
      ],

      // Habilidades blandas / Soft skills
      skills: ["Adaptabilidad", "Comunicación", "Liderazgo", "Responsabilidad", "Autodidacta"],

      // Idiomas hablados / Spoken languages
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés",  level: "C1"     },
        { name: "Japonés",  level: "Novato"}
      ],
    },
  },
};
