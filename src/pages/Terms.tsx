import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service | TrueCan Power Systems</title>
        <meta name="description" content="Terms of service for TrueCan Power Systems electrical services. Read our service agreements, warranties, and policies." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing our website and engaging TrueCan Power Systems Inc. ("TrueCan", "we", "our", or "us") for electrical services, 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Services Provided</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                TrueCan provides licensed electrical services including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Residential electrical installations, repairs, and maintenance</li>
                <li>Commercial and industrial electrical work</li>
                <li>Panel upgrades and electrical system modernization</li>
                <li>EV charger installation</li>
                <li>Emergency electrical services</li>
                <li>Lighting design and installation</li>
                <li>Smart home integration</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All work is performed by licensed electricians in accordance with applicable electrical codes and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Service Appointments</h2>
              <h3 className="text-xl font-semibold mb-2">Scheduling</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Service appointments are scheduled based on availability. We make every effort to arrive within the scheduled time window, 
                but delays may occur due to unforeseen circumstances, traffic, or previous job complications.
              </p>
              
              <h3 className="text-xl font-semibold mb-2">On-Time Guarantee</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If we are late to your scheduled appointment without prior notification, you will receive a $50 credit toward your service invoice. 
                This guarantee does not apply to emergency services or appointments rescheduled at the customer's request.
              </p>

              <h3 className="text-xl font-semibold mb-2">Cancellation Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Customers may cancel or reschedule appointments with at least 24 hours notice at no charge. Cancellations with less than 
                24 hours notice may be subject to a cancellation fee of $75.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Pricing and Payment</h2>
              <h3 className="text-xl font-semibold mb-2">Estimates and Quotes</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We provide free estimates for most services. Quotes are valid for 30 days unless otherwise specified. Final pricing may vary 
                based on actual site conditions, materials required, or changes to project scope.
              </p>
              
              <h3 className="text-xl font-semibold mb-2">Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Payment is due upon completion of service unless otherwise agreed in writing</li>
                <li>We accept cash, credit cards, debit cards, and e-transfer</li>
                <li>A deposit may be required for large projects or material purchases</li>
                <li>Unpaid invoices over 30 days may be subject to interest charges of 2% per month</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Emergency Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                Emergency service calls after regular business hours are subject to premium rates. Emergency rates will be disclosed 
                at the time of booking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Warranties and Guarantees</h2>
              <h3 className="text-xl font-semibold mb-2">Workmanship Warranty</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We warrant our workmanship for a period of one (1) year from the date of service completion. If defects in workmanship 
                occur during this period, we will repair or correct the issue at no additional charge.
              </p>
              
              <h3 className="text-xl font-semibold mb-2">Product Warranties</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Materials and products installed by TrueCan are covered by the manufacturer's warranty. Warranty terms vary by product 
                and manufacturer. We will assist with warranty claims when applicable.
              </p>

              <h3 className="text-xl font-semibold mb-2">Warranty Exclusions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our warranty does not cover:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Damage caused by misuse, abuse, or neglect</li>
                <li>Modifications made by others after our service</li>
                <li>Normal wear and tear</li>
                <li>Issues arising from pre-existing conditions not disclosed during service</li>
                <li>Acts of nature, accidents, or events beyond our control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Customer Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Customers agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate information about the property and electrical issues</li>
                <li>Ensure safe access to work areas</li>
                <li>Remove or protect valuable items in work areas</li>
                <li>Disclose any known hazards (asbestos, lead paint, etc.)</li>
                <li>Secure pets during service calls</li>
                <li>Obtain necessary permits or approvals from property owners, landlords, or HOAs</li>
                <li>Provide payment as agreed upon completion of services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Liability and Indemnification</h2>
              <h3 className="text-xl font-semibold mb-2">Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                TrueCan's liability is limited to the amount paid for the specific service in question. We are not liable for indirect, 
                incidental, consequential, or special damages, including lost profits, business interruption, or data loss.
              </p>
              
              <h3 className="text-xl font-semibold mb-2">Insurance</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                TrueCan maintains comprehensive general liability insurance and Workers' Compensation coverage as required by law.
              </p>

              <h3 className="text-xl font-semibold mb-2">Indemnification</h3>
              <p className="text-muted-foreground leading-relaxed">
                Customers agree to indemnify and hold TrueCan harmless from any claims, damages, or expenses arising from undisclosed 
                property conditions, failure to obtain necessary permissions, or misrepresentation of facts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Permits and Code Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                When required, TrueCan will obtain necessary electrical permits. All work is performed in accordance with the Canadian 
                Electrical Code and local regulations. Customers are responsible for any additional permits required by their municipality 
                (building permits, HOA approvals, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on our website, including text, graphics, logos, and images, is the property of TrueCan Power Systems Inc. 
                and protected by copyright laws. Unauthorized use or reproduction is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the event of a dispute:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Customers should first contact us directly to attempt informal resolution</li>
                <li>If unresolved, disputes may be submitted to mediation</li>
                <li>Any legal proceedings shall be governed by the laws of Alberta, Canada</li>
                <li>Venue for any legal action shall be in Calgary, Alberta</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Termination of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to refuse or terminate service if: (1) customer behavior is abusive, threatening, or unsafe; 
                (2) payment is not received as agreed; (3) access to the property is unsafe or restricted; or (4) requested work 
                violates electrical codes or regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms of Service from time to time. Changes will be posted on this page with an updated "Last Updated" 
                date. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue in 
                full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-montserrat font-bold mb-3">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-surface p-6 rounded-lg border border-border">
                <p className="font-semibold mb-2">TrueCan Power Systems Inc.</p>
                <p className="text-muted-foreground">Email: <a href="mailto:support@truecanpower.com" className="text-primary hover:underline">support@truecanpower.com</a></p>
                <p className="text-muted-foreground">Phone: <a href="tel:+12508830499" className="text-primary hover:underline">(250) 883-0499</a></p>
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

export default Terms;
