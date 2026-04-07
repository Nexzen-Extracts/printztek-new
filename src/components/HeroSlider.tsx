import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg1 from "@/assets/hero-1.jpg";
import heroImg2 from "@/assets/hero-2.jpg";

const slides = [
  {
    image: heroImg1,
    title: "Premium Printing Solutions",
    subtitle: "Everything you need for home and office printing — from printers to ink and paper.",
    cta: "Shop Now",
    link: "/shop",
  },
  {
    image: heroImg2,
    title: "Save Big on Supplies",
    subtitle: "High-yield ink and toner cartridges at prices that keep your budget in check.",
    cta: "Browse Supplies",
    link: "/category/ink-cartridges",
  },
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden bg-foreground">
      <div className="relative h-[400px] md:h-[500px]">
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 flex items-center h-full">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold text-background mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-background/80 text-lg mb-6 animate-fade-in">
                {slide.subtitle}
              </p>
              <Link to={slide.link}>
                <Button variant="hero" size="lg">{slide.cta}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/20 hover:bg-background/40 text-background rounded-full p-2 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/20 hover:bg-background/40 text-background rounded-full p-2 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-background" : "bg-background/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
