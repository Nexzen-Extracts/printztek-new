import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(name, email, password);
    navigate("/account");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-md">
        <h1 className="text-2xl font-bold text-foreground text-center mb-6">Create Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-card border border-border rounded-lg p-6">
          <div><Label>Full Name</Label><Input value={name} onChange={(e) => setName(e.target.value)} required /></div>
          <div><Label>Email</Label><Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
          <div><Label>Password</Label><Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></div>
          <Button variant="cta" className="w-full" type="submit">Create Account</Button>
          <p className="text-center text-sm text-muted-foreground">Already have an account? <Link to="/login" className="text-primary hover:underline">Sign In</Link></p>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
