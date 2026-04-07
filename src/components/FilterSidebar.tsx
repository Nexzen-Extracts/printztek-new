import React from "react";
import { categories } from "@/data/categories";
import { useSearch } from "@/contexts/SearchContext";
import { Slider } from "@/components/ui/slider";

const FilterSidebar: React.FC = () => {
  const { selectedCategory, setSelectedCategory, priceRange, setPriceRange } = useSearch();

  return (
    <aside className="space-y-6">
      <div>
        <h3 className="font-semibold text-foreground mb-3">Category</h3>
        <ul className="space-y-1">
          <li>
            <button
              onClick={() => setSelectedCategory("")}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${!selectedCategory ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent"}`}
            >
              All Categories
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedCategory === cat.id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent"}`}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-foreground mb-3">Price Range</h3>
        <Slider
          value={[priceRange[1]]}
          onValueChange={(v) => setPriceRange([0, v[0]])}
          max={1000}
          step={10}
          className="mb-2"
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
