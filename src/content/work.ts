import type { StaticImageData } from "next/image";

import type { WorkContent } from "./types";

import orderbookLogo from "@/assets/images/project/orderbook.png";
import ordersLogo from "@/assets/images/project/orders.png";
import summaryLogo from "@/assets/images/project/summary.png";
import coinxMain from "@/assets/images/project/coinx-main.png";
import coinxMarket from "@/assets/images/project/coinx-market.png";
import coinxHome from "@/assets/images/project/coinx-home.png";
import pawoonMain from "@/assets/images/project/pawoon-main.png";
import pawoonIntegrations from "@/assets/images/project/pawoon-integrations.png";
import pawoonReports from "@/assets/images/project/pawoon-reports.png";
import arthapradaMain from "@/assets/images/project/arthaprada/main.png";
import arthapradaClients from "@/assets/images/project/arthaprada/clients.png";
import arthapradaHome from "@/assets/images/project/arthaprada/home.png";
import fortrustMain from "@/assets/images/project/fortrust/main.png";

// Screenshots for NDA/internal projects. Futures platform has 4 images with
// first image displayed in card, remaining images accessible via click-to-open
// gallery carousel with left/right arrows. See types.ts for Project shape —
// all image fields can be omitted if no screenshots available.
const FUTURE_SCREENSHOTS: Readonly<readonly StaticImageData[]> = [
  orderbookLogo,
  ordersLogo,
  summaryLogo,
];

// CoinX carousel: main.png is the card's default/first image, then market.png,
// then home.png in the click-to-open gallery.
const COINX_SCREENSHOTS: Readonly<readonly StaticImageData[]> = [
  coinxMain,
  coinxMarket,
  coinxHome,
];

// Pawoon carousel: main.png first, then integrations.png, then reports.png.
const PAWOON_SCREENSHOTS: Readonly<readonly StaticImageData[]> = [
  pawoonMain,
  pawoonIntegrations,
  pawoonReports,
];

// Arthaprada carousel: main.png first, then clients.png, then home.png.
const ARTHAPRADA_SCREENSHOTS: Readonly<readonly StaticImageData[]> = [
  arthapradaMain,
  arthapradaClients,
  arthapradaHome,
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
      role: "Backend / Fullstack: designed and implemented Golang microservices using Gin framework, built WebSocket-based real-time data feeds with PostgreSQL persistence, integrated payment gateway for funding operations, created advanced filtering dashboards for transaction reporting, and coordinated stakeholder alignment on operational and compliance requirements.",
      stack: ["React", "Golang", "Gin", "PostgreSQL", "Redis", "WebSocket"],
      screenshot: {
        src: FUTURE_SCREENSHOTS[0],
        alt: "Futures Trading System: Main Dashboard",
      },
      screenshots: FUTURE_SCREENSHOTS.slice(1),
    },
    {
      id: "coinx",
      name: "CoinX",
      featured: false,
      description:
        "A cryptocurrency trading platform built to make digital asset trading fast, clear, and trustworthy. I worked across product and engineering, aligning requirements, shaping the trading experience, and making sure the platform stayed accurate and easy to use as it scaled.",
      role: "Product Specialist: aligned product requirements with engineering, refined the trading and market experience, and coordinated delivery across the platform.",
      stack: ["Product Management", "Requirements Alignment", "Trading Platform", "Crypto"],
      screenshot: {
        src: COINX_SCREENSHOTS[0],
        alt: "CoinX: Trading Platform Main Dashboard",
      },
      screenshots: COINX_SCREENSHOTS.slice(1),
    },
    {
      id: "pawoon",
      name: "Pawoon",
      featured: false,
      description:
        "The POS and inventory systems merchant owners run their shops on. I built and optimized an inventory management system that gave owners real control over their stock, integrated payment systems through third-party APIs, and redesigned the dashboards with advanced filtering so people could slice their data exactly how they needed it.",
      role: "Fullstack: inventory management, third-party payment API integration, transaction-report performance tuning, and an internal finance dashboard rebuilt for everyday operational use.",
      stack: ["Laravel", "CodeIgniter", "PHP", "MySQL", "jQuery", "Vue 3"],
      screenshot: {
        src: PAWOON_SCREENSHOTS[0],
        alt: "Pawoon: POS & Inventory Dashboard",
      },
      screenshots: PAWOON_SCREENSHOTS.slice(1),
    },
    {
      id: "arthaprada",
      name: "Arthaprada for Remittance Dashboard System",
      featured: false,
      description:
        "A production-grade, multi-tenant remittance and money-transfer operations platform for PT ARI, an Indonesian payment company. It manages the full lifecycle of remittance operations, from merchant onboarding and KYC verification through daily deposit and disbursement processing to regulatory compliance reporting. The role-based dashboard serves four personas: Administrator, Customer Service, Finance, and Merchant, each with a tailored interface and permission-scoped access: KYC and account-status approval workflows, deposit and disbursement management with cut-off time logic, a self-service merchant portal with live balances, Indonesian AML/CFT watchlist screening, and compliance audit logging on every API action.",
      role: "Fullstack: built the Laravel API (auth/OTP, RBAC, encrypted PII, AML watchlist screening, cut-off processing) and a Vue 3 + Vuetify SPA serving four roles, including a ~91K-record regional dataset, compliance audit logging, and a self-service merchant portal with real-time balances.",
      stack: ["Laravel", "Vue 3", "Vuetify", "MySQL", "Redis", "Sanctum"],
      screenshot: {
        src: ARTHAPRADA_SCREENSHOTS[0],
        alt: "Arthaprada for Remittance Dashboard Main",
      },
      screenshots: ARTHAPRADA_SCREENSHOTS.slice(1),
    },
    {
      id: "fortrust",
      name: "Fortrust for Study Abroad CRM",
      featured: false,
      description:
        "The lead-management and admissions platform behind Fortrust, an Indonesian study-abroad consultancy guiding students to universities across Australia, the UK, Canada, the US, and more. I built the CRM that connects the counseling team to prospective students, scoring inbound leads by the activity they actually do on the site, routing the right prospects to follow-up, and running the qualification questionnaire that turns an interested visitor into a confirmed customer. I also added SMS OTP verification to the login and every confidential screen, so the team could access student records with confidence.",
      role: "Backend: lead-scoring by on-site activity, a follow-up qualification questionnaire, and SMS OTP verification on login and confidential features.",
      stack: ["Laravel", "PHP", "MySQL", "jQuery", "SMS Verification"],
      screenshot: {
        src: fortrustMain,
        alt: "Fortrust for Study Abroad CRM",
      },
    },
  ],
} satisfies WorkContent;
