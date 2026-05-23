// Resume data — sourced from Diego's CV
export const RESUME = {
  name: "Diego Armando de la Cruz Rojas",
  title: "Fullstack Developer",
  tagline: "Building scalable backend systems & full-stack solutions for enterprise.",
  location: "Mexico City, MX",
  email: "diego.dlacruz@gmail.com",
  phone: "+52 311 263 7332",
  site: "diegodevlacruz.com",
  yearsExp: 9,
  about:
    "Full Stack Developer with 9+ years building scalable backend systems and full-stack solutions for enterprise environments. Skilled in Java, Spring Boot, REST APIs and modern frontend frameworks. Adept at optimizing performance, improving development processes," + 
    "and delivering high-impact features. Familiar with AWS cloud services and currently strengthening skills in AI and machine learning to integrate intelligent capabilities into software products.",

  stack: [
    { key: "Java",        icon: "Java",     note: "Java 8 → 21" },
    { key: "Spring Boot", icon: "Spring",   note: "Spring Security · JWT" },
    { key: "React",       icon: "ReactJS",  note: "Modern frontend" },
    { key: "AWS",         icon: "AWS",      note: "Cloud Practitioner '23" },
    { key: "AI",          icon: "AI",       note: "AI Practitioner course" },
    { key: "Scrum",       icon: "Scrum",    note: "Agile delivery" },
    { key: "REST APIs",   icon: "API",      note: "SOAP · Restful" },
    { key: "Databases",   icon: "Database", note: "Oracle · PostgreSQL · Mongo" },
  ],

  experience: [
        {
      role: "Full Stack Developer",
      company: "Reece Group",
      period: "Mar 2026 — Present",
      current: true,
      summary:
        "Developing APIs with Spring Boot and Java 21 from team-provided designs. Securing access via Spring Security and JWT, applying best practices, testing tools and CI/CD.",
      tags: ["Java 21", "Spring Boot", "React", "Typescript", "Cursor + AI", "JWT", "Kubernetes"],
    },
    {
      role: "Technical Lead",
      company: "TATA Consultancy Services",
      period: "Oct 2025 — Mar2026",
      summary:
        "Developing APIs with Spring Boot and Java 21 from team-provided designs. Securing access via Spring Security and JWT, applying best practices, testing tools and CI/CD.",
      tags: ["Java 21", "Spring Boot", "Spring Security", "JWT", "CI/CD"],
    },
    {
      role: "Full Stack Developer",
      company: "HCL Technologies",
      period: "Jan 2022 — Sep 2025",
      summary:
        "Built, supported and improved critical systems for a banking entity, implementing full-stack solutions with Java 17, Spring Boot, React and CI/CD workflows.",
      tags: ["Java 17", "Spring Boot", "React", "CI/CD", "Banking"],
    },
    {
      role: "Sr Backend Developer",
      company: "Invex Bank",
      period: "Nov 2019 — Jan 2022",
      summary:
        "Designed, created and improved ticket and user-management systems for a bank — applying Java 8, Spring framework, Oracle DB, Git, a full testing suite and Jira-driven project management.",
      tags: ["Java 8", "Spring", "Oracle", "Jira", "Git"],
    },
    {
      role: "Sr Java Developer",
      company: "Sygno IT Services",
      period: "Nov 2018 — Nov 2019",
      summary:
        "Implemented and developed APIs decoupling a robust monolithic banking system — SOAP and Restful web services with Java EE 7, JUnit, SonarQube, JBoss EAP 5/7 — delivered under Scrum.",
      tags: ["Java EE 7", "SOAP", "REST", "SonarQube", "JBoss", "Scrum"],
    },
    {
      role: "Software Developer",
      company: "Praxis",
      period: "Nov 2016 — Nov 2018",
      summary:
        "Where it began — developed SOAP webservices with Java EE 7, JUnit tests, SVN, Informix DB on IBM WebSphere under Kanban. Frontend work with Angular 2.",
      tags: ["Java EE 7", "SOAP", "Informix", "WebSphere", "Angular 2", "Kanban"],
    },
  ],

  courses: [
    { name: "Unlocking Data Insights with PostgreSQL", provider: "CodeSignal", date: "Feb 2026" },
    { name: "Spring Boot REST API with Java & Gradle", provider: "CodeSignal", date: "Dec 2025" },
    { name: "AWS Certified AI Practitioner", provider: "Udemy", date: "Nov 2025" },
    { name: "Learn MongoDB", provider: "Udemy", date: "Oct 2025" },
    { name: "Front-End Engineering with React", provider: "CodeSignal", date: "Oct 2025" },
  ],

  education: [
    { title: "Bachelor in Computer Systems", org: "Universidad Autónoma de Nayarit", date: "2007 — 2012" },
    { title: "Java 7 EE & Java 8 SE — Trained", org: "Certificatic", date: "2017" },
  ],

  awards: [
    { title: "AWS Cloud Practitioner Certification", org: "Amazon Web Services", date: "2023" },
    { title: "IELTS GT — Overall Band 6.0", org: "IELTS", date: "2025" },
  ],

  skills: ["Adaptability", "Communication", "Leadership", "Responsibility", "Self-taught"],

  languages: [
    { name: "Spanish", level: "Native", value: 1 },
    { name: "English", level: "C1",     value: 0.85 },
  ],

  hobbies: [
    { title: "Open-source tinkering", icon: "Git",         detail: "Side projects that turn into Friday-night refactors." },
    { title: "Trail hiking",          icon: "Mountain",    detail: "Weekends out of the city — Ajusco, Nevado de Toluca, Cumbres." },
    { title: "Reading tech & sci-fi", icon: "Book",        detail: "Currently on clean-architecture and Ted Chiang." },
    { title: "Strategy games",        icon: "Controller",  detail: "Co-op campaigns and turn-based — same brain as debugging." },
    { title: "Music & podcasts",      icon: "Headphones",  detail: "Lo-fi while coding, podcasts on AI and software craft." },
    { title: "Early mornings",        icon: "Sun",         detail: "Coffee, run, deep work — the most productive 90 minutes of the day." },
  ],
};

export const SECTIONS = [
  { id: "intro",      label: "Intro",      idx: "01" },
  { id: "experience", label: "Experience", idx: "02" },
  { id: "learning",   label: "Learning",   idx: "03" },
  { id: "off-hours",  label: "Off-hours",  idx: "04" },
];
