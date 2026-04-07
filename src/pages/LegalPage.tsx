import React from "react";
import Layout from "@/components/Layout";

const legalPages: Record<string, { title: string; content: string }> = {
  "privacy-policy": {
    title: "Privacy Policy",
    content: `Printztek ("we," "our," or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website printztek.shop.

**Information We Collect**
We may collect personal information including your name, email address, phone number, billing and shipping address, and payment details when you place an order, contact us, or interact with our website. We may also collect non-personal data such as browser type, IP address, and usage data for analytics purposes.

**How We Use Your Information**
We use your information to process orders, provide customer support, improve our services, personalize user experience, send updates regarding orders, and share promotional offers (only with your consent).

**Cookies & Tracking Technologies**
We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and improve our services. You can disable cookies through your browser settings.

**Sharing of Information**
We do not sell or rent your personal data. We may share your information with trusted third-party service providers (such as payment gateways and shipping partners) strictly for order processing and service improvement.

**Data Security**
We implement industry-standard security measures including SSL encryption to protect your data from unauthorized access, misuse, or disclosure.

**Your Rights**
You have the right to access, update, or delete your personal data. You may contact us anytime to exercise these rights.

**Contact Us**
Printztek  
Operated by: Varun Singh  
F-2/901, Kingsbury, TDI City, Kundli, Nangal Kalan (43), Sonipat, Haryana 131023, India  
Email: info@printztek.shop  
Website: https://printztek.shop`,
  },

  "refund-policy": {
    title: "Refund Policy",
    content: `At Printztek, customer satisfaction is our priority. We offer a transparent and fair refund policy.

**Return Eligibility**
Products must be returned within 7 days of delivery. Items must be unused, in original packaging, and in resalable condition. Customized or opened consumable products may not be eligible unless defective.

**Return Process**
To initiate a return, contact us at info@printztek.shop with your order details. Our team will guide you through the return process.

**Refunds**
Once we receive and inspect the returned product, refunds will be processed within 5-7 business days to the original payment method.

**Non-Refundable Items**
Shipping charges are non-refundable unless the return is due to our error.

**Damaged or Defective Products**
If you receive a damaged or defective product, please contact us within 48 hours of delivery with proof. We will provide a replacement or full refund.

**Contact**
Printztek  
Operated by: Varun Singh  
Email: info@printztek.shop`,
  },

  "shipping-policy": {
    title: "Shipping Policy",
    content: `Printztek ensures reliable and timely delivery of your orders across India.

**Shipping Coverage**
We currently ship across India. Delivery availability may vary based on your location.

**Processing Time**
Orders are typically processed within 1-2 business days after confirmation.

**Delivery Time**
- Standard Delivery: 3-7 business days  
- Express Delivery: 1-3 business days (if available)

**Shipping Charges**
Shipping charges are calculated at checkout based on your location and order size.

**Order Tracking**
Once shipped, you will receive tracking details via email or SMS.

**Delays**
Delivery times may be affected by external factors such as weather, logistics delays, or holidays.

**Contact**
Printztek  
Email: info@printztek.shop`,
  },

  disclaimer: {
    title: "Disclaimer",
    content: `All information provided on the Printztek website is for general informational purposes only.

**Accuracy of Information**
We strive to keep information accurate and up to date, but we make no warranties regarding completeness or reliability.

**Product Representation**
Product images and descriptions are for reference purposes only. Actual products may vary.

**External Links**
Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.

**Limitation of Liability**
Printztek shall not be held liable for any direct or indirect damages arising from the use of our website or products.`,
  },

  terms: {
    title: "Terms & Conditions",
    content: `By using Printztek website, you agree to the following terms and conditions.

**Use of Website**
You agree to use this website only for lawful purposes and not engage in any activity that may harm the website or its users.

**Orders & Payments**
All orders are subject to acceptance and availability. We reserve the right to cancel orders at our discretion.

**Pricing**
Prices are subject to change without prior notice.

**Intellectual Property**
All content on this website including text, images, and logos are the property of Printztek and protected by applicable laws.

**User Responsibility**
Users are responsible for maintaining confidentiality of their account information.

**Governing Law**
These terms shall be governed by the laws of India.

**Contact**
Printztek  
Operated by: Varun Singh  
F-2/901, Kingsbury, TDI City, Kundli, Sonipat, Haryana, India  
Email: info@printztek.shop  
Website: https://printztek.shop`,
  },
};

const LegalPage: React.FC<{ page: string }> = ({ page }) => {
  const data = legalPages[page];
  if (!data) return <Layout><div className="container mx-auto px-4 py-20 text-center"><h1 className="text-2xl font-bold">Page Not Found</h1></div></Layout>;

  return (
    <Layout>
      <div className="bg-primary py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-primary-foreground">{data.title}</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line leading-relaxed">
          {data.content.split("\n\n").map((block, i) => {
            if (block.startsWith("**") && block.endsWith("**")) {
              return <h2 key={i} className="text-lg font-bold text-foreground mt-6 mb-2">{block.replace(/\*\*/g, "")}</h2>;
            }
            if (block.includes("**")) {
              const parts = block.split("**");
              return <div key={i} className="mb-3">{parts.map((p, j) => j % 2 === 1 ? <strong key={j} className="text-foreground">{p}</strong> : <span key={j}>{p}</span>)}</div>;
            }
            return <p key={i} className="mb-3">{block}</p>;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default LegalPage;