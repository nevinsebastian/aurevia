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

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const nav: NavItem[] = [
  {
    href: "/our-company",
    label: "Our Company",
    children: [
      { href: "/our-company", label: "Who We Are" },
      { href: "/our-company/purpose", label: "Our Purpose" },
      { href: "/sustainability", label: "Sustainability & Impact" },
    ],
  },
  {
    href: "/science",
    label: "Science",
    children: [
      { href: "/science", label: "Research & Development" },
      { href: "/science/pipeline", label: "R&D Pipeline" },
      { href: "/science/therapeutic-areas", label: "Therapeutic Areas" },
      { href: "/science/clinical-trials", label: "Clinical Trials" },
    ],
  },
  {
    href: "/solutions",
    label: "Our Solutions",
    children: [
      { href: "/solutions", label: "How We Serve Patients" },
      { href: "/science/therapeutic-areas", label: "Urology & Specialty Care" },
    ],
  },
  { href: "/patients", label: "Patients" },
  { href: "/news", label: "News" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];
