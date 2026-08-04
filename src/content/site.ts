import type { SiteContent } from "./types";

export const SITE = {
  wordmark: "sagarshah.dev",
  name: "Sagar Shah",
  // Rendered verbatim into the OG image and JSON-LD. Keep it short or the OG
  // line wraps.
  jobTitle: "Full Stack AI Engineer",
  url: "https://sagarshah.dev",
  title:
    "Sagar Shah — Full Stack AI Engineer (React & Node) in Ahmedabad, India",
  titleTemplate: "%s | Sagar Shah",
  description:
    "Freelance full stack AI engineer in Ahmedabad, India. A decade of fast, accessible React, Next.js and Node products, now with AI agents on top. Available for new projects.",
  keywords: [
    "Sagar Shah",
    "Full Stack AI Engineer",
    "AI Engineer",
    "LLM Application Developer",
    "Full Stack Developer",
    "Freelance Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Freelance Developer India",
    "Web Developer Ahmedabad",
  ],
  ogTitle: "Sagar Shah — I build web products end to end.",
  ogDescription:
    "Full stack AI engineer (React, Node & AI agents) in Ahmedabad, India. A decade of shipping production web apps for founders and product teams. Currently available for freelance work.",
  ogImageAlt: "Sagar Shah, full stack AI engineer — sagarshah.dev",
  twitterTitle: "Sagar Shah — I build web products end to end.",
  twitterDescription:
    "Full stack AI engineer (React, Node & AI agents), Ahmedabad. A decade of shipping production web apps. Open for freelance work.",
  twitterHandle: "@shahsagarm",
  locale: "en_US",
  themeColor: "white",
  locationLabel: "Ahmedabad, India · IST (UTC+5:30)",
  locality: "Ahmedabad",
  region: "Gujarat",
  countryCode: "IN",
  timeZone: "Asia/Kolkata",
  email: "reachsagarshah@gmail.com",
  emailHref: "mailto:reachsagarshah@gmail.com",
  phoneLabel: "+91 8980500565",
  // Written by hand, not derived from phoneLabel — a string replace only swaps
  // the first match and once left a space in the number.
  phoneHref: "tel:+918980500565",
  cv: {
    label: "Download CV",
    href: "/files/sagar-shah-full-stack-ai-engineer.pdf",
  },
  // One record read by both hero and footer, so they can never disagree. If
  // this flips to false: label becomes "Booked until <Month>" and the green
  // dot is not rendered at all. The wording is also hand-written in places
  // this record does not drive — update them too: hero.ts terminal status
  // line, faq.ts "getting-started" answer, about.ts closing, and the
  // description/ogDescription/twitterDescription strings above.
  availability: { available: true, label: "Available for new projects" },
  social: [
    { label: "GitHub", href: "https://github.com/shahsagarm", icon: "github" },
    { label: "X", href: "https://x.com/shahsagarm", icon: "x" },
  ],
  repoUrl: "https://github.com/shahsagarm/sagarshah.dev",
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
    body: "An unexpected error stopped this page from rendering. Trying again usually fixes it. If it keeps happening, email reachsagarshah@gmail.com and tell me what you were doing.",
    retryLabel: "Try again",
    link: { label: "Back to the homepage", href: "/" },
    digestLabel: "Error reference",
  },
} as const satisfies SiteContent;
