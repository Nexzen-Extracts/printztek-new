import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Check } from "lucide-react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary-foreground">Contact Us</h1>
          <p className="text-primary-foreground/80 mt-2">We're here to help with all your printing needs</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-6">Get in Touch</h2>
           <div className="space-y-4">

  <div className="flex items-start gap-3">
    <span className="h-5 w-5 text-primary mt-0.5">👤</span>
    <div>
      <p className="font-medium text-foreground">Operated By</p>
      <p className="text-sm text-muted-foreground">Varun Singh</p>
    </div>
  </div>

  <div className="flex items-start gap-3">
    <MapPin className="h-5 w-5 text-primary mt-0.5" />
    <div>
      <p className="font-medium text-foreground">Address</p>
      <p className="text-sm text-muted-foreground">
        F-2/901, Kingsbury, TDI City, Kundli, Nangal Kalan (43), 
        Sonipat, Haryana 131023, India
      </p>
    </div>
  </div>

  <div className="flex items-start gap-3">
    <Mail className="h-5 w-5 text-primary mt-0.5" />
    <div>
      <p className="font-medium text-foreground">Email</p>
      <p className="text-sm text-muted-foreground">
        info@printztek.shop
      </p>
    </div>
  </div>

  <div className="flex items-start gap-3">
    <span className="h-5 w-5 text-primary mt-0.5">🌐</span>
    <div>
      <p className="font-medium text-foreground">Website</p>
      <p className="text-sm text-muted-foreground">
        printztek.shop
      </p>
    </div>
  </div>

</div>
          </div>
          <div>
            {sent ? (
              <div className="text-center py-8"><div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3"><Check className="h-7 w-7 text-success" /></div><h3 className="font-bold text-foreground">Message Sent!</h3><p className="text-sm text-muted-foreground mt-1">We'll get back to you within 24 hours.</p></div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><Label>Name</Label><Input required /></div>
                <div><Label>Email</Label><Input type="email" required /></div>
                <div><Label>Subject</Label><Input required /></div>
                <div><Label>Message</Label><Textarea rows={5} required /></div>
                <Button variant="cta" className="w-full" type="submit">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
