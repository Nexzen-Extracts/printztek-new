import React from "react";
import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import TrustBadges from "@/components/TrustBadges";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featured = products.filter((p) => p.badge).slice(0, 8);
  const newArrivals = products.slice(-4);

  return (
    <Layout>
      <HeroSlider />
      <TrustBadges />

      {/* Shop by Category */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.slice(0, 10).map((cat) => (
              <Link key={cat.id} to={`/category/${cat.slug}`} className="group card-hover rounded-lg border border-border bg-card overflow-hidden text-center p-4">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover img-zoom" loading="lazy" />
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{cat.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-14 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
            <Link to="/shop"><Button variant="outline" size="sm">View All <ArrowRight className="h-4 w-4 ml-1" /></Button></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-14 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-3">Free Shipping on Orders Over ₹999</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">Stock up on ink, toner, and paper — get it delivered to your door at no extra cost.</p>
          <Link to="/shop"><Button variant="hero" className="bg-background text-foreground hover:bg-background/90">Shop Supplies</Button></Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">New Arrivals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
