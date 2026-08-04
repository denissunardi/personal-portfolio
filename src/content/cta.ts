import type { CtaContent } from "./types";

// Every contact row keeps a real href — in the old site these links were
// commented out and the email was not clickable.
export const CTA = {
  id: "contact",
  eyebrow: "Contact",
  heading: "Got something you want built?",
  subhead:
    "Tell me what you're working on. I'll tell you honestly whether I'm the right person for it — and what it would take.",
  primary: {
    label: "Start a project",
    href: "mailto:reachsagarshah@gmail.com",
  },
  secondary: {
    label: "Download CV",
    href: "/files/sagar-shah-full-stack-ai-engineer.pdf",
  },
  contactsLead: "You'll also find me here.",
  contacts: [
    {
      id: "email",
      label: "Email",
      value: "reachsagarshah@gmail.com",
      href: "mailto:reachsagarshah@gmail.com",
      copyLabel: "Copy email address",
      copiedLabel: "Copied!",
    },
    {
      id: "phone",
      label: "Phone",
      value: "+91 8980500565",
      href: "tel:+918980500565",
      copyLabel: "Copy phone number",
      copiedLabel: "Copied!",
    },
  ],
} as const satisfies CtaContent;
