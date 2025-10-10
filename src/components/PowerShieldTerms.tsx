import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const PowerShieldTerms = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-sm text-muted-foreground p-0 h-auto">
          View Terms & Conditions
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-montserrat font-bold">
            PowerShield™ Membership Terms & Conditions
          </DialogTitle>
          <DialogDescription>
            Please review the following terms governing your PowerShield™ membership
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-bold text-base mb-2">1. Annual Subscription Details</h3>
              <p className="text-muted-foreground leading-relaxed">
                PowerShield™ membership is an annual subscription billed at $197/year at sign-up. 
                Membership auto-renews unless cancelled before the renewal date. You will receive 
                a renewal notice 30 days prior to your renewal date.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">2. Service Area & Travel Fees</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Standard service area includes Calgary and immediate surrounding communities 
                (Airdrie, Chestermere, Cochrane, Okotoks). Services are available Alberta-wide 
                with the following considerations:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Standard zones: No additional travel fees</li>
                <li>Extended zones (50-100km): Reduced member travel fee applies</li>
                <li>Remote zones (100km+): Custom travel fees quoted in advance</li>
              </ul>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">3. Covered Services Definition</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Each service call includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Travel to and from your property</li>
                <li>Complete diagnostic assessment of the electrical issue</li>
                <li>Up to 30 minutes of on-site labour for repairs</li>
                <li>Free 20-point safety inspection report</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Common covered work includes: tripping breaker diagnosis and reset, faulty 
                receptacle or switch replacement, light fixture installation, GFCI testing and 
                reset, loose connection repairs, and minor wiring fixes.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">4. Materials & Extended Labour</h3>
              <p className="text-muted-foreground leading-relaxed">
                Materials and labour beyond the included 30 minutes are available at a 10% member 
                discount. All additional work requires your approval before proceeding. You will 
                receive a detailed quote for any work exceeding the included service call scope.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">5. Cancellation Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                You may cancel your PowerShield™ membership at any time by contacting our customer 
                service team. Cancellations must be submitted before your renewal date to avoid 
                being charged for the next year. No refunds are provided for unused service calls 
                or partial membership periods.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">6. Safety & Code Compliance</h3>
              <p className="text-muted-foreground leading-relaxed">
                All work performed is guaranteed to meet current electrical codes and safety 
                standards. Permit requirements and fees are separate from membership benefits and 
                will be communicated when applicable. Some work may require permits based on local 
                regulations.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">7. Liability & Warranty</h3>
              <p className="text-muted-foreground leading-relaxed">
                TrueCan Power Systems carries comprehensive liability insurance. All workmanship is 
                covered by our 2-year warranty. Materials are covered by manufacturer warranties. 
                We guarantee your satisfaction with our "Friendly Service, or Your Visit Credit Back" 
                policy—if you're not happy with our workmanship or how you were treated, we'll credit 
                the visit and make it right.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">8. Service Call Usage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your 2 annual service calls must be used within 12 months of membership activation. 
                Unused calls do not roll over to the next membership year. The base membership covers 
                one property address; additional addresses can be added for $99 each per year.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">9. Priority Emergency Access</h3>
              <p className="text-muted-foreground leading-relaxed">
                PowerShield™ members receive priority dispatch for emergency service requests. While 
                we strive for same-day or next-day service, response times may vary based on current 
                demand and location. Emergency service is available 24/7 for safety-critical issues.
              </p>
            </section>

            <section>
              <h3 className="font-bold text-base mb-2">10. Exclusions</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                The following are NOT covered under standard PowerShield™ membership benefits:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Major projects (panel upgrades, complete rewiring, new circuit installations)</li>
                <li>Permit fees and inspections</li>
                <li>Specialty equipment rentals (lifts, trenchers, etc.)</li>
                <li>Materials and parts (available at 10% member discount)</li>
                <li>Work on properties not listed on the membership account</li>
              </ul>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PowerShieldTerms;
