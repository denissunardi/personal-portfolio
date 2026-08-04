import { ProjectCard } from "@/components/data-display/project-card";
import { BandHeader, headingId } from "@/components/primitives/band-header";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { WORK } from "@/content/work";
import * as tokens from "@/design/tokens";
import { cn } from "@/lib/cn";

const FLAGSHIP_SIZES = "(min-width: 1280px) 1232px, 100vw";
const TWO_UP_SIZES = "(min-width: 768px) 50vw, 100vw";

export function Work() {
  const flagship = WORK.projects.find((project) => project.featured);
  // The flagship is chosen by data, not array position — a missing featured
  // flag must fail the build loudly, not quietly promote the first project.
  if (!flagship) {
    throw new Error("work: WORK.projects has no entry with featured: true");
  }
  const rest = WORK.projects.filter((project) => project !== flagship);

  return (
    <Section id="work" surface="canvas" labelledBy={headingId("work")}>
      <Container>
        <BandHeader
          id="work"
          eyebrow={WORK.header.eyebrow}
          heading={WORK.header.heading}
          subhead={WORK.header.subhead}
        />

        <ul
          role="list"
          className={cn(tokens.layout["feature-grid-2"], "mt-16")}
        >
          <li className="md:col-span-2">
            <ProjectCard project={flagship} sizes={FLAGSHIP_SIZES} />
          </li>
          {rest.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} sizes={TWO_UP_SIZES} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
