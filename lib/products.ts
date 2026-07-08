import { getProductImages, type ProductImages } from "@/lib/imageAssets";

// Top-level spaces
export type CategoryId = "living" | "study" | "bedroom";

export type Category = {
  id: CategoryId;
  title: string;
  description: string;
};

export const categories: Category[] = [
  {
    id: "living",
    title: "Living Room",
    description: "Sofas, pet chairs, tables and media cabinets with nooks and dens built in.",
  },
  {
    id: "study",
    title: "Study",
    description: "Desks, cat-climb walls and litter cabinets for a calm, shared workspace.",
  },
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Beds, wardrobes and nightstands with a safe, quiet space for your pet.",
  },
];

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  subcategory: string;
  folder: string; // path under public/images
  tagline: string;
  description: string;
  details: string[];
};

export type HydratedProduct = Product & ProductImages;

const PLACEHOLDER_DETAILS = [
  "Configuration - [options to be confirmed]",
  "Dimensions - [W___ x D___ x H___ cm]",
  "Upholstery - [available fabrics & finishes]",
  "Handcrafted to order in our Foshan atelier",
  "Custom sizing and materials on request",
];

const products: Product[] = [
  // ---------------- LIVING ROOM ----------------
  {
    slug: "pet-den-sofa",
    name: "Pet-Den Sofa",
    category: "living",
    subcategory: "Sofas",
    folder: "Living/Sofas",
    tagline: "A sofa with a den built in.",
    description:
      "A soft, modular sofa with a warm, semi-open den tucked into the base - so your pet rests close by while you relax above. Clean curves and calm tones let it settle quietly into a modern living room.",
    details: PLACEHOLDER_DETAILS,
  },
  {
    slug: "nook-sectional",
    name: "Nook Sectional",
    category: "living",
    subcategory: "Sofas",
    folder: "Living/Sofas",
    tagline: "Wraparound comfort, hidden nooks.",
    description:
      "A generous curved sectional that wraps a room in comfort, with discreet pet nooks worked into its form. Built for families - two-legged and four - to gather and unwind together.",
    details: PLACEHOLDER_DETAILS,
  },
  {
    slug: "cocoon-pet-chair",
    name: "Cocoon Pet Chair",
    category: "living",
    subcategory: "Pet Chairs",
    folder: "Living/PetChairs",
    tagline: "A quiet corner of their own.",
    description:
      "A sculptural lounge chair with a cocooned pet space beneath the seat. A reading chair for you, a safe hideaway for them - one calm, beautiful piece.",
    details: PLACEHOLDER_DETAILS,
  },
  {
    slug: "hidden-den-coffee-table",
    name: "Hidden-Den Coffee Table",
    category: "living",
    subcategory: "Coffee & Side Tables",
    folder: "Living/Tables",
    tagline: "A centrepiece that hides a retreat.",
    description:
      "A softly rounded coffee table with a cushioned den opening at its base. A calm focal point for the living room by day, a cosy retreat for your pet at any hour.",
    details: PLACEHOLDER_DETAILS,
  },
  {
    slug: "nest-side-table",
    name: "Nest Side Table",
    category: "living",
    subcategory: "Coffee & Side Tables",
    folder: "Living/Tables",
    tagline: "A little nest beside the sofa.",
    description:
      "A compact side table with a snug nest tucked underneath - a place for a lamp and a book on top, and a favourite napping spot below.",
    details: PLACEHOLDER_DETAILS,
  },
  {
    slug: "co-living-media-cabinet",
    name: "Co-Living Media Cabinet",
    category: "living",
    subcategory: "Media Cabinets",
    folder: "Living/MediaCabinets",
    tagline: "Storage, screen and shelter in one.",
    description:
      "A long, low media cabinet that folds a pet den and discreet storage into the TV wall. Considered detailing keeps pet spaces feeling like part of the design, not an add-on.",
    details: PLACEHOLDER_DETAILS,
  },

  // ---------------- STUDY ----------------
  {
    slug: "companion-desk",
    name: "Companion Desk",
    category: "study",
    subcategory: "Desks",
    folder: "Study/Desks",
    tagline: "Work with them close by.",
    description:
      "A calm, clean-lined desk with a warm pet nook within reach - so your companion can settle nearby while you work. Quiet focus for you, quiet company for them.",
    details: PLACEHOLDER_DETAILS,
  },
  {
    slug: "cat-climb-wall-system",
    name: "Cat-Climb Wall System",
    category: "study",
    subcategory: "Cat-Climb Walls",
    folder: "Study/CatWalls",
    tagline: "Vertical play, wall-mounted calm.",
    description:
      "A modular wall system of ledges, steps and replaceable scratch panels that turns an empty wall into a climbing route. Play and rest, designed as part of the room rather than bolted onto it.",
    details: PLACEHOLDER_DETAILS,
  },
  {
    slug: "litter-cabinet",
    name: "Litter Cabinet",
    category: "study",
    subcategory: "Litter Cabinets & Storage",
    folder: "Study/Storage",
    tagline: "The litter box, beautifully hidden.",
    description:
      "A discreet cabinet that conceals the litter box behind a clean, furniture-grade front, with a side entry for your cat and airflow built in. Tidy, private, and easy to keep clean.",
    details: PLACEHOLDER_DETAILS,
  },
  {
    slug: "storage-bench",
    name: "Storage Bench",
    category: "study",
    subcategory: "Litter Cabinets & Storage",
    folder: "Study/Storage",
    tagline: "A seat, storage and a nook.",
    description:
      "A window-side bench with generous storage and a soft pet nook at one end. A place to sit and put things away, with a sunny spot reserved for your companion.",
    details: PLACEHOLDER_DETAILS,
  },

  // ---------------- BEDROOM ----------------
  {
    slug: "co-sleep-bed",
    name: "Co-Sleep Bed",
    category: "bedroom",
    subcategory: "Beds",
    folder: "Bedroom/Beds",
    tagline: "Rest together, undisturbed.",
    description:
      "A softly upholstered bed with a dedicated pet compartment set into its low base - close enough for company, separate enough for a good night's sleep for you both.",
    details: PLACEHOLDER_DETAILS,
  },
  {
    slug: "wardrobe-pet-nook",
    name: "Wardrobe with Pet Nook",
    category: "bedroom",
    subcategory: "Wardrobes",
    folder: "Bedroom/Wardrobes",
    tagline: "Full-height storage, a cosy corner.",
    description:
      "A full-height wardrobe with configurable interiors and a warm pet nook built into the base - making room for your wardrobe and your companion in one quiet piece.",
    details: PLACEHOLDER_DETAILS,
  },
  {
    slug: "pet-nightstand",
    name: "Pet Nightstand",
    category: "bedroom",
    subcategory: "Other",
    folder: "Bedroom/Other",
    tagline: "A bedside nest within reach.",
    description:
      "A rounded nightstand with a small nest tucked beneath the top - a place for your things at arm's length, and a calm spot for your pet right beside the bed.",
    details: PLACEHOLDER_DETAILS,
  },
];

export function getProducts(): HydratedProduct[] {
  return products.map((product) => ({
    ...product,
    ...getProductImages(product.folder),
  }));
}

export function getProductsByCategory(category: CategoryId): HydratedProduct[] {
  return getProducts().filter((product) => product.category === category);
}

export function getProductSlugs(): string[] {
  return products.map((product) => product.slug);
}

export function getProductBySlug(slug: string): HydratedProduct | null {
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    return null;
  }
  return { ...product, ...getProductImages(product.folder) };
}
