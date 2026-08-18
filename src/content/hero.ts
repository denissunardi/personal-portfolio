import headshot from "@/assets/images/sagar-headshot.jpg";

import type { HeroContent } from "./types";

export const HERO = {
  id: "hero",
  eyebrow: "Fullstack Developer · 10+ yrs",
  headlineLead: "Hi, I'm Denis",
  // Separate from headlineLead so it can sit in its own span — animated by
  // CSS, hidden from screen readers.
  wave: "👋",
  headlineClaim: "Fullstack developer, ready for any project you bring.",
  subhead:
    "I build products end to end, with real strength in the backend. A decade of shipping APIs, payment integrations, real-time trading systems and platforms that businesses run on every day. Based in Jakarta, working with teams anywhere.",
  primary: { label: "Get in touch", href: "#contact" },
  secondary: { label: "See my work", href: "#work" },
  location: "Jakarta, Indonesia · WIB (UTC+7)",
  // Empty alt on purpose: the photo sits right beside the name in the <h1>,
  // and describing it would make a screen reader say the name twice.
  portrait: { src: headshot, alt: "" },
  // Hard limit: 32 characters per visible line — the typewriter clip is
  // text-length — 1ch and never wraps (white-space: pre), so a longer line
  // clips at the card edge on a 375px phone. One code point per terminal
  // cell: no emoji or wide glyphs here.
  terminal: {
    title: "denis@dev",
    lines: [
      { kind: "prompt", text: "find a fullstack dev who ships" },
      { kind: "result", text: "Found 1 match: Denis Sunardi" },
      { kind: "branch", text: "10+ yrs · fullstack · backend strength" },
      { kind: "branch", text: "APIs · payments · trading platforms" },
      { kind: "branch", text: "apps the business runs on" },
      { kind: "branch", text: "end to end, ready for any project" },
      { kind: "status", text: "Open to roles & freelance" },
      { kind: "prompt", text: "hire him", cursor: true },
    ],
  },
} satisfies HeroContent;
