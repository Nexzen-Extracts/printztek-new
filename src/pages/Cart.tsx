import React from "react";
import Layout from "@/components/Layout";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
          <Link to="/shop"><Button variant="cta">Continue Shopping</Button></Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 border border-border rounded-lg bg-card">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{item.name}</h3>
                  <p className="text-lg font-bold text-foreground mt-1">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border border-border rounded">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-accent"><Minus className="h-3.5 w-3.5" /></button>
                      <span className="px-3 text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-accent"><Plus className="h-3.5 w-3.5" /></button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-sale hover:text-sale/80"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </div>
                <p className="font-bold text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="bg-card border border-border rounded-lg p-6 h-fit">
            <h2 className="font-bold text-foreground mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="text-foreground">${totalPrice.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="text-success font-medium">{totalPrice >= 50 ? "Free" : "$5.99"}</span></div>
              <div className="border-t border-border pt-2 mt-2 flex justify-between font-bold text-foreground"><span>Total</span><span>${(totalPrice + (totalPrice >= 50 ? 0 : 5.99)).toFixed(2)}</span></div>
            </div>
            <Link to="/checkout"><Button variant="cta" className="w-full mt-4">Proceed to Checkout</Button></Link>
            <Link to="/shop" className="block text-center text-sm text-primary mt-3 hover:underline">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
