export const company = {
  name: "Aurevia Life Sciences",
  shortName: "Aurevia",
  legalName: "Aurevia Life Sciences",
  purpose: "We are all in for better health.",
  tagline: "Innovation • Health • A Better Tomorrow",
  phone: "+91 99959 99000",
  phoneRaw: "919995999000",
  whatsapp: "919995999000",
};

export function waLink(text?: string) {
  const message =
    text ?? `Hello ${company.shortName}, I would like to learn more about Aurevia Life Sciences.`;
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:+${company.phoneRaw}`;
}

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
