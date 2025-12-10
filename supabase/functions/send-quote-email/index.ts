import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteEmailRequest {
  customerEmail: string;
  customerName: string;
  quoteNumber: string;
  total: number;
  quoteUrl: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { customerEmail, customerName, quoteNumber, total, quoteUrl }: QuoteEmailRequest = await req.json();

    if (!customerEmail) {
      return new Response(
        JSON.stringify({ error: "Customer email is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailResponse = await resend.emails.send({
      from: "TrueCan Power <onboarding@resend.dev>",
      to: [customerEmail],
      subject: `Your Quote ${quoteNumber} from TrueCan Power`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a1a2e; color: white; padding: 20px; text-align: center; }
            .content { padding: 30px 20px; }
            .quote-box { background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .total { font-size: 24px; font-weight: bold; color: #1a1a2e; }
            .button { display: inline-block; background: #eab308; color: #1a1a2e; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>TrueCan Power</h1>
              <p>Calgary's Trusted Electricians</p>
            </div>
            <div class="content">
              <p>Hi ${customerName},</p>
              <p>Thank you for considering TrueCan Power for your electrical needs. Please find your quote details below:</p>
              
              <div class="quote-box">
                <p><strong>Quote Number:</strong> ${quoteNumber}</p>
                <p class="total">Total: $${total.toLocaleString('en-CA', { minimumFractionDigits: 2 })}</p>
              </div>
              
              <p>This quote is valid for 30 days. If you have any questions or would like to proceed, please don't hesitate to contact us.</p>
              
              <p style="text-align: center; margin: 30px 0;">
                <a href="${quoteUrl}" class="button">View Full Quote</a>
              </p>
              
              <p>Best regards,<br><strong>The TrueCan Power Team</strong></p>
            </div>
            <div class="footer">
              <p>TrueCan Power | (250) 883-0499 | service@truecanpower.com</p>
              <p>Serving the Calgary Area</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Quote email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-quote-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
