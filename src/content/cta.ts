import type { CtaContent } from "./types";

// Every contact row keeps a real href — in the old site these links were
// commented out and the email was not clickable.
export const CTA = {
  id: "contact",
  eyebrow: "Contact",
  heading: "Hiring, or have something to build?",
  subhead:
    "Whether you're a recruiter with a role or a team with a project, tell me what you need. I'll tell you honestly whether I'm the right fit — and what it would take.",
  primary: {
    label: "Get in touch",
    href: "mailto:Deniaz.94@gmail.com",
  },
  secondary: {
    label: "Download CV",
    href: "/files/denis-full-stack-cv.pdf",
  },
  contactsLead: "You'll also find me here.",
  contacts: [
    {
      id: "email",
      label: "Email",
      value: "Deniaz.94@gmail.com",
      href: "mailto:Deniaz.94@gmail.com",
      copyLabel: "Copy email address",
      copiedLabel: "Copied!",
    },
    {
      id: "phone",
      label: "Phone",
      value: "+62 814 1331 3057",
      href: "tel:+6281413313057",
      copyLabel: "Copy phone number",
      copiedLabel: "Copied!",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/denis-sunardi",
      href: "https://www.linkedin.com/in/denis-sunardi/",
      copyLabel: "Copy LinkedIn URL",
      copiedLabel: "Copied!",
    },
  ],
} satisfies CtaContent;
