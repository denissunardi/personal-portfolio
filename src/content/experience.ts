import type { StaticImageData } from "next/image";

import dotnpixelLogo from "@/assets/images/companies/dotnpixel.svg";
import greenapexLogo from "@/assets/images/companies/greenapex.svg";
import upworkLogo from "@/assets/images/companies/upwork.svg";

import type { ExperienceContent } from "./types";

// Same "*.svg" typing fix as tech.ts.
const LOGOS: Readonly<Record<string, StaticImageData>> = {
  dotnpixel: dotnpixelLogo,
  greenapex: greenapexLogo,
  upwork: upworkLogo,
};

// No duration strings stored — they are computed from these dates on every
// build, so they never go stale.
export const EXPERIENCE = {
  header: {
    id: "experience",
    eyebrow: "Experience",
    heading: "A decade, three chapters.",
    subhead:
      "Agency developer, then team lead, then independent. Here's the honest summary — the full version is in the CV.",
  },
  roles: [
    {
      id: "upwork",
      company: "Upwork",
      position: "Independent Freelancer",
      logo: LOGOS.upwork,
      startISO: "2021-11",
      endISO: "present",
      bullets: [
        "Ship production front ends and APIs for clients including MokoBoko, Fiskil, Lantern, Shosho and Crowe MacKay LLP.",
        "Own features end to end — typed React and Next.js interfaces, the Node and Go services behind them, and the shared component libraries that keep them consistent.",
        "Build the AI layer alongside the product — tool-calling agents and streaming chat for Lantern, an AI docs assistant and MCP server for Fiskil — on the Claude and OpenAI APIs.",
        "Turn Figma files into pixel-perfect, accessible interfaces, and build the interface anyway when there is no designer.",
        "Working stack: React, Next.js, TypeScript, Tailwind CSS, React Query, Node.js, Express, NestJS, Go, PostgreSQL, Firebase, Playwright.",
      ],
    },
    {
      id: "greenapex",
      company: "Greenapex",
      position: "Team Lead",
      logo: LOGOS.greenapex,
      startISO: "2017-07",
      endISO: "2021-10",
      bullets: [
        "Led delivery teams across enterprise client projects.",
        "Designed front-end and back-end architecture from scratch.",
        "Ran sprint planning, estimation and task distribution.",
        "Took internal product ideas from requirements gathering through to launch.",
      ],
    },
    {
      id: "dotnpixel",
      company: "Dotnpixel",
      position: "Full Stack Developer",
      logo: LOGOS.dotnpixel,
      startISO: "2015-12",
      endISO: "2017-05",
      bullets: [
        "First full-stack role: built and maintained client web apps — React on the front end, Laravel behind it.",
        "Where the habits started — read the ticket, ship the thing, own the bug.",
      ],
    },
  ],
} as const satisfies ExperienceContent;
