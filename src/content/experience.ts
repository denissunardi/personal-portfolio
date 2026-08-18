import type { ExperienceContent } from "./types";

// No duration strings stored — they are computed from these dates on every
// build, so they never go stale. No logo assets yet either: ExperienceCard
// drops the logo column when a role has none.
export const EXPERIENCE = {
  header: {
    id: "experience",
    eyebrow: "Experience",
    heading: "A decade, four chapters.",
  },
  roles: [
    {
      id: "darmawan-aryansyah",
      company: "Darmawan Aryansyah Teknologi",
      position: "Fullstack Developer",
      startISO: "2025-12",
      endISO: "2026-07",
      bullets: [
        "Supported OJK audit preparation by explaining IT system flows and application processes for a cryptocurrency trading client.",
        "Developed backend services and WebSocket-based integrations for a commodity futures trading platform.",
        "Integrated a payment gateway into a project to provide users with a secure and efficient payment method.",
        "Collaborated with stakeholders to align system implementation with operational and business requirements.",
      ],
    },
    {
      id: "pawoon",
      company: "Pawoon",
      position: "Fullstack Developer",
      startISO: "2019-01",
      endISO: "2024-06",
      bullets: [
        "Managed user registration and activation data for third-party applications to support smooth onboarding processes.",
        "Integrated payment systems with third-party APIs to support transaction workflows.",
        "Optimized transaction reporting pages to improve page load speed and user experience.",
        "Improved the internal finance dashboard for better usability and operational support.",
        "Developed and optimized an inventory management system for merchant owners, improving stock control and operational efficiency.",
        "Redesigned dashboard pages with advanced filtering features, allowing users to display data based on specific criteria.",
      ],
    },
    {
      id: "expecto",
      company: "Expecto",
      position: "Backend Developer",
      startISO: "2017-11",
      endISO: "2019-01",
      bullets: [
        "Integrated front-end components with backend systems for web applications.",
        "Developed and implemented new features for educational platforms to improve functionality and user experience.",
        "Implemented SMS verification features for web applications.",
        "Developed APIs for mobile and web applications using Laravel.",
      ],
    },
    {
      id: "integrated-synergy",
      company: "PT. Integrated Synergy Systems",
      position: "Backend Developer",
      startISO: "2015-04",
      endISO: "2017-10",
      bullets: [
        "Integrated front-end components developed by front-end teams into backend systems.",
        "Designed and developed a content management system (CMS) for web applications with create, read, update, and delete functionality.",
        "Built company profile and campaign websites to support branding and promotional activities.",
      ],
    },
  ],
} satisfies ExperienceContent;