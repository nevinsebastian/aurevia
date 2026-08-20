export const company = {
  name: "Aurevia Life Sciences",
  shortName: "Aurevia",
  legalName: "Aurevia Life Sciences",
  purpose: "We are all in for better health.",
  tagline: "Innovation • Health • A Better Tomorrow",
  inboxEmail: process.env.NEXT_PUBLIC_INBOX_EMAIL ?? "mail@aurevialifesciences.org",
  offices: [
    {
      entity: "Aurevia Life Sciences LLC",
      region: "Dubai, UAE",
      lines: [
        "South Tower Dubai Science Park, Dubai - UAE",
        "P. O Box - 231660",
      ],
    },
    {
      entity: "Aurevia Life Sciences Pvt Ltd",
      region: "Hyderabad, India",
      lines: [
        "Plot No. 19/1, Sector-III, HUDA Techno Enclave,",
        "HITEC City, Hyderabad, Telangana 500081",
      ],
    },
    {
      entity: "Aurevia Life Sciences Pvt Ltd",
      region: "Kochi, India",
      lines: [
        "HIT/01-24, KINFRA Hi-Tech Park,",
        "North Kalamassery, Kochi, Kerala 683503",
      ],
    },
  ],
};

export type NavChild = { href: string; label: string };

export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export const nav: NavItem[] = [
  {
    href: "/our-company",
    label: "Company",
    children: [
      { href: "/our-company", label: "About Aurevia" },
      { href: "/our-company/purpose", label: "Leadership & Purpose" },
      { href: "/sustainability", label: "Sustainability & Impact" },
    ],
  },
  {
    href: "/science",
    label: "Our Science",
    children: [
      { href: "/science/pipeline", label: "R&D Pipeline" },
      { href: "/science/therapeutic-areas", label: "Innovative Therapeutic Areas" },
      { href: "/science/clinical-trials", label: "Clinical Trials" },
      { href: "/science", label: "Collaborative Research" },
    ],
  },
  {
    href: "/solutions",
    label: "Solutions",
    children: [
      { href: "/solutions", label: "How We Serve Patients" },
      { href: "/science/therapeutic-areas", label: "Urology & Specialty Care" },
    ],
  },
  {
    href: "/patients",
    label: "Patients & Caregivers",
    children: [
      { href: "/patients", label: "Patient Resources" },
      { href: "/science/clinical-trials", label: "Find a Trial" },
    ],
  },
  {
    href: "/news",
    label: "Newsroom",
    children: [
      { href: "/news", label: "Press Releases" },
      { href: "/news/pivot-to-growth", label: "Latest Stories" },
    ],
  },
  { href: "/careers", label: "Your Career" },
  { href: "/investors", label: "Investors" },
];
