import React, { useState } from "react";
import Layout from "@/components/Layout";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, ShieldCheck, Lock } from "lucide-react";

// 💰 INR FORMAT (*30 conversion)
const formatINR = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount * 30);
};

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderData, setOrderData] = useState<any>(null);

  // 🚚 SHIPPING (Free above ₹999)
  const shipping = totalPrice * 30 >= 999 ? 0 : 99;

  const handleOrder = () => {
    const order = {
      id: "ORD" + Date.now(),
      items,
      total: totalPrice,
      shipping,
      paymentMethod,
    };

    setOrderData(order);
    setSubmitted(true);
    clearCart();
  };

  // ✅ SUCCESS PAGE
  if (submitted && orderData) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 max-w-xl text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold mb-2">
            Order Placed Successfully 🎉
          </h1>

          <p className="text-muted-foreground mb-4">
            Order ID: <b>{orderData.id}</b>
          </p>

          {/* 🧾 ORDER DETAILS */}
          <div className="bg-card border rounded-lg p-4 text-left">
            {orderData.items.map((item: any) => (
              <div key={item.id} className="flex items-center gap-3 mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded border"
                />

                <div className="flex-1 text-sm">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Qty: {item.quantity}
                  </p>
                </div>

                <span className="text-sm font-semibold">
                  {formatINR(item.price * item.quantity)}
                </span>
              </div>
            ))}

            <div className="border-t mt-3 pt-3 text-sm space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatINR(orderData.total)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {orderData.shipping === 0 ? "Free" : "₹99"}
                </span>
              </div>

              <div className="flex justify-between font-bold border-t pt-2">
                <span>Total</span>
                <span>
                  {formatINR(orderData.total + (orderData.shipping === 0 ? 0 : 99))}
                </span>
              </div>

              <div className="pt-2">
                Payment Method: <b>Cash on Delivery</b>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // 🛒 CHECKOUT PAGE
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-2">Secure Checkout</h1>

        {/* 🔒 TRUST BAR */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Lock className="h-4 w-4" />
          <span>Your information is protected with secure encryption</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* 🚚 SHIPPING FORM */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Shipping Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <div><Label>Full Name</Label><Input /></div>
              <div><Label>Email</Label><Input type="email" /></div>
              <div><Label>Phone</Label><Input /></div>
              <div><Label>Address</Label><Input /></div>
              <div><Label>City</Label><Input /></div>
              <div><Label>State</Label><Input /></div>
              <div><Label>PIN Code</Label><Input /></div>
              <div><Label>Country</Label><Input value="India" readOnly /></div>
            </div>

            {/* 💳 PAYMENT */}
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Payment Method</h3>

              <label className="flex items-center gap-2 border p-3 rounded cursor-pointer">
                <input
                  type="radio"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash on Delivery (COD)
              </label>
            </div>

            {/* 🔐 PRIVACY */}
            <div className="flex gap-2 text-xs text-muted-foreground mt-2">
              <ShieldCheck className="h-4 w-4" />
              <p>Your personal data is secure and encrypted.</p>
            </div>

            <Button
              variant="cta"
              className="w-full mt-4"
              onClick={handleOrder}
            >
              Place Secure Order
            </Button>
          </div>

          {/* 🧾 ORDER SUMMARY */}
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
                    {formatINR(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatINR(totalPrice)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : "₹99"}</span>
              </div>

              <div className="flex justify-between font-bold text-base pt-2 border-t">
                <span>Total</span>
                <span>
                  {formatINR(totalPrice + (shipping === 0 ? 0 : 99))}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Checkout;