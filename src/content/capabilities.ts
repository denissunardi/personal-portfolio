import type { CapabilitiesContent } from "./types";

// `icon` is a string, not a component — importing icon components here would
// pull the whole content layer into the browser bundle. The name-to-icon map
// lives in src/components/primitives/icon.tsx.
export const CAPABILITIES = {
  header: {
    id: "services",
    eyebrow: "Services",
    heading: "What you can hand me.",
  },
  items: [
    {
      id: "backend",
      icon: "layers",
      title: "Backend and APIs that hold up",
      body: "REST APIs, business logic, and the services underneath a real product — built with Laravel, CodeIgniter or Golang on MySQL and PostgreSQL. Clean data models, sensible endpoints, and code the next developer can actually read. Includes the real-time bits: WebSocket feeds for live dashboards and trading screens that have to stay in sync.",
    },
    {
      id: "integrations",
      icon: "bot",
      title: "Payments and integrations that just work",
      body: "Payment gateways wired in end to end, third-party APIs connected without the flaky edge cases, and transaction flows that reconcile. I've integrated payment methods for trading and merchant platforms, plus SMS verification, onboarding and finance dashboards — the plumbing users never see but always feel when it breaks.",
    },
    {
      id: "fullstack",
      icon: "pen-tool",
      title: "The whole build, front to back",
      body: "Need one person to own it end to end? I take a feature from database to the screen — HTML, CSS and jQuery on top, PHP or Golang underneath — and optimize the slow pages so they load fast and the dashboards stay usable. Fewer handoffs, one person accountable for the thing actually working.",
    },
  ],
} satisfies CapabilitiesContent;
