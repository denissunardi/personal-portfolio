import { TechItem } from "@/components/data-display/tech-item";
import { BandHeader, headingId } from "@/components/primitives/band-header";
import { Card } from "@/components/primitives/card";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { TECH } from "@/content/tech";
import * as tokens from "@/design/tokens";
import { cn } from "@/lib/cn";

// With an odd number of groups the two-column grid ends one cell short; the
// first card stretches to full width to absorb it. Computed, so it switches
// itself off at an even count.
const leadSpansFullRow = TECH.groups.length % 2 === 1;

// Section id is `stack`, not `tech`: the footer links to #stack.
export function TechStack() {
  return (
    <Section id="stack" surface="canvas" labelledBy={headingId("stack")}>
      <Container>
        <BandHeader
          id="stack"
          eyebrow={TECH.header.eyebrow}
          heading={TECH.header.heading}
          subhead={TECH.header.subhead}
        />

        <ul
          role="list"
          className={cn(tokens.layout["feature-grid-2"], "mt-16")}
        >
          {TECH.groups.map((group, index) => (
            <Card
              key={group.id}
              as="li"
              surface="muted"
              className={cn(
                "flex flex-col gap-5",
                leadSpansFullRow && index === 0 && "md:col-span-2",
              )}
            >
              <div className="flex flex-col gap-1">
                <Text as="h3" variant="title-sm">
                  {group.title}
                </Text>
                {/* No tone prop: the default gray-700 measures 9.45:1 on this
                    grey card. card-meta's gray-500 would be 4.43:1 — a
                    contrast failure; that key is for white surfaces only. */}
                <Text variant="body-sm">{group.descriptor}</Text>
              </div>

              <ul role="list" className="flex flex-wrap gap-x-6 gap-y-4">
                {group.items.map((item) => (
                  <TechItem key={item.name} item={item} />
                ))}
              </ul>
            </Card>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
