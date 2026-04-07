import React from "react";
import { Shield, Truck, RotateCcw, Headphones } from "lucide-react";

const trustItems = [
  { icon: Shield, title: "Secure Checkout", description: "256-bit SSL encrypted payments" },
  { icon: Truck, title: "Fast US Shipping", description: "Free Shipping on Orders Over ₹999" },
  { icon: RotateCcw, title: "30-Day Returns", description: "Hassle-free return policy" },
  { icon: Headphones, title: "Customer Service", description: "Talk to real people for assistance" },
];

const TrustBadges: React.FC = () => {
  return (
    <section className="py-12 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
