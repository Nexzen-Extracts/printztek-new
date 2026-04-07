export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
  image: string;
}

export const categories: Category[] = [
  {
    id: "inkjet-printers",
    name: "Inkjet Printers",
    slug: "inkjet-printers",
    description: "Versatile inkjet printers for home and office use with vibrant color output.",
    productCount: 4,
    image: "/images/products/inkjet-1.jpg",
  },
  {
    id: "laser-printers",
    name: "Laser Printers",
    slug: "laser-printers",
    description: "Fast, efficient laser printers ideal for high-volume document printing.",
    productCount: 4,
    image: "/images/products/laser-1.jpg",
  },
  {
    id: "all-in-one-printers",
    name: "All-in-One Printers",
    slug: "all-in-one-printers",
    description: "Multi-function printers that print, scan, copy, and fax in one device.",
    productCount: 3,
    image: "/images/products/allinone-1.jpg",
  },
  {
    id: "thermal-printers",
    name: "Thermal Printers",
    slug: "thermal-printers",
    description: "Specialized thermal printers for labels, receipts, and shipping applications.",
    productCount: 3,
    image: "/images/products/thermal-1.jpg",
  },
  {
    id: "ink-cartridges",
    name: "Ink Cartridges",
    slug: "ink-cartridges",
    description: "High-quality ink cartridges for crisp, long-lasting prints.",
    productCount: 4,
    image: "/images/products/ink-cartridge-1.jpg",
  },
  {
    id: "toner-cartridges",
    name: "Toner Cartridges",
    slug: "toner-cartridges",
    description: "Premium toner cartridges for laser printers with high page yields.",
    productCount: 3,
    image: "/images/products/toner-1.jpg",
  },
  {
    id: "paper-media",
    name: "Paper & Media",
    slug: "paper-media",
    description: "Premium printing paper and specialty media for every printing need.",
    productCount: 3,
    image: "/images/products/paper-1.jpg",
  },
  {
    id: "printer-parts",
    name: "Printer Parts",
    slug: "printer-parts",
    description: "Replacement parts to keep your printers running at peak performance.",
    productCount: 2,
    image: "/images/products/parts-1.jpg",
  },
  {
    id: "maintenance-kits",
    name: "Maintenance Kits",
    slug: "maintenance-kits",
    description: "Complete maintenance kits for routine printer care and cleaning.",
    productCount: 2,
    image: "/images/products/maintenance-1.jpg",
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    description: "Essential printer accessories including cables, adapters, and stands.",
    productCount: 2,
    image: "/images/products/accessory-1.jpg",
  },
];
