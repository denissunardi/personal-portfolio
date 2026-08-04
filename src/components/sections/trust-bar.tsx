import { Container } from "@/components/primitives/container";
import { TrustMarkItem } from "@/components/data-display/trust-mark";
import { TRUST_BAR } from "@/content/trust-bar";
import * as tokens from "@/design/tokens";
import { cn } from "@/lib/cn";

// Not its own band: it renders inside the hero section, split off by a
// hairline, because two white bands in a row would break DESIGN.md's rule
// against consecutive same-colour surfaces.
export function TrustBar() {
  return (
    <Container className={cn(tokens.overrides["hairline-top"], "mt-16 pt-12")}>
      <p className={tokens.overrides["trust-caption"]}>{TRUST_BAR.intro}</p>
      {/* role="list" is not redundant: Tailwind's preflight strips list markers
          and Safari/VoiceOver then drops list semantics without it. */}
      <ul
        role="list"
        className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-6"
      >
        {TRUST_BAR.marks.map((mark) => (
          <TrustMarkItem key={mark.name} mark={mark} />
        ))}
      </ul>
    </Container>
  );
}
