import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ImageGallery from "@/components/ImageGallery";
import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Star, Minus, Plus, Check, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = React.useState(1);

  if (!product) return <Layout><div className="container mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Product Not Found</h1></div></Layout>;

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.images[0] }, qty);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageGallery images={product.images} name={product.name} />
          <div>
            {product.badge && <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded mb-3">{product.badge}</span>}
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-star text-star" : "text-muted"}`} />)}</div>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-bold text-foreground">${product.price.toFixed(2)}</span>
              {product.originalPrice && <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>}
            </div>
            {product.stock > 0 ? <p className="flex items-center gap-1 text-sm text-success font-medium mb-4"><Check className="h-4 w-4" /> In Stock ({product.stock} available)</p> : <p className="text-sm text-sale font-medium mb-4">Out of Stock</p>}
            <ul className="space-y-1 mb-6">{product.shortDescription.map((s, i) => <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />{s}</li>)}</ul>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center border border-border rounded-lg">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2 hover:bg-accent rounded-l-lg"><Minus className="h-4 w-4" /></button>
                <span className="px-4 text-sm font-medium">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-2 hover:bg-accent rounded-r-lg"><Plus className="h-4 w-4" /></button>
              </div>
              <Button variant="cta" size="lg" className="flex-1" onClick={handleAdd}><ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart</Button>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["Secure Checkout", "Fast Shipping", "30-Day Returns"].map((t) => (
                <div key={t} className="text-center p-3 bg-accent rounded-lg"><p className="text-xs font-medium text-accent-foreground">{t}</p></div>
              ))}
            </div>
          </div>
        </div>

        {/* Description & Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Description</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.longDescription}</p>
            <h3 className="font-semibold text-foreground mb-2">Key Features</h3>
            <ul className="space-y-1">{product.features.map((f, i) => <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="h-3.5 w-3.5 text-primary" />{f}</li>)}</ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Specifications</h2>
            <div className="border border-border rounded-lg overflow-hidden">
              {Object.entries(product.specifications).map(([key, val], i) => (
                <div key={key} className={`flex ${i % 2 === 0 ? "bg-secondary" : "bg-card"}`}>
                  <span className="w-1/3 px-4 py-2.5 text-sm font-medium text-foreground">{key}</span>
                  <span className="w-2/3 px-4 py-2.5 text-sm text-muted-foreground">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl font-bold text-foreground mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{related.map((p) => <ProductCard key={p.id} product={p} />)}</div>
          </div>
        )}
      </div>
      <TrustBadges />
    </Layout>
  );
};

export default ProductDetail;
