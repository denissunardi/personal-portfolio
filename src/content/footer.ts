import type { FooterContent } from "./types";

export const FOOTER = {
  landmarkLabel: "Site footer",
  brand: {
    wordmark: "denissunardi.dev",
    tagline: "Fullstack Developer. Backend-focused, integration-ready.",
    location: "Jakarta, Indonesia · WIB (UTC+7)",
  },
  columns: [
    {
      id: "sections",
      heading: "Sections",
      // This column holds the only links to #services and #stack anywhere on
      // the site — remove a row and that section becomes unreachable
      // (check-anchors fails).
      links: [
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "Stack", href: "#stack" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      id: "connect",
      heading: "Connect",
      // The label "LinkedIn" is matched in site-footer.tsx's BRAND_GLYPHS, so
      // it renders as an icon rather than a text row.
      links: [
        { label: "Email", href: "mailto:Deniaz.94@gmail.com" },
        { label: "Phone", href: "tel:+6281413313057" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/denis-sunardi/" },
      ],
    },
    {
      id: "resources",
      heading: "Resources",
      links: [
        {
          label: "Download CV",
          href: "/files/denis-full-stack-cv.pdf",
        },
        { label: "llms.txt", href: "/llms.txt" },
      ],
    },
  ],
  copyright: {
    symbol: "©",
    owner: "Denis Sunardi Samsico",
    separator: "·",
    // Renders as "© {year} Denis Sunardi Samsico · Designed and coded in
    // Jakarta, Indonesia." The year comes from src/lib/now.ts, never stored
    // here.
    segments: ["Designed and coded in Jakarta, Indonesia."],
  },
} satisfies FooterContent;
