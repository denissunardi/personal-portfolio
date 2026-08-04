import { TestimonialCard } from "@/components/data-display/testimonial-card";
import { BandHeader, headingId } from "@/components/primitives/band-header";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { TESTIMONIALS } from "@/content/testimonials";
import * as tokens from "@/design/tokens";
import { cn } from "@/lib/cn";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      surface="canvas"
      labelledBy={headingId("testimonials")}
    >
      <Container>
        <BandHeader
          id="testimonials"
          eyebrow={TESTIMONIALS.header.eyebrow}
          heading={TESTIMONIALS.header.heading}
          subhead={TESTIMONIALS.header.subhead}
        />
        {/* role="list" restores the semantics Tailwind's list-style reset costs
            Safari/VoiceOver; the eslint config allowlists exactly this. */}
        <ul
          role="list"
          className={cn(tokens.layout["feature-grid-3"], "mt-12")}
        >
          {TESTIMONIALS.items.map((testimonial) => (
            <li key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
