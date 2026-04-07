import React, { useMemo } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { products } from "@/data/products";
import { useSearch } from "@/contexts/SearchContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ITEMS_PER_PAGE = 12;

const Shop = () => {
  const { searchTerm, selectedCategory, priceRange, sortBy, setSortBy } = useSearch();
  const [page, setPage] = React.useState(1);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (p.price > priceRange[1]) return false;
      if (searchTerm && !p.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return true;
    });
    switch (sortBy) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "newest": list.sort((a, b) => b.id - a.id); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
    }
    return list;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">Shop All Products</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-64 shrink-0">
            <FilterSidebar />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">{filtered.length} products</p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48"><SelectValue placeholder="Sort by" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {paged.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button key={i} onClick={() => setPage(i + 1)} className={`h-10 w-10 rounded-md text-sm font-medium transition-colors ${page === i + 1 ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-accent"}`}>
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
