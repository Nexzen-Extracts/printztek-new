import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const catProducts = products.filter((p) => p.category === slug);

  if (!category) return <Layout><div className="container mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Category Not Found</h1></div></Layout>;

  return (
    <Layout>
      <div className="bg-primary py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary-foreground">{category.name}</h1>
          <p className="text-primary-foreground/80 mt-2">{category.description}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <p className="text-sm text-muted-foreground mb-6">{catProducts.length} products</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {catProducts.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
