import type { AboutContent } from "./types";

export const ABOUT = {
  header: {
    id: "about",
    eyebrow: "About",
    heading: "A decade of building for the web. Still shipping.",
  },
  // No photo yet: About renders text-only and the prose takes the full width.
  // Drop a headshot into the content and add a `photo` field to bring the
  // two-column layout back.
  photo: undefined,
  paragraphs: [
    [
      "I'm a backend-focused fullstack developer. I like the part of a product most people never see Ã¢â‚¬â€ the APIs, the data models, the payment flows, the real-time services Ã¢â‚¬â€ the plumbing that has to be right or nothing above it works. I've spent the last decade making sure it works.",
    ],
    [
      "I shipped my first production code in 2015 and haven't stopped since. The through-line has been business systems that carry real weight: trading platforms where prices move by the second, payment integrations that have to reconcile to the cent, POS and inventory systems merchants run their shops on, and CMS platforms teams use every day.",
    ],
    [
      "My toolkit is PHP with Laravel and CodeIgniter, and Golang with Gin when a service needs to be fast. MySQL and PostgreSQL for data, WebSocket for the live bits, and HTML, CSS and jQuery when I'm working up front. I'm just as comfortable explaining a system to an OJK auditor as I am writing it.",
    ],
    [
      "I care about applications that stay fast and stay maintainable Ã¢â‚¬â€ optimizing the slow reporting page, tidying the dashboard so it's actually usable, integrating the third-party API so the edge cases don't bite later. Small teams suit me: fewer handoffs, faster decisions, and no confusion about who owns the thing working.",
    ],
  ],
  quickBitsLead: "A few quick bits:",
  quickBits: [
    "B.Sc. Computer Science, BINUS University",
    "Backend / Fullstack Developer",
    "Based in Jakarta, Indonesia (WIB)",
    "Laravel Ã‚· CodeIgniter Ã‚· Golang",
    "Bahasa Indonesia & English",
    "Open to roles and freelance projects",
  ],
  closing:
    "One last thing: I'm open to new roles and freelance projects right now. Say hello Ã¢â‚¬â€ I'd be glad to hear what you're building.",
} satisfies AboutContent;
