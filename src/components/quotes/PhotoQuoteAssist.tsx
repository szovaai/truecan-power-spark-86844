import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Camera, Upload, Loader2, Sparkles, AlertTriangle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface SuggestedMaterial {
  name: string;
  quantity: number;
  unit: string;
  reason: string;
}

interface PhotoAnalysis {
  summary: string;
  panel?: {
    detected: boolean;
    size_amps: number | null;
    brand: string | null;
    condition: string;
    notes: string;
  };
  wiring?: {
    types_detected: string[];
    gauge_estimate: string | null;
    condition: string;
    notes: string;
  };
  suggested_materials: SuggestedMaterial[];
  suggested_labor_hours: {
    min: number;
    max: number;
    complexity: string;
    notes: string;
  };
  safety_concerns: string[];
  job_type_guess?: string;
  confidence: string;
  raw_response?: boolean;
}

interface PhotoQuoteAssistProps {
  onApplySuggestions: (materials: SuggestedMaterial[], laborHours: number) => void;
}

const PhotoQuoteAssist = ({ onApplySuggestions }: PhotoQuoteAssistProps) => {
  const [open, setOpen] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<PhotoAnalysis | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image must be less than 10MB");
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64 = e.target?.result as string;
      setPreviewUrl(base64);
      await analyzePhoto(base64);
    };
    reader.readAsDataURL(file);
  };

  const analyzePhoto = async (imageBase64: string) => {
    setAnalyzing(true);
    setAnalysis(null);

    try {
      const { data, error } = await supabase.functions.invoke("analyze-jobsite-photo", {
        body: { imageBase64 },
      });

      if (error) throw error;

      if (data.error) {
        toast.error(data.error);
        return;
      }

      setAnalysis(data);
      toast.success("Photo analyzed successfully!");
    } catch (error: any) {
      console.error("Analysis error:", error);
      toast.error("Failed to analyze photo. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  };

  const handleApplySuggestions = () => {
    if (!analysis) return;
    
    const avgHours = (analysis.suggested_labor_hours.min + analysis.suggested_labor_hours.max) / 2;
    onApplySuggestions(analysis.suggested_materials, avgHours);
    toast.success("Suggestions applied to quote!");
    setOpen(false);
  };

  const resetState = () => {
    setAnalysis(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) resetState(); }}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Camera className="w-4 h-4" />
          <Sparkles className="w-3 h-3" />
          Photo AI
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            AI Photo Analysis
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Upload Area */}
          {!previewUrl && (
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">Upload a jobsite photo</p>
              <p className="text-sm text-gray-400">
                Panel boxes, wiring, outlets, fixtures - AI will analyze and suggest materials
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          )}

          {/* Preview */}
          {previewUrl && (
            <div className="relative">
              <img
                src={previewUrl}
                alt="Jobsite photo"
                className="w-full max-h-64 object-contain rounded-lg bg-gray-100"
              />
              {!analyzing && (
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={resetState}
                >
                  Change Photo
                </Button>
              )}
            </div>
          )}

          {/* Loading State */}
          {analyzing && (
            <div className="text-center py-8">
              <Loader2 className="w-8 h-8 mx-auto animate-spin text-blue-500 mb-4" />
              <p className="text-gray-600">Analyzing photo with AI...</p>
              <p className="text-sm text-gray-400">This may take a few seconds</p>
            </div>
          )}

          {/* Analysis Results */}
          {analysis && !analysis.raw_response && (
            <div className="space-y-4">
              {/* Summary */}
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Analysis Summary
                    <span className={`ml-auto text-xs px-2 py-0.5 rounded ${
                      analysis.confidence === "high" ? "bg-green-100 text-green-700" :
                      analysis.confidence === "medium" ? "bg-yellow-100 text-yellow-700" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {analysis.confidence} confidence
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="py-2">
                  <p className="text-sm text-gray-700">{analysis.summary}</p>
                  {analysis.job_type_guess && (
                    <p className="text-sm mt-2">
                      <span className="text-gray-500">Suggested job type:</span>{" "}
                      <span className="font-medium">{analysis.job_type_guess}</span>
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Panel Info */}
              {analysis.panel?.detected && (
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm">Panel Detected</CardTitle>
                  </CardHeader>
                  <CardContent className="py-2 text-sm space-y-1">
                    {analysis.panel.size_amps && (
                      <p><span className="text-gray-500">Size:</span> {analysis.panel.size_amps}A</p>
                    )}
                    {analysis.panel.brand && (
                      <p><span className="text-gray-500">Brand:</span> {analysis.panel.brand}</p>
                    )}
                    <p><span className="text-gray-500">Condition:</span> {analysis.panel.condition}</p>
                    {analysis.panel.notes && (
                      <p className="text-gray-600 italic">{analysis.panel.notes}</p>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Safety Concerns */}
              {analysis.safety_concerns.length > 0 && (
                <Card className="border-yellow-200 bg-yellow-50">
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm flex items-center gap-2 text-yellow-700">
                      <AlertTriangle className="w-4 h-4" />
                      Safety Concerns
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="py-2">
                    <ul className="text-sm text-yellow-800 space-y-1">
                      {analysis.safety_concerns.map((concern, i) => (
                        <li key={i}>• {concern}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Suggested Materials */}
              {analysis.suggested_materials.length > 0 && (
                <Card>
                  <CardHeader className="py-3">
                    <CardTitle className="text-sm">Suggested Materials</CardTitle>
                  </CardHeader>
                  <CardContent className="py-2">
                    <div className="space-y-2">
                      {analysis.suggested_materials.map((mat, i) => (
                        <div key={i} className="text-sm flex justify-between items-start">
                          <div>
                            <span className="font-medium">{mat.name}</span>
                            <span className="text-gray-500 text-xs ml-2">({mat.reason})</span>
                          </div>
                          <span className="text-gray-600">{mat.quantity} {mat.unit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Labor Estimate */}
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm">Labor Estimate</CardTitle>
                </CardHeader>
                <CardContent className="py-2 text-sm">
                  <p>
                    <span className="text-gray-500">Hours:</span>{" "}
                    <span className="font-medium">
                      {analysis.suggested_labor_hours.min}-{analysis.suggested_labor_hours.max} hrs
                    </span>
                    <span className="text-gray-500 ml-2">
                      ({analysis.suggested_labor_hours.complexity} complexity)
                    </span>
                  </p>
                  {analysis.suggested_labor_hours.notes && (
                    <p className="text-gray-600 mt-1">{analysis.suggested_labor_hours.notes}</p>
                  )}
                </CardContent>
              </Card>

              {/* Apply Button */}
              <Button onClick={handleApplySuggestions} className="w-full">
                <Sparkles className="w-4 h-4 mr-2" />
                Apply Suggestions to Quote
              </Button>
            </div>
          )}

          {/* Raw Response Fallback */}
          {analysis?.raw_response && (
            <Card>
              <CardHeader className="py-3">
                <CardTitle className="text-sm">AI Analysis</CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{analysis.summary}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoQuoteAssist;
