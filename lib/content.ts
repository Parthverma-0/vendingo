// Single source of truth for all landing-page copy.
// Brand name is always "Vendi 'N' Go".

export const BRAND = "Vendi 'N' Go";

// "/#section" form so the links also work from pages other than the home page.
export const NAV_LINKS = [
  { label: "Opportunity", href: "/#opportunity" },
  { label: "Transparency", href: "/#transparency" },
  { label: "Returns", href: "/#returns" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Why Us", href: "/#why" },
  { label: "Locations", href: "/#locations" },
  { label: "FAQ", href: "/#faq" },
  { label: "Partner With Us", href: "/location-partner" },
];

export const HERO = {
  eyebrow: "India's Fintech Vending Investment Platform",
  title: "Own the machine. Earn the income.",
  subtitle:
    "Fund a smart, IoT-connected vending machine. Earn **transparent, monthly passive income** — tracked in real time.",
  primaryCta: "Start Investing",
  secondaryCta: "See how returns work",
  chips: ["UPI PAYOUTS", "LIVE IOT TRACKING", "GST COMPLIANT"],
};

export const OPPORTUNITY = {
  heading: "We're opening automated retail to everyone.",
  body: "Automated retail has quietly built fortunes across the world — but in India it has stayed locked behind big operators. We're changing that, **one machine and one investor at a time**.",
  idleStat: { value: 180, suffix: "L Cr", label: "of idle household savings in India sitting in low-yield accounts" },
  comparison: {
    label: "Vending machines per population",
    india: { country: "India", ratio: "1 per 4,000", density: 4000 },
    japan: { country: "Japan", ratio: "1 per 23", density: 23 },
    note: "A vast, underserved market — automated retail in India is just getting started.",
  },
};

export const TRANSPARENCY = {
  heading: "See everything. In real time.",
  body: "Every dispense, every sale, every restock — reported **every 30 seconds** straight from the machine. Track stock levels, sales velocity, and revenue live from your dashboard. **No black boxes, no monthly mysteries.**",
  bullets: [
    "Live stock & inventory levels",
    "Real-time sales velocity",
    "Revenue tracked to the rupee",
    "Restock & service alerts",
  ],
};

export const RETURNS = {
  heading: "Real numbers. Honestly framed.",
  intro: "Here's what a single machine is projected to do in our Jaipur pilot.",
  figures: [
    { value: 100000, prefix: "₹", label: "avg. monthly gross revenue / machine", sub: "projected" },
    { value: 13700, prefix: "₹", label: "your share, every month", sub: "projected" },
    { value: 13.7, suffix: "% p.a.", label: "target return on ~₹3L invested", sub: "projected", decimals: 1 },
  ],
  ownLine: "**You own the asset.** We handle restocking, servicing, and logistics.",
  flow: [
    { label: "The Asset", note: "Your machine earns" },
    { label: "Your Share", note: "Profit split, transparent" },
    { label: "Your Account", note: "Monthly UPI payout" },
  ],
  tagline:
    "Vendi 'N' Go. One machine, one investor, one transparent payout at a time.",
  founders:
    "Founding investors get a **preferential 65% profit share**. Limited Jaipur pilot slots.",
  disclaimer: "Projected. Investments are subject to market risk.",
};

export const STEPS = [
  {
    n: "01",
    title: "Sign Up & KYC",
    body: "Create your account and complete a quick, secure KYC verification.",
  },
  {
    n: "02",
    title: "Choose Machine",
    body: "Pick a machine and a high-footfall Jaipur location that fits your budget.",
  },
  {
    n: "03",
    title: "E-Sign Docs",
    body: "Review and e-sign your ownership and investor agreement digitally.",
  },
  {
    n: "04",
    title: "Fund & Activate",
    body: "Fund your machine. We deploy, stock, and bring it online.",
  },
  {
    n: "05",
    title: "Earn Every Month",
    body: "Watch sales live and receive your transparent payout every month.",
  },
];

export const WHY = {
  heading: "Real assets. Real returns. Real transparency.",
  pillars: [
    {
      title: "Real Asset Backing",
      body: "Your investment is a **physical, revenue-generating machine you own** — not a paper promise.",
      span: "lg",
    },
    {
      title: "Complete Transparency",
      body: "Every sale and restock reported **every 30 seconds**. You see **exactly what your asset earns**.",
      span: "sm",
    },
    {
      title: "Start Small",
      body: "Enter automated retail from **~₹3L** — no operator scale or storefront required.",
      span: "sm",
    },
    {
      title: "50% recovered in first year",
      body: "Our target: return roughly **half of your invested amount** within the first year of operation.",
      sub: "Target / projection",
      span: "lg",
    },
  ],
};

export const LOCATIONS = {
  heading: "Our machines work best out there.",
  body: "We place machines where **footfall never stops**. Here's where the first Jaipur pilot is rolling out.",
  cta: "Talk to Us",
  categories: [
    { name: "Colleges & Coaching", detail: "~150+ colleges · ~3,000+ institutes", x: 28, y: 34 },
    { name: "Government Hospitals", detail: "~15–20+ incl. SMS Hospital", x: 62, y: 28 },
    { name: "Metro & Railway", detail: "11 metro + ~7 railway stations", x: 48, y: 58 },
    { name: "Corporate Parks", detail: "~5–8 business hubs", x: 74, y: 64 },
    { name: "Highway Petrol Stations", detail: "~80–100+ along highways", x: 20, y: 70 },
  ],
};

export const TESTIMONIALS = {
  heading: "What our pilot investors expect.",
  tag: "Illustrative — pilot projections",
  items: [
    {
      quote:
        "I wanted my savings to do something real, not just sit in a bank. Owning a machine at SMS Medical College felt tangible — and I can watch every sale live.",
      name: "Ravi S.",
      place: "Jaipur · SMS Medical College",
      amount: "₹9,400/mo",
    },
    {
      quote:
        "The transparency sold me. A machine at Jodhpur Railway Station, payouts every month, and a dashboard that never lies. That's the kind of passive income I trust.",
      name: "Meena R.",
      place: "Jodhpur · Jodhpur Railway Station",
      amount: "₹9,900/mo",
    },
  ],
};

export const NUMBERS = {
  heading: "Vendi 'N' Go in Numbers",
  badge: "First-phase goals — not live traction",
  note: "Goals for our first phase — not live traction. We'll publish real numbers as machines go live.",
  stats: [
    { value: 10, suffix: "+", label: "machines planned" },
    { value: 10, suffix: "+", label: "individuals onboarded" },
    { value: 99, suffix: "%", label: "targeted uptime" },
    { value: 100, suffix: "%", label: "on-time payouts" },
  ],
};

export const FAQ = [
  {
    q: "Do I actually own the vending machine?",
    a: "Yes. Every investment is linked to a specific vending machine. You'll receive documentation confirming your ownership, while Vendingo manages installation, stocking, maintenance, and day-to-day operations on your behalf.",
  },
  {
    q: "How do I earn money?",
    a: "Each vending machine generates revenue through product sales. After deducting operational expenses such as inventory, maintenance, and location costs, profits are distributed according to your ownership agreement.",
  },
  {
    q: "Can I track my machine in real time?",
    a: "Absolutely. Through your investor dashboard, you can monitor sales, inventory levels, machine health, uptime, and earnings anytime, from anywhere.",
  },
  {
    q: "Who handles maintenance and restocking?",
    a: "Vendingo takes care of everything—from refilling products and routine maintenance to technical support and repairs. You don't need to visit or manage the machine yourself.",
  },
  {
    q: "What happens if my machine stops working?",
    a: "Our operations team is notified automatically through our monitoring system. We work to restore the machine as quickly as possible to minimize downtime and protect your earnings.",
  },
  {
    q: "Is my investment guaranteed?",
    a: "No investment can guarantee returns. Revenue depends on factors such as location performance, customer demand, and operational costs. We focus on maximizing performance through careful location selection and active management.",
  },
  {
    q: "Where will my vending machine be installed?",
    a: "Machines are placed in carefully selected high-footfall locations such as offices, colleges, hospitals, malls, residential communities, and commercial spaces after evaluating demand and accessibility.",
  },
  {
    q: "Can I choose the location of my machine?",
    a: "We're happy to consider your preferred location if it meets our operational requirements and receives approval. Otherwise, we'll place your machine where we believe it has the highest earning potential.",
  },
  {
    q: "What products are sold in the machines?",
    a: "Our machines offer a curated selection of snacks, beverages, and everyday convenience products. Product mixes are continuously optimized based on customer demand and sales data.",
  },
  {
    q: "What if a location performs poorly?",
    a: "We regularly analyze machine performance. If a location consistently underperforms, we'll evaluate relocating the machine to a better-performing site whenever feasible.",
  },
  {
    q: "Are the machines insured?",
    a: "We work to protect our assets through appropriate operational safeguards. Insurance coverage, where applicable, will be clearly outlined in your investment agreement.",
  },
  {
    q: "How often will I receive earnings?",
    a: "Investor payouts are processed according to the schedule defined in your investment agreement, along with transparent reports showing revenue, expenses, and net earnings.",
  },
  {
    q: "Is there a minimum investment?",
    a: "The minimum investment amount depends on the ownership model available during the current funding round. You'll always see the required investment before committing.",
  },
  {
    q: "What makes Vendingo different from buying a vending machine myself?",
    a: "Buying a machine yourself means handling location acquisition, stocking, maintenance, repairs, customer support, and operations. With Vendingo, you own the asset while we manage the entire operational lifecycle.",
  },
  {
    q: "How transparent is the platform?",
    a: "Transparency is at the core of Vendingo. Investors receive access to performance metrics, earnings reports, operational updates, and machine status through a centralized dashboard.",
  },
  {
    q: "What happens if I want to exit my investment?",
    a: "Exit options depend on the investment agreement and ownership model. We'll provide clear terms regarding transfers, buybacks, or other exit mechanisms before you invest.",
  },
  {
    q: "How is investor data kept secure?",
    a: "We use industry-standard security practices to protect your personal information, account access, and transaction data. Sensitive information is encrypted and handled securely.",
  },
  {
    q: "How do I get started?",
    a: "Simply submit your interest through our website. Our team will guide you through the onboarding process, explain the investment model, answer your questions, and help you complete the required documentation.",
  },
];

export const FINAL_CTA = {
  heading: "Your machine could be earning right now.",
  body: "Join the founding investors. **Limited machine slots** in the first phase.",
  cta: "Claim Your Machine Slot",
  sub: "We'll get in touch **within 24 hours**.",
};

export const FOOTER = {
  tagline: "India's Fintech Vending Investment Platform",
  quickLinks: [
    { label: "Home", href: "/#hero" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Why Vendi 'N' Go", href: "/#why" },
    { label: "Locations", href: "/#locations" },
    { label: "FAQ", href: "/#faq" },
    { label: "Become an Investor", href: "/apply" },
    { label: "Partner With Us", href: "/location-partner" },
  ],
  contacts: [
    "hello@vendingo.in",
    "vendingoprivatelimited@gmail.com",
    "+91 92618 73063",
    "Jaipur, India",
  ],
  disclaimer:
    "Investments are subject to market risks. Please read all investor documents carefully before investing.",
  legal: ["Privacy", "Terms", "Investor Agreement"],
};
