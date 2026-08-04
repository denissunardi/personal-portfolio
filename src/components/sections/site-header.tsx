import { MobileNav } from "@/components/islands/mobile-nav";
import { Button } from "@/components/primitives/button";
import { Container } from "@/components/primitives/container";
import { Link } from "@/components/primitives/link";
import { NAV } from "@/content/nav";
import * as tokens from "@/design/tokens";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  return (
    // The hairline is always on. Showing it only after scroll would cost a
    // client component with a scroll listener, and a page opened part-way
    // down would render wrong until the first scroll event.
    <header
      className={cn(
        "sticky top-0 z-40 w-full",
        tokens.components["top-nav"],
        tokens.overrides["hairline-bottom"],
      )}
    >
      {/* h-full, not a second h-16: the height comes from the top-nav token. */}
      <Container className="flex h-full items-center justify-between gap-4">
        <Link
          href={NAV.wordmark.href}
          variant="unstyled"
          className={cn(
            tokens.overrides["wordmark"],
            tokens.overrides["wordmark-hover"],
          )}
        >
          {NAV.wordmark.label}
        </Link>

        <nav aria-label={NAV.landmarkLabel} className="hidden md:block">
          <ul
            className={cn(
              tokens.components["nav-pill-group"],
              "flex items-center gap-1",
            )}
          >
            {NAV.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  variant="unstyled"
                  className={cn(
                    tokens.components["category-tab"],
                    tokens.overrides["category-tab-hover"],
                    "inline-flex items-center",
                  )}
                >
                  {/* The extra span is a styling hook: globals.css highlights
                      the nav label of the section in view (:target in older
                      browsers), and that one selector must match these links
                      and the mobile-nav dialog links alike. It carries no
                      colour classes so it inherits the tab's grey and the
                      anchor's hover ink. */}
                  <span className="nav-label">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Raw <a download>, not Link: the CV must download, not navigate,
              and Link has no download prop. */}
          <Button variant="text-link" asChild className="hidden lg:inline-flex">
            <a href={NAV.cv.href} download>
              {NAV.cv.label}
            </a>
          </Button>
          <Button variant="primary" asChild className="hidden md:inline-flex">
            <a href={NAV.cta.href}>{NAV.cta.label}</a>
          </Button>
          <MobileNav
            wordmark={NAV.wordmark}
            links={NAV.links}
            cv={NAV.cv}
            cta={NAV.cta}
            openLabel={NAV.menuOpenLabel}
            closeLabel={NAV.menuCloseLabel}
            title={NAV.menuTitle}
            className="md:hidden"
          />
        </div>
      </Container>
    </header>
  );
}
