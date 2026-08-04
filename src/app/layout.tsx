import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";

import { SkipLink } from "@/components/primitives/skip-link";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { SITE } from "@/content/site";
import { buildFaqGraph, buildPersonGraph, jsonLdScript } from "@/lib/json-ld";

import { fontDisplay, fontMono, fontSans } from "./fonts";
import "./globals.css";

const gaId = process.env.GOOGLE_ANALYTICS_ID;

export const metadata: Metadata = {
  // Mandatory: alternates.canonical and openGraph.url below are relative, and a
  // relative metadata URL without a metadataBase is a build error.
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: SITE.titleTemplate,
  },
  description: SITE.description,
  // Spread: SITE is `as const`, so keywords is readonly and Metadata wants a
  // mutable array.
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  // No images key here or in twitter: Phase 12's opengraph-image.tsx file
  // convention emits both and overrides whatever the object declares.
  openGraph: {
    type: "website",
    url: "/",
    // siteName is the brand, not the page title — otherwise a share card prints
    // the title twice.
    siteName: SITE.name,
    title: SITE.ogTitle,
    description: SITE.ogDescription,
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitterHandle,
    creator: SITE.twitterHandle,
    title: SITE.twitterTitle,
    description: SITE.twitterDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// themeColor and colorScheme live here, not in metadata — deprecated there since
// Next 14, where they are silently dropped rather than erroring.
export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-gray-700">
        <SkipLink />
        <SiteHeader />
        {/* tabIndex={-1}: without it the skip link moves the scroll position but
            leaves focus on body, so the next Tab returns to the header. */}
        <main id="main" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <SiteFooter />
        {/* Native script, not next/script: JSON-LD is data, not executable code
            (per the Next json-ld guide). Two separate graphs so a malformed FAQ
            block cannot invalidate the Person block in one validator pass. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(buildPersonGraph()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(buildFaqGraph()) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
