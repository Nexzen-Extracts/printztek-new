import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
         <div>
  <h3 className="text-lg font-bold mb-4">Printztek</h3>
  <p className="text-background/70 text-sm leading-relaxed">
    Printztek is a trusted provider of printers, ink, toner, and printing supplies across India. 
    We are committed to delivering high-quality products, fast shipping, and reliable service 
    for homes and businesses.
  </p>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {[
                { to: "/shop", label: "Shop All" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact Us" },
                { to: "/account", label: "My Account" },
                { to: "/cart", label: "Cart" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-background transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {[
                { to: "/category/inkjet-printers", label: "Inkjet Printers" },
                { to: "/category/laser-printers", label: "Laser Printers" },
                { to: "/category/all-in-one-printers", label: "All-in-One Printers" },
                { to: "/category/ink-cartridges", label: "Ink Cartridges" },
                { to: "/category/toner-cartridges", label: "Toner Cartridges" },
                { to: "/category/paper-media", label: "Paper & Media" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-background transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
         <div>
  <h4 className="font-semibold mb-4">Quick Contact</h4>
  
  <ul className="space-y-3 text-sm text-background/70">

    <li className="flex items-start gap-2">
      <span className="h-4 w-4 mt-0.5 shrink-0">👤</span>
      <span>Operated by: Varun Singh</span>
    </li>
    
    <li className="flex items-start gap-2">
      <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
      <span>
        F-2/901, Kingsbury, TDI City, Kundli, Nangal Kalan (43), 
        Sonipat, Haryana 131023, India
      </span>
    </li>

    <li className="flex items-center gap-2">
      <Mail className="h-4 w-4 shrink-0" />
      <a 
        href="mailto:info@printztek.shop" 
        className="hover:text-background"
      >
        info@printztek.shop
      </a>
    </li>

    <li className="flex items-center gap-2">
      <span className="h-4 w-4 shrink-0">🌐</span>
      <a 
        href="https://printztek.shop" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-background"
      >
        printztek.shop
      </a>
    </li>

  </ul>
</div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>&copy; {new Date().getFullYear()} Printztek. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-background">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-background">Terms & Conditions</Link>
              <Link to="/refund-policy" className="hover:text-background">Refund Policy</Link>
              <Link to="/shipping-policy" className="hover:text-background">Shipping</Link>
              <Link to="/disclaimer" className="hover:text-background">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
