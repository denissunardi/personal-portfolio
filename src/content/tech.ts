import type { StaticImageData } from "next/image";

import claudeLogo from "@/assets/images/tech/claude.svg";
import claudecodeLogo from "@/assets/images/tech/claudecode.svg";
import cursorLogo from "@/assets/images/tech/cursor.svg";
import expressLogo from "@/assets/images/tech/express.svg";
import figmaLogo from "@/assets/images/tech/figma.svg";
import gitLogo from "@/assets/images/tech/git.svg";
import javascriptLogo from "@/assets/images/tech/javascript.svg";
import mcpLogo from "@/assets/images/tech/mcp.svg";
import mongodbLogo from "@/assets/images/tech/mongodb.svg";
import nestjsLogo from "@/assets/images/tech/nestjs.svg";
import nextjsLogo from "@/assets/images/tech/nextjs.svg";
import nodejsLogo from "@/assets/images/tech/nodejs.svg";
import openaiLogo from "@/assets/images/tech/openai.svg";
import playwrightLogo from "@/assets/images/tech/playwright.svg";
import postgresqlLogo from "@/assets/images/tech/postgresql.svg";
import reactLogo from "@/assets/images/tech/react.svg";
import storybookLogo from "@/assets/images/tech/storybook.svg";
import tailwindcssLogo from "@/assets/images/tech/tailwindcss.svg";
import typescriptLogo from "@/assets/images/tech/typescript.svg";
import vercelLogo from "@/assets/images/tech/vercel.svg";

import type { TechContent } from "./types";

// Next.js types every "*.svg" import as `any`, and a project-level override
// does not stick (tried). This record is the one place that gets fixed.
const LOGOS: Readonly<Record<string, StaticImageData>> = {
  claude: claudeLogo,
  claudecode: claudecodeLogo,
  cursor: cursorLogo,
  express: expressLogo,
  figma: figmaLogo,
  git: gitLogo,
  javascript: javascriptLogo,
  mcp: mcpLogo,
  mongodb: mongodbLogo,
  nestjs: nestjsLogo,
  nextjs: nextjsLogo,
  nodejs: nodejsLogo,
  openai: openaiLogo,
  playwright: playwrightLogo,
  postgresql: postgresqlLogo,
  react: reactLogo,
  storybook: storybookLogo,
  tailwindcss: tailwindcssLogo,
  typescript: typescriptLogo,
  vercel: vercelLogo,
};

// Cypress was removed from this band on purpose — it still appears in work.ts
// as a fact about a past project. This band is only what I reach for now.
export const TECH = {
  header: {
    id: "stack",
    eyebrow: "Stack",
    heading: "The tools I reach for.",
    subhead:
      "A decade of picking things up and putting a few down. These are the ones I'd be happy to be judged on.",
  },
  groups: [
    {
      id: "ai",
      title: "AI & Agents",
      descriptor: "Building with models, not just around them.",
      items: [
        {
          name: "Claude API",
          href: "https://platform.claude.com/docs/en/api/overview",
          logo: LOGOS.claude,
        },
        {
          name: "Claude Code",
          href: "https://claude.com/product/claude-code",
          logo: LOGOS.claudecode,
        },
        {
          name: "Cursor",
          href: "https://cursor.com/",
          logo: LOGOS.cursor,
        },
        {
          name: "MCP",
          href: "https://modelcontextprotocol.io/",
          logo: LOGOS.mcp,
        },
        {
          name: "Vercel AI SDK",
          href: "https://ai-sdk.dev/",
          logo: LOGOS.vercel,
        },
        {
          name: "OpenAI API",
          href: "https://openai.com/api/",
          logo: LOGOS.openai,
        },
      ],
    },
    {
      id: "frontend",
      title: "Frontend",
      descriptor: "Where most of my time goes.",
      items: [
        {
          name: "JavaScript",
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          logo: LOGOS.javascript,
        },
        {
          name: "TypeScript",
          href: "https://www.typescriptlang.org/",
          logo: LOGOS.typescript,
        },
        { name: "React", href: "https://react.dev/", logo: LOGOS.react },
        { name: "Next.js", href: "https://nextjs.org/", logo: LOGOS.nextjs },
        {
          name: "Tailwind CSS",
          href: "https://tailwindcss.com/",
          logo: LOGOS.tailwindcss,
        },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      descriptor: "APIs, services, and the real-time bits.",
      items: [
        { name: "Node.js", href: "https://nodejs.org/en", logo: LOGOS.nodejs },
        {
          name: "Express",
          href: "https://expressjs.com/",
          logo: LOGOS.express,
        },
        { name: "NestJS", href: "https://nestjs.com/", logo: LOGOS.nestjs },
      ],
    },
    {
      id: "data",
      title: "Data",
      descriptor: "Relational when it should be, document when it shouldn't.",
      items: [
        {
          name: "PostgreSQL",
          href: "https://www.postgresql.org/",
          logo: LOGOS.postgresql,
        },
        {
          name: "MongoDB",
          href: "https://www.mongodb.com/",
          logo: LOGOS.mongodb,
        },
      ],
    },
    {
      id: "design-tooling",
      title: "Design & Tooling",
      descriptor: "Build it, document it, test it, ship it.",
      items: [
        { name: "Figma", href: "https://www.figma.com/", logo: LOGOS.figma },
        {
          name: "Storybook",
          href: "https://storybook.js.org/",
          logo: LOGOS.storybook,
        },
        {
          name: "Playwright",
          href: "https://playwright.dev/",
          logo: LOGOS.playwright,
        },
        { name: "Git", href: "https://git-scm.com/", logo: LOGOS.git },
      ],
    },
  ],
} as const satisfies TechContent;
