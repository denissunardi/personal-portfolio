import type { StaticImageData } from "next/image";

import mokobokoLogo from "@/assets/images/clients/mokoboko.png";
import pepehousingLogo from "@/assets/images/clients/pepehousing.png";

import fiskilLogo from "@/assets/images/clients/fiskil.svg";
import lanternLogo from "@/assets/images/clients/lantern.svg";
import shoshoLogo from "@/assets/images/clients/shosho.svg";
import wingieLogo from "@/assets/images/clients/wingie.svg";

import type { TrustBarContent } from "./types";

// Same "*.svg" typing fix as tech.ts. The two .png imports are already typed.
const LOGOS: Readonly<Record<string, StaticImageData>> = {
  fiskil: fiskilLogo,
  lantern: lanternLogo,
  shosho: shoshoLogo,
  wingie: wingieLogo,
};

export const TRUST_BAR = {
  intro: "Clients and products I've shipped",
  // Order mirrors WORK.projects; Shosho (no case study) goes last. Crowe
  // MacKay and Greenapex are absent on purpose — no approved mark, and an
  // ex-employer is not a client. Sizes are measured per logo, not guessed —
  // see TrustMarkSize in types.ts.
  marks: [
    {
      name: "MokoBoko",
      href: "https://mokoboko.xyz",
      logo: mokobokoLogo,
      size: "lg",
    },
    { name: "Fiskil", href: "https://www.fiskil.com", logo: LOGOS.fiskil },
    { name: "Lantern", href: "https://withlantern.com", logo: LOGOS.lantern },
    {
      name: "Wingie",
      href: "https://www.wingie.com",
      logo: LOGOS.wingie,
      size: "sm",
    },
    {
      name: "Pepehousing",
      href: "https://pepehousing.com",
      logo: pepehousingLogo,
      size: "lg",
    },
    {
      name: "Shosho",
      href: "https://shosho.design",
      logo: LOGOS.shosho,
      size: "sm",
    },
  ],
} as const satisfies TrustBarContent;
