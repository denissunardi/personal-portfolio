import type { NavContent } from "./types";

export const NAV = {
  // "/#hero", not "/": next/link ignores a click on the route you are already
  // on, so "/" would never scroll. The leading slash also keeps the link
  // working from the 404 page.
  wordmark: { label: "denissunardi.dev", href: "/#hero" },
  landmarkLabel: "Main",
  // Five links is the ceiling — six start wrapping on tablet widths. Stack,
  // every section linked (check-anchors verifies this).
  links: [
    { label: "Home", href: "#hero" },
    { label: "Work", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
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
