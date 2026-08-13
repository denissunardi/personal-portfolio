import type { FaqContent } from "./types";

// No pricing on purpose: a rate on the page prices the work before the
// conversation that would justify it.
export const FAQ = {
  header: {
    id: "faq",
    eyebrow: "FAQ",
    heading: "Questions people ask before working with me.",
  },
  // Every <details> shares this name, so the browser closes one answer when
  // another opens — an accordion with zero JavaScript.
  groupName: "faq",
  items: [
    {
      id: "engagement-types",
      question: "Are you open to full-time roles or freelance?",
      answer:
        "Both. I'm open to joining a team full-time and to freelance or contract projects — a fixed scope, a monthly arrangement, or an extra pair of hands on your backend. Tell me what you need and we'll find the right shape.",
    },
    {
      id: "stack",
      question: "What do you build with?",
      answer:
        "PHP with Laravel and CodeIgniter, and Golang with Gin when a service needs to be fast. MySQL and PostgreSQL for data, WebSocket for real-time features, and HTML, CSS and jQuery on the front end. If your stack is close to that, I'll be productive quickly.",
    },
    {
      id: "backend",
      question: "What kind of work is your sweet spot?",
      answer:
        "Backend and integrations. APIs, business logic, payment gateways, third-party API connections, real-time WebSocket services, and the dashboards and reporting behind a product. I've done this across trading platforms, POS and inventory, finance dashboards and CMS.",
    },
    {
      id: "payments",
      question: "Can you handle payments and integrations?",
      answer:
        "Yes. I've integrated payment gateways and third-party payment APIs for trading and merchant platforms, plus SMS verification and onboarding flows. I build them to reconcile and to handle the edge cases, not just the happy path.",
    },
    {
      id: "frontend",
      question: "Do you only do backend, or fullstack?",
      answer:
        "Fullstack, with the backend as my strength. I can take a feature from the database to the screen with HTML, CSS and jQuery, and I've optimized front-end pages for speed and usability. If you need heavy modern-frontend work, I'll tell you honestly where my line is.",
    },
    {
      id: "timezone",
      question: "Where are you based, and will our hours overlap?",
      answer:
        "Jakarta, Indonesia — WIB (UTC+7). That's a full working day with the rest of Asia and Australia, and mornings that reach into Europe. Email and chat day to day, calls when a call is faster.",
    },
    {
      id: "getting-started",
      question: "Are you available, and how do we start?",
      answer:
        "Yes — I'm open to new roles and freelance work right now. Email Deniaz.94@gmail.com with what you're building and when you need it; if it's a fit, I'll come back with next steps, and if it isn't, I'll say so.",
    },
  ],
} satisfies FaqContent;
