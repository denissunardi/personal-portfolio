import { FaqItem } from "@/components/data-display/faq-item";
import { BandHeader, headingId } from "@/components/primitives/band-header";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { FAQ } from "@/content/faq";
import * as tokens from "@/design/tokens";
import { cn } from "@/lib/cn";

export function Faq() {
  return (
    <Section id="faq" surface="canvas" labelledBy={headingId("faq")}>
      <Container>
        <BandHeader
          id="faq"
          eyebrow={FAQ.header.eyebrow}
          heading={FAQ.header.heading}
          subhead={FAQ.header.subhead}
        />
        {/* max-w-3xl: at full container width the chevron sits far from its
            question and answers run past a comfortable line length.
            hairline-top closes the ruled list — each row below brings its own
            bottom line. */}
        <ul
          role="list"
          className={cn(
            "mx-auto mt-12 max-w-3xl",
            tokens.overrides["hairline-top"],
          )}
        >
          {FAQ.items.map((item) => (
            <li key={item.id}>
              <FaqItem item={item} groupName={FAQ.groupName} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
