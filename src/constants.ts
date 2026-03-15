// ─── Family member configuration ────────────────────────────────────────────
// Add a new entry here for each family member. The first member is the default
// landing page; future members will get their own routes via the hamburger menu.

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "taskTogether";
};

export type Project = {
  title: string;
  description: string;
  href: string;
};

export type ResumeExperience = {
  title: string;
  org: string;
  orgUrl?: string;
  orgLogo?: string;
  period: string;
  bullets: string[];
};

export type ResumeEducation = {
  degree: string;
  school: string;
  year: string;
};

export type MemberConfig = {
  name: string;
  avatar?: string;
  tagline: string;
  email: string;
  href: string;
  socials: SocialLink[];
  projects: Project[];
  resume: {
    summary: string;
    experience: ResumeExperience[];
    education: ResumeEducation[];
    skills: string[];
  };
};

// ─── Thomas ─────────────────────────────────────────────────────────────────

const thomas: MemberConfig = {
  name: "Thomas Ziebarth",
  avatar: "/avatars/thomas.jpg",
  tagline: "Software Developer",
  email: "thomas@ziebarth.ca",
  href: "/",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Diburst",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/thomaszie",
      icon: "linkedin",
    },
    {
      label: "Task Together",
      href: "https://tasktogether.app",
      icon: "taskTogether",
    },
  ],
  projects: [
    {
      title: "Task Together",
      description:
        "A collaborative task management app for teams, built with Next.js and React Native.",
      href: "https://tasktogether.app",
    },
  ],
  resume: {
    summary:
      "Technical product leader with 8 years of hands-on engineering experience and 2 in product management. I build developer-facing platforms that turn complex data and AI capabilities into tools engineers actually use.",
    experience: [
      {
        title: "Senior Product Manager",
        org: "Zoox — Simulation Data Platform",
        orgUrl: "https://zoox.com",
        orgLogo: "/logos/zoox.png",
        period: "Oct 2024 — Jan 2026",
        bullets: [
          "Owned product vision, roadmap, planning and execution for the Simulation Data Platform, serving 200+ engineering, program and leadership users.",
          "Collaborated with Foundation Model, Autonomy and QA teams to translate ambiguous requirements into concrete simulation data pipelines, dataset lifecycle management tools, and performance metrics.",
          "Shipped a LLM-powered captioning and natural language querying system, scoping requirements across multiple teams and driving engineering execution from concept to production.",
        ],
      },
      {
        title: "Senior System Integration Engineer",
        org: "Zoox — Autonomous System Behavior Analysis",
        orgUrl: "https://zoox.com",
        orgLogo: "/logos/zoox.png",
        period: "Jul 2023 — Oct 2024",
        bullets: [
          "Architected a unified data platform combining logs, analytics, and simulations into a single reporting system (Python, PySpark, SQL).",
          "Designed automation to cluster large simulation datasets by sensor data, scenario attributes and metrics for tracking trends and flagging outliers.",
          "Led a cross-functional initiative to compute and track departmental KPIs, reducing computation time from hours to seconds.",
          "Deployed dashboards and visualization tools to monitor key autonomy performance signals and detect anomalies.",
        ],
      },
      {
        title: "Staff System Integration Engineer",
        org: "Tesla — Vehicle Software",
        orgUrl: "https://tesla.com",
        orgLogo: "/logos/tesla.png",
        period: "Oct 2019 — Jul 2023",
        bullets: [
          "Developed an end-to-end performance monitoring system for the infotainment stack: vehicle-side logging, fleet data aggregation, metric definition, visualization, reporting and regression detection (C++, Python, SQL, Spark, Splunk).",
          "Collaborated with data, firmware, and service teams to implement monitoring systems and define metrics.",
          "Led infotainment integration for two major vehicle launches (Palladium Model S/X and Highland Model 3/Y).",
        ],
      },
      {
        title: "Staff Product Engineer",
        org: "Tesla — Service Engineering",
        orgUrl: "https://tesla.com",
        orgLogo: "/logos/tesla.png",
        period: "Mar 2016 — Oct 2019",
        bullets: [
          "Scoped, designed and delivered a vehicle diagnostic suite (Python and JavaScript) used daily by 600+ internal customers.",
          "Analyzed large-scale vehicle logs and telemetry to identify systemic issues, predict failures, and prioritize software improvements.",
        ],
      },
    ],
    education: [
      {
        degree:
          "BS in Electrical Engineering with Distinction (top quintile), minor in Business",
        school: "University of Victoria, BC, Canada",
        year: "2015",
      },
    ],
    skills: [
      "Hands-on experience with Gen-AI products: Claude Code, Codex, etc.",
      "Data systems architecture, observability & telemetry intelligence",
      "Cross-functional: system integration, product launch, agile & scrum processes",
      "Product: vision, requirements discovery, roadmap, design reviews, team resource management",
    ],
  },
};

// ─── Victoria ───────────────────────────────────────────────────────────────

const victoria: MemberConfig = {
  name: "Victoria",
  tagline: "",
  email: "",
  href: "/victoria",
  socials: [],
  projects: [],
  resume: {
    summary: "",
    experience: [],
    education: [],
    skills: [],
  },
};

// ─── All members ────────────────────────────────────────────────────────────
// Export as an array so the hamburger menu and future routing can iterate.

export const MEMBERS: MemberConfig[] = [thomas, victoria];

// Default / current member (used by the landing page)
export const DEFAULT_MEMBER = thomas;

// ─── Apps ───────────────────────────────────────────────────────────────────

export type AppLink = {
  name: string;
  href: string;
};

export const APPS: AppLink[] = [
  { name: "Photos", href: "https://photos.ziebarth.ca" },
  { name: "Cookbook", href: "https://cookbook.ziebarth.ca" },
];
