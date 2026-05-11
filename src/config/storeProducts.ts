/**
 * Volusion Store Product Data — Extracted from public pages
 * Source: https://atosb-raxtf.volusion.store/
 * Extraction date: 2026-05-10
 * 
 * RULE: Only publicly visible data. All prices extracted from category pages.
 * Unverified fields marked with `pending-verification`.
 * Stripe price IDs are null until manually configured.
 */

export interface StoreProduct {
  id: string;
  sku: string;
  name: string;
  price: number;
  priceVerified: boolean;
  imageUrl: string;
  categoryIds: string[];
  description: string;
  shortDescription?: string;
  fallbackUrl: string;
  stripePriceId: string | null;
  inStock: boolean | "pending-verification";
  tags: string[];
  notes?: string;
}

export interface StoreCategory {
  id: string;
  name: string;
  slug: string;
  volusionCatId: string;
  volusionUrl: string;
  description: string;
  parentId?: string;
}

// ─── Categories ───

export const storeCategories: StoreCategory[] = [
  {
    id: "paints",
    name: "Paints",
    slug: "paints",
    volusionCatId: "1883",
    volusionUrl: "https://atosb-raxtf.volusion.store/SearchResults.asp?Cat=1883",
    description: "Safe non-toxic paints just for kids. All paints are selected and approved by mom art teacher Spramani Elaun.",
  },
  {
    id: "art-curriculum-paints",
    name: "Art Curriculum",
    slug: "art-curriculum",
    volusionCatId: "1896",
    volusionUrl: "https://atosb-raxtf.volusion.store/SearchResults.asp?Cat=1896",
    description: "Art curriculum guides and teaching materials.",
    parentId: "paints",
  },
  {
    id: "painting-materials",
    name: "Painting Materials",
    slug: "painting-materials",
    volusionCatId: "1886",
    volusionUrl: "https://atosb-raxtf.volusion.store/SearchResults.asp?Cat=1886",
    description: "Essential materials for painting lessons.",
    parentId: "paints",
  },
  {
    id: "drawing",
    name: "Drawing",
    slug: "drawing",
    volusionCatId: "1887",
    volusionUrl: "https://atosb-raxtf.volusion.store/SearchResults.asp?Cat=1887",
    description: "Supplies for kids to doodle, learn to draw, beginner drawing class and other premium drawing supplies.",
  },
  {
    id: "clay",
    name: "Clay",
    slug: "clay",
    volusionCatId: "1888",
    volusionUrl: "https://atosb-raxtf.volusion.store/SearchResults.asp?Cat=1888",
    description: "Kids clay modeling, pottery and sculpture supplies.",
  },
  {
    id: "crayons",
    name: "Crayons",
    slug: "crayons",
    volusionCatId: "1890",
    volusionUrl: "https://atosb-raxtf.volusion.store/SearchResults.asp?Cat=1890",
    description: "Beeswax, block, and stick crayons for young artists.",
  },
  {
    id: "paper",
    name: "Paper",
    slug: "paper",
    volusionCatId: "1889",
    volusionUrl: "https://atosb-raxtf.volusion.store/SearchResults.asp?Cat=1889",
    description: "Quality paper for all art projects.",
  },
  {
    id: "crafts",
    name: "Crafts",
    slug: "crafts",
    volusionCatId: "1892",
    volusionUrl: "https://atosb-raxtf.volusion.store/SearchResults.asp?Cat=1892",
    description: "Craft supplies for creative projects.",
  },
  {
    id: "art-teaching-books",
    name: "Art Teaching Books",
    slug: "art-teaching-books",
    volusionCatId: "1894",
    volusionUrl: "https://atosb-raxtf.volusion.store/SearchResults.asp?Cat=1894",
    description: "Books to guide art teaching.",
    parentId: "crafts",
  },
  {
    id: "art-books",
    name: "Art Books",
    slug: "art-books",
    volusionCatId: "1895",
    volusionUrl: "https://atosb-raxtf.volusion.store/SearchResults.asp?Cat=1895",
    description: "Art books for children and educators.",
  },
  {
    id: "art-curriculum-top",
    name: "Art Curriculum",
    slug: "art-curriculum-top",
    volusionCatId: "1897",
    volusionUrl: "https://atosb-raxtf.volusion.store/SearchResults.asp?Cat=1897",
    description: "Complete art curriculum programs.",
  },
];

// ─── Products ───
// Extracted from Volusion category pages. Prices are from public display.
// Images use Volusion CDN URLs (hotlinking allowed — these are product images).

const volusionBase = "https://atosb-raxtf.volusion.store";
const volusionCdn = "https://cdn4.volusion.store/atosb-raxtf/v/vspfiles/photos";

export const storeProducts: StoreProduct[] = [
  // ═══════════════════════════════════════════════════════════════
  // PAINTS (Cat=1883)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "defining-visual-arts",
    sku: "DVAPaper",
    name: "Defining Visual Arts",
    price: 12.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/DVAPaper-1.jpg?v-cache=1539858562`,
    categoryIds: ["paints", "drawing", "clay", "crafts", "art-books"],
    description:
      "A foundational guide to understanding visual arts in children's education. Paperback.",
    shortDescription: "Paperback",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=DVAPaper`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["book", "education", "paperback"],
  },
  {
    id: "toddler-paintbrushes",
    sku: "TPB3",
    name: "Toddler Paintbrushes",
    price: 4.99,
    priceVerified: true,
    imageUrl: `${volusionCdn}/TPB3-1.jpg?v-cache=1746796651`,
    categoryIds: ["paints", "painting-materials"],
    description:
      "Paintbrushes sized perfectly for toddler hands. Available in 4 sizes for different techniques.",
    shortDescription: "4 sizes",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=TPB3`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["paintbrush", "toddler", "tools"],
  },
  {
    id: "brushstroke-paintbrush",
    sku: "Bp",
    name: "Brushstroke Paintbrush",
    price: 5.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/Bp-1.jpg`,
    categoryIds: ["paints", "painting-materials"],
    description: "A quality round paintbrush designed for brushstroke techniques.",
    shortDescription: "1 Brushstroke Round Paintbrush",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=Bp`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["paintbrush", "round", "tools"],
  },
  {
    id: "sumi-e-ink",
    sku: "Sumie",
    name: "Sumi-e Ink",
    price: 7.99,
    priceVerified: true,
    imageUrl: `${volusionCdn}/Sumie-1.jpg`,
    categoryIds: ["paints", "painting-materials"],
    description: "Traditional Japanese sumi-e ink for Chinese ink painting lessons with children.",
    shortDescription: "4 oz",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=Sumie`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["ink", "sumi-e", "japanese", "painting"],
  },
  {
    id: "jumbo-dry-watercolor-blue",
    sku: "JWcakesBlue",
    name: "Jumbo Dry Watercolor Cake — Blue",
    price: 8.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/JWcakesBlue-1.jpg?v-cache=1683811803`,
    categoryIds: ["paints", "painting-materials"],
    description: "Large dry watercolor cake in blue. Perfect for classroom use.",
    shortDescription: "Blue",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=JWcakesBlue`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["watercolor", "blue", "paint"],
  },
  {
    id: "jumbo-dry-watercolor-red",
    sku: "JWcakesRed",
    name: "Jumbo Dry Watercolor Cake — Red",
    price: 8.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/JWcakesRed-1.jpg`,
    categoryIds: ["paints", "painting-materials"],
    description: "Large dry watercolor cake in red. Perfect for classroom use.",
    shortDescription: "Red",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=JWcakesRed`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["watercolor", "red", "paint"],
  },
  {
    id: "jumbo-dry-watercolor-yellow",
    sku: "JWcakesYellow",
    name: "Jumbo Dry Watercolor Cake — Yellow",
    price: 8.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/JWcakesYellow-1.jpg?v-cache=1683812192`,
    categoryIds: ["paints", "painting-materials"],
    description: "Large dry watercolor cake in yellow. Perfect for classroom use.",
    shortDescription: "Yellow",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=JWcakesYellow`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["watercolor", "yellow", "paint"],
  },
  {
    id: "jumbo-dry-watercolor-black",
    sku: "JWcakesBlack",
    name: "Jumbo Dry Watercolor Cake — Black",
    price: 8.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/JWcakesBlack-1.jpg`,
    categoryIds: ["paints", "painting-materials"],
    description: "Large dry watercolor cake in black. Perfect for classroom use.",
    shortDescription: "Black",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=JWcakesBlack`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["watercolor", "black", "paint"],
  },
  {
    id: "tempera-paint-sticks",
    sku: "STPS6",
    name: "Tempera Paint Sticks",
    price: 8.99,
    priceVerified: true,
    imageUrl: `${volusionCdn}/STPS6-1.jpg?v-cache=1746798950`,
    categoryIds: ["paints", "drawing", "crafts", "painting-materials"],
    description:
      "Mess-free tempera paint sticks in 8 vibrant colors. Easy for kids to use with no water needed.",
    shortDescription: "8 Colors",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=STPS6`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["tempera", "paint-sticks", "mess-free", "colors"],
  },
  {
    id: "black-ready-friendly-watercolor",
    sku: "BRFW4oz",
    name: "Black Ready Friendly Watercolor",
    price: 9.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/BRFW4oz-1.jpg`,
    categoryIds: ["paints", "painting-materials"],
    description: "Ready-to-use friendly watercolor paint in black. Safe for children.",
    shortDescription: "Black Paint",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=BRFW4oz`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["watercolor", "black", "ready-mix"],
  },
  {
    id: "3-paint-brushes",
    sku: "3PBRT",
    name: "3 Paint Brushes",
    price: 12.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/3PBRT-1.jpg`,
    categoryIds: ["paints", "painting-materials"],
    description: "A set of 3 round-tip paint brushes for various painting techniques.",
    shortDescription: "Round Tip",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=3PBRT`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["paintbrush", "set", "round"],
  },
  {
    id: "watercolor-pencils-soluble",
    sku: "PWCP3",
    name: "Watercolor Pencils — Water-soluble",
    price: 12.99,
    priceVerified: true,
    imageUrl: `${volusionCdn}/PWCP3-1.jpg?v-cache=1646400449`,
    categoryIds: ["paints", "drawing", "painting-materials"],
    description:
      "Water-soluble colored pencils in 3 primary colors. Use dry or add water for watercolor effects.",
    shortDescription: "3 Primary Colors",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=PWCP3`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["watercolor", "pencils", "primary-colors"],
  },
  {
    id: "nature-of-art-kids-paints",
    sku: "R4(4)",
    name: "Nature of Art For Kids Paints",
    price: 0,
    priceVerified: false,
    imageUrl: `${volusionCdn}/R4(4)-1.jpg?v-cache=1646397726`,
    categoryIds: ["paints", "painting-materials"],
    description: "A curated paint set for kids. Price pending verification.",
    shortDescription: "Paint set",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=R4%284%29`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["paint-set", "kids"],
    notes: "Price not visible in extraction — needs verification",
  },
  {
    id: "dry-watercolor-paints",
    sku: "DWP",
    name: "Dry Watercolor Paints",
    price: 0,
    priceVerified: false,
    imageUrl: `${volusionCdn}/DWP-1.jpg?v-cache=1585641735`,
    categoryIds: ["paints", "painting-materials"],
    description: "Dry watercolor paints for classroom use. Price pending verification.",
    shortDescription: "Watercolor paints",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=DWP`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["watercolor", "dry", "paint"],
    notes: "Price not visible in extraction — needs verification",
  },

  // ═══════════════════════════════════════════════════════════════
  // DRAWING (Cat=1887)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "sketch-pencil",
    sku: "PSBookRate",
    name: "Sketch Pencil",
    price: 3.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/PSBookRate-1.jpg?v-cache=1646397315`,
    categoryIds: ["drawing"],
    description: "Natural sketch pencil for young artists. Large size for comfortable grip.",
    shortDescription: "Large",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=PSBookRate`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["pencil", "sketch", "drawing"],
  },
  {
    id: "circle-compass",
    sku: "CCround",
    name: "Circle Compass",
    price: 5.99,
    priceVerified: true,
    imageUrl: `${volusionCdn}/CCround-1.jpg`,
    categoryIds: ["drawing"],
    description: "A child-friendly compass for drawing perfect circles and geometric art.",
    shortDescription: "Makes Perfect Circles",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=CCround`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["compass", "geometry", "drawing"],
  },
  {
    id: "short-little-pencils",
    sku: "SLP",
    name: "Short Little Pencils",
    price: 8.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/SLP-1.jpg`,
    categoryIds: ["drawing"],
    description: "Set of 3 short pencils designed for small hands. Perfect for preschoolers.",
    shortDescription: "3 short",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=SLP`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["pencil", "short", "preschool"],
  },
  {
    id: "pencil-sharpener-can",
    sku: "SCPS",
    name: "Pencil Sharpener",
    price: 11.99,
    priceVerified: true,
    imageUrl: `${volusionCdn}/SCPS-1.jpg?v-cache=1646399227`,
    categoryIds: ["drawing"],
    description: "Can-style pencil sharpener with container. Clean and easy for children to use.",
    shortDescription: "Can",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=SCPS`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["sharpener", "tools"],
  },
  {
    id: "block-crayons-6",
    sku: "cb6e",
    name: "Block Crayons — 6 Earthy Tones",
    price: 14.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/cb6e-1.jpg?v-cache=1415352223`,
    categoryIds: ["drawing", "crayons"],
    description: "Six earthy-toned block crayons. Ideal for Waldorf and Montessori art activities.",
    shortDescription: "6 Earthy Tones",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=cb6e`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["crayons", "block", "earthy", "waldorf"],
  },
  {
    id: "beeswax-crayons-6",
    sku: "BCB6",
    name: "Beeswax Crayons — 6 Colors",
    price: 17.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/BCB6-1.jpg?v-cache=1401031760`,
    categoryIds: ["drawing", "crayons"],
    description: "Six solid-color beeswax crayons by Colour Blocks®. Smooth and vibrant.",
    shortDescription: "6 solid colors",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=BCB6`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["crayons", "beeswax", "colour-blocks"],
  },
  {
    id: "color-pencils-short",
    sku: "LCPSF",
    name: "Color Pencils — Short",
    price: 20.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/LCPSF-1.jpg?v-cache=1646400228`,
    categoryIds: ["drawing", "crayons"],
    description: "Short color pencils perfect for younger children. Easy to grip and control.",
    shortDescription: "Short",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=LCPSF`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["color-pencils", "short", "lyra"],
  },
  {
    id: "stockmar-stick-crayons-8",
    sku: "SWC8W",
    name: "Stockmar Stick Crayons — 8 Colors",
    price: 23.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/SWC8W-1.jpg?v-cache=1480689780`,
    categoryIds: ["drawing", "crayons"],
    description: "Premium Stockmar stick crayons in 8 colors with tin case. Waldorf standard.",
    shortDescription: "8 colors, Tin",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=SWC8W`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["crayons", "stockmar", "stick", "waldorf"],
  },
  {
    id: "nurturing-children-visual-arts",
    sku: "NCVAN-D",
    name: "Nurturing Children in The Visual Arts Naturally",
    price: 24.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/NCVAN-D-1.jpg?v-cache=1394023795`,
    categoryIds: ["drawing", "art-books", "art-teaching-books"],
    description: "A comprehensive paperback guide on nurturing children's natural visual art abilities.",
    shortDescription: "Paperback",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=NCVAN%2DD`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["book", "parenting", "art-education"],
  },
  {
    id: "block-crayons-12",
    sku: "12cb",
    name: "Block Crayons — 12 Colors",
    price: 24.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/12cb-1.jpg?v-cache=1646397620`,
    categoryIds: ["drawing", "crayons"],
    description: "Twelve vibrant block crayons for a full spectrum of creative expression.",
    shortDescription: "12 colors",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=12cb`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["crayons", "block", "colors"],
  },
  {
    id: "pencil-eraser-sharpener-set",
    sku: "SPS4",
    name: "Pencil, Eraser, Sharpener Set",
    price: 28.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/SPS4-1.jpg`,
    categoryIds: ["drawing"],
    description: "Complete drawing set with pencil, eraser, and sharpener. 4 pieces.",
    shortDescription: "4 Pieces",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=SPS4`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["set", "pencil", "eraser", "sharpener"],
  },
  {
    id: "color-pencils-12-large",
    sku: "12NWCP",
    name: "Color Pencils — 12 Large Colors",
    price: 37.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/12NWCP-1.jpg`,
    categoryIds: ["drawing", "crayons"],
    description: "Twelve large color pencils with thick leads. Perfect for expressive drawing.",
    shortDescription: "12 Large Colors",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=12NWCP`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["color-pencils", "large", "set"],
  },
  {
    id: "montessori-early-childhood-art-guide",
    sku: "ECAGBOOK",
    name: "Montessori Early Childhood Art Guide",
    price: 37.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/ECAGBOOK-1.jpg?v-cache=1684003175`,
    categoryIds: ["drawing", "art-books", "art-teaching-books", "art-curriculum-top"],
    description: "A complete Montessori art guide for early childhood educators. Paperback.",
    shortDescription: "Paperback",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=ECAGBOOK`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["book", "montessori", "curriculum", "early-childhood"],
  },
  {
    id: "early-childhood-art-guide",
    sku: "ECA",
    name: "Early Childhood Art Guide",
    price: 39.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/ECA-1.jpg`,
    categoryIds: ["drawing", "art-books", "art-teaching-books"],
    description: "A practical guide for teaching art to young children. Paperback.",
    shortDescription: "Paperback",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=ECA`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["book", "early-childhood", "guide"],
  },
  {
    id: "sketch-kit",
    sku: "SCPK6",
    name: "Sketch Kit",
    price: 47.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/SCPK6-1.jpg`,
    categoryIds: ["drawing"],
    description: "Complete sketch kit including sketch pad, color pencils, and pencil.",
    shortDescription: "Sketch Pad, Color Pencils, Pencil",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=SCPK6`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["kit", "sketch", "drawing"],
  },
  {
    id: "primary-watercolor-crayons-set",
    sku: "YWCS",
    name: "Primary Watercolor & Crayons Set",
    price: 95.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/YWCS-1.jpg?v-cache=1607009569`,
    categoryIds: ["drawing", "crayons", "paints"],
    description: "A curated set of primary watercolors and crayons. 9 pieces total.",
    shortDescription: "9 pieces",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=YWCS`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["set", "watercolor", "crayons", "primary"],
  },
  {
    id: "drawing-curriculum-digital",
    sku: "DC-Digital",
    name: "Drawing Curriculum — Digital Download",
    price: 97.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/DC-Digital-1.png`,
    categoryIds: ["drawing", "art-curriculum-top", "art-curriculum-paints"],
    description: "Complete drawing curriculum as a digital download. Instant access.",
    shortDescription: "Digital Download",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=DC%2DDigital`,
    stripePriceId: null,
    inStock: true,
    tags: ["curriculum", "digital", "drawing"],
  },
  {
    id: "paint-drawing-set",
    sku: "WPDSkit",
    name: "Paint & Drawing Set",
    price: 105.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/WPDSkit-1.jpg?v-cache=1607013058`,
    categoryIds: ["drawing", "paints"],
    description: "Premium set with Lyra pencils and Stockmar primary paints.",
    shortDescription: "Lyra Pencils, Stockmar Primary Paints",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=WPDSkit`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["set", "lyra", "stockmar", "premium"],
  },
  {
    id: "drawing-curriculum-print",
    sku: "DC-Print",
    name: "Drawing Curriculum — Print",
    price: 0,
    priceVerified: false,
    imageUrl: `${volusionCdn}/DC-Print-1.png?v-cache=1751116591`,
    categoryIds: ["drawing", "art-curriculum-top", "art-curriculum-paints"],
    description: "Complete drawing curriculum in printed format. Price pending verification.",
    shortDescription: "Print",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=DC%2DPrint`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["curriculum", "print", "drawing"],
    notes: "Price not visible in extraction — needs verification",
  },

  // ═══════════════════════════════════════════════════════════════
  // CLAY (Cat=1888)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "wood-rolling-pin",
    sku: "WRP",
    name: "Wood Rolling Pin",
    price: 9.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/WRP-1.jpg?v-cache=1512402800`,
    categoryIds: ["clay"],
    description: "Small wooden rolling pin designed for children's clay work.",
    shortDescription: "Small",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=WRP`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["clay-tools", "wood", "rolling-pin"],
  },
  {
    id: "clay-play-digital",
    sku: "CPEBook",
    name: "Clay Play — Digital Download",
    price: 9.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/CPEBook-1.jpg?v-cache=1489839543`,
    categoryIds: ["clay", "art-teaching-books"],
    description: "Digital guide to clay play activities for young children. Instant download.",
    shortDescription: "Digital Download",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=CPEBook`,
    stripePriceId: null,
    inStock: true,
    tags: ["book", "digital", "clay", "activities"],
  },
  {
    id: "clay-play-paperback",
    sku: "CPBOOKsoft",
    name: "CLAY PLAY — Paperback",
    price: 15.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/CPBOOKsoft-1.jpg?v-cache=1489839621`,
    categoryIds: ["clay", "crafts", "art-teaching-books"],
    description: "How to teach young kids modeling and sculpture. A practical paperback guide.",
    shortDescription: "Paperback",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=CPBOOKsoft`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["book", "paperback", "clay", "teaching"],
  },
  {
    id: "clay-tools-5",
    sku: "Claytools2",
    name: "Clay Tools — 5 Wood Tools",
    price: 15.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/Claytools2-1.jpg?v-cache=1585641602`,
    categoryIds: ["clay"],
    description: "Set of 5 wooden clay modeling tools for sculpting and detail work.",
    shortDescription: "5 Wood Tools",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=Claytools2`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["clay-tools", "wood", "set"],
  },
  {
    id: "small-geometric-forms",
    sku: "Wcf",
    name: "Small Geometric Forms",
    price: 15.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/Wcf-1.jpg`,
    categoryIds: ["clay"],
    description: "Six wooden geometric forms for clay impression and shape exploration.",
    shortDescription: "6 wood forms",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=Wcf`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["clay-tools", "geometry", "wood"],
  },
  {
    id: "modeling-clay-brown",
    sku: "MC-4C",
    name: "Modeling Clay — Brown Tones",
    price: 15.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/MC-4C-1.jpg?v-cache=1585647107`,
    categoryIds: ["clay"],
    description: "Modeling clay in natural brown tones. Safe for children.",
    shortDescription: "Brown Tones",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=MC%2D4C`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["clay", "modeling", "brown"],
  },
  {
    id: "modeling-clay-26-colors",
    sku: "M20",
    name: "Modeling Clay — 26 Colors",
    price: 15.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/M20-1.png?v-cache=1585904189`,
    categoryIds: ["clay", "crafts"],
    description: "Vibrant modeling clay set with 26 colors for endless creativity.",
    shortDescription: "26 Colors",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=M20`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["clay", "modeling", "colors"],
  },
  {
    id: "clay-play-book",
    sku: "Clay-Play-Modeling",
    name: "Clay Play Book",
    price: 0,
    priceVerified: false,
    imageUrl: `${volusionCdn}/Clay-Play-Modeling-1.jpg`,
    categoryIds: ["clay", "crafts", "art-teaching-books"],
    description:
      "Clay Play: Tactile fine-movement play with air-dry pottery clay. By Spramani Elaun. Price pending verification.",
    shortDescription: "Paperback",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=Clay%2DPlay%2DModeling`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["book", "clay", "paperback", "spramani-elaun"],
    notes: "Price not visible in extraction — needs verification",
  },

  // ═══════════════════════════════════════════════════════════════
  // CRAFTS (Cat=1892)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "needles-3-sizes",
    sku: "N3",
    name: "Needles — 3 Sizes",
    price: 5.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/N3-1.jpg`,
    categoryIds: ["crafts"],
    description: "Craft needles in 3 sizes for sewing and textile projects.",
    shortDescription: "3 Sizes",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=N3`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["needles", "crafts", "sewing"],
  },
  {
    id: "smock-apron",
    sku: "AS",
    name: "Smock Apron",
    price: 6.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/AS-1.jpg?v-cache=1412862444`,
    categoryIds: ["crafts", "painting-materials"],
    description: "Kids painting smock apron. Colors vary.",
    shortDescription: "Colors Vary",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=AS`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["apron", "smock", "protection"],
  },
  {
    id: "sponge-paint-stampers",
    sku: "Sponge3",
    name: "Sponge Paint Stampers",
    price: 8.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/Sponge3-1.jpg`,
    categoryIds: ["crafts", "painting-materials"],
    description: "Round sponge stampers in 3 sizes for creative paint stamping.",
    shortDescription: "3 sizes",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=Sponge3`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["sponge", "stampers", "paint"],
  },
  {
    id: "clear-craft-glue",
    sku: "Glue",
    name: "Clear Craft Glue",
    price: 9.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/Glue-1.jpg`,
    categoryIds: ["crafts"],
    description: "Clear craft glue safe for preschool use.",
    shortDescription: "Preschool",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=Glue`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["glue", "crafts", "preschool"],
  },
  {
    id: "paint-dot-stampers",
    sku: "PDS4",
    name: "Paint Dot Stampers",
    price: 15.0,
    priceVerified: true,
    imageUrl: `${volusionCdn}/PDS4-1.jpg`,
    categoryIds: ["crafts", "painting-materials"],
    description: "Paint dot stampers in 4 colors. Fun and easy for young children.",
    shortDescription: "4 Colors",
    fallbackUrl: `${volusionBase}/ProductDetails.asp?ProductCode=PDS4`,
    stripePriceId: null,
    inStock: "pending-verification",
    tags: ["stampers", "paint", "dots"],
  },
];

// ─── Helpers ───

export function getProductById(id: string): StoreProduct | undefined {
  return storeProducts.find((p) => p.id === id);
}

export function getProductBySku(sku: string): StoreProduct | undefined {
  return storeProducts.find((p) => p.sku === sku);
}

export function getProductsByCategory(categoryId: string): StoreProduct[] {
  return storeProducts.filter((p) => p.categoryIds.includes(categoryId));
}

export function getCategoryBySlug(slug: string): StoreCategory | undefined {
  return storeCategories.find((c) => c.slug === slug);
}

export function getCategoryById(id: string): StoreCategory | undefined {
  return storeCategories.find((c) => c.id === id);
}

export function getTopLevelCategories(): StoreCategory[] {
  return storeCategories.filter((c) => !c.parentId);
}

export function getSubCategories(parentId: string): StoreCategory[] {
  return storeCategories.filter((c) => c.parentId === parentId);
}

export function formatPrice(price: number): string {
  if (price === 0) return "Price pending";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function isPriceVerified(product: StoreProduct): boolean {
  return product.priceVerified && product.price > 0;
}

export function canAddToCart(product: StoreProduct): boolean {
  return isPriceVerified(product) && product.stripePriceId !== null;
}

export function getFallbackMessage(product: StoreProduct): string {
  if (!isPriceVerified(product)) {
    return "Price pending verification — view on store";
  }
  if (product.stripePriceId === null) {
    return "Available on our Volusion store";
  }
  return "";
}
