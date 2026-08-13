import type { SiteContent } from "./types";

export const SITE = {
  wordmark: "denissunardi.dev",
  name: "Denis Sunardi Samsico",
  // Rendered verbatim into the OG image and JSON-LD. Keep it short or the OG
  // line wraps.
  jobTitle: "Fullstack Developer",
  url: "https://denissunardi.dev",
  title:
    "Denis Sunardi Samsico — Fullstack Developer (Laravel, Golang & APIs) in Jakarta",
  titleTemplate: "%s | Denis Sunardi Samsico",
  description:
    "Backend-focused fullstack developer in Jakarta. Nearly a decade building web apps, REST APIs, real-time WebSocket services, payment integrations, trading platforms and CMS with Laravel, CodeIgniter and Golang. Open to roles and freelance projects.",
  keywords: [
    "Denis Sunardi Samsico",
    "Fullstack Developer",
    "Backend Developer",
    "Laravel Developer",
    "Golang Developer",
    "PHP Developer Jakarta",
    "API Developer",
    "REST API Developer",
    "CodeIgniter Developer",
    "MySQL Developer",
    "PostgreSQL Developer",
    "Payment Gateway Integration",
    "Web Developer Jakarta",
    "Software Engineer Indonesia",
  ],
  ogTitle: "Denis Sunardi Samsico — I build the backend that makes products work.",
  ogDescription:
    "Backend-focused fullstack developer in Jakarta. Nearly a decade building APIs, real-time services, payment integrations and trading platforms with Laravel, CodeIgniter and Golang. Open to roles and freelance projects.",
  ogImageAlt: "Denis Sunardi Samsico, fullstack developer — denissunardi.dev",
  twitterTitle: "Denis Sunardi Samsico — I build the backend that makes products work.",
  twitterDescription:
    "Backend-focused fullstack developer in Jakarta. Laravel, CodeIgniter & Golang. APIs, payments and real-time systems. Open to roles and freelance projects.",
  twitterHandle: "@denissunardi",
  locale: "en_US",
  themeColor: "white",
  locationLabel: "Jakarta, Indonesia · WIB (UTC+7)",
  locality: "Jakarta",
  region: "DKI Jakarta",
  countryCode: "ID",
  timeZone: "Asia/Jakarta",
  email: "Deniaz.94@gmail.com",
  emailHref: "mailto:Deniaz.94@gmail.com",
  phoneLabel: "+62 814 1331 3057",
  // Written by hand, not derived from phoneLabel — a string replace only swaps
  // the first match and once left a space in the number.
  phoneHref: "tel:+6281413313057",
  cv: {
    label: "Download CV",
    href: "/files/denis-full-stack-cv.pdf",
  },
  // One record read by both hero and footer, so they can never disagree. If
  // this flips to false: label becomes "Booked until <Month>" and the green
  // dot is not rendered at all. The wording is also hand-written in places
  // this record does not drive — update them too: hero.ts terminal status
  // line, faq.ts "getting-started" answer, about.ts closing, and the
  // description/ogDescription/twitterDescription strings above.
  availability: { available: true, label: "Open to roles & freelance" },
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/denis-sunardi/",
      icon: "linkedin",
    },
  ],
  repoUrl: "https://github.com/denissunardi/denissunardi.dev",
  figmaTemplateUrl:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
  skipLinkLabel: "Skip to main content",
  mainLandmarkLabel: "Main content",
  notFound: {
    title: "Page not found",
    heading: "That page doesn't exist.",
    body: "The whole site lives on a single page, so there is not much to get lost in. The link below takes you back to it.",
    link: { label: "Back to the homepage", href: "/" },
  },
  errorPage: {
    title: "Something went wrong",
    heading: "Something went wrong.",
    body: "An unexpected error stopped this page from rendering. Trying again usually fixes it. If it keeps happening, email Deniaz.94@gmail.com and tell me what you were doing.",
    retryLabel: "Try again",
    link: { label: "Back to the homepage", href: "/" },
    digestLabel: "Error reference",
  },
} satisfies SiteContent;
