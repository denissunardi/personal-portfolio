import Image from "next/image";

import { BandHeader, headingId } from "@/components/primitives/band-header";
import { Container } from "@/components/primitives/container";
import { Link } from "@/components/primitives/link";
import { Section } from "@/components/primitives/section";
import { Text } from "@/components/primitives/text";
import { ABOUT } from "@/content/about";
import type { RichParagraph as ParagraphSegments } from "@/content/types";
import * as tokens from "@/design/tokens";
import { cn } from "@/lib/cn";

const paragraphKey = (segments: ParagraphSegments) =>
  segments
    .map((segment) => (typeof segment === "string" ? segment : segment.text))
    .join("");

// The type is imported under an alias because this file declares a component
// with the same RichParagraph name.
function RichParagraph({ segments }: { readonly segments: ParagraphSegments }) {
  return (
    <Text variant="body-md" className="text-pretty">
      {segments.map((segment) =>
        // Strings go back bare — React only warns about missing keys on elements.
        typeof segment === "string" ? (
          segment
        ) : (
          <Link key={segment.href} href={segment.href} variant="inline">
            {segment.text}
          </Link>
        ),
      )}
    </Text>
  );
}

export function About() {
  return (
    <Section id="about" surface="soft" labelledBy={headingId("about")}>
      <Container>
        {/* ABOUT.header ships no subhead — reading one is a compile error. */}
        <BandHeader
          id={ABOUT.header.id}
          eyebrow={ABOUT.header.eyebrow}
          heading={ABOUT.header.heading}
        />

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            {/* No fill prop: fill throws away the image's own width/height,
                leaving only the CSS aspect box to reserve space. With a plain
                static import both reserve it, so the layout cannot shift even
                if one breaks. */}
            <div
              className={cn(
                tokens.overrides["photo-frame"],
                "aspect-4/5 w-full",
              )}
            >
              <Image
                src={ABOUT.photo.src}
                alt={ABOUT.photo.alt}
                sizes="(min-width: 768px) 45vw, 100vw"
                placeholder="blur"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:col-span-7">
            {ABOUT.paragraphs.map((segments) => (
              <RichParagraph key={paragraphKey(segments)} segments={segments} />
            ))}

            {/* as="p" matters: title-sm renders a heading by default, and a
                lead-in must not join the page's heading outline. */}
            <Text as="p" variant="title-sm">
              {ABOUT.quickBitsLead}
            </Text>

            {/* list-inside: an outside marker would hang into the previous
                grid column once the <ul> itself is a grid. */}
            <ul
              role="list"
              className="grid list-inside list-disc grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-8"
            >
              {ABOUT.quickBits.map((bit) => (
                <Text as="li" key={bit} variant="body-md">
                  {bit}
                </Text>
              ))}
            </ul>

            <Text variant="body-md" className="text-pretty">
              {ABOUT.closing}
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}
