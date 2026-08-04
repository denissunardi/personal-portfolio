import type { FooterContent } from "./types";

export const FOOTER = {
  landmarkLabel: "Site footer",
  brand: {
    wordmark: "sagarshah.dev",
    tagline: "Full Stack AI Engineer. React on top, Node underneath.",
    location: "Ahmedabad, India · IST (UTC+5:30)",
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
        { label: "About", href: "#about" },
        { label: "Stack", href: "#stack" },
        { label: "Experience", href: "#experience" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      id: "connect",
      heading: "Connect",
      // No LinkedIn on purpose — no known profile URL exists, and guessing one
      // is out of bounds.
      links: [
        { label: "Email", href: "mailto:reachsagarshah@gmail.com" },
        { label: "Phone", href: "tel:+918980500565" },
        { label: "GitHub", href: "https://github.com/shahsagarm" },
        { label: "X", href: "https://x.com/shahsagarm" },
      ],
    },
    {
      id: "resources",
      heading: "Resources",
      links: [
        {
          label: "Download CV",
          href: "/files/sagar-shah-full-stack-ai-engineer.pdf",
        },
        {
          label: "Source code",
          href: "https://github.com/shahsagarm/sagarshah.dev",
        },
        { label: "llms.txt", href: "/llms.txt" },
        {
          label: "Figma template (v1)",
          href: "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
        },
      ],
    },
  ],
  copyright: {
    symbol: "©",
    owner: "Sagar Shah",
    separator: "·",
    // Renders as "© {year} Sagar Shah · Designed and coded in Ahmedabad,
    // India." The year comes from src/lib/now.ts, never stored here.
    segments: [
      "Designed and ",
      { text: "coded", href: "https://github.com/shahsagarm/sagarshah.dev" },
      " in Ahmedabad, India.",
    ],
  },
} as const satisfies FooterContent;
