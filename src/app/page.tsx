import { About } from "@/components/sections/about";
import { CtaBand } from "@/components/sections/cta-band";
import { Experience } from "@/components/sections/experience";

import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { TechStack } from "@/components/sections/tech-stack";
import { Work } from "@/components/sections/work";

// No wrapper: <main> in the layout is the only one, and each Section paints its
// own full-bleed surface. Order is the fixed canvas/soft alternation, and it is
// also the header nav's order — a menu that promises a different sequence than
// the scroll delivers reads as broken. Move a section and swap its `surface`
// with the section it traded places with, or two greys end up adjacent.
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <TechStack />
      <Experience />
      <CtaBand />
    </>
  );
}
