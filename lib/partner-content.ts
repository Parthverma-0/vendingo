// Single source of truth for all Location Partner page copy.
// Mirrors the structure of lib/content.ts (investor page).
//
// Per the submitted location-partner proposal: zero upfront investment,
// Vendingo funds/installs/operates the machine, and the location partner
// receives 10% of monthly sales plus ₹2,000/month toward electricity
// (the partner's premises supplies the power; Vendingo reimburses it monthly).

export const PARTNER_HERO = {
  eyebrow: "Location Partner Program",
  title: "Your space. Our machine. Your monthly share.",
  subtitle:
    "Host a Vendingo smart vending machine at your premises — with **zero investment and zero operational work**. In return, you earn a transparent **10% share of every month's sales**, plus a fixed monthly electricity reimbursement, tracked live from day one.",
  primaryCta: "Become a Location Partner",
  secondaryCta: "See how the revenue share works",
  chips: ["NO SETUP COST", "ELECTRICITY REIMBURSED", "MONTHLY UPI PAYOUTS", "LIVE IOT TRACKING"],
};

export const PARTNER_OPPORTUNITY = {
  heading: "Turn unused footfall into a recurring income line.",
  body: "Every day, people pass through your space — students, employees, patients, visitors, residents — and every one of them is a potential vending sale. Right now, that footfall earns your organization nothing. A Vendingo machine turns it into a **line item on your monthly income statement**, without asking your team to lift a finger.",
  footfallStat: {
    value: 200,
    suffix: "+",
    label:
      "daily visitors — most institutions at that footfall have never converted it into revenue, because doing it yourself means capital, staff, and maintenance overhead.",
    bottomLine: "Vendingo removes all three. You provide the space — we split the upside with you, every month.",
  },
  split: {
    label: "Who brings what",
    rows: [
      { item: "The machine", who: "On us" },
      { item: "The capital", who: "On us" },
      { item: "The operations", who: "On us" },
      { item: "The space", who: "On you" },
    ],
    note: "You provide the space. We provide the machine, the capital, and the operations — and split the upside with you, every month.",
  },
};

export const PARTNER_TRANSPARENCY = {
  heading: "See exactly what your machine earns. In real time.",
  body: "Just like our investors, our location partners get a live dashboard — not a monthly PDF. Every dispense, restock, and rupee is reported straight from the machine **every 30 seconds**, so you always know what your **10% share** is building toward before the payout even lands.",
  bullets: [
    "Live sales & revenue tracking",
    "Real-time footfall-to-sales conversion",
    "Stock levels & restock alerts",
    "Your monthly revenue share, calculated live",
  ],
};

export const PARTNER_SHARE = {
  heading: "Real numbers. Honestly framed.",
  intro:
    "Here's what a single machine is projected to generate at a mid-footfall location, per the submitted location-partner proposal.",
  figures: [
    {
      value: 100000,
      prefix: "₹",
      label: "avg. monthly gross revenue / machine",
      tag: "Projected",
    },
    { value: 10000, prefix: "₹", label: "your monthly share (10%)", tag: "Projected" },
    { value: 2000, prefix: "₹", label: "monthly electricity reimbursement", tag: "Fixed" },
  ],
  flow: [
    { label: "The Machine", note: "Sells to your own footfall, every day" },
    { label: "Your Share", note: "10% of gross sales, calculated automatically" },
    { label: "Your Payout", note: "Direct to your account, every month" },
  ],
  ownLine:
    "**You host the machine.** We handle stocking, servicing, and logistics — Vendingo also reimburses ₹2,000/month toward the electricity it draws.",
  disclaimer:
    "Figures are projected and vary by footfall, location type, and product mix. Actual revenue share is confirmed after site evaluation — not a guaranteed return.",
};

export const PARTNER_BENEFITS = {
  heading: "Everything you gain. Very little you manage.",
  cards: [
    {
      title: "Zero Investment",
      body: "You don't purchase the machine or pay for installation. **Vendingo funds and installs the entire setup.**",
    },
    {
      title: "Electricity Reimbursed",
      body: "The machine draws power from your premises. Vendingo reimburses **₹2,000 every month** toward that cost.",
    },
    {
      title: "10% Monthly Revenue Share",
      body: "A transparent, **live-tracked share of every month's sales** — paid to your organization, not negotiated after the fact.",
    },
    {
      title: "Full Maintenance Included",
      body: "Servicing, repairs, software updates, and preventive maintenance are **entirely on us**.",
    },
    {
      title: "Automatic Restocking",
      body: "Our operations team monitors inventory remotely and restocks **before the machine ever runs dry**.",
    },
    {
      title: "A Real Amenity",
      body: "Snacks, beverages, and daily essentials available to your people, on-site, whenever they need them — **no extra facilities burden on you**.",
    },
  ],
};

export const PARTNER_STEPS = [
  {
    n: "01",
    title: "Apply",
    body: "Submit your location details — type, footfall, address — through our partner form.",
  },
  {
    n: "02",
    title: "Site Evaluation",
    body: "Our team assesses daily footfall, accessibility, and demand to confirm machine fit and projected revenue.",
  },
  {
    n: "03",
    title: "Agreement",
    body: "We finalize a simple partnership agreement covering placement, revenue share, electricity reimbursement, and terms.",
  },
  {
    n: "04",
    title: "Installation",
    body: "We install the machine at no upfront cost to you and bring it fully online.",
  },
  {
    n: "05",
    title: "Earn Every Month",
    body: "Track sales live on your dashboard and receive your 10% share plus electricity reimbursement every month via direct payout.",
  },
];

export const PARTNER_LOCATIONS = {
  heading: "Our machines work best where people already are.",
  body: "We prioritize **high-footfall, recurring-traffic locations** — the same categories already driving our Jaipur pilot.",
  cta: "Talk to Us",
  mapEmbedSrc: "https://www.google.com/maps?q=Jaipur,Rajasthan&z=11&output=embed",
  live: [
    { name: "GCEC", query: "GCEC Jaipur" },
    { name: "VGU — Vivekananda Global University, Jagatpura", query: "Vivekananda Global University Jagatpura Jaipur" },
  ],
  categories: [
    { name: "Colleges & Coaching", detail: "High daily density, long dwell time", query: "colleges and coaching institutes in Jaipur" },
    { name: "Government Hospitals", detail: "Constant footfall, 24×7 need", query: "government hospitals in Jaipur" },
    { name: "Metro & Railway", detail: "High transient volume", query: "metro and railway stations in Jaipur" },
    { name: "Corporate Parks", detail: "Predictable daily traffic", query: "corporate parks in Jaipur" },
    { name: "Residential Societies", detail: "Repeat, loyal users", query: "residential societies in Jaipur" },
  ],
  types: [
    "Corporate Offices & IT Parks",
    "Colleges, Universities & Coaching Institutes",
    "Schools",
    "Hospitals & Clinics",
    "Residential Societies",
    "Co-working Spaces",
    "Factories & Industrial Parks",
    "Shopping Complexes & Malls",
    "Hotels & Hostels",
    "Gyms & Sports Complexes",
    "Metro Stations & Bus Terminals",
    "Government Offices",
    "Highway Petrol Stations",
  ],
};

export const PARTNER_WHY_US = {
  heading: "Why organizations choose us.",
  features: [
    "Smart, cashless (UPI) payment system",
    "Real-time inventory monitoring, visible to you",
    "Professional in-house servicing team",
    "Premium, quality-checked product range",
    "Fast, responsive customer support",
    "Transparent, live monthly revenue reporting — no black-box accounting",
  ],
};

export const PARTNER_BANNER = {
  heading: "Start earning. Without funding anything.",
  stats: [
    { value: "₹0", label: "Investment" },
    { value: "₹2,000/mo", label: "Electricity Reimbursed" },
    { value: "10%", label: "Monthly Revenue Share" },
  ],
  body: "Turn unused space into a valued amenity for your people, and a transparent, recurring income line for your organization — **tracked live, paid every month**.",
};

export const PARTNER_TESTIMONIALS = {
  heading: "What early Vendingo location partnership could look like.",
  tag: "Illustrative example — not a real customer testimonial",
  items: [
    {
      quote:
        "This is an illustrative example of a facilities head's perspective: we had a corner of our lobby doing nothing. Now it's on the dashboard earning us a share every month, and we didn't spend a rupee setting it up.",
      name: "Illustrative Facilities Head",
      place: "Corporate park, Jaipur · example scenario",
      amount: "₹10,000/mo",
    },
    {
      quote:
        "This is an illustrative example of a college admin office's perspective: our students get snacks and drinks on campus now, and the college gets a monthly payout plus electricity reimbursement for space we weren't using anyway.",
      name: "Illustrative Admin Office",
      place: "Engineering college, Jaipur · example scenario",
      amount: "₹9,200/mo",
    },
  ],
};

export const PARTNER_FAQ = [
  {
    q: "Do we have to pay for the vending machine?",
    a: "No. Vendingo funds, installs, and owns the machine. Your organization provides only the space.",
  },
  {
    q: "Will we be billed for the machine's electricity?",
    a: "The machine draws power from your premises electricity connection, but Vendingo reimburses ₹2,000 every month toward that cost as part of the partnership agreement.",
  },
  {
    q: "How exactly do we earn revenue?",
    a: "Your organization receives 10% of the machine's gross monthly sales, visible live on your dashboard, plus the ₹2,000/month electricity reimbursement — both paid out on a fixed monthly schedule.",
  },
  {
    q: "What does a location partner receive?",
    a: "Per the submitted proposal: 10% of monthly sales plus ₹2,000/month toward electricity, subject to the applicable commercial agreement.",
  },
  {
    q: "Who restocks the machine?",
    a: "Our operations team monitors stock remotely and restocks proactively — you never need to manage inventory.",
  },
  {
    q: "Who's responsible for repairs and maintenance?",
    a: "Vendingo handles all servicing, repairs, software updates, and preventive maintenance at no cost to you.",
  },
  {
    q: "What does our organization actually need to do?",
    a: "Provide the installation space and basic access for our servicing team. Everything else — stocking, maintenance, support, payouts — is on us.",
  },
  {
    q: "Is the revenue share negotiable or does it change?",
    a: "The 10% share and ₹2,000/month electricity reimbursement are fixed and confirmed in your partnership agreement after site evaluation, so there are no surprises month to month.",
  },
];

export const PARTNER_FINAL_CTA = {
  heading: "Your space could be earning right now.",
  body: "Join our founding location partners. **Limited installation slots** in the current pilot phase.",
  cta: "Partner Your Location",
  sub: "No obligation. Our team will get in touch **within 24 hours** of your application.",
};
