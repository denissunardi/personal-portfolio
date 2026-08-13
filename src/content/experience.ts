import type { ExperienceContent } from "./types";

// No duration strings stored â€” they are computed from these dates on every
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
        "Built backend services and WebSocket-based integrations for a commodity futures trading platform where live market data has to stay in sync.",
        "Supported OJK audit prep by explaining IT system flows for a cryptocurrency trading client; built backend services and WebSocket integrations for a commodity futures trading platform; integrated a payment gateway; built data pages with advanced filtering.",
        "Integrated a secure payment method and aligned system implementation with business requirements for regulatory compliance.",
      ],
    },
    {
      id: "pawoon",
      company: "Pawoon",
      position: "Fullstack Developer",
      startISO: "2019-01",
      endISO: "2024-06",
      bullets: [
        "Developed and optimized an inventory management system for merchant owners, improving stock control and operational efficiency.",
        "Integrated third-party payment APIs for transaction processing.",
        "Optimized transaction reporting pages for improved performance.",
        "Redesigned dashboard pages with advanced filtering to enable users to view data by specific criteria.",
        "Managed user registration and activation data for third-party applications.",
      ],
    },
    {
      id: "expecto",
      company: "Expecto",
      position: "Backend Developer",
      startISO: "2017-11",
      endISO: "2019-01",
      bullets: [
        "Developed new features and implemented SMS verification for educational platforms.",
        "Integrated front-end work with back-end systems.",
        "Built Laravel APIs serving both mobile and web clients.",
      ],
    },
    {
      id: "integrated-synergy",
      company: "PT. Integrated Synergy Systems",
      position: "Backend Developer",
      startISO: "2015-04",
      endISO: "2017-10",
      bullets: [
        "Designed and built a content management system with full CRUD functionality.",
        "Delivered company-profile and campaign websites for branding purposes.",
        "Integrated front-end work into back-end systems.",
      ],
    },
  ],
} satisfies ExperienceContent;
