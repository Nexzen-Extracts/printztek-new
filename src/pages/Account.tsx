import React from "react";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Navigate } from "react-router-dom";
import { User, Package, LogOut } from "lucide-react";

const orders = [
  { id: "PHF-10234", date: "2026-01-15", total: 289.97, status: "Delivered" },
  { id: "PHF-10198", date: "2025-12-28", total: 59.99, status: "Delivered" },
  { id: "PHF-10312", date: "2026-02-03", total: 179.99, status: "Shipped" },
];

const Account = () => {
  const { user, isAuthenticated, logout } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-2xl font-bold text-foreground mb-6">My Account</h1>
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center"><User className="h-7 w-7 text-primary" /></div>
            <div>
              <p className="font-semibold text-foreground">{user?.name}</p>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2"><Package className="h-5 w-5" /> Order History</h2>
          <div className="space-y-3">
            {orders.map((o) => (
              <div key={o.id} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                <div>
                  <p className="font-medium text-foreground text-sm">{o.id}</p>
                  <p className="text-xs text-muted-foreground">{o.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground text-sm">${o.total.toFixed(2)}</p>
                  <span className={`text-xs font-medium ${o.status === "Delivered" ? "text-success" : "text-primary"}`}>{o.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button variant="outline" onClick={logout} className="flex items-center gap-2"><LogOut className="h-4 w-4" /> Sign Out</Button>
      </div>
    </Layout>
  );
};

export default Account;
