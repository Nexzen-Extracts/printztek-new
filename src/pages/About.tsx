import React from "react";
import Layout from "@/components/Layout";
import TrustBadges from "@/components/TrustBadges";
import {
  ShieldCheck,
  Truck,
  Headphones,
  BadgeCheck,
  Target,
  Building2,
} from "lucide-react";

const About = () => (
  <Layout>
    {/* HERO */}
    <section className="relative bg-gradient-to-r from-primary to-primary/80 py-24">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">
          About Printztek
        </h1>
        <p className="text-primary-foreground/90 mt-5 text-lg md:text-xl leading-relaxed">
          A trusted US-based destination for reliable printers, printing supplies,
          and everyday business essentials — built on quality, transparency, and service.
        </p>
      </div>
    </section>

    {/* INTRO */}
    <section className="container mx-auto px-4 py-20 max-w-5xl">
      <p className="text-lg text-muted-foreground leading-relaxed text-center">
        Printztek was founded with a simple goal: to make printing dependable and
        stress-free for everyone. From home users and students to small businesses
        and growing enterprises, we provide carefully selected printing products
        that deliver consistent performance and long-term value.
      </p>

      <p className="text-muted-foreground leading-relaxed text-center mt-6">
        We understand that printers and supplies are not just accessories — they
        are essential tools for productivity. That’s why every product we offer
        is evaluated for quality, reliability, and real-world performance before
        it reaches our store.
      </p>
    </section>

    {/* COMPANY INFO */}
    <section className="bg-muted/40 py-20">
      <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            Who We Are
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Printztek is a US-based ecommerce company operating from Cypress,
            Texas. Our team is made up of product specialists, logistics experts,
            and customer support professionals who understand the importance of
            reliable printing in both personal and professional environments.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We work closely with trusted suppliers and manufacturers to ensure
            consistent product quality, fair pricing, and dependable availability.
            Our focus is not on selling everything — but on selling the right
            products that customers can trust.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-card border rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-primary">USA</p>
            <p className="text-sm text-muted-foreground">Based & Operated</p>
          </div>
          <div className="bg-card border rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-primary">Fast</p>
            <p className="text-sm text-muted-foreground">Domestic Shipping</p>
          </div>
          <div className="bg-card border rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-primary">Secure</p>
            <p className="text-sm text-muted-foreground">Encrypted Checkout</p>
          </div>
          <div className="bg-card border rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-primary">Trusted</p>
            <p className="text-sm text-muted-foreground">Customer Support</p>
          </div>
        </div>
      </div>
    </section>

    {/* MISSION */}
    <section className="container mx-auto px-4 py-20 max-w-5xl">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Target className="h-7 w-7 text-primary" />
        Our Mission
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Our mission is to simplify the printing experience by offering dependable
        products, transparent pricing, and responsive customer service. We believe
        customers should never have to worry about compatibility issues, hidden
        fees, or unreliable performance.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Whether you are purchasing a single printer for your home or managing
        printing supplies for an entire office, Printztek is committed to
        providing solutions that save time, reduce frustration, and support
        long-term productivity.
      </p>
    </section>

    {/* WHY CHOOSE US */}
    <section className="bg-muted/40 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-14">
          Why Customers Choose Printztek
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: BadgeCheck,
              title: "Carefully Selected Products",
              desc: "Every printer and supply is chosen based on quality, compatibility, and long-term reliability.",
            },
            {
              icon: Truck,
              title: "Fast & Reliable Shipping",
              desc: "We ship quickly within the continental United States with clear tracking and dependable delivery.",
            },
            {
              icon: ShieldCheck,
              title: "Secure Shopping Experience",
              desc: "Your personal and payment information is protected using industry-standard SSL encryption.",
            },
            {
              icon: Headphones,
              title: "Knowledgeable US-Based Support",
              desc: "Our customer support team is available to assist before and after your purchase.",
            },
            {
              icon: BadgeCheck,
              title: "Transparent Pricing",
              desc: "No hidden fees, no surprises — clear pricing and honest product information.",
            },
            {
              icon: ShieldCheck,
              title: "Customer Satisfaction Guarantee",
              desc: "We offer a 30-day hassle-free return policy to ensure peace of mind with every order.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card border rounded-xl p-7 hover:shadow-lg transition"
            >
              <item.icon className="h-9 w-9 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* COMMITMENT */}
    <section className="container mx-auto px-4 py-20 max-w-4xl text-center">
      <h2 className="text-3xl font-bold mb-6">Our Commitment to Quality & Trust</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        At Printztek, trust is earned through consistency. From the moment you
        visit our website to the day your order arrives, we strive to deliver a
        seamless and dependable experience.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        We stand behind every product we sell and continuously improve our
        services based on customer feedback. Our goal is not just to meet
        expectations — but to exceed them.
      </p>
    </section>

    {/* TRUST BADGES */}
    <TrustBadges />
  </Layout>
);

export default About;
