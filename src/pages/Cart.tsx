import React from "react";
import Layout from "@/components/Layout";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";

// 💰 INR formatter (*30 conversion)
const formatINR = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount * 30);
};

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">
            Your Cart is Empty
          </h1>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added anything yet.
          </p>
          <Link to="/shop">
            <Button variant="cta">Continue Shopping</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // ✅ FIXED SHIPPING
  const shippingCharge = totalPrice * 30 >= 999 ? 0 : 99;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 🛒 ITEMS */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border rounded-lg bg-card"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />

                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>

                  <p className="text-lg font-bold mt-1">
                    {formatINR(item.price)}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 hover:bg-accent"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>

                      <span className="px-3 text-sm">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-accent"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:opacity-80"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <p className="font-bold">
                  {formatINR(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          {/* 📦 SUMMARY */}
          <div className="bg-card border rounded-lg p-6 h-fit">
            <h2 className="font-bold mb-4">Order Summary</h2>

            <div className="space-y-2 text-sm">
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatINR(totalPrice)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">
                  {shippingCharge === 0 ? "Free" : "₹99"}
                </span>
              </div>

              <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                <span>Total</span>
                <span>
                  {formatINR(totalPrice + (shippingCharge === 0 ? 0 : 99))}
                </span>
              </div>
            </div>

            <Link to="/checkout">
              <Button variant="cta" className="w-full mt-4">
                Proceed to Checkout
              </Button>
            </Link>

            <Link
              to="/shop"
              className="block text-center text-sm mt-3 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Cart;