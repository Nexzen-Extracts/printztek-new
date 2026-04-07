import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

// 💰 INR formatter
const formatINR = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount * 30); // USD → INR convert
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price , // cart me bhi INR
      image: product.images[0],
    });
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="card-hover rounded-lg border border-border bg-card overflow-hidden">
        
        {/* IMAGE */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover img-zoom"
          />

          {/* BADGE */}
          {product.badge && (
            <span
              className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold ${
                product.badge === "Sale"
                  ? "bg-sale text-sale-foreground"
                  : product.badge === "New"
                  ? "bg-badge-new text-badge-new-foreground"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              {product.badge}
            </span>
          )}

          {/* DISCOUNT % */}
          {product.originalPrice && (
            <span className="absolute top-3 right-3 bg-sale text-sale-foreground px-2 py-0.5 rounded text-xs font-semibold">
              -{Math.round(
                (1 - product.price / product.originalPrice) * 100
              )}
              %
            </span>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-4">
          
          {/* TITLE */}
          <h3 className="font-medium text-card-foreground text-sm line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* RATING */}
          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-star text-star"
                    : "text-muted"
                }`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              ({product.reviewCount})
            </span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg font-bold text-card-foreground">
              {formatINR(product.price)}
            </span>

            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatINR(product.originalPrice)}
              </span>
            )}
          </div>

          {/* STOCK */}
          <div className="flex items-center gap-2 mt-1">
            {product.stock > 0 ? (
              <span className="text-xs text-success font-medium">
                In Stock
              </span>
            ) : (
              <span className="text-xs text-sale font-medium">
                Out of Stock
              </span>
            )}
          </div>

          {/* BUTTON */}
          <Button
            variant="cta"
            size="sm"
            className="w-full mt-3"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;