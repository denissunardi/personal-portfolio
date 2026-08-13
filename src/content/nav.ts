import type { NavContent } from "./types";

export const NAV = {
  // "/#hero", not "/": next/link ignores a click on the route you are already
  // on, so "/" would never scroll. The leading slash also keeps the link
  // working from the 404 page.
  wordmark: { label: "denissunardi.dev", href: "/#hero" },
  landmarkLabel: "Main",
  // Five links is the ceiling — six start wrapping on tablet widths. Stack,
  // FAQ and Contact are left out here but stay in the footer, which keeps
  // every section linked (check-anchors verifies this).
  links: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "FAQ", href: "#faq" },
  ],
  cv: {
    label: "Download CV",
    href: "/files/denis-full-stack-cv.pdf",
  },
  cta: { label: "Let's talk", href: "#contact" },
  menuOpenLabel: "Open menu",
  menuCloseLabel: "Close menu",
  menuTitle: "Navigation menu",
} satisfies NavContent;
