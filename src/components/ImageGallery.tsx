import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  name: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, name }) => {
  const [selected, setSelected] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  return (
    <div className="space-y-3">
      <div
        className="relative overflow-hidden rounded-lg border border-border bg-card aspect-square cursor-zoom-in"
        onClick={() => setZoomed(!zoomed)}
      >
        <img
          src={images[selected]}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${zoomed ? "scale-150" : ""}`}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); setSelected((s) => (s - 1 + images.length) % images.length); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background rounded-full p-1"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setSelected((s) => (s + 1) % images.length); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background rounded-full p-1"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${i === selected ? "border-primary" : "border-border"}`}
            >
              <img src={img} alt={`${name} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
