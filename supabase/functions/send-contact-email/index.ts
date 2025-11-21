import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  serviceType?: string;
  urgency?: string;
  message?: string;
  interestedInPowerShield?: boolean;
  isExitIntentLead?: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      name, 
      email, 
      phone, 
      serviceType, 
      urgency, 
      message, 
      interestedInPowerShield,
      isExitIntentLead 
    }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission:", { name, email, phone, serviceType, isExitIntentLead });

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    // Different email templates for exit intent leads vs regular contact forms
    const emailSubject = isExitIntentLead 
      ? "🔥 New Free Inspection Request - Exit Intent Lead"
      : `New Contact Form Submission - ${serviceType || 'General Inquiry'}`;

    const emailHtml = isExitIntentLead ? `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #ff4444; color: white; padding: 15px; margin-bottom: 20px; border-radius: 5px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🔥 HIGH-INTENT LEAD - EXIT INTENT CAPTURE</h1>
          <p style="margin: 10px 0 0 0; font-size: 14px;">Customer was leaving the site but claimed the FREE 20-Point Inspection</p>
        </div>
        
        <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 20px; margin: 20px 0;">
          <p style="margin: 0; color: #856404; font-weight: bold;">⏰ RESPONSE PROMISE: Within 2 hours</p>
          <p style="margin: 10px 0 0 0; color: #856404;">The customer expects a response within 2 hours as promised.</p>
        </div>
        
        <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
          <h2 style="color: #0066cc; margin-top: 0;">Contact Information</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone ? `<a href="tel:${phone}">${phone}</a>` : 'Not provided'}</p>
        </div>

        <div style="background-color: #d4edda; border-left: 4px solid #28a745; padding: 20px; margin: 20px 0;">
          <h2 style="color: #155724; margin-top: 0;">Offer Details</h2>
          <p style="margin: 0; color: #155724;">✓ Free 20-Point Home Safety Inspection (Valued at $99)</p>
          <p style="margin: 10px 0 0 0; color: #155724;">✓ ESA-Certified technician inspection</p>
          <p style="margin: 10px 0 0 0; color: #155724;">✓ Complete safety report with photos</p>
        </div>

        <div style="background-color: #0066cc; color: white; padding: 15px; margin-top: 30px; border-radius: 5px; text-align: center;">
          <p style="margin: 0;">TrueCan Power Systems - Professional Electrical Services</p>
          <p style="margin: 5px 0 0 0; font-size: 12px;">Serving all of Canada • 24/7 Emergency Service</p>
        </div>
      </div>
    ` : `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333; border-bottom: 3px solid #0066cc; padding-bottom: 10px;">
          New Contact Form Submission
        </h1>
        
        <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
          <h2 style="color: #0066cc; margin-top: 0;">Contact Information</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        </div>

        <div style="background-color: #fff; padding: 20px; margin: 20px 0; border-left: 4px solid #0066cc;">
          <h2 style="color: #0066cc; margin-top: 0;">Service Details</h2>
          <p><strong>Service Type:</strong> ${serviceType || 'Not specified'}</p>
          <p><strong>Urgency:</strong> ${urgency || 'Not specified'}</p>
          <p><strong>PowerShield Interest:</strong> ${interestedInPowerShield ? '✓ Yes' : '✗ No'}</p>
        </div>

        ${message ? `
        <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px;">
          <h2 style="color: #0066cc; margin-top: 0;">Message</h2>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        ` : ''}

        <div style="background-color: #0066cc; color: white; padding: 15px; margin-top: 30px; border-radius: 5px; text-align: center;">
          <p style="margin: 0;">TrueCan Power Systems - Professional Electrical Services</p>
          <p style="margin: 5px 0 0 0; font-size: 12px;">Serving all of Canada • 24/7 Emergency Service</p>
        </div>
      </div>
    `;

    // Send email to support@truecanpower.com
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "TrueCan Power Systems <onboarding@resend.dev>",
        to: ["paul@truecanpower.com"],
        reply_to: email,
        subject: emailSubject,
        html: emailHtml,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    // Also send confirmation email to the customer
    const confirmationSubject = isExitIntentLead
      ? "Your Free 20-Point Inspection is Confirmed! - TrueCan Power Systems"
      : "We Received Your Message - TrueCan Power Systems";

    const confirmationHtml = isExitIntentLead ? `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333; border-bottom: 3px solid #0066cc; padding-bottom: 10px;">
          Your Free Inspection is Confirmed! 🎉
        </h1>
        
        <p style="font-size: 16px; line-height: 1.6;">
          Hi ${name},
        </p>
        
        <p style="font-size: 16px; line-height: 1.6;">
          Thank you for claiming your <strong>FREE 20-Point Home Safety Inspection</strong> (valued at $99)!
        </p>

        <div style="background-color: #d4edda; border-left: 4px solid #28a745; padding: 20px; margin: 20px 0;">
          <h2 style="color: #155724; margin-top: 0;">✓ What's Included</h2>
          <ul style="line-height: 1.8; color: #155724;">
            <li>ESA-Certified technician inspection</li>
            <li>Complete safety report with photos</li>
            <li>Identification of hidden electrical hazards</li>
            <li>No obligation, 100% free</li>
          </ul>
        </div>

        <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 20px; margin: 20px 0;">
          <p style="margin: 0; color: #856404; font-weight: bold;">⏰ We'll Contact You Within 2 Hours</p>
          <p style="margin: 10px 0 0 0; color: #856404;">One of our electrical experts will reach out to schedule your free inspection at a time that works for you.</p>
        </div>

        <div style="background-color: #fff; padding: 20px; margin: 20px 0; border: 2px solid #0066cc; border-radius: 5px;">
          <h3 style="color: #0066cc; margin-top: 0;">Need Immediate Help?</h3>
          <p><strong>Emergency Line:</strong> <a href="tel:+12508830499">(250) 883-0499</a> - Available 24/7</p>
          <p><strong>Email:</strong> <a href="mailto:support@truecanpower.com">support@truecanpower.com</a></p>
          <p><strong>Regular Hours:</strong> Mon-Fri: 7 AM - 7 PM | Sat-Sun: 8 AM - 5 PM</p>
        </div>

        <div style="background-color: #0066cc; color: white; padding: 15px; margin-top: 30px; border-radius: 5px; text-align: center;">
          <p style="margin: 0;">TrueCan Power Systems - Professional Electrical Services</p>
          <p style="margin: 5px 0 0 0; font-size: 12px;">Licensed, Insured & Ready to Serve All of Canada</p>
        </div>
      </div>
    ` : `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333; border-bottom: 3px solid #0066cc; padding-bottom: 10px;">
          Thank You for Contacting TrueCan Power Systems!
        </h1>
        
        <p style="font-size: 16px; line-height: 1.6;">
          Hi ${name},
        </p>
        
        <p style="font-size: 16px; line-height: 1.6;">
          We've received your message and one of our electrical experts will get back to you within 24 hours.
        </p>

        <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
          <h2 style="color: #0066cc; margin-top: 0;">What Happens Next?</h2>
          <ul style="line-height: 1.8;">
            <li>Our team will review your request</li>
            <li>You'll receive a call or email within 24 hours</li>
            <li>We'll schedule a convenient time for your service</li>
          </ul>
        </div>

        ${urgency === 'emergency' ? `
        <div style="background-color: #ff4444; color: white; padding: 15px; margin: 20px 0; border-radius: 5px;">
          <p style="margin: 0; font-weight: bold;">🚨 EMERGENCY SERVICE</p>
          <p style="margin: 10px 0 0 0;">
            For immediate emergency assistance, please call us directly at 
            <strong><a href="tel:+12508830499" style="color: white;">(250) 883-0499</a></strong>
          </p>
        </div>
        ` : ''}

        <div style="background-color: #fff; padding: 20px; margin: 20px 0; border: 2px solid #0066cc; border-radius: 5px;">
          <h3 style="color: #0066cc; margin-top: 0;">Contact Information</h3>
          <p><strong>Phone:</strong> <a href="tel:+12508830499">(250) 883-0499</a></p>
          <p><strong>Email:</strong> <a href="mailto:support@truecanpower.com">support@truecanpower.com</a></p>
          <p><strong>Hours:</strong> Mon-Fri: 7 AM - 7 PM | Sat-Sun: 8 AM - 5 PM</p>
          <p><strong>Emergency Service:</strong> Available 24/7</p>
        </div>

        <div style="background-color: #0066cc; color: white; padding: 15px; margin-top: 30px; border-radius: 5px; text-align: center;">
          <p style="margin: 0;">TrueCan Power Systems - Professional Electrical Services</p>
          <p style="margin: 5px 0 0 0; font-size: 12px;">Licensed, Insured & Ready to Serve All of Canada</p>
        </div>
      </div>
    `;

    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "TrueCan Power Systems <onboarding@resend.dev>",
        to: [email],
        subject: confirmationSubject,
        html: confirmationHtml,
      }),
    });

    if (!confirmationResponse.ok) {
      console.error("Failed to send confirmation email, but main email was sent");
    } else {
      const confirmationData = await confirmationResponse.json();
      console.log("Confirmation email sent successfully:", confirmationData);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email sent successfully" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
