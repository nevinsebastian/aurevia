export const insights = [
  {
    slug: "prostate-health-after-40",
    category: "Urology",
    title: "Prostate health after 40: a practical primer",
    excerpt:
      "What changing urinary flow can mean, when to speak with a clinician, and how nutrition fits alongside medical care.",
    readTime: "5 min",
    body: [
      "Urinary flow, night-time frequency and hesitation become more common in adult men after 40. These changes are not a diagnosis on their own, but they are a reason to talk to a doctor rather than self-treat.",
      "Clinicians often assess prostate size, urinary symptoms and related metabolic health. Prescription urology medicines, when used, belong in that professional pathway — not as over-the-counter experiments.",
      "Nutrition can sit beside care: adequate hydration, measured protein, and clinician-advised prostate-wellness nutraceuticals such as saw palmetto combinations. They do not replace examination or prescribed treatment.",
      "If you notice blood in urine, painful retention, fever or sudden inability to pass urine, seek urgent medical help.",
    ],
  },
  {
    slug: "kidney-stone-prevention",
    category: "Urology",
    title: "Kidney stone prevention: hydration and citrate",
    excerpt:
      "A plain-language look at fluid intake, citrate support and why stone care is individual.",
    readTime: "4 min",
    body: [
      "Most stone-prevention plans start with fluids. Spreading water through the day, and not only at meals, is more useful than a single large intake.",
      "Citrate formulations are sometimes used under medical guidance to support urinary alkalinisation. Pack labels and the treating clinician decide if this is appropriate.",
      "Salt, animal protein load and unassessed supplements can work against a plan. Bring your full product list to the consultation.",
      "Imaging and stone analysis, where available, help tailor advice. Website information is general and not a treatment protocol.",
    ],
  },
  {
    slug: "uti-awareness",
    category: "Urology",
    title: "UTI awareness: symptoms, support and when to seek care",
    excerpt:
      "Burning, frequency and fever need a clinical view. Nutraceutical support is adjunctive, not a substitute for antibiotics when they are indicated.",
    readTime: "4 min",
    body: [
      "Typical urinary-tract infection symptoms include burning, urgency, frequency and sometimes fever or flank pain. These need professional assessment, especially in children, pregnancy and older adults.",
      "Cranberry and D-mannose products are sometimes used as wellness adjuncts. They are not a replacement for culture-guided antibiotics when a clinician prescribes them.",
      "Hydration, emptying the bladder fully, and completing any prescribed course all matter more than adding extra products on your own.",
      "Recurrent infections deserve a urology review rather than repeated self-medication.",
    ],
  },
  {
    slug: "vitamin-d-everyday",
    category: "Adult Nutrition",
    title: "Vitamin D in everyday nutrition",
    excerpt:
      "Why vitamin D comes up so often in adult care, and how nano shots and tablets fit a measured plan.",
    readTime: "3 min",
    body: [
      "Indoor work, limited sun and dietary gaps make vitamin D a frequent finding in adult blood work. Replacement, if needed, is dose-specific.",
      "Nano shots and softgels are formats, not interchangeable doses. Always read the current label and follow professional advice.",
      "Calcium, K2 and protein sit in related bone-nutrition conversations. Stacking products without a plan is rarely helpful.",
    ],
  },
  {
    slug: "protein-for-beginners",
    category: "Adult Nutrition",
    title: "Protein for beginners",
    excerpt:
      "How protein powders complement meals, and what to look for on an adult nutrition label.",
    readTime: "4 min",
    body: [
      "Protein powders are a convenient way to close a gap — they are not a requirement for everyone. Whole foods remain the base.",
      "Look at serving size, flavour variants and whether the product is positioned for adults or children. Diabetics and people with kidney disease should ask a clinician first.",
      "Vanilla and chocolate SKUs of the same brand can differ slightly in composition. Check the pack in hand.",
    ],
  },
  {
    slug: "childrens-immunity-nutrition",
    category: "Children Nutrition",
    title: "Children’s immunity nutrition, without the noise",
    excerpt:
      "Syrups and drops can help close gaps. They do not replace sleep, food variety or vaccines.",
    readTime: "3 min",
    body: [
      "Paediatric nutrition products should be dosed by age and labelled use. Adult tablets are not a substitute.",
      "Immunity marketing is easy to over-read. Vitamin D, zinc and a varied diet are the usual, quieter foundations.",
      "If a child is unwell, losing weight or refusing feeds, see a paediatrician rather than adding more tonics.",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}
