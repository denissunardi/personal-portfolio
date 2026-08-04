import { Mail, Phone } from "lucide-react";

import { CopyButton } from "@/components/islands/copy-button";
import { headingId } from "@/components/primitives/band-header";
import { Badge } from "@/components/primitives/badge";
import { Button } from "@/components/primitives/button";
import { Card } from "@/components/primitives/card";
import { Container } from "@/components/primitives/container";
import { Icon } from "@/components/primitives/icon";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { CTA } from "@/content/cta";
import * as tokens from "@/design/tokens";
import { cn } from "@/lib/cn";

const ROW_ICONS = { email: Mail, phone: Phone } as const;

// Section id is `contact`, not `cta`: the hero, nav and footer all link to
// #contact. mailto:/tel: render as raw <a> elements, never Link, which would
// falsely announce "(opens in a new tab)" for a mail or dialer handoff.
export function CtaBand() {
  return (
    <Section id="contact" surface="canvas" labelledBy={headingId("contact")}>
      <Container>
        <Card surface="muted" className="p-12">
          <div className="flex flex-col items-center text-center">
            <Badge>{CTA.eyebrow}</Badge>

            <Text
              as="h2"
              id={headingId("contact")}
              variant="display-sm"
              className="mt-4 text-balance"
            >
              {CTA.heading}
            </Text>

            {/* tone="body", NOT muted: muted measures 4.43:1 on this card
                surface — a contrast failure. */}
            <Text
              variant="body-md"
              tone="body"
              className="mt-4 max-w-xl text-pretty"
            >
              {CTA.subhead}
            </Text>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary" asChild>
                <a href={CTA.primary.href}>{CTA.primary.label}</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href={CTA.secondary.href} download>
                  {CTA.secondary.label}
                </a>
              </Button>
            </div>

            <Text variant="body-sm" tone="body" className="mt-10">
              {CTA.contactsLead}
            </Text>

            {/* Explicit role: preflight strips list markers and VoiceOver drops
                list semantics without it. */}
            <ul role="list" className="mt-4 flex flex-col items-center gap-3">
              {CTA.contacts.map((row) => (
                <li key={row.id} className="flex items-center gap-3">
                  <Icon icon={ROW_ICONS[row.id as keyof typeof ROW_ICONS]} />
                  <a
                    href={row.href}
                    className={cn(
                      tokens.overrides["contact-link"],
                      tokens.overrides["focus-ring-inline"],
                    )}
                  >
                    {row.value}
                  </a>
                  <CopyButton
                    value={row.value}
                    label={row.copyLabel}
                    copiedLabel={row.copiedLabel}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
