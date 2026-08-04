import fiskilShot from "@/assets/images/work/fiskil.png";
import lanternShot from "@/assets/images/work/lantern.png";
import mokobokoShot from "@/assets/images/work/mokoboko.png";
import pepehousingShot from "@/assets/images/work/pepehousing.png";
import wingieShot from "@/assets/images/work/wingie.png";

import type { WorkContent } from "./types";

// Screenshot alt text never repeats the project name — the card's heading sits
// right below the image, and a screen reader would say the name twice.
export const WORK = {
  header: {
    id: "work",
    eyebrow: "Work",
    heading: "Products I helped build.",
    subhead:
      "All five are live, in production, with real users. Click through and poke around.",
  },
  // MokoBoko is first and featured: true, so the band renders it full-width
  // without sorting. The rest are newest first.
  projects: [
    {
      id: "mokoboko",
      name: "MokoBoko",
      domain: "mokoboko.xyz",
      href: "https://mokoboko.xyz",
      featured: true,
      description:
        "Class booking platform for a boutique fitness studio in Lisbon. Browse the live schedule, book classes, buy packs or subscriptions, and pay online.",
      role: "Full stack — the whole platform: booking app, admin console, a shared component library, and an Express API with Stripe payments and automated emails.",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "React Query",
        "Express",
        "Sequelize",
        "PostgreSQL",
        "Supabase",
        "Stripe",
      ],
      screenshot: {
        src: mokobokoShot,
        alt: "Class booking page with a week-strip date picker and timed class cards showing instructor, price and a Book class button.",
      },
      linkLabel: "Visit mokoboko.xyz",
    },
    {
      id: "fiskil",
      name: "Fiskil",
      domain: "fiskil.com",
      href: "https://www.fiskil.com",
      featured: false,
      description:
        "Consumer data sharing infrastructure for banks and energy providers. One API platform for secure, consumer-permissioned data access at scale.",
      role: "Full stack — the customer console and auth flows, the Go services on Google Cloud behind them, and a docs platform with an AI assistant and MCP server.",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "React Query",
        "Vite",
        "Go",
        "PostgreSQL",
        "Firebase",
        "Google Cloud",
        "MCP",
        "Jest",
        "Cypress",
      ],
      screenshot: {
        src: fiskilShot,
        alt: "Marketing hero headlined 'Enable Secure, Scalable Consumer Data Sharing' above a strip of partner logos.",
      },
      linkLabel: "Visit fiskil.com",
    },
    {
      id: "lantern",
      name: "Lantern",
      domain: "withlantern.com",
      href: "https://withlantern.com",
      featured: false,
      description:
        "An AI marketing platform. It builds a model of your target customers, then specialized agents research, personalize, and launch campaigns across channels.",
      role: "Full stack — product UI and the services behind it, from the React Flow workflow builder to Express and Fastify APIs and the Temporal jobs powering the AI agents.",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React Flow",
        "Express",
        "Fastify",
        "Temporal",
        "Vercel AI SDK",
        "OpenAI",
        "PostgreSQL",
        "Supabase",
        "Redis",
      ],
      screenshot: {
        src: lanternShot,
        alt: "Dark starfield hero reading 'Agentic Based Marketing' above a product panel pairing an AI chat with a company research table.",
      },
      linkLabel: "Visit withlantern.com",
    },
    {
      id: "wingie",
      name: "Wingie",
      domain: "wingie.com",
      href: "https://www.wingie.com",
      featured: false,
      description:
        "A flight comparison and booking marketplace. Search fares across airlines, compare what's actually worth flying, and check out in a few clicks.",
      role: "Full stack — a React and TypeScript interface on an Express and PostgreSQL API, with Redux holding the search and booking state together.",
      stack: [
        "React",
        "TypeScript",
        "Redux",
        "Styled Components",
        "React Bootstrap",
        "Express",
        "PostgreSQL",
        "Firebase",
      ],
      screenshot: {
        src: wingieShot,
        alt: "Flight search homepage with a 'Find Cheap Flights' form over a beach photo, above a grid of popular route cards with fares.",
      },
      linkLabel: "Visit wingie.com",
    },
    {
      id: "pepehousing",
      name: "Pepehousing",
      domain: "pepehousing.com",
      href: "https://pepehousing.com",
      featured: false,
      description:
        "Rent a flat or a room in Poland. Browse verified listings, message the landlord directly, and pay online — securely, start to finish.",
      role: "Front end — a Next.js application with a typed data layer on Redux Toolkit, and every component documented in Storybook.",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "Storybook",
      ],
      screenshot: {
        src: pepehousingShot,
        alt: "Rental homepage hero headlined 'Accommodation for students and expats', with a search-by-city bar and stat cards for tenants and properties.",
      },
      linkLabel: "Visit pepehousing.com",
    },
  ],
} as const satisfies WorkContent;
