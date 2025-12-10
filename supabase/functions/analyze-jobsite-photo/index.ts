import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { imageBase64 } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    if (!imageBase64) {
      return new Response(
        JSON.stringify({ error: "Image is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const systemPrompt = `You are an expert electrician's assistant analyzing jobsite photos for TrueCan Power in Calgary, Canada. 

Analyze the image and provide a detailed assessment for creating an electrical quote. Focus on:

1. **Panel Analysis**: Identify panel size (100A, 200A, etc.), brand, age, condition
2. **Wiring**: Identify wire types visible, gauge, condition (old knob-and-tube, aluminum, copper)
3. **Existing Equipment**: Note any breakers, outlets, fixtures, or electrical equipment visible
4. **Job Requirements**: Based on what you see, suggest what materials and labor would be needed
5. **Safety Concerns**: Flag any code violations or safety issues visible
6. **Distance Estimates**: If applicable, estimate wire runs or distances to service

Return your analysis as JSON with this structure:
{
  "summary": "Brief 1-2 sentence overview of what you see",
  "panel": {
    "detected": true/false,
    "size_amps": number or null,
    "brand": "string or null",
    "condition": "good/fair/poor/unknown",
    "notes": "string"
  },
  "wiring": {
    "types_detected": ["copper", "aluminum", etc],
    "gauge_estimate": "string or null",
    "condition": "good/fair/poor/unknown",
    "notes": "string"
  },
  "suggested_materials": [
    { "name": "Material name", "quantity": number, "unit": "each/ft/m", "reason": "why needed" }
  ],
  "suggested_labor_hours": {
    "min": number,
    "max": number,
    "complexity": "simple/moderate/complex",
    "notes": "string"
  },
  "safety_concerns": ["list of concerns or empty array"],
  "job_type_guess": "Panel Upgrade/EV Charger/Hot Tub Wiring/Pot Lights/Renovation/Service Call/Other",
  "confidence": "high/medium/low"
}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-pro",
        messages: [
          { role: "system", content: systemPrompt },
          { 
            role: "user", 
            content: [
              {
                type: "text",
                text: "Analyze this jobsite photo and provide your assessment for creating an electrical quote."
              },
              {
                type: "image_url",
                image_url: {
                  url: imageBase64.startsWith("data:") ? imageBase64 : `data:image/jpeg;base64,${imageBase64}`
                }
              }
            ]
          }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No response from AI");
    }

    // Try to parse as JSON, or return raw text
    let analysis;
    try {
      // Extract JSON from markdown code blocks if present
      const jsonMatch = content.match(/```json\n?([\s\S]*?)\n?```/) || content.match(/```\n?([\s\S]*?)\n?```/);
      const jsonStr = jsonMatch ? jsonMatch[1] : content;
      analysis = JSON.parse(jsonStr);
    } catch {
      // If JSON parsing fails, return structured response with raw text
      analysis = {
        summary: content,
        raw_response: true,
        suggested_materials: [],
        suggested_labor_hours: { min: 0, max: 0, complexity: "unknown", notes: content },
        safety_concerns: [],
        confidence: "low"
      };
    }

    return new Response(JSON.stringify(analysis), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("analyze-jobsite-photo error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
