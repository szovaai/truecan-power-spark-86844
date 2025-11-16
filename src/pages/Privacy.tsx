import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | TrueCan Power Systems</title>
        <meta name="description" content="TrueCan Power Systems privacy policy. Learn how we collect, use, and protect your personal information." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                TrueCan Power Systems Inc. ("we", "our", or "us") respects your privacy and is committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you request a quote, book a service, or contact us, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Property details and service requirements</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 mt-4">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you visit our website, we automatically collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website or source</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our electrical services</li>
                <li>Process service requests and appointments</li>
                <li>Send service confirmations, updates, and emergency notifications</li>
                <li>Respond to your inquiries and customer service requests</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Comply with legal obligations and protect our legal rights</li>
                <li>Analyze website usage to improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell or rent your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Service Providers:</strong> Third-party vendors who assist with payment processing, scheduling, or customer communications</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of company assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, 
                and understand user behavior. You can control cookie preferences through your browser settings, though disabling cookies 
                may limit certain website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, 
                alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee 
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Your Privacy Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under Canadian privacy law (PIPEDA), you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information (subject to legal obligations)</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Lodge a complaint with the Office of the Privacy Commissioner of Canada</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, contact us at <a href="mailto:service@truecanpower.com" className="text-primary hover:underline">service@truecanpower.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, 
                comply with legal obligations, resolve disputes, and enforce our agreements. Service records may be retained for 
                warranty and liability purposes as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information 
                from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. 
                We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance 
                of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-surface p-6 rounded-lg border border-border">
                <p className="font-semibold mb-2">TrueCan Power Systems Inc.</p>
                <p className="text-muted-foreground">Email: <a href="mailto:service@truecanpower.com" className="text-primary hover:underline">service@truecanpower.com</a></p>
                <p className="text-muted-foreground">Phone: <a href="tel:+15873170615" className="text-primary hover:underline">(587) 317-0615</a></p>
                <p className="text-muted-foreground">Service Area: Calgary, Alberta</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
