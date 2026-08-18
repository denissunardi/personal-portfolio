import type { TrustBarContent } from "./types";

// Text-only: these are employers and the systems I built for them, not public
// products with logos I can link to. TrustMarkItem renders the name as a
// wordmark when a mark has no logo.
export const TRUST_BAR = {
  intro: "Where I've built things",
  marks: [
    { name: "Darmawan Aryansyah Teknologi" },
    { name: "Pawoon" },
    { name: "Expecto" },
    { name: "PT. Integrated Synergy Systems" },
  ],
} satisfies TrustBarContent;
