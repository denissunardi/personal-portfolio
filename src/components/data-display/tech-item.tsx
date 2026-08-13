import Image from "next/image";

import { Text } from "@/components/primitives/text";
import type { TechItem as TechItemContent } from "@/content/types";
import * as tokens from "@/design/tokens";

// Thresholds, not a list of filenames: logo shapes here run from 0.48
// (mongodb) to 1.66 (tailwindcss), and a hand-kept exception list goes stale
// the day an asset is swapped.
const WIDE_RATIO = 1.3;
const NARROW_RATIO = 0.75;

type TechItemProps = {
  item: TechItemContent;
};

export function TechItem({ item }: TechItemProps) {
  // No logo asset yet: render the name on its own. The slot and its optical
  // sizing only make sense once a real image is present, so skip both.
  if (!item.logo) {
    return (
      <li className="flex items-center gap-2.5">
        <Text as="span" variant="body-sm" tone="ink">
          {item.name}
        </Text>
      </li>
    );
  }

  const { width, height } = item.logo;
  // A future SVG with a viewBox but no width/height would make this NaN and
  // silently take the narrow branch — treat it as square instead.
  const ratio = height > 0 ? width / height : 1;

  const optical =
    ratio >= WIDE_RATIO
      ? tokens.overrides["tech-logo-wide"]
      : ratio <= NARROW_RATIO
        ? tokens.overrides["tech-logo-narrow"]
        : tokens.overrides["tech-logo"];

  return (
    <li className="flex items-center gap-2.5">
      {/* Empty alt: the name is printed right beside the logo, and a named
          image would make a screen reader say every label twice. sizes does
          nothing while the file is an SVG but stays correct if one of these
          is ever replaced by a PNG. */}
      <span className={tokens.overrides["tech-logo-slot"]}>
        <Image src={item.logo} alt="" sizes="40px" className={optical} />
      </span>
      <Text as="span" variant="body-sm" tone="ink">
        {item.name}
      </Text>
    </li>
  );
}
