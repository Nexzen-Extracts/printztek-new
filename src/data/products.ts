export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  stock: number;
  images: string[];
  shortDescription: string[];
  longDescription: string;
  features: string[];
  specifications: Record<string, string>;
  badge?: string;
}

export const products: Product[] = [
  // ── Inkjet Printers ──
  {
    id: 1,
    name: "Wireless Inkjet Printer",
    slug: "wireless-inkjet-printer",
    category: "inkjet-printers",
    price: 149.99,
    originalPrice: 189.99,
    rating: 4.5,
    reviewCount: 312,
    stock: 45,
    images: ["/images/products/inkjet-1.jpg", "/images/products/inkjet-2.jpg", "/images/products/inkjet-3.jpg"],
    shortDescription: [
      "Wireless printing from any device via Wi-Fi and USB",
      "Print speeds up to 15 pages per minute",
      "Automatic two-sided printing saves paper",
      "250-sheet paper tray capacity"
    ],
    longDescription: "This versatile wireless inkjet printer delivers exceptional print quality for both documents and photos. With built-in Wi-Fi connectivity, you can print from smartphones, tablets, and laptops without any cables. The automatic duplex printing feature helps reduce paper usage by up to 50%, while the high-capacity paper tray minimizes the need for frequent refills.",
    features: ["Wi-Fi & USB Connectivity", "Auto Duplex Printing", "Mobile App Support", "Energy Star Certified", "Borderless Photo Printing", "Quiet Mode Operation"],
    specifications: { "Print Speed": "15 ppm (black), 10 ppm (color)", "Resolution": "4800 x 1200 dpi", "Paper Capacity": "250 sheets", "Connectivity": "Wi-Fi, USB 2.0", "Dimensions": "17.1 x 13.4 x 6.3 in", "Weight": "14.5 lbs", "Warranty": "1 Year" },
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Compact Photo Printer",
    slug: "compact-photo-printer",
    category: "inkjet-printers",
    price: 89.99,
    rating: 4.3,
    reviewCount: 187,
    stock: 62,
    images: ["/images/products/inkjet-2.jpg", "/images/products/inkjet-1.jpg"],
    shortDescription: [
      "Dedicated photo printing up to 4x6 inches",
      "Dye-sublimation technology for vivid colors",
      "Compact design fits any desk or shelf",
      "Prints a photo in under 60 seconds"
    ],
    longDescription: "Create stunning borderless photos at home with this compact photo printer. Using advanced dye-sublimation technology, it produces lab-quality prints with rich, vibrant colors and a protective overcoat that resists water, fingerprints, and fading for up to 100 years. Its small footprint makes it perfect for dorm rooms, offices, or anywhere space is limited.",
    features: ["Dye-Sublimation Technology", "Borderless Printing", "USB & Wireless", "Photo Overcoat Protection", "Compact Form Factor"],
    specifications: { "Print Speed": "< 60 seconds per photo", "Resolution": "300 x 300 dpi", "Max Print Size": "4 x 6 inches", "Connectivity": "USB 2.0, Wi-Fi", "Dimensions": "7.1 x 5.3 x 2.5 in", "Weight": "1.9 lbs" },
  },
  {
    id: 3,
    name: "Wide Format Inkjet Printer",
    slug: "wide-format-inkjet-printer",
    category: "inkjet-printers",
    price: 499.99,
    originalPrice: 599.99,
    rating: 4.7,
    reviewCount: 98,
    stock: 12,
    images: ["/images/products/inkjet-3.jpg", "/images/products/inkjet-1.jpg"],
    shortDescription: [
      "Prints up to 24 inches wide for posters and banners",
      "8-color pigment ink system for professional results",
      "Roll and sheet media support",
      "Network-ready with Ethernet and Wi-Fi"
    ],
    longDescription: "Designed for creative professionals and small businesses, this wide format inkjet printer produces stunning large-scale prints with exceptional color accuracy. The 8-color pigment ink system ensures archival-quality output that resists fading, while support for both roll and cut-sheet media provides maximum flexibility for any project.",
    features: ["24-Inch Wide Format", "8-Color Pigment Inks", "Roll & Cut Sheet Support", "Ethernet & Wi-Fi", "ICC Profile Support", "Front-Loading Design"],
    specifications: { "Print Width": "Up to 24 inches", "Resolution": "2400 x 1200 dpi", "Ink System": "8-color pigment", "Connectivity": "Ethernet, Wi-Fi, USB 3.0", "Dimensions": "35.4 x 24.2 x 15 in", "Weight": "65 lbs" },
    badge: "Pro Choice"
  },
  {
    id: 4,
    name: "Portable Inkjet Printer",
    slug: "portable-inkjet-printer",
    category: "inkjet-printers",
    price: 199.99,
    rating: 4.2,
    reviewCount: 143,
    stock: 33,
    images: ["/images/products/inkjet-2.jpg", "/images/products/inkjet-3.jpg"],
    shortDescription: [
      "Lightweight at under 4 lbs for travel",
      "Built-in rechargeable battery",
      "Print from mobile devices via Bluetooth",
      "Letter-size document printing on the go"
    ],
    longDescription: "Take your printing capabilities wherever you go with this ultra-portable inkjet printer. Weighing under 4 pounds with a rechargeable battery that lasts up to 500 pages per charge, it is the ideal companion for mobile professionals, field workers, and business travelers who need to print documents, contracts, and reports away from the office.",
    features: ["Rechargeable Battery", "Bluetooth & Wi-Fi", "Under 4 lbs", "Auto Power Off", "Compatible With All Major OS"],
    specifications: { "Print Speed": "8 ppm", "Resolution": "1200 x 1200 dpi", "Battery Life": "Up to 500 pages", "Connectivity": "Bluetooth, Wi-Fi", "Dimensions": "12.0 x 7.3 x 2.5 in", "Weight": "3.7 lbs" },
  },

  // ── Laser Printers ──
  {
    id: 5,
    name: "Monochrome Laser Printer",
    slug: "monochrome-laser-printer",
    category: "laser-printers",
    price: 179.99,
    rating: 4.6,
    reviewCount: 421,
    stock: 78,
    images: ["/images/products/laser-1.jpg", "/images/products/laser-2.jpg"],
    shortDescription: [
      "Fast output at 32 pages per minute",
      "First page out in under 8 seconds",
      "250-sheet input tray plus 100-sheet multipurpose tray",
      "Compact design for tight workspaces"
    ],
    longDescription: "Built for demanding office environments, this monochrome laser printer delivers sharp, professional-quality text documents at blazing speeds. With a first-page-out time of under 8 seconds and a monthly duty cycle of up to 50,000 pages, it handles high-volume workloads with ease. The compact footprint fits comfortably on any desk or shelf.",
    features: ["32 PPM Speed", "Duplex Printing", "Gigabit Ethernet", "Secure Print", "Toner Save Mode", "Quiet Operation"],
    specifications: { "Print Speed": "32 ppm", "Resolution": "1200 x 1200 dpi", "Paper Capacity": "350 sheets total", "Monthly Duty": "50,000 pages", "Connectivity": "Ethernet, USB 2.0, Wi-Fi", "Weight": "22 lbs" },
    badge: "Top Rated"
  },
  {
    id: 6,
    name: "Color Laser Printer",
    slug: "color-laser-printer",
    category: "laser-printers",
    price: 349.99,
    originalPrice: 429.99,
    rating: 4.4,
    reviewCount: 256,
    stock: 29,
    images: ["/images/products/laser-2.jpg", "/images/products/laser-1.jpg", "/images/products/laser-3.jpg"],
    shortDescription: [
      "Vivid color and crisp black text output",
      "Print speeds up to 28 ppm color, 32 ppm mono",
      "Touchscreen control panel for easy navigation",
      "Built-in NFC tap-to-print technology"
    ],
    longDescription: "Elevate your business communications with this high-performance color laser printer. It produces marketing materials, presentations, and reports with vibrant, true-to-life colors and razor-sharp text. The intuitive touchscreen panel makes setup and daily operation simple, while NFC technology allows instant mobile printing with a single tap.",
    features: ["Vivid Color Output", "Touchscreen Panel", "NFC Tap-to-Print", "Auto Duplex", "High Yield Toner Compatible", "PIN Secure Printing"],
    specifications: { "Print Speed": "28 ppm (color), 32 ppm (mono)", "Resolution": "600 x 600 dpi", "Paper Capacity": "300 sheets", "Monthly Duty": "60,000 pages", "Connectivity": "Wi-Fi, Ethernet, USB, NFC", "Weight": "42 lbs" },
    badge: "Sale"
  },
  {
    id: 7,
    name: "Compact Desktop Laser",
    slug: "compact-desktop-laser",
    category: "laser-printers",
    price: 129.99,
    rating: 4.1,
    reviewCount: 189,
    stock: 54,
    images: ["/images/products/laser-3.jpg", "/images/products/laser-1.jpg"],
    shortDescription: [
      "Ultra-compact design for home offices",
      "Prints up to 22 pages per minute",
      "150-sheet paper tray",
      "Energy efficient with auto sleep mode"
    ],
    longDescription: "Perfectly sized for home offices and small workgroups, this compact laser printer delivers reliable, cost-effective monochrome printing without taking up valuable desk space. The energy-efficient design includes auto sleep mode and a starter toner cartridge that prints up to 700 pages right out of the box.",
    features: ["Ultra-Compact Design", "22 PPM Speed", "Auto Sleep Mode", "Starter Toner Included", "USB & Wi-Fi"],
    specifications: { "Print Speed": "22 ppm", "Resolution": "600 x 600 dpi", "Paper Capacity": "150 sheets", "Connectivity": "USB 2.0, Wi-Fi", "Dimensions": "13.7 x 8.5 x 7.2 in", "Weight": "11.5 lbs" },
  },
  {
    id: 8,
    name: "High-Speed Office Laser",
    slug: "high-speed-office-laser",
    category: "laser-printers",
    price: 549.99,
    rating: 4.8,
    reviewCount: 134,
    stock: 18,
    images: ["/images/products/laser-1.jpg", "/images/products/laser-3.jpg", "/images/products/laser-2.jpg"],
    shortDescription: [
      "Enterprise-grade 42 pages per minute",
      "550-sheet main tray plus 100-sheet bypass tray",
      "Advanced security features with user authentication",
      "Monthly duty cycle of 100,000 pages"
    ],
    longDescription: "Engineered for busy office environments, this high-speed laser printer handles the most demanding print workloads with ease. With print speeds of 42 pages per minute and a robust 100,000-page monthly duty cycle, it keeps your team productive. Advanced security features including user authentication and encrypted printing protect sensitive documents.",
    features: ["42 PPM Speed", "Enterprise Security", "Large Paper Capacity", "PIN/Card Authentication", "Remote Management", "Optional Finisher"],
    specifications: { "Print Speed": "42 ppm", "Resolution": "1200 x 1200 dpi", "Paper Capacity": "650 sheets", "Monthly Duty": "100,000 pages", "Connectivity": "Gigabit Ethernet, USB 3.0, Wi-Fi", "Weight": "55 lbs" },
  },

  // ── All-in-One Printers ──
  {
    id: 9,
    name: "All-in-One Inkjet Printer",
    slug: "all-in-one-inkjet-printer",
    category: "all-in-one-printers",
    price: 229.99,
    originalPrice: 279.99,
    rating: 4.5,
    reviewCount: 367,
    stock: 41,
    images: ["/images/products/allinone-1.jpg", "/images/products/allinone-2.jpg", "/images/products/inkjet-1.jpg"],
    shortDescription: [
      "Print, scan, copy, and fax in one device",
      "35-page auto document feeder",
      "2.7-inch color touchscreen",
      "Wireless printing from any device"
    ],
    longDescription: "Consolidate your office equipment with this feature-packed all-in-one inkjet printer. It handles printing, scanning, copying, and faxing with equal proficiency. The 35-page automatic document feeder streamlines multi-page jobs, while the intuitive color touchscreen makes navigating features effortless. Print wirelessly from smartphones, tablets, and computers.",
    features: ["4-in-1 Functionality", "Auto Document Feeder", "Color Touchscreen", "Mobile Printing", "Auto Duplex", "High Yield Ink Compatible"],
    specifications: { "Print Speed": "18 ppm (black), 12 ppm (color)", "Scan Resolution": "1200 x 2400 dpi", "Copy Speed": "12 cpm", "ADF Capacity": "35 sheets", "Fax": "Yes, 33.6 Kbps", "Weight": "19.8 lbs" },
    badge: "Best Value"
  },
  {
    id: 10,
    name: "All-in-One Laser Printer",
    slug: "all-in-one-laser-printer",
    category: "all-in-one-printers",
    price: 399.99,
    rating: 4.6,
    reviewCount: 211,
    stock: 23,
    images: ["/images/products/allinone-2.jpg", "/images/products/allinone-1.jpg", "/images/products/laser-2.jpg"],
    shortDescription: [
      "Laser precision for print, scan, and copy",
      "50-page auto document feeder",
      "Print speeds up to 30 pages per minute",
      "Secure mobile and cloud printing"
    ],
    longDescription: "Combine laser precision with multi-function convenience in this all-in-one laser printer. Ideal for workgroups and busy offices, it delivers fast, sharp monochrome prints while providing reliable scanning and copying capabilities. The 50-page ADF and single-pass duplex scanning make short work of large document batches.",
    features: ["3-in-1 Laser", "50-Page ADF", "Single-Pass Duplex Scan", "Cloud Printing", "Secure Print Release", "Low Cost Per Page"],
    specifications: { "Print Speed": "30 ppm", "Scan Resolution": "600 x 600 dpi", "ADF Capacity": "50 sheets", "Paper Capacity": "300 sheets", "Monthly Duty": "40,000 pages", "Weight": "32 lbs" },
  },
  {
    id: 11,
    name: "Compact All-in-One Printer",
    slug: "compact-all-in-one",
    category: "all-in-one-printers",
    price: 169.99,
    rating: 4.3,
    reviewCount: 276,
    stock: 57,
    images: ["/images/products/allinone-1.jpg", "/images/products/inkjet-1.jpg"],
    shortDescription: [
      "Space-saving print, scan, and copy solution",
      "Flatbed scanner with lid",
      "Wireless and USB connectivity",
      "Affordable ink replacement options"
    ],
    longDescription: "Get multi-function convenience without the bulk with this compact all-in-one printer. It fits neatly on any desk while delivering reliable printing, scanning, and copying performance. The flatbed scanner handles everything from documents to books, and affordable replacement ink keeps your running costs low.",
    features: ["3-in-1 Compact Design", "Flatbed Scanner", "Wi-Fi Direct", "Low-Cost Ink Options", "Borderless Photo Printing"],
    specifications: { "Print Speed": "12 ppm (black), 8 ppm (color)", "Scan Resolution": "1200 dpi", "Paper Capacity": "100 sheets", "Connectivity": "Wi-Fi, USB", "Dimensions": "15.9 x 12.2 x 5.3 in", "Weight": "12 lbs" },
  },

  // ── Thermal Printers ──
  {
    id: 12,
    name: "Thermal Shipping Label Printer",
    slug: "thermal-shipping-label-printer",
    category: "thermal-printers",
    price: 179.99,
    rating: 4.7,
    reviewCount: 523,
    stock: 89,
    images: ["/images/products/thermal-1.jpg", "/images/products/thermal-2.jpg"],
    shortDescription: [
      "Prints 4x6 shipping labels at 150mm/s",
      "No ink or toner required — direct thermal",
      "Compatible with all major shipping platforms",
      "Automatic label detection and calibration"
    ],
    longDescription: "Streamline your shipping workflow with this high-speed thermal label printer. It prints professional 4x6 shipping labels in seconds without the ongoing cost of ink or toner cartridges. Compatible with major carriers and ecommerce platforms, it automatically detects and calibrates to different label sizes for hassle-free operation.",
    features: ["Direct Thermal Technology", "150mm/s Print Speed", "Auto Label Detection", "Fan-Fold & Roll Support", "One-Click Setup", "Compatible With All Carriers"],
    specifications: { "Print Speed": "150 mm/s", "Resolution": "203 dpi", "Label Width": "Up to 4.25 inches", "Connectivity": "USB", "Dimensions": "8.3 x 5.5 x 4.7 in", "Weight": "3.2 lbs" },
    badge: "Best Seller"
  },
  {
    id: 13,
    name: "Thermal Receipt Printer",
    slug: "thermal-receipt-printer",
    category: "thermal-printers",
    price: 139.99,
    rating: 4.4,
    reviewCount: 198,
    stock: 66,
    images: ["/images/products/thermal-2.jpg", "/images/products/thermal-1.jpg"],
    shortDescription: [
      "High-speed receipt printing at 250mm/s",
      "80mm thermal paper rolls",
      "Auto-cutter for clean receipt separation",
      "Ethernet and USB connectivity"
    ],
    longDescription: "Built for retail and hospitality environments, this thermal receipt printer delivers fast, reliable receipt printing with a built-in auto-cutter. The high print speed ensures customers are not kept waiting, while the durable design handles the rigors of daily commercial use. Easy drop-in paper loading minimizes downtime.",
    features: ["250mm/s Print Speed", "Auto Cutter", "Drop-In Loading", "ESC/POS Compatible", "Wall Mountable", "Long-Life Print Head"],
    specifications: { "Print Speed": "250 mm/s", "Paper Width": "80mm", "Resolution": "203 dpi", "Connectivity": "USB, Ethernet", "Cutter Life": "1.5 million cuts", "Weight": "3.5 lbs" },
  },
  {
    id: 14,
    name: "Portable Thermal Printer",
    slug: "portable-thermal-printer",
    category: "thermal-printers",
    price: 249.99,
    rating: 4.5,
    reviewCount: 87,
    stock: 28,
    images: ["/images/products/thermal-1.jpg", "/images/products/thermal-2.jpg"],
    shortDescription: [
      "Compact battery-powered thermal printer",
      "Bluetooth wireless connectivity",
      "Prints receipts and 4-inch labels",
      "IP54 rated for rugged environments"
    ],
    longDescription: "Take reliable thermal printing into the field with this rugged portable unit. The rechargeable battery powers hundreds of prints per charge, while Bluetooth connectivity enables wireless printing from mobile devices. An IP54 rating protects against dust and splashes, making it perfect for delivery drivers, field service technicians, and outdoor events.",
    features: ["Battery Powered", "Bluetooth Wireless", "IP54 Rugged Rating", "4-Inch Print Width", "Belt Clip Included", "Mobile SDK Available"],
    specifications: { "Print Speed": "100 mm/s", "Resolution": "203 dpi", "Battery": "2600 mAh rechargeable", "Connectivity": "Bluetooth 4.0, USB", "Durability": "IP54, 5ft drop", "Weight": "1.1 lbs" },
  },

  // ── Ink Cartridges ──
  {
    id: 15,
    name: "High Yield Black Ink Cartridge",
    slug: "high-yield-black-ink",
    category: "ink-cartridges",
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.4,
    reviewCount: 612,
    stock: 150,
    images: ["/images/products/ink-cartridge-2.jpg", "/images/products/ink-cartridge-1.jpg"],
    shortDescription: [
      "High yield: up to 1,000 pages",
      "Pigment-based ink for sharp text",
      "Compatible with multiple printer models",
      "Easy snap-in installation"
    ],
    longDescription: "Get more pages per cartridge with this high yield black ink cartridge. The pigment-based formula produces crisp, smudge-resistant text on plain paper, making it ideal for everyday document printing. The easy snap-in design makes replacement quick and mess-free.",
    features: ["1,000 Page Yield", "Pigment Black Ink", "Smudge Resistant", "Easy Installation", "Consistent Output"],
    specifications: { "Yield": "~1,000 pages", "Ink Type": "Pigment", "Color": "Black", "Shelf Life": "24 months", "Package": "1 cartridge" },
    badge: "Sale"
  },
  {
    id: 16,
    name: "Color Ink Cartridge Set",
    slug: "color-ink-cartridge-set",
    category: "ink-cartridges",
    price: 59.99,
    rating: 4.5,
    reviewCount: 445,
    stock: 120,
    images: ["/images/products/ink-cartridge-1.jpg", "/images/products/ink-cartridge-2.jpg"],
    shortDescription: [
      "Complete CMYK set: Cyan, Magenta, Yellow, Black",
      "Dye-based color inks for vivid photos",
      "Pigment black for sharp documents",
      "Up to 500 color pages per set"
    ],
    longDescription: "This complete four-cartridge set includes everything you need for both document and photo printing. The three dye-based color inks produce rich, vibrant photos, while the pigment black delivers professional-quality text. Each cartridge is individually sealed for maximum freshness.",
    features: ["4-Cartridge Complete Set", "Dye Color + Pigment Black", "Individual Packaging", "Wide Compatibility", "Consistent Color Accuracy"],
    specifications: { "Yield": "~500 color pages", "Colors": "Cyan, Magenta, Yellow, Black", "Black Ink": "Pigment", "Color Ink": "Dye-based", "Package": "4 cartridges" },
  },
  {
    id: 17,
    name: "XL Black Ink Cartridge",
    slug: "xl-black-ink-cartridge",
    category: "ink-cartridges",
    price: 44.99,
    rating: 4.6,
    reviewCount: 334,
    stock: 95,
    images: ["/images/products/ink-cartridge-2.jpg", "/images/products/ink-cartridge-1.jpg"],
    shortDescription: [
      "Extra-large capacity: up to 1,500 pages",
      "Lowest cost per page in its class",
      "Fast-drying formula prevents smearing",
      "Designed for high-volume printing"
    ],
    longDescription: "Maximize your printing budget with this extra-large capacity black ink cartridge. Delivering up to 1,500 pages, it offers the lowest cost per page in its class, making it the smart choice for offices and home users who print frequently. The fast-drying formula ensures clean, professional output every time.",
    features: ["1,500 Page Yield", "Low Cost Per Page", "Fast-Drying Formula", "High Volume Ready", "Reliable Performance"],
    specifications: { "Yield": "~1,500 pages", "Ink Type": "Pigment", "Color": "Black", "Drying Time": "< 5 seconds", "Package": "1 cartridge" },
  },
  {
    id: 18,
    name: "Photo Ink Cartridge Pack",
    slug: "photo-ink-cartridge-pack",
    category: "ink-cartridges",
    price: 49.99,
    rating: 4.3,
    reviewCount: 178,
    stock: 67,
    images: ["/images/products/ink-cartridge-1.jpg", "/images/products/ink-cartridge-2.jpg"],
    shortDescription: [
      "6-color ink system for photo-quality prints",
      "Includes photo black and light inks",
      "Archival quality: prints last 100+ years",
      "Optimized for glossy and matte photo paper"
    ],
    longDescription: "Unlock the full potential of your photo printer with this 6-color ink cartridge pack. The expanded color gamut includes photo black and light cyan/magenta inks for smooth gradients and lifelike skin tones. Archival-quality formulation ensures your prints retain their vibrancy for over 100 years when stored properly.",
    features: ["6-Color System", "Photo Black Included", "100+ Year Archival", "Wide Color Gamut", "Matte & Glossy Optimized"],
    specifications: { "Colors": "C, M, Y, K, Light C, Light M", "Ink Type": "Dye-based", "Archival Life": "100+ years", "Yield": "~300 photos (4x6)", "Package": "6 cartridges" },
  },

  // ── Toner Cartridges ──
  {
    id: 19,
    name: "Standard Black Toner Cartridge",
    slug: "standard-black-toner",
    category: "toner-cartridges",
    price: 49.99,
    rating: 4.5,
    reviewCount: 389,
    stock: 110,
    images: ["/images/products/toner-1.jpg", "/images/products/ink-cartridge-2.jpg"],
    shortDescription: [
      "Yields up to 2,500 pages",
      "Sharp, consistent text quality",
      "Compatible with leading laser printers",
      "Sealed drum protects against humidity"
    ],
    longDescription: "Keep your laser printer running with this reliable standard black toner cartridge. Engineered for consistent page-after-page quality, it produces sharp text and clean graphics throughout its entire 2,500-page lifespan. The sealed drum unit protects the toner from humidity and light for optimal print quality.",
    features: ["2,500 Page Yield", "Consistent Quality", "Sealed Drum Unit", "Easy Installation", "Environmentally Packaged"],
    specifications: { "Yield": "~2,500 pages", "Color": "Black", "Type": "Toner", "Compatibility": "Multiple laser models", "Package": "1 cartridge + drum" },
  },
  {
    id: 20,
    name: "High Yield Black Toner",
    slug: "high-yield-black-toner",
    category: "toner-cartridges",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviewCount: 267,
    stock: 75,
    images: ["/images/products/toner-1.jpg", "/images/products/ink-cartridge-1.jpg"],
    shortDescription: [
      "Extra-high yield: up to 6,000 pages",
      "Dramatically lower cost per page",
      "Ideal for busy offices and workgroups",
      "Drop-in replacement, no tools needed"
    ],
    longDescription: "Reduce your printing costs significantly with this high yield toner cartridge. Delivering up to 6,000 pages, it provides over twice the output of standard cartridges at a fraction of the per-page cost. The drop-in design makes replacement effortless with no tools or special training required.",
    features: ["6,000 Page Yield", "Best Cost Per Page", "Drop-In Installation", "Office Grade Quality", "Eco-Friendly Packaging"],
    specifications: { "Yield": "~6,000 pages", "Color": "Black", "Type": "High Yield Toner", "Cost Savings": "Up to 50% vs standard", "Package": "1 cartridge" },
    badge: "Best Value"
  },
  {
    id: 21,
    name: "Color Toner Cartridge Set",
    slug: "color-toner-set",
    category: "toner-cartridges",
    price: 189.99,
    originalPrice: 239.99,
    rating: 4.4,
    reviewCount: 156,
    stock: 38,
    images: ["/images/products/toner-1.jpg", "/images/products/ink-cartridge-1.jpg"],
    shortDescription: [
      "Complete CMYK toner set for color lasers",
      "2,000 page yield per color cartridge",
      "3,000 page yield for black",
      "Vivid, professional color output"
    ],
    longDescription: "Equip your color laser printer with a complete set of toner cartridges for uninterrupted, high-quality color printing. Each color cartridge yields approximately 2,000 pages while the black yields 3,000 pages, providing excellent value for offices that regularly produce color documents, presentations, and marketing materials.",
    features: ["4-Cartridge Set", "Professional Color", "High Page Yields", "Consistent Output", "Reduced Downtime"],
    specifications: { "Black Yield": "~3,000 pages", "Color Yield": "~2,000 pages each", "Colors": "C, M, Y, K", "Package": "4 cartridges" },
    badge: "Sale"
  },

  // ── Paper & Media ──
  {
    id: 22,
    name: "Premium Printer Paper (500 Sheets)",
    slug: "premium-printer-paper-500",
    category: "paper-media",
    price: 12.99,
    rating: 4.6,
    reviewCount: 834,
    stock: 200,
    images: ["/images/products/paper-1.jpg", "/images/products/accessory-1.jpg"],
    shortDescription: [
      "Bright white 24 lb bond paper",
      "Optimized for inkjet and laser printers",
      "Acid-free for archival storage",
      "Smooth finish reduces paper jams"
    ],
    longDescription: "Achieve professional results with every print on this premium bright white paper. The heavier 24 lb weight provides excellent opacity to prevent show-through on double-sided prints, while the ultra-smooth finish ensures clean feeding and reduces paper jams. Acid-free construction means your documents stay pristine for years.",
    features: ["24 lb Weight", "97 Brightness Rating", "Acid-Free", "Dual-Sided Optimized", "Reduced Jamming"],
    specifications: { "Weight": "24 lb bond / 90 gsm", "Brightness": "97", "Size": '8.5 x 11 inches', "Sheets": "500", "Finish": "Smooth", "Acid Free": "Yes" },
  },
  {
    id: 23,
    name: "Glossy Photo Paper Pack",
    slug: "glossy-photo-paper-pack",
    category: "paper-media",
    price: 24.99,
    rating: 4.5,
    reviewCount: 312,
    stock: 85,
    images: ["/images/products/paper-1.jpg", "/images/products/ink-cartridge-1.jpg"],
    shortDescription: [
      "Professional glossy finish for vibrant photos",
      "60 sheets of 4x6 inch photo paper",
      "Quick-drying coating prevents smudges",
      "Compatible with all inkjet printers"
    ],
    longDescription: "Print stunning, lab-quality photos at home with this professional glossy photo paper. The micro-porous coating absorbs ink instantly for smudge-free handling within seconds, while the bright white base and high-gloss finish make colors pop with exceptional vibrancy. Each pack includes 60 sheets of 4x6 inch paper.",
    features: ["High-Gloss Finish", "Instant Dry", "Smudge Resistant", "Wide Compatibility", "Archival Quality"],
    specifications: { "Size": "4 x 6 inches", "Sheets": "60", "Weight": "230 gsm", "Finish": "Glossy", "Compatibility": "All inkjet printers" },
  },
  {
    id: 24,
    name: "Adhesive Label Sheets",
    slug: "adhesive-label-sheets",
    category: "paper-media",
    price: 18.99,
    rating: 4.2,
    reviewCount: 167,
    stock: 72,
    images: ["/images/products/paper-1.jpg", "/images/products/thermal-1.jpg"],
    shortDescription: [
      "100 sheets of full-page adhesive labels",
      "Permanent adhesive for secure application",
      "Works with inkjet and laser printers",
      "Easy peel-off backing"
    ],
    longDescription: "Create professional labels, stickers, and decals with these full-page adhesive label sheets. The permanent adhesive ensures your labels stay put on packages, envelopes, and products, while the smooth white surface produces clear, legible text and graphics on both inkjet and laser printers.",
    features: ["Full-Page Labels", "Permanent Adhesive", "Dual Printer Compatible", "Easy Peel Backing", "Water Resistant"],
    specifications: { "Size": "8.5 x 11 inches", "Sheets": "100", "Adhesive": "Permanent", "Surface": "Matte white", "Compatibility": "Inkjet & Laser" },
  },

  // ── Printer Parts ──
  {
    id: 25,
    name: "Replacement Print Head Assembly",
    slug: "replacement-print-head",
    category: "printer-parts",
    price: 64.99,
    rating: 4.3,
    reviewCount: 89,
    stock: 25,
    images: ["/images/products/parts-1.jpg", "/images/products/maintenance-1.jpg"],
    shortDescription: [
      "Precision-engineered replacement print head",
      "Restores original print quality",
      "Easy DIY installation with guide",
      "Compatible with multiple printer models"
    ],
    longDescription: "Restore your printer to like-new condition with this precision-engineered replacement print head assembly. Over time, print heads can become clogged or worn, leading to streaks, missing lines, and faded output. This replacement unit includes detailed installation instructions for a straightforward DIY swap that takes under 15 minutes.",
    features: ["OEM-Equivalent Quality", "Easy 15-Min Install", "Includes Install Guide", "Tested & Certified", "Restores Print Quality"],
    specifications: { "Type": "Thermal Inkjet Print Head", "Nozzle Count": "1,056", "Compatibility": "Multiple inkjet models", "Install Time": "~15 minutes", "Warranty": "90 days" },
  },
  {
    id: 26,
    name: "Paper Feed Roller Kit",
    slug: "paper-feed-roller-kit",
    category: "printer-parts",
    price: 29.99,
    rating: 4.4,
    reviewCount: 134,
    stock: 48,
    images: ["/images/products/parts-1.jpg", "/images/products/accessory-1.jpg"],
    shortDescription: [
      "Eliminates paper jams and misfeeds",
      "Set of 3 replacement rollers",
      "Made from durable, high-grip rubber",
      "Simple tool-free installation"
    ],
    longDescription: "Stop paper jams and misfeeds with this replacement roller kit. Worn feed rollers are the most common cause of paper handling issues. This kit includes three precision-molded rollers made from high-grip rubber that restore reliable paper feeding. Tool-free installation means you can do it yourself in minutes.",
    features: ["3-Roller Set", "High-Grip Rubber", "Tool-Free Install", "Eliminates Jams", "Long Lasting"],
    specifications: { "Quantity": "3 rollers", "Material": "High-grip rubber", "Compatibility": "Multiple laser models", "Roller Life": "~100,000 pages", "Install Time": "~10 minutes" },
  },

  // ── Maintenance Kits ──
  {
    id: 27,
    name: "Printer Maintenance Kit",
    slug: "printer-maintenance-kit",
    category: "maintenance-kits",
    price: 54.99,
    rating: 4.5,
    reviewCount: 201,
    stock: 35,
    images: ["/images/products/maintenance-1.jpg", "/images/products/parts-1.jpg"],
    shortDescription: [
      "Complete fuser, roller, and separator pad kit",
      "Extends printer life by thousands of pages",
      "Includes step-by-step installation guide",
      "Recommended every 200,000 pages"
    ],
    longDescription: "Keep your laser printer performing at its best with this comprehensive maintenance kit. It includes a replacement fuser assembly, pickup rollers, and separator pads — the three components that wear out most frequently in laser printers. Regular maintenance prevents paper jams, print defects, and premature printer failure.",
    features: ["Complete Kit", "Fuser + Rollers + Pads", "Step-by-Step Guide", "Extends Printer Life", "OEM-Quality Parts"],
    specifications: { "Includes": "Fuser, 2 rollers, separator pad", "Service Interval": "Every 200,000 pages", "Compatibility": "Multiple laser models", "Install Time": "~30 minutes" },
  },
  {
    id: 28,
    name: "Printer Cleaning Kit",
    slug: "printer-cleaning-kit",
    category: "maintenance-kits",
    price: 19.99,
    rating: 4.2,
    reviewCount: 289,
    stock: 94,
    images: ["/images/products/maintenance-1.jpg", "/images/products/accessory-1.jpg"],
    shortDescription: [
      "Non-toxic cleaning solution and wipes",
      "Lint-free cloths and precision swabs",
      "Compressed air canister included",
      "Safe for all printer types"
    ],
    longDescription: "Maintain optimal print quality and extend the life of your printer with this all-inclusive cleaning kit. The non-toxic, anti-static cleaning solution safely removes dust, toner residue, and ink buildup without damaging delicate internal components. Includes everything you need for a thorough printer cleaning in one convenient package.",
    features: ["All-in-One Kit", "Non-Toxic Formula", "Anti-Static", "Lint-Free Cloths", "Compressed Air Can", "Universal Compatibility"],
    specifications: { "Solution": "250ml anti-static cleaner", "Cloths": "10 lint-free wipes", "Swabs": "20 precision swabs", "Air Can": "1 compressed air canister", "Safe For": "All printer types" },
  },

  // ── Accessories ──
  {
    id: 29,
    name: "USB Printer Cable (6ft)",
    slug: "usb-printer-cable",
    category: "accessories",
    price: 9.99,
    rating: 4.6,
    reviewCount: 567,
    stock: 180,
    images: ["/images/products/accessory-1.jpg", "/images/products/parts-1.jpg"],
    shortDescription: [
      "USB 2.0 Type-A to Type-B cable",
      "Gold-plated connectors for reliability",
      "6-foot length for flexible placement",
      "Shielded for interference-free data transfer"
    ],
    longDescription: "Connect your printer to any computer with this premium USB printer cable. Gold-plated connectors ensure a reliable, corrosion-resistant connection, while the shielded design prevents electromagnetic interference for error-free data transfer. The generous 6-foot length provides flexibility in positioning your printer.",
    features: ["Gold-Plated Connectors", "Shielded Construction", "6-Foot Length", "USB 2.0 Speed", "Universal Compatibility"],
    specifications: { "Type": "USB 2.0 A-to-B", "Length": "6 feet / 1.8 m", "Shielding": "Double shielded", "Connectors": "Gold plated", "Data Rate": "480 Mbps" },
  },
  {
    id: 30,
    name: "Wireless Print Adapter",
    slug: "wireless-print-adapter",
    category: "accessories",
    price: 39.99,
    rating: 4.3,
    reviewCount: 198,
    stock: 42,
    images: ["/images/products/accessory-1.jpg", "/images/products/thermal-1.jpg"],
    shortDescription: [
      "Add Wi-Fi to any USB-only printer",
      "Simple plug-and-play setup",
      "Supports mobile and desktop printing",
      "2.4 GHz and 5 GHz dual-band Wi-Fi"
    ],
    longDescription: "Transform any USB printer into a wireless printer with this compact adapter. Simply plug it into your printer's USB port and connect to your Wi-Fi network — no drivers or complex configuration needed. The dual-band Wi-Fi support ensures strong, stable connections throughout your home or office.",
    features: ["Plug-and-Play", "Dual-Band Wi-Fi", "Mobile Printing Support", "No Drivers Needed", "Compact Design"],
    specifications: { "Wi-Fi": "802.11 a/b/g/n/ac (2.4 + 5 GHz)", "Interface": "USB 2.0", "Setup": "Plug-and-play", "Dimensions": "2.8 x 1.2 x 0.6 in", "Weight": "0.5 oz", "Power": "USB bus powered" },
    badge: "New"
  },
];


// 🔥 INR Conversion (ONE TIME FIX)
const RATE = 20;

export const productsINR = products.map((p) => ({
  ...p,
  price: Math.round((p.price * RATE) / 100) * 100 - 1,
  originalPrice: p.originalPrice
    ? Math.round((p.originalPrice * RATE) / 100) * 100 - 1
    : undefined,
}));