// ============================================================
// Store Categories — Nature of Art® Volusion Storefront
// ============================================================
// Current live store: https://atosb-raxtf.volusion.store/
// These categories reflect the current public storefront navigation.
// All checkout remains on Volusion until ecommerce migration is decided.
// ============================================================

export interface StoreCategory {
  id: string;
  name: string;
  href: string;
  description?: string;
  icon?: string;
}

export const primaryStoreCategories: StoreCategory[] = [
  {
    id: "paints",
    name: "Paints",
    href: "https://atosb-raxtf.volusion.store/paints",
    description: "Watercolor, tempera, and acrylic paints for Montessori art environments",
  },
  {
    id: "art-curriculum",
    name: "Art Curriculum",
    href: "https://atosb-raxtf.volusion.store/art-curriculum",
    description: "Complete curriculum for painting, drawing, clay, and color theory",
  },
  {
    id: "painting-materials",
    name: "Painting Materials",
    href: "https://atosb-raxtf.volusion.store/painting-materials",
    description: "Brushes, palettes, paper, and painting accessories",
  },
  {
    id: "drawing",
    name: "Drawing",
    href: "https://atosb-raxtf.volusion.store/drawing",
    description: "Drawing tools, pencils, charcoal, and paper",
  },
  {
    id: "clay",
    name: "Clay",
    href: "https://atosb-raxtf.volusion.store/clay",
    description: "Modeling clay, pottery tools, and sculpting materials",
  },
  {
    id: "crayons",
    name: "Crayons",
    href: "https://atosb-raxtf.volusion.store/crayons",
    description: "Beeswax crayons and high-quality coloring tools",
  },
  {
    id: "paper",
    name: "Paper",
    href: "https://atosb-raxtf.volusion.store/paper",
    description: "Watercolor paper, drawing paper, and specialty papers",
  },
  {
    id: "crafts",
    name: "Crafts",
    href: "https://atosb-raxtf.volusion.store/crafts",
    description: "Craft supplies and project materials",
  },
  {
    id: "art-teaching-books",
    name: "Art Teaching Books",
    href: "https://atosb-raxtf.volusion.store/art-teaching-books",
    description: "Guides and resources for art educators",
  },
  {
    id: "art-books",
    name: "Art Books",
    href: "https://atosb-raxtf.volusion.store/art-books",
    description: "Children's art books and reference materials",
  },
  {
    id: "art-blog-articles",
    name: "Art Blog & Articles",
    href: "/blog",
    description: "Art education insights and teaching tips",
  },
];

// ------------------------------------------------------------------
// Support Links — Nature of Art® Volusion Storefront
// ------------------------------------------------------------------
// These link to the current live Volusion store support pages.
// Pages verified on https://atosb-raxtf.volusion.store/:
//   ✅ /aboutus.asp
//   ✅ /Contact_Us_a/83.htm
//   ✅ /shoppingcart.asp (redirects to cart)
//   ✅ /myaccount.asp (redirects to login)
//   ✅ /terms.asp
//
// Pages that do not exist on Volusion (Returns, Shipping, FAQ):
//   → Fall back to Volusion contact page or native site contact.
// ------------------------------------------------------------------

export const supportStorePages: StoreCategory[] = [
  { id: "about-us", name: "About Us", href: "https://atosb-raxtf.volusion.store/aboutus.asp" },
  { id: "returns", name: "Returns", href: "https://atosb-raxtf.volusion.store/Contact_Us_a/83.htm" },
  { id: "shipping", name: "Shipping", href: "https://atosb-raxtf.volusion.store/Contact_Us_a/83.htm" },
  { id: "site-help", name: "Site Help / FAQ", href: "https://atosb-raxtf.volusion.store/Contact_Us_a/83.htm" },
  { id: "my-cart", name: "My Cart", href: "https://atosb-raxtf.volusion.store/shoppingcart.asp" },
  { id: "my-account", name: "My Account", href: "https://atosb-raxtf.volusion.store/myaccount.asp" },
  { id: "contact", name: "Contact", href: "https://atosb-raxtf.volusion.store/Contact_Us_a/83.htm" },
  { id: "newsletter", name: "Newsletter", href: "/newsletter" },
];

export const storeNotice = {
  headline: "Still Open Until Supplies Last",
  shipping: "Shipping Only within the U.S. (All packages are coming USPS)",
  tagline: "Premium Safe Non-Toxic Art Supplies!",
  storefrontUrl: "https://atosb-raxtf.volusion.store/",
};
