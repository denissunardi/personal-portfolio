import type { CapabilitiesContent } from "./types";

// `icon` is a string, not a component — importing icon components here would
// pull the whole content layer into the browser bundle. The name-to-icon map
// lives in src/components/primitives/icon.tsx.
export const CAPABILITIES = {
  header: {
    id: "services",
    eyebrow: "Services",
    heading: "What you can hand me.",
    subhead:
      "AI features, the product around them, or just the half you are missing. All three work.",
  },
  items: [
    {
      id: "ai",
      icon: "bot",
      title: "AI features that survive users",
      body: "Chat that streams, agents that call your tools, retrieval that answers from your data instead of guessing, and long jobs that keep running after the tab closes. Built on the Claude and OpenAI APIs, with evaluations and spend limits in place before launch, not after the first bill.",
    },
    {
      id: "product",
      icon: "layers",
      title: "The whole product, front to back",
      body: "Typed React and Next.js on top; Node with Express or NestJS and PostgreSQL underneath, plus vector search when your data has to be found by meaning rather than by keyword. Fast on a mid-range phone, usable from the keyboard, accessible by default rather than by audit. One person owns both ends, so nothing falls through the gap between them.",
    },
    {
      id: "design",
      icon: "pen-tool",
      title: "Design to code, designer optional",
      body: "Send a Figma file and it comes back as pixel-perfect, responsive, accessible code. No Figma file and no designer? I use AI to put a clickable wireframe in front of you within a day, then build the real interface from your existing components. Nothing waits on a hire.",
    },
  ],
} as const satisfies CapabilitiesContent;
