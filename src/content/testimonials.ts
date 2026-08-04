import eugenAvatar from "@/assets/images/avatars/eugen.png";
import krisztianAvatar from "@/assets/images/avatars/krisztian.png";

import type { TestimonialsContent } from "./types";

// Quotes are word-for-word from the authors — `does:)`, `COMPLEX` and the
// hyphens are theirs. Do not correct them.
export const TESTIMONIALS = {
  header: {
    id: "testimonials",
    eyebrow: "Testimonials",
    heading: "What it's like to work with me.",
    subhead: "Unedited words from people who hired me.",
  },
  items: [
    {
      id: "krisztian-gyuris",
      name: "Krisztian Gyuris",
      title: "Founder, inboxgenie.io",
      quote:
        "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
      avatar: { src: krisztianAvatar, alt: "" },
    },
    {
      id: "eugen-esanu",
      name: "Eugen Esanu",
      title: "Founder, shosho.design",
      quote:
        "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
      avatar: { src: eugenAvatar, alt: "" },
    },
    {
      id: "joe-matkin",
      name: "Joe Matkin",
      title: "Freelancer",
      quote:
        "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
      // Initials, never a grey placeholder photo — a stock silhouette next to
      // a real quote undermines it.
      avatar: { initials: "JM", tone: "violet" },
    },
  ],
} as const satisfies TestimonialsContent;
