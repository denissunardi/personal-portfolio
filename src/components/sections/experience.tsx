import { ExperienceCard } from "@/components/data-display/experience-card";
import { BandHeader, headingId } from "@/components/primitives/band-header";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { EXPERIENCE } from "@/content/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      surface="soft"
      labelledBy={headingId("experience")}
    >
      <Container>
        <BandHeader
          id="experience"
          eyebrow={EXPERIENCE.header.eyebrow}
          heading={EXPERIENCE.header.heading}
        />

        {/* max-w-4xl inside the wider container: at full width bullet lines
            run near 150 characters. 896px minus the card padding lands them
            at a readable 65-80 characters per line. */}
        <ul role="list" className="mx-auto mt-16 flex max-w-4xl flex-col gap-6">
          {EXPERIENCE.roles.map((role) => (
            <ExperienceCard key={role.id} role={role} />
          ))}
        </ul>
      </Container>
    </Section>
  );
}
