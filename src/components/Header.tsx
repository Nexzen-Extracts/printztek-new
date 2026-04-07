import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useSearch } from "@/contexts/SearchContext";
import { useAuth } from "@/contexts/AuthContext";
import { categories } from "@/data/categories";
import logo from "@/assets/logo.png";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { totalItems } = useCart();
  const { setSearchTerm } = useSearch();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    navigate("/shop");
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-1">
            
            
          </div>
          <span className="hidden sm:block">Free Shipping on Orders Over $50</span>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
         <Link to="/" className="flex items-center shrink-0">
  <img 
    src={logo} 
    alt="Printztek" 
    className="h-10 w-auto object-contain"
  />
</Link>

          {/* Desktop search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl">
            <div className="flex w-full">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search printers, ink, toner..."
                className="flex-1 px-4 py-2 border border-border rounded-l-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button type="submit" className="rounded-l-none rounded-r-lg">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="h-5 w-5" />
            </Button>
            <Link to={isAuthenticated ? "/account" : "/login"}>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-sale text-sale-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        {searchOpen && (
          <form onSubmit={handleSearch} className="md:hidden pb-3">
            <div className="flex">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-4 py-2 border border-border rounded-l-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button type="submit" className="rounded-l-none rounded-r-lg">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
        )}
      </div>

      {/* Navigation */}
      <nav className="border-t border-border hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-0 h-11 text-sm">
            <li
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 h-11 font-medium text-foreground hover:text-primary transition-colors">
                Categories <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {megaOpen && (
                <div className="absolute top-full left-0 bg-card border border-border rounded-b-lg shadow-xl z-50 p-6 min-w-[600px] grid grid-cols-3 gap-4 animate-fade-in">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.slug}`}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors"
                      onClick={() => setMegaOpen(false)}
                    >
                      <img src={cat.image} alt={cat.name} className="w-12 h-12 rounded object-cover" loading="lazy" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{cat.name}</p>
                        <p className="text-xs text-muted-foreground">{cat.productCount} products</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>
            {[
              { to: "/shop", label: "Shop All" },
              { to: "/category/inkjet-printers", label: "Inkjet" },
              { to: "/category/laser-printers", label: "Laser" },
              { to: "/category/ink-cartridges", label: "Ink" },
              { to: "/category/toner-cartridges", label: "Toner" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="px-4 h-11 flex items-center font-medium text-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link to="/shop" className="block py-2 font-medium text-foreground" onClick={() => setMobileOpen(false)}>Shop All</Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.slug}`}
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <div className="border-t border-border pt-2 mt-2">
              <Link to="/about" className="block py-2 text-foreground" onClick={() => setMobileOpen(false)}>About</Link>
              <Link to="/contact" className="block py-2 text-foreground" onClick={() => setMobileOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
