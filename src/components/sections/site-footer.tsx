import { BrandGitHub } from "@/components/icons/brand/github";
import { BrandX } from "@/components/icons/brand/x";
import { Container } from "@/components/primitives/container";
import { Link } from "@/components/primitives/link";
import { SocialList } from "@/components/primitives/social-list";
import { Text } from "@/components/primitives/text";
import { FOOTER } from "@/content/footer";
import { SITE } from "@/content/site";
import * as tokens from "@/design/tokens";
import { cn } from "@/lib/cn";
import { NOW } from "@/lib/now";

const BRAND_GLYPHS: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined
> = {
  GitHub: BrandGitHub,
  X: BrandX,
};

const ROW_CLASS = cn(
  tokens.overrides["footer-link"],
  tokens.overrides["footer-link-hover"],
  tokens.overrides["focus-ring-dark"],
);

// mailto:, tel: and a downloadable file are handoffs, not navigations, so
// Link's new-tab treatment and its screen-reader notice would be wrong.
const isHandoff = (href: string) =>
  href.startsWith("mailto:") ||
  href.startsWith("tel:") ||
  href.startsWith("/files/");

// Not a Section: that requires a SectionId and there is no `footer` entry in
// SECTION_IDS. A real <footer> is already the contentinfo landmark.
export function SiteFooter() {
  const availability = SITE.availability;

  return (
    <footer
      aria-label={FOOTER.landmarkLabel}
      className={tokens.components["footer"]}
    >
      <Container>
        <div className={tokens.layout["footer-grid"]}>
          <div className="flex flex-col items-start gap-4">
            <p className={tokens.overrides["wordmark-dark"]}>
              {FOOTER.brand.wordmark}
            </p>
            <Text
              variant="body-sm"
              tone="on-dark-soft"
              className="max-w-xs text-pretty"
            >
              {FOOTER.brand.tagline}
            </Text>
            <Text variant="body-sm" tone="on-dark-soft">
              {FOOTER.brand.location}
            </Text>
            <p className={tokens.overrides["availability-pill-dark"]}>
              <span
                aria-hidden="true"
                className={
                  availability.available
                    ? tokens.overrides["availability-dot"]
                    : tokens.overrides["availability-dot-muted"]
                }
              />
              <Text as="span" variant="body-sm" tone="on-dark-soft">
                {availability.label}
              </Text>
            </p>
          </div>

          {FOOTER.columns.map((column) => {
            const socials = column.links.flatMap((link) => {
              const Glyph = BRAND_GLYPHS[link.label];
              return Glyph
                ? [{ label: link.label, href: link.href, Glyph }]
                : [];
            });
            const rows = column.links.filter(
              (link) => !BRAND_GLYPHS[link.label],
            );

            return (
              <div key={column.id} className="flex flex-col items-start gap-4">
                <h2 className={tokens.overrides["footer-heading"]}>
                  {column.heading}
                </h2>
                <ul role="list" className="flex flex-col gap-3">
                  {rows.map((link) => (
                    <li key={link.href}>
                      {isHandoff(link.href) ? (
                        <a
                          href={link.href}
                          download={
                            link.href.startsWith("/files/") || undefined
                          }
                          className={ROW_CLASS}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          variant="unstyled"
                          className={ROW_CLASS}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                {socials.length > 0 ? (
                  <SocialList items={socials} tone="dark" className="-ml-3" />
                ) : null}
              </div>
            );
          })}
        </div>

        <div className={cn(tokens.overrides["footer-divider"], "mt-12 pt-8")}>
          <Text variant="body-sm" tone="on-dark-soft" className="text-pretty">
            {FOOTER.copyright.symbol} {NOW.getUTCFullYear()}{" "}
            {FOOTER.copyright.owner} {FOOTER.copyright.separator}{" "}
            {FOOTER.copyright.segments.map((segment) =>
              typeof segment === "string" ? (
                segment
              ) : (
                <Link
                  key={segment.href}
                  href={segment.href}
                  variant="unstyled"
                  className={cn(ROW_CLASS, "underline underline-offset-4")}
                >
                  {segment.text}
                </Link>
              ),
            )}
          </Text>
        </div>
      </Container>
    </footer>
  );
}
