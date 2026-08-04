import familyPhoto from "@/assets/images/sagar-family.jpg";

import type { AboutContent } from "./types";

export const ABOUT = {
  header: {
    id: "about",
    eyebrow: "About",
    heading: "A decade of building for the web. Still not bored.",
  },
  photo: {
    src: familyPhoto,
    alt: "Sagar Shah, on the right, standing outdoors in the evening with his family in front of a floodlit stone wall, wearing a brown-striped shirt and white trousers.",
  },
  paragraphs: [
    [
      "I'm a full stack AI engineer who takes the whole product — the architecture underneath and the pixels on top. I don't hand the interface to someone else and hope it comes back right. User experience, accessible markup, and code the next person can actually read all matter to me equally.",
    ],
    [
      "I shipped my first production code in December 2015 and haven't stopped since. A decade later the tools have changed — these days it's Next.js, TypeScript, NestJS and Tailwind CSS — but the part I like most hasn't: watching something go from a rough sketch to a URL that real people use.",
    ],
    [
      "I've worked both sides of the table. Over four years leading teams at an agency — architecture, sprint planning, enterprise clients — and since 2021, independent, working directly with founders and product teams who need one person who can hold the whole picture.",
    ],
    [
      "I like owning a product end to end: ideation, design, build, ship. Small teams suit me best — fewer handoffs, faster decisions, and no ambiguity about who is responsible for the thing working.",
    ],
    [
      "When I'm not in developer mode, you'll find me on ",
      { text: "X", href: "https://x.com/shahsagarm" },
      " or Indie Hackers, watching early-stage founders build in public. I do a bit of that myself — I post what I'm learning and what I'm breaking, and most of it ends up on ",
      { text: "GitHub", href: "https://github.com/shahsagarm" },
      ".",
    ],
  ],
  quickBitsLead: "A few quick bits:",
  quickBits: [
    "B.E. in Computer Engineering",
    "Full-time freelancer since 2021",
    "Based in Ahmedabad, India (IST)",
    "Avid learner",
    "Aspiring indie hacker",
    "Ships UI without waiting on a designer",
  ],
  closing:
    "One last thing: I'm taking on freelance work right now. Say hello — I don't bite.",
} as const satisfies AboutContent;
