export type CategoryId =
  | "urology"
  | "ayurveda"
  | "adult-nutrition"
  | "children-nutrition"
  | "cosmetic"
  | "beauty-nutrition";

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  pack: string;
  format: string;
  image: string;
  isNew?: boolean;
  featured?: boolean;
  variants?: string;
  composition: string;
  summary: string;
  uses: string[];
  notes?: string;
  professional?: boolean;
};

export const categories: {
  id: CategoryId;
  name: string;
  short: string;
  description: string;
}[] = [
  {
    id: "urology",
    name: "Urology",
    short: "Urinary, prostate and kidney-care range",
    description:
      "A focused urology portfolio covering urinary flow, prostate wellness, kidney-stone support and UTI-related care.",
  },
  {
    id: "ayurveda",
    name: "Ayurveda",
    short: "Traditional wellness category",
    description:
      "Classical botanical formulations selected for everyday wellness, vitality and supportive care.",
  },
  {
    id: "adult-nutrition",
    name: "Adult Nutrition",
    short: "Everyday nutritional support",
    description:
      "Practical adult nutrition covering protein, omega, vitamin D, immunity and daily micronutrient support.",
  },
  {
    id: "children-nutrition",
    name: "Children Nutrition",
    short: "Nutrition for growing families",
    description: "Age-appropriate nutritional formats for growing children.",
  },
  {
    id: "cosmetic",
    name: "Cosmetic",
    short: "Personal-care category",
    description: "Everyday personal-care products for skin comfort, hydration and hygiene.",
  },
  {
    id: "beauty-nutrition",
    name: "Beauty Nutrition",
    short: "Wellness from within",
    description: "Nutritional beauty support intended to complement a balanced diet.",
  },
];

export const products: Product[] = [
  {
    slug: "tamsulosin-0-4mg",
    name: "Tamsulosin 0.4 mg Capsules",
    category: "urology",
    pack: "10 × 10 Capsules",
    format: "Capsules",
    image: "/products/tamsulosin.png",
    isNew: true,
    featured: true,
    professional: true,
    composition: "Tamsulosin Hydrochloride 0.4 mg",
    summary:
      "Tamsulosin 0.4 mg is a capsule formulation used in benign prostatic hyperplasia and lower urinary-tract symptoms, as advised by a clinician.",
    uses: ["Urinary flow support in BPH", "Lower urinary-tract symptom care under medical advice"],
    notes: "Prescription product. Use only as directed by a registered medical practitioner.",
  },
  {
    slug: "alfuzosin-10mg",
    name: "Alfuzosin 10 mg Tablets",
    category: "urology",
    pack: "10 × 10 Tablets",
    format: "Extended-release tablets",
    image: "/products/alfuzosin.png",
    professional: true,
    composition: "Alfuzosin Hydrochloride 10 mg (extended release)",
    summary:
      "Alfuzosin 10 mg is an extended-release tablet used in urinary obstruction and flow-related prostate care.",
    uses: ["Symptomatic urinary obstruction", "Prostate-related flow support under medical advice"],
    notes: "Prescription product. Read with the current pack insert.",
  },
  {
    slug: "silodosin-8mg",
    name: "Silodosin 8 mg Capsules",
    category: "urology",
    pack: "10 × 10 Capsules",
    format: "Capsules",
    image: "/products/silodosin.png",
    professional: true,
    composition: "Silodosin 8 mg",
    summary:
      "Silodosin 8 mg is a capsule formulation used in benign prostatic hyperplasia under medical supervision.",
    uses: ["BPH-related urinary symptoms", "Professional urology care"],
    notes: "Prescription product.",
  },
  {
    slug: "finasteride-5mg",
    name: "Finasteride 5 mg Tablets",
    category: "urology",
    pack: "10 × 10 Tablets",
    format: "Tablets",
    image: "/products/finasteride.png",
    professional: true,
    composition: "Finasteride 5 mg",
    summary:
      "Finasteride 5 mg is a tablet formulation used in professionally directed prostate-care protocols.",
    uses: ["Prostate-care protocols as prescribed"],
    notes: "Prescription product. Not for use in women or children.",
  },
  {
    slug: "dutasteride-0-5mg",
    name: "Dutasteride 0.5 mg Capsules",
    category: "urology",
    pack: "10 × 10 Capsules",
    format: "Capsules",
    image: "/products/dutasteride.png",
    isNew: true,
    professional: true,
    composition: "Dutasteride 0.5 mg",
    summary:
      "Dutasteride 0.5 mg is a capsule formulation used in selected benign prostatic hyperplasia care plans.",
    uses: ["BPH care as prescribed"],
    notes: "Prescription product.",
  },
  {
    slug: "potassium-citrate-solution",
    name: "Potassium Citrate Oral Solution",
    category: "urology",
    pack: "200 ml",
    format: "Oral solution",
    image: "/products/potassium-citrate.png",
    isNew: true,
    featured: true,
    composition: "Potassium Citrate oral solution",
    summary:
      "Potassium Citrate oral solution is used as alkalinising support in kidney-stone care pathways.",
    uses: ["Urinary alkalinisation as advised", "Supportive care in selected renal-stone protocols"],
  },
  {
    slug: "solifenacin-5mg",
    name: "Solifenacin 5 mg Tablets",
    category: "urology",
    pack: "10 × 10 Tablets",
    format: "Tablets",
    image: "/products/solifenacin.png",
    isNew: true,
    professional: true,
    composition: "Solifenacin Succinate 5 mg",
    summary:
      "Solifenacin 5 mg is a tablet formulation used in overactive-bladder care under medical advice.",
    uses: ["Urgency and frequency support under medical care", "Overactive-bladder symptom management"],
    notes: "Prescription product. Not for self-medication.",
  },
  {
    slug: "nitrofurantoin-100mg",
    name: "Nitrofurantoin 100 mg Tablets",
    category: "urology",
    pack: "10 × 10 Tablets",
    format: "Tablets",
    image: "/products/nitrofurantoin.png",
    professional: true,
    composition: "Nitrofurantoin 100 mg",
    summary:
      "Nitrofurantoin 100 mg is used in professionally directed urinary-tract infection care.",
    uses: ["Clinician-directed UTI management", "Complete the prescribed course"],
    notes: "Prescription product.",
  },
  {
    slug: "cranberry-extract",
    name: "Cranberry Extract 500 mg Capsules",
    category: "urology",
    pack: "30 Capsules",
    format: "Capsules",
    image: "/products/cranberry.png",
    featured: true,
    composition: "Cranberry extract 500 mg with D-Mannose",
    summary:
      "Cranberry Extract 500 mg capsules are used for urinary-tract wellness support alongside hygiene and professional advice.",
    uses: ["Urinary-tract wellness support", "Adjunct in recurrent UTI contexts as advised"],
  },
  {
    slug: "saw-palmetto",
    name: "Saw Palmetto 320 mg Softgels",
    category: "urology",
    pack: "30 Softgels",
    format: "Softgel capsules",
    image: "/products/saw-palmetto.png",
    featured: true,
    composition: "Saw palmetto 320 mg with lycopene and zinc",
    summary:
      "Saw Palmetto 320 mg softgels are a prostate-wellness nutraceutical for adult men.",
    uses: ["Prostate wellness nutrition", "Everyday support for adult men"],
  },
  {
    slug: "ashwagandha-500mg",
    name: "Ashwagandha 500 mg Capsules",
    category: "ayurveda",
    pack: "60 Capsules",
    format: "Capsules",
    image: "/products/ashwagandha.png",
    composition: "Withania somnifera (Ashwagandha) root extract 500 mg",
    summary:
      "Ashwagandha 500 mg capsules are used for everyday vitality and stress-wellness support.",
    uses: ["Daily vitality support", "Traditional adaptogenic wellness"],
  },
  {
    slug: "shilajit-capsules",
    name: "Shilajit Capsules",
    category: "ayurveda",
    pack: "30 Capsules",
    format: "Capsules",
    image: "/products/shilajit.png",
    composition: "Purified Shilajit extract",
    summary: "Shilajit capsules are a traditional vitality supplement in a 30-count bottle.",
    uses: ["Traditional stamina and vitality support"],
  },
  {
    slug: "triphala-tablets",
    name: "Triphala Tablets",
    category: "ayurveda",
    pack: "10 × 10 Tablets",
    format: "Tablets",
    image: "/products/triphala.png",
    composition: "Haritaki, Bibhitaki and Amalaki",
    summary: "Triphala tablets support digestive wellness in the classical Ayurvedic tradition.",
    uses: ["Digestive regularity support", "Everyday gut wellness"],
  },
  {
    slug: "shallaki-tablets",
    name: "Shallaki (Boswellia) Tablets",
    category: "ayurveda",
    pack: "10 × 10 Tablets",
    format: "Tablets",
    image: "/products/shallaki.png",
    composition: "Boswellia serrata (Shallaki) extract",
    summary: "Shallaki tablets are used for joint-comfort wellness support.",
    uses: ["Joint comfort support", "Mobility-oriented Ayurvedic care"],
  },
  {
    slug: "punarnava-tablets",
    name: "Punarnava Tablets",
    category: "ayurveda",
    pack: "10 × 10 Tablets",
    format: "Tablets",
    image: "/products/punarnava.png",
    isNew: true,
    composition: "Boerhavia diffusa (Punarnava) extract",
    summary: "Punarnava tablets are used for traditional kidney and fluid-balance wellness support.",
    uses: ["Traditional kidney wellness", "Ayurvedic supportive care"],
  },
  {
    slug: "gokshura-capsules",
    name: "Gokshura 500 mg Capsules",
    category: "ayurveda",
    pack: "60 Capsules",
    format: "Capsules",
    image: "/products/gokshura.png",
    composition: "Tribulus terrestris (Gokshura) extract 500 mg",
    summary: "Gokshura 500 mg capsules support urinary and vitality wellness.",
    uses: ["Traditional urinary wellness", "Adult vitality support"],
  },
  {
    slug: "omega-3-1000mg",
    name: "Omega-3 Fish Oil 1000 mg",
    category: "adult-nutrition",
    pack: "30 Softgels",
    format: "Softgel capsules",
    image: "/products/omega3.png",
    featured: true,
    variants: "Also available as 10 × 10 strip pack.",
    composition: "EPA and DHA from fish oil 1000 mg",
    summary: "Omega-3 Fish Oil 1000 mg softgels for everyday heart and wellness nutrition.",
    uses: ["Everyday omega-3 nutrition", "Heart and wellness support as part of diet"],
  },
  {
    slug: "whey-protein-250g",
    name: "Whey Protein Powder 250 g",
    category: "adult-nutrition",
    pack: "250 g",
    format: "Powder",
    image: "/products/whey-protein.png",
    featured: true,
    variants: "Available as Vanilla and Chocolate.",
    composition: "Whey protein with vitamins and minerals",
    summary: "Whey Protein Powder 250 g for daily protein nutrition, available in Vanilla and Chocolate.",
    uses: ["Daily protein nutrition", "Recovery and everyday strength support"],
  },
  {
    slug: "vitamin-d3-60000iu",
    name: "Vitamin D3 60,000 IU Nano Shots",
    category: "adult-nutrition",
    pack: "4 × 5 ml",
    format: "Oral liquid shots",
    image: "/products/vitamin-d3.png",
    isNew: true,
    composition: "Cholecalciferol (Vitamin D3) 60,000 IU",
    summary: "Vitamin D3 60,000 IU nano shots supplied as 4 × 5 ml for vitamin D nutrition support.",
    uses: ["Vitamin D nutritional support", "Bone and calcium-pathway wellness"],
  },
  {
    slug: "zinc-vitamin-c",
    name: "Zinc + Vitamin C Tablets",
    category: "adult-nutrition",
    pack: "10 × 10 Tablets",
    format: "Tablets",
    image: "/products/zinc-vitamin-c.png",
    isNew: true,
    composition: "Zinc, Vitamin C and L-Lysine",
    summary: "Zinc + Vitamin C tablets for everyday immunity nutrition.",
    uses: ["Immunity nutrition support", "Daily micronutrient top-up"],
  },
  {
    slug: "b-complex-capsules",
    name: "B-Complex Capsules",
    category: "adult-nutrition",
    pack: "10 × 10 Capsules",
    format: "Capsules",
    image: "/products/b-complex.png",
    composition: "Vitamin B-complex with folic acid",
    summary: "B-Complex capsules for energy-metabolism nutrition.",
    uses: ["B-vitamin nutritional support", "Everyday energy-pathway wellness"],
  },
  {
    slug: "calcium-vitamin-d3",
    name: "Calcium + Vitamin D3 Tablets",
    category: "adult-nutrition",
    pack: "10 × 10 Tablets",
    format: "Tablets",
    image: "/products/calcium-d3.png",
    composition: "Calcium citrate with Vitamin D3",
    summary: "Calcium + Vitamin D3 tablets for bone-nutrition support.",
    uses: ["Bone nutrition support", "Calcium pathway wellness"],
  },
  {
    slug: "multivitamin-syrup",
    name: "Multivitamin Syrup",
    category: "children-nutrition",
    pack: "200 ml",
    format: "Syrup",
    image: "/products/kids-syrup.png",
    isNew: true,
    composition: "Paediatric multivitamin and mineral syrup",
    summary: "Multivitamin Syrup 200 ml for growing children.",
    uses: ["Daily micronutrient support in children"],
  },
  {
    slug: "kids-protein-powder",
    name: "Kids Protein Powder 200 g",
    category: "children-nutrition",
    pack: "200 g",
    format: "Powder",
    image: "/products/kids-protein.png",
    composition: "Child-appropriate protein with vitamins",
    summary: "Kids Protein Powder 200 g for nutritional support in growing families.",
    uses: ["Supplementary protein nutrition for children"],
  },
  {
    slug: "vitamin-d3-drops",
    name: "Vitamin D3 Oral Drops",
    category: "children-nutrition",
    pack: "15 ml",
    format: "Oral drops",
    image: "/products/vitamin-d3-drops.png",
    composition: "Cholecalciferol (Vitamin D3) oral drops",
    summary: "Vitamin D3 oral drops 15 ml for paediatric nutritional support.",
    uses: ["Paediatric vitamin D nutrition"],
  },
  {
    slug: "aloe-vera-gel",
    name: "Aloe Vera Gel 100 g",
    category: "cosmetic",
    pack: "100 g",
    format: "Gel",
    image: "/products/aloe-gel.png",
    composition: "Aloe vera gel with light humectants",
    summary: "Aloe Vera Gel 100 g for everyday skin comfort.",
    uses: ["After-sun and everyday skin soothing", "Light hydration"],
  },
  {
    slug: "body-lotion",
    name: "Moisturising Body Lotion 200 ml",
    category: "cosmetic",
    pack: "200 ml",
    format: "Lotion",
    image: "/products/body-lotion.png",
    composition: "Glycerin, shea and lightweight emollients",
    summary: "Moisturising Body Lotion 200 ml for daily skin hydration.",
    uses: ["Daily body hydration", "Dry-skin comfort"],
  },
  {
    slug: "antiseptic-handwash",
    name: "Antiseptic Handwash 250 ml",
    category: "cosmetic",
    pack: "250 ml",
    format: "Liquid wash",
    image: "/products/handwash.png",
    composition: "Mild surfactant system with aloe",
    summary: "Antiseptic Handwash 250 ml for everyday hygiene.",
    uses: ["Daily hand hygiene"],
  },
  {
    slug: "glutathione-sachets",
    name: "L-Glutathione 500 mg Sachets",
    category: "beauty-nutrition",
    pack: "2 g × 10 Sachets",
    format: "Oral powder",
    image: "/products/glutathione.png",
    featured: true,
    composition: "L-Glutathione 500 mg with vitamin C",
    summary: "L-Glutathione 500 mg sachets for beauty-nutrition support from within.",
    uses: ["Nutritional glow support", "Antioxidant wellness alongside diet"],
  },
  {
    slug: "biotin-10000mcg",
    name: "Biotin 10,000 mcg Capsules",
    category: "beauty-nutrition",
    pack: "30 Capsules",
    format: "Capsules",
    image: "/products/biotin.png",
    composition: "Biotin 10,000 mcg with zinc and selenium",
    summary: "Biotin 10,000 mcg capsules for hair and nail nutritional support.",
    uses: ["Hair and nail nutritional support"],
  },
  {
    slug: "collagen-peptides",
    name: "Collagen Peptides Powder 150 g",
    category: "beauty-nutrition",
    pack: "150 g",
    format: "Powder",
    image: "/products/collagen.png",
    composition: "Hydrolysed collagen peptides",
    summary: "Collagen Peptides Powder 150 g for skin-nutrition support.",
    uses: ["Collagen nutritional support", "Beauty-from-within routines"],
  },
];

export function getCategory(id: CategoryId) {
  return categories.find((c) => c.id === id)!;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(id: CategoryId) {
  return products.filter((p) => p.category === id);
}

export function featuredProducts() {
  return products.filter((p) => p.featured);
}

export function newProducts() {
  return products.filter((p) => p.isNew);
}
