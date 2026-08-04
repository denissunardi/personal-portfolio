import { MapPin } from "lucide-react";

import { BrandGitHub } from "@/components/icons/brand/github";
import { BrandX } from "@/components/icons/brand/x";
import { Avatar } from "@/components/primitives/avatar";
import { Badge } from "@/components/primitives/badge";
import { headingId } from "@/components/primitives/band-header";
import { Button } from "@/components/primitives/button";
import { Container } from "@/components/primitives/container";
import { Icon } from "@/components/primitives/icon";
import { Link } from "@/components/primitives/link";
import { Section } from "@/components/primitives/section";
import { SocialList } from "@/components/primitives/social-list";
import { TerminalFrame } from "@/components/primitives/terminal-frame";
import { Text } from "@/components/primitives/text";
import { TrustBar } from "@/components/sections/trust-bar";
import { HERO } from "@/content/hero";
import { SITE } from "@/content/site";
import * as tokens from "@/design/tokens";
import { cn } from "@/lib/cn";

// Content stores each social icon as a plain string; this map is the only
// place that string becomes a component, which keeps src/content/ free of
// component imports. Brand-prefixed because lucide-react already exports X
// for the close glyph.
const GLYPHS = {
  github: BrandGitHub,
  x: BrandX,
} as const;

// The one band that does not use BandHeader: it owns the page's single <h1>.
export function Hero() {
  const socials = SITE.social.map((social) => ({
    label: social.label,
    href: social.href,
    Glyph: GLYPHS[social.icon],
  }));

  return (
    <Section id="hero" surface="canvas" labelledBy={headingId("hero")}>
      <Container>
        <div className={tokens.layout["hero-grid"]}>
          <div
            className={cn(
              tokens.layout["hero-col-content"],
              "flex flex-col items-start gap-6",
            )}
          >
            <div className="flex items-center gap-3">
              <Avatar source={HERO.portrait} loading="eager" sizes="36px" />
              <Badge>{HERO.eyebrow}</Badge>
            </div>

            <Text
              as="h1"
              id={headingId("hero")}
              variant="display-xl"
              className="text-balance"
            >
              <span className="block">
                {HERO.headlineLead}{" "}
                <span
                  aria-hidden="true"
                  className="group inline-block wave-origin motion-safe:animate-wave"
                >
                  {/* Two spans, not one: an element cannot replay an animation
                      it has already run, so the page-load wave rides the outer
                      span and the hover wave the inner one. The hover trigger
                      is the outer box, which stays still — if the swinging
                      element were its own trigger, the emoji would lean out
                      from under the cursor mid-wave and stutter. */}
                  <span className="inline-block wave-origin group-hover:motion-safe:animate-wave">
                    {HERO.wave}
                  </span>
                </span>
              </span>
              <span className="block">{HERO.headlineClaim}</span>
            </Text>

            <Text
              variant="body-md"
              className={cn(
                tokens.overrides["hero-subhead"],
                "max-w-xl text-pretty",
              )}
            >
              {HERO.subhead}
            </Text>

            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" asChild>
                <Link href={HERO.primary.href} variant="unstyled">
                  {HERO.primary.label}
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href={HERO.secondary.href} variant="unstyled">
                  {HERO.secondary.label}
                </Link>
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2">
                <Icon icon={MapPin} />
                <Text as="span" variant="body-sm">
                  {HERO.location}
                </Text>
              </p>
              <p className="flex items-center gap-2 ml-1">
                <span className="relative flex size-2 shrink-0">
                  {SITE.availability.available ? (
                    <span
                      aria-hidden="true"
                      className={cn(
                        tokens.overrides["availability-dot"],
                        "absolute inset-0 opacity-75 motion-safe:animate-ping",
                      )}
                    />
                  ) : null}
                  <span
                    aria-hidden="true"
                    className={cn(
                      SITE.availability.available
                        ? tokens.overrides["availability-dot"]
                        : tokens.overrides["availability-dot-muted"],
                      "relative",
                    )}
                  />
                </span>
                <Text as="span" variant="body-sm">
                  {SITE.availability.label}
                </Text>
              </p>
            </div>

            <SocialList items={socials} />
          </div>

          <div
            className={cn(tokens.layout["hero-col-mockup"], "lg:self-center")}
          >
            {/* Real text, not a screenshot: search engines and screen readers
                get the pitch. */}
            <TerminalFrame
              title={HERO.terminal.title}
              lines={HERO.terminal.lines}
            />
          </div>
        </div>
      </Container>

      <TrustBar />
    </Section>
  );
}
