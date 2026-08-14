import type { StaticImageData } from "next/image";

import type { WorkContent } from "./types";

import orderbookLogo from "@/assets/images/project/orderbook.png";
import ordersLogo from "@/assets/images/project/orders.png";
import summaryLogo from "@/assets/images/project/summary.png";

// Screenshots for NDA/internal projects. Futures platform has 4 images with
// first image displayed in card, remaining images accessible via click-to-open
// gallery carousel with left/right arrows. See types.ts for Project shape —
// all image fields can be omitted if no screenshots available.
const FUTURE_SCREENSHOTS: Readonly<readonly StaticImageData[]> = [
  orderbookLogo,
  ordersLogo,
  summaryLogo,
];

export const WORK = {
  header: {
    id: "work",
    eyebrow: "Work",
    heading: "Systems I've built and shipped.",
  },
  // The commodity futures platform is featured: true, so the band renders it
  // full-width. The rest follow newest-first.
  projects: [
    {
      id: "futures-trading",
      name: "Futures Trading System",
      featured: true,
      description:
        "A high-performance commodity futures trading platform where prices move by the second and latency can't be tolerated. I architected the backend services and WebSocket integrations that stream live market data directly to traders' screens, ensuring every price tick arrives in real time. The system supports complex order management with multiple order types, position tracking, and risk controls. I also helped prepare the platform for regulatory scrutiny by documenting system architecture and walking auditors through data flows, demonstrating how the platform maintains accuracy under pressure.",
      role: "Backend / Fullstack — designed and implemented Golang microservices using Gin framework, built WebSocket-based real-time data feeds with PostgreSQL persistence, integrated payment gateway for funding operations, created advanced filtering dashboards for transaction reporting, and coordinated stakeholder alignment on operational and compliance requirements.",
      stack: ["Golang", "Gin", "WebSocket", "PostgreSQL", "Payment Gateway"],
      screenshot: {
        src: FUTURE_SCREENSHOTS[0],
        alt: "Futures Trading System — Main Dashboard",
      },
      screenshots: FUTURE_SCREENSHOTS.slice(1),
    },
    {
      id: "crypto-compliance",
      name: "Crypto Trading — Audit & Systems",
      featured: false,
      description:
        "A cryptocurrency trading client heading into an OJK audit. I walked auditors through the IT system flows and application processes in plain language, translating how the platform works into something a regulator could sign off on — and integrated a secure payment method for users along the way.",
      role: "Fullstack — explained IT system flows and application processes for audit readiness, integrated a secure and efficient payment gateway, and aligned the implementation with business requirements.",
      stack: ["Golang", "PHP", "Payment Gateway", "PostgreSQL"],
    },
    {
      id: "pos-merchant",
      name: "Merchant POS & Inventory System",
      featured: false,
      description:
        "The systems merchant owners run their shops on. I built and optimized an inventory management system that gave owners real control over their stock, integrated payment systems through third-party APIs, and redesigned the dashboards with advanced filtering so people could slice their data exactly how they needed it.",
      role: "Fullstack — inventory management, third-party payment API integration, transaction-report performance tuning, and an internal finance dashboard rebuilt for everyday operational use.",
      stack: ["Laravel", "CodeIgniter", "PHP", "MySQL", "jQuery"],
    },
    {
      id: "education-platform",
      name: "Educational Platform",
      featured: false,
      description:
        "A learning platform used on both web and mobile. I connected the front end to the backend, shipped new features that made the product easier to use, added SMS verification to keep accounts secure, and built the Laravel APIs that powered both the mobile app and the website.",
      role: "Backend — new feature development, SMS verification, front-end/back-end integration, and Laravel APIs serving both mobile and web clients.",
      stack: ["Laravel", "PHP", "MySQL", "REST API"],
    },
    {
      id: "cms-campaign",
      name: "CMS & Campaign Websites",
      featured: false,
      description:
        "A content management system built from scratch with full create-read-update-delete control, plus the company-profile and campaign sites that ran on top of it — the kind of tooling a marketing team can use without calling a developer every time they want to change a page.",
      role: "Backend — designed and built a custom CMS with full CRUD, integrated front-end work into the backend, and delivered company-profile and campaign websites for branding and promotion.",
      stack: ["PHP", "Laravel", "MySQL", "HTML", "CSS"],
    },
  ],
} satisfies WorkContent;
