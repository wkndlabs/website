export interface Project {
  slug: string;
  name: string;
  sector: string;
  category: string;
  years: string;
  url: string;
  urlLabel: string;
  summary: string;
  cardSummary: string;
  hero: string;
  detail: string;
  detailWide?: boolean;
  meta: { label: string; value: string }[];
  brief: string;
  approach: string;
  steps: { title: string; text: string }[];
  results: string[];
  outcome: string;
  quote?: { text: string; source: string };
}

export const projects: Project[] = [
  {
    slug: "discount-drug-network",
    name: "Discount Drug Network",
    sector: "Healthcare",
    category: "API & platform",
    years: "2022 – 2025",
    url: "https://discountdrugnetwork.com",
    urlLabel: "discountdrugnetwork.com",
    summary:
      "A drug pricing API and consumer platform that helps people find discounted prescriptions and compare costs across pharmacies.",
    cardSummary:
      "A pharmaceutical drug pricing API and the consumer platform that helps people compare prescription costs across pharmacies.",
    hero: "/static/work/discountdrugnetwork.webp",
    detail: "/static/discountdrugnetwork.webp",
    meta: [
      { label: "Client", value: "Discount Drug Network" },
      { label: "Stage", value: "Series A" },
      { label: "Timeline", value: "2022 – 2025" },
      { label: "Services", value: "Strategy, design, engineering" },
      { label: "Stack", value: "PHP, TypeScript, Tailwind" },
    ],
    brief:
      "US drug pricing is notoriously opaque. Discount Drug Network needed an enterprise-grade pricing API and a consumer service on top of it, so anyone could look up a prescription and see what it should cost before reaching the pharmacy counter.",
    approach:
      "We built a search-first web application around lookup speed, with an interface that works for people who have never thought about how drug pricing works.",
    steps: [
      { title: "Search", text: "A lookup flow that cuts the steps between a search and a price." },
      { title: "Compare", text: "Pharmacy price comparison and discount cards in one place." },
      { title: "Access", text: "A clean, accessible interface for a broad consumer audience." },
    ],
    results: [
      "A fast web platform with search-first drug pricing",
      "Pharmacy comparison and discount card functionality",
      "A lookup flow optimized to minimize steps to results",
      "An accessible interface for non-technical users",
    ],
    outcome: "The result gives consumers a direct way to see and compare prescription prices.",
  },
  {
    slug: "flosstime",
    name: "Flosstime",
    sector: "Dental",
    category: "Booking platform",
    years: "2023 – Now",
    url: "https://flosstime.com",
    urlLabel: "flosstime.com",
    summary:
      "Booking for a mobile dental service that brings cleanings, exams, X-rays, whitening, and fillings to corporate offices.",
    cardSummary:
      "Booking for a mobile dental service that brings cleanings, exams, and whitening to corporate offices through on-site events.",
    hero: "/static/work/flosstime.webp",
    detail: "/static/flosstime.webp",
    detailWide: true,
    meta: [
      { label: "Client", value: "Flosstime" },
      { label: "Timeline", value: "2023 – Now" },
      { label: "Services", value: "Strategy, design, engineering" },
      { label: "Stack", value: "Next.js, React, TypeScript, Tailwind" },
    ],
    brief:
      "Flosstime runs mobile dental pop-ups at corporate offices, staffed by licensed dentists and hygienists. Employees often skip the dental benefits they already have, so booking a visit had to be as easy as picking a time slot.",
    approach:
      "We built a platform with two sides: one for the HR teams who bring Flosstime on site, and one for the employees who book during each event.",
    steps: [
      { title: "HR teams", text: "A flow for scheduling 3–5 day on-site visits, with marketing support." },
      { title: "Employees", text: "Booking through custom links created for each company event." },
      { title: "Insurance", text: "Verification with providers including Delta Dental, Aetna, Cigna, and MetLife." },
    ],
    results: [
      "An end-to-end platform for HR coordination and employee scheduling",
      "Custom booking links per company for multi-day events",
      "Integration with Delta Dental, Aetna, and Cigna",
      "Less friction between employees and their dental benefits",
    ],
    outcome: "The platform continues to support Flosstime's on-site events.",
    quote: {
      text: "Seriously, the best. There is no better team to help you build some internal applications. They are fast, efficient, and have a great eye for design.",
      source: "Flosstime",
    },
  },
  {
    slug: "boston-junior-bruins",
    name: "Boston Junior Bruins",
    sector: "Sports",
    category: "Web platform",
    years: "2022 – 2023",
    url: "https://bostonjuniorbruins.com",
    urlLabel: "bostonjuniorbruins.com",
    summary:
      "A network of sites for a top 10 North American amateur hockey program, founded in 1991.",
    cardSummary:
      "A network of sites for a nationally ranked youth hockey program whose alumni have earned over $50 million in college scholarships.",
    hero: "/static/work/bostonjuniorbruins.webp",
    detail: "/static/bostonjuniorbruins.webp",
    meta: [
      { label: "Client", value: "Boston Junior Bruins" },
      { label: "Timeline", value: "2022 – 2023" },
      { label: "Services", value: "Design, engineering" },
      { label: "Stack", value: "PHP, TypeScript, Tailwind" },
    ],
    brief:
      "The Boston Junior Bruins run multiple teams across age groups and competitive levels, and their alumni have earned over $50 million in college scholarships. Their existing web setup was fragmented and hard to maintain.",
    approach:
      "We built a set of interconnected sites on a shared design system and component library, so every team could run its own site under one brand.",
    steps: [
      { title: "Design system", text: "A shared component library behind every team site." },
      { title: "Content layer", text: "One home for rosters, schedules, tournaments, tryouts, and news." },
      { title: "Alumni", text: "A showcase of players advancing to college and professional hockey." },
    ],
    results: [
      "A multi-site network serving teams across age groups and leagues",
      "Shared content infrastructure for rosters, events, tryouts, and news",
      "A unified brand across the organization",
      "An architecture that adds new team sites without a rebuild",
    ],
    outcome: "The organization now runs on one platform instead of a set of disconnected sites.",
  },
  {
    slug: "palmer-pads",
    name: "Palmer Pads",
    sector: "Manufacturing",
    category: "Design & build",
    years: "2022",
    url: "https://palmerpads.com",
    urlLabel: "palmerpads.com",
    summary:
      "Brand site and product catalog for North America's largest manufacturer of protective elevator pads.",
    cardSummary:
      "Brand site and product catalog for a Boston manufacturer of protective elevator pads and hanging systems.",
    hero: "/static/work/palmerpads.webp",
    detail: "/static/palmerpads.webp",
    meta: [
      { label: "Client", value: "Palmer Pads" },
      { label: "Timeline", value: "2022" },
      { label: "Services", value: "Design, engineering" },
      { label: "Stack", value: "Next.js, React, Tailwind, Vercel" },
    ],
    brief:
      "Palmer Pads is a Boston-based manufacturer with a large catalog and an outdated website. It needed a site that made the range easy to navigate and made ordering straightforward.",
    approach:
      "We designed and built the site from scratch, organizing the catalog into clear product lines and putting the paths to a quote up front.",
    steps: [
      { title: "Catalog", text: "Three lines: pads, hanging and mounting systems, and accessories." },
      { title: "Ordering", text: "Quote requests and same-day rush order flows." },
      { title: "Trust", text: "Fire-retardant certifications and domestic manufacturing up front." },
    ],
    results: [
      "A new brand site, designed and built from scratch",
      "A catalog organized into three product lines",
      "Quote request and same-day rush order flows",
      "Clear placement for certifications and domestic manufacturing",
    ],
    outcome: "The new site replaced the outdated one and gives customers a direct route to a quote.",
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
