import React, { useState } from "react";
import Layout from "@/components/Layout";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, ShieldCheck, Lock } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const shipping = totalPrice >= 50 ? 0 : 5.99;

  if (submitted) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center max-w-xl">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Thank you for your order!</h1>
          <p className="text-muted-foreground mb-4">
            Your order has been placed successfully. A confirmation email will be sent shortly.
          </p>
          <p className="text-sm text-muted-foreground">
            Need help? Contact our support anytime.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">Secure Checkout</h1>

        {/* Trust Bar */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Lock className="h-4 w-4" />
          <span>Your information is protected with secure encryption</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Shipping Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Full Name</Label>
                <Input placeholder="John Doe" />
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <Label>Phone</Label>
                <Input placeholder="+1 234 567 890" />
              </div>
              <div>
                <Label>Address</Label>
                <Input placeholder="Street address" />
              </div>
              <div>
                <Label>City</Label>
                <Input />
              </div>
              <div>
                <Label>State</Label>
                <Input />
              </div>
              <div>
                <Label>ZIP Code</Label>
                <Input />
              </div>
              <div>
                <Label>Country</Label>
                <Input value="United States" readOnly />
              </div>
            </div>

            {/* Privacy reassurance */}
            <div className="flex gap-2 items-start text-xs text-muted-foreground mt-2">
              <ShieldCheck className="h-4 w-4 mt-0.5" />
              <p>
                We respect your privacy. Your personal data is used only to process your order.
              </p>
            </div>

            <Button
              variant="cta"
              className="w-full mt-4"
              onClick={() => {
                setSubmitted(true);
                clearCart();
              }}
            >
              Place Secure Order
            </Button>

            {/* Policies */}
            <p className="text-xs text-muted-foreground text-center mt-2">
              By placing your order, you agree to our{" "}
              <a href="/terms" className="underline">Terms</a>,{" "}
              <a href="/privacy" className="underline">Privacy Policy</a> &{" "}
              <a href="/refund" className="underline">Refund Policy</a>.
            </p>
          </div>

          {/* Order Summary */}
          <div className="bg-card border rounded-lg p-6 h-fit">
            <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded border"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <span className="text-sm font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t">
                <span>Total</span>
                <span>${(totalPrice + shipping).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
