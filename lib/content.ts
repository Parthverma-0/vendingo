// Single source of truth for all landing-page copy.
// Brand name is "Vendingo".

export const BRAND = "Vendingo";

// "/#section" form so the links also work from pages other than the home page.
export const NAV_LINKS = [
  { label: "Opportunity", href: "/#opportunity" },
  { label: "Transparency", href: "/#transparency" },
  { label: "Economics", href: "/#returns" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Why Vendingo", href: "/#why" },
  { label: "Locations", href: "/#locations" },
  { label: "FAQ", href: "/#faq" },
  { label: "Partner With Us", href: "/location-partner" },
];

export const HERO = {
  eyebrow: "Smart Vending Network · India",
  title: "Smart vending. Built for real-world retail.",
  subtitle:
    "Vendingo is building a technology-enabled vending network across high-footfall locations in India — combining **IoT-enabled machines**, digital payments, real-time monitoring and managed operations.",
  primaryCta: "Explore the Opportunity",
  secondaryCta: "Partner Your Location",
  chips: ["IOT-ENABLED", "UPI PAYMENTS", "MANAGED OPERATIONS"],
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
  intro: "Here's what a single machine is projected to do under Vendingo's submitted investor model.",
  figures: [
    { value: 8640, prefix: "₹", label: "projected monthly investor share", sub: "projected" },
    { value: 103680, prefix: "₹", label: "projected annual investor share", sub: "projected" },
    { value: 34.6, suffix: "% p.a.", label: "projected annual return on ₹3,00,000 invested", sub: "projected", decimals: 1 },
  ],
  ownLine: "**You own the asset.** We handle restocking, servicing, and logistics.",
  flow: [
    { label: "The Asset", note: "Your machine earns" },
    { label: "Your Share", note: "60% of the revenue split, transparent" },
    { label: "Your Account", note: "Monthly payout" },
  ],
  tagline:
    "Vendingo. One machine, one investor, one transparent payout at a time.",
  founders:
    "The submitted model allocates **60% of the revenue split to the investor**, 10% to the location partner, and 30% to Vendingo operations.",
  disclaimer:
    "Illustrative/projected economics based on the assumptions stated in the Vendingo investor document. Actual performance may vary — not a guaranteed return. Approximately 35-month projected payback.",
};

export const STEPS = [
  {
    n: "01",
    title: "Identify the Location",
    body: "We assess the site, footfall and suitability for vending.",
  },
  {
    n: "02",
    title: "Sign Up & Deploy",
    body: "Complete a quick KYC and review your investor agreement. The machine is delivered, installed and commissioned.",
  },
  {
    n: "03",
    title: "Fund & Activate",
    body: "Fund your machine. We stock it and bring it online.",
  },
  {
    n: "04",
    title: "Operate & Monitor",
    body: "Vendingo manages the operating layer, including monitoring, inventory and servicing.",
  },
  {
    n: "05",
    title: "Track the Economics",
    body: "Watch sales live and receive your transparent, projected monthly share.",
  },
];

export const WHY = {
  heading: "Real assets. Real transparency. A defined operating model.",
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
      body: "Enter automated retail from **₹3,00,000** — no operator scale or storefront required.",
      span: "sm",
    },
    {
      title: "Managed operations, not guesswork",
      body: "IoT monitoring, digital payments and managed restocking are **built into every machine**, so performance is measured, not assumed.",
      sub: "Operating model",
      span: "lg",
    },
  ],
};

export const WHATSAPP_NUMBER = "919261873063";
export const WHATSAPP_LINK = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const LOCATIONS = {
  heading: "Our machines work best out there.",
  body: "We place machines where **footfall never stops**. Here's where the first Jaipur pilot is rolling out.",
  cta: "Talk to Us",
  mapEmbedSrc: "https://www.google.com/maps?q=Jaipur,Rajasthan&z=11&output=embed",
  live: [
    { name: "GCEC", query: "GCEC Jaipur" },
    { name: "VGU — Vivekananda Global University, Jagatpura", query: "Vivekananda Global University Jagatpura Jaipur" },
  ],
  categories: [
    { name: "Colleges & Universities", detail: "~150+ colleges · ~3,000+ institutes", query: "colleges and coaching institutes in Jaipur" },
    { name: "Government Hospitals & Clinics", detail: "~15–20+ incl. SMS Hospital", query: "government hospitals in Jaipur" },
    { name: "Metro, Railway & Transit", detail: "11 metro + ~7 railway stations", query: "metro and railway stations in Jaipur" },
    { name: "Corporate Offices", detail: "~5–8 business hubs", query: "corporate parks in Jaipur" },
    { name: "Hostels, PGs & Highway Stops", detail: "~80–100+ along highways", query: "highway petrol stations near Jaipur" },
  ],
};

export const TESTIMONIALS = {
  heading: "What early Vendingo participation could look like.",
  tag: "Illustrative example — not a real customer testimonial",
  items: [
    {
      quote:
        "This is an illustrative example of how an investor might frame the decision: I wanted my savings to do something real, not just sit in a bank. Owning a machine at a high-footfall location felt tangible — and I can watch every sale live.",
      name: "Illustrative Investor",
      place: "Jaipur pilot · example scenario",
      amount: "₹8,640/mo",
    },
    {
      quote:
        "This is an illustrative example of a location partner's perspective: the transparency sold me. A machine on-site, monthly payouts, and a dashboard that never lies. That's the kind of revenue-sharing I trust.",
      name: "Illustrative Location Partner",
      place: "Jaipur pilot · example scenario",
      amount: "₹10,000/mo",
    },
  ],
};

export const NUMBERS = {
  heading: "Vendingo in Numbers",
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
    q: "Is Vendingo a vending machine company?",
    a: "Vendingo operates a technology-enabled vending model built around IoT-enabled machines, digital payments, remote monitoring and managed operations.",
  },
  {
    q: "Do I actually own the vending machine?",
    a: "Yes. Every investment is linked to a specific vending machine. You'll receive documentation confirming your ownership, while Vendingo manages installation, stocking, maintenance, and day-to-day operations on your behalf.",
  },
  {
    q: "How do I earn money?",
    a: "Each vending machine generates revenue through product sales. The submitted investor document presents a projected revenue split of 60% to the investor, 10% to the location partner, and 30% to Vendingo operations, after which profits are distributed according to your ownership agreement.",
  },
  {
    q: "Can I track my machine in real time?",
    a: "Absolutely. Through your investor dashboard, you can monitor sales, inventory levels, machine health, uptime, and earnings anytime, from anywhere.",
  },
  {
    q: "Who handles maintenance and restocking?",
    a: "Vendingo takes care of everything — from refilling products and routine maintenance to technical support and repairs. You don't need to visit or manage the machine yourself.",
  },
  {
    q: "What happens if my machine stops working?",
    a: "Our operations team is notified automatically through our monitoring system. We work to restore the machine as quickly as possible to minimize downtime and protect your earnings.",
  },
  {
    q: "Does Vendingo guarantee returns?",
    a: "No. No investment can guarantee returns. The submitted investor document explicitly describes its figures — including the 34.6% projected annual return — as an operating projection based on stated assumptions, not a guaranteed return. Revenue depends on factors such as location performance, customer demand, and operational costs.",
  },
  {
    q: "Where will my vending machine be installed?",
    a: "Machines are placed in carefully selected high-footfall locations such as colleges, corporate offices, hostels, hospitals, gyms, malls and transit hubs, after evaluating demand and accessibility.",
  },
  {
    q: "Can I choose the location of my machine?",
    a: "We're happy to consider your preferred location if it meets our operational requirements and receives approval. Otherwise, we'll place your machine where we believe it has the highest earning potential.",
  },
  {
    q: "What products are sold in the machines?",
    a: "Our machines offer a curated selection of snacks, beverages, and everyday essentials. Product mixes are continuously optimized based on customer demand and sales data.",
  },
  {
    q: "What if a location performs poorly?",
    a: "We regularly analyze machine performance. If a location consistently underperforms, we'll evaluate relocating the machine to a better-performing site whenever feasible.",
  },
  {
    q: "How often will I receive earnings?",
    a: "Investor payouts are processed according to the schedule defined in your investment agreement, along with transparent reports showing revenue, expenses, and net earnings.",
  },
  {
    q: "Is there a minimum investment?",
    a: "The submitted single-machine model is built around a ₹3,00,000 investment. You'll always see the required investment before committing.",
  },
  {
    q: "Can I become a location partner without purchasing a machine?",
    a: "Yes. The submitted location-partner proposal presents a zero-investment model in which Vendingo funds, installs and operates the machine — the location partner provides suitable space and receives 10% of monthly sales plus ₹2,000/month toward electricity.",
  },
  {
    q: "What makes Vendingo different from buying a vending machine myself?",
    a: "Buying a machine yourself means handling location acquisition, stocking, maintenance, repairs, customer support, and operations. With Vendingo, you own the asset while we manage the entire operational lifecycle.",
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
  heading: "Interested in the Vendingo model?",
  body: "Review the model, assumptions and applicable terms before proceeding. **Limited machine slots** in the first phase.",
  cta: "Explore the Opportunity",
  sub: "We'll get in touch **within 24 hours**.",
};

export const FOOTER = {
  tagline: "A technology-enabled smart vending network across India.",
  quickLinks: [
    { label: "Home", href: "/#hero" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Why Vendingo", href: "/#why" },
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
    "Illustrative/projected economics based on the assumptions stated in the Vendingo investor and location-partner documents. Actual performance may vary. Investments are subject to market risks — please read all investor documents carefully before investing.",
  legal: ["Privacy", "Terms", "Investor Agreement"],
};
