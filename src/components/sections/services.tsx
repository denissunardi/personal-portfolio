import { BandHeader, headingId } from "@/components/primitives/band-header";
import { Card } from "@/components/primitives/card";
import { Container } from "@/components/primitives/container";
import { CAPABILITY_ICONS, Icon } from "@/components/primitives/icon";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { CAPABILITIES } from "@/content/capabilities";
import * as tokens from "@/design/tokens";
import { cn } from "@/lib/cn";

export function Services() {
  return (
    <Section id="services" surface="soft" labelledBy={headingId("services")}>
      <Container>
        <BandHeader
          id={CAPABILITIES.header.id}
          eyebrow={CAPABILITIES.header.eyebrow}
          heading={CAPABILITIES.header.heading}
          subhead={CAPABILITIES.header.subhead}
        />

        {/* role="list" survives Tailwind's preflight: Safari/VoiceOver drop list
            semantics from any list whose markers are removed. */}
        <ul
          role="list"
          className={cn(tokens.layout["feature-grid-3"], "mt-16")}
        >
          {CAPABILITIES.items.map((item) => (
            <Card
              key={item.id}
              as="li"
              surface="muted"
              className="flex flex-col items-start gap-3"
            >
              {/* Look up by item.icon, never item.id — id names the
                  capability, icon names the glyph. */}
              <Icon icon={CAPABILITY_ICONS[item.icon]} size="md" />
              <Text as="h3" variant="title-md">
                {item.title}
              </Text>
              <Text variant="body-md" className="text-pretty">
                {item.body}
              </Text>
            </Card>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
