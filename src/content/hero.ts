import headshot from "@/assets/images/sagar-headshot.jpg";

import type { HeroContent } from "./types";

export const HERO = {
  id: "hero",
  eyebrow: "Full Stack AI Engineer · 10+ years shipping",
  headlineLead: "Hi, I'm Sagar",
  // Separate from headlineLead so it can sit in its own span — animated by
  // CSS, hidden from screen readers.
  wave: "👋",
  headlineClaim: "I build web products end to end.",
  subhead:
    "Full Stack AI Engineer. React on top, Node underneath, and a decade of caring about both. One person with AI in the loop, moving at the speed of a team. Ahmedabad, India — working with teams worldwide.",
  primary: { label: "Start a project", href: "#contact" },
  secondary: { label: "See my work", href: "#work" },
  location: "Ahmedabad, India · IST (UTC+5:30)",
  // Empty alt on purpose: the photo sits right beside the name in the <h1>,
  // and describing it would make a screen reader say the name twice.
  portrait: { src: headshot, alt: "" },
  // Hard limit: 32 characters per visible line — the typewriter clip is
  // text-length × 1ch and never wraps (white-space: pre), so a longer line
  // clips at the card edge on a 375px phone. One code point per terminal
  // cell: no emoji or wide glyphs here.
  terminal: {
    title: "sagar@dev",
    lines: [
      { kind: "prompt", text: "find a dev who ships end to end" },
      { kind: "result", text: "Found 1 match: Sagar Shah" },
      { kind: "branch", text: "10+ yrs · React · Node · TS" },
      { kind: "branch", text: "Figma to pixel-perfect code" },
      { kind: "branch", text: "mokoboko.xyz — bookings" },
      { kind: "branch", text: "fiskil.com — open banking" },
      { kind: "status", text: "Available for new projects" },
      { kind: "prompt", text: "hire him", cursor: true },
    ],
  },
} as const satisfies HeroContent;
