import type { FaqContent } from "./types";

// No pricing on purpose: a rate on the page prices the work before the
// conversation that would justify it.
export const FAQ = {
  header: {
    id: "faq",
    eyebrow: "FAQ",
    heading: "Questions people ask before hiring me.",
    subhead: "Short answers. Anything else, email me.",
  },
  // Every <details> shares this name, so the browser closes one answer when
  // another opens — an accordion with zero JavaScript.
  groupName: "faq",
  items: [
    {
      id: "how-we-work",
      question: "How do we work together?",
      answer:
        "A short call to pin down the real problem, then a written plan with milestones before I write any code. After that you get working software every week — not a status update.",
    },
    {
      id: "engagement-types",
      question: "What kind of work do you take on?",
      answer:
        "Three kinds: a fixed project with a clear scope, a monthly retainer, or joining your team as an extra pair of hands. I'll build the whole thing or just the front end — your call.",
    },
    {
      id: "ai",
      question: "Can you build AI features?",
      answer:
        "Yes — chat that streams, agents that use your tools, answers pulled from your own data. Built on the Claude and OpenAI APIs, with spend limits and tests in place before launch, not after the first bill.",
    },
    {
      id: "design",
      question: "I don't have a designer. Is that a problem?",
      answer:
        "No. Send a Figma file and it comes back as pixel-perfect code. No Figma? I'll put a clickable wireframe in front of you within a day, then build the real thing from your existing components.",
    },
    {
      id: "stack",
      question: "What do you build with?",
      answer:
        "React, Next.js and TypeScript on the front. Node with Express or NestJS and PostgreSQL behind it. If your stack is something else, tell me — I'd rather say it's not a fit than learn on your budget.",
    },
    {
      id: "timezone",
      question: "Where are you based, and will our hours overlap?",
      answer:
        "Ahmedabad, India — IST (UTC+5:30). That's a full working day with Europe, mornings with Australia, and the start of the day with the US East Coast. Slack and email day to day, calls when a call is faster.",
    },
    {
      id: "getting-started",
      question: "Are you free, and how do we start?",
      answer:
        "Yes, I'm taking on new work right now. Email reachsagarshah@gmail.com with what you're building and when you need it — if it's a fit, you get a plan and a timeline back; if it isn't, I'll say so.",
    },
  ],
} as const satisfies FaqContent;
