export const company = {
  name: "Aurevia Life Sciences",
  shortName: "Aurevia",
  legalName: "Aurevia Life Sciences",
  tagline: "Innovation • Health • A Better Tomorrow",
  heroEyebrow: "Healthcare & Wellness",
  heroTitle: "Trusted Healthcare and Wellness Solutions",
  heroLead:
    "Discover practical nutraceutical, nutritional, Ayurvedic and urology-focused wellness products from a professionally driven healthcare marketing organisation.",
  phone: "+91 99959 99000",
  phoneRaw: "919995999000",
  whatsapp: "919995999000",
};

export function waLink(text?: string) {
  const message =
    text ?? `Hello ${company.shortName}, I would like to enquire about your products.`;
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:+${company.phoneRaw}`;
}

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/new-products", label: "New Products" },
  { href: "/about", label: "About Us" },
  { href: "/where-to-buy", label: "Where to Buy" },
  { href: "/contact", label: "Contact" },
  { href: "/health-insights", label: "Health Insights" },
];

export const whyPoints = [
  {
    title: "Practical Product Portfolio",
    text: "A relevant range shaped around everyday nutrition, wellness and urology care needs.",
  },
  {
    title: "Responsible Communication",
    text: "Clear product information designed to be read with current labels and professional advice.",
  },
  {
    title: "Reliable Partner Network",
    text: "Working through established professional, retail and marketplace relationships.",
  },
  {
    title: "Selected Purchase Paths",
    text: "Marketplace links lead to selected storefront and marketer pages.",
  },
];
