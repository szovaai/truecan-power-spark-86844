import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2, Save, FileText, ArrowLeft, Camera, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAutoSave } from "@/hooks/useAutoSave";
import PhotoQuoteAssist from "@/components/quotes/PhotoQuoteAssist";
import CustomerLookup from "@/components/quotes/CustomerLookup";
import LineItemCard from "@/components/quotes/LineItemCard";
import PricingTierSelector, { PricingTier, PRICING_TIERS, calculateTierPricing } from "@/components/quotes/PricingTierSelector";
import QuoteWarnings from "@/components/quotes/QuoteWarnings";
import SaveStatusIndicator from "@/components/quotes/SaveStatusIndicator";

type MaterialCategory = "wiring" | "panels" | "lighting" | "ev_chargers" | "fixtures" | "misc";

interface Material {
  id: string;
  name: string;
  category: MaterialCategory;
  unit_price: number;
  unit_type: string;
}

interface JobTemplate {
  id: string;
  name: string;
  default_labor_hours: number;
}

interface LineItem {
  id: string;
  material_id: string | null;
  name: string;
  quantity: number;
  unit_price: number;
  unit_type: string;
  subtotal: number;
  is_custom: boolean;
}

interface Customer {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  address: string | null;
}

const QuoteBuilder = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const isMobile = useIsMobile();
  
  const [materials, setMaterials] = useState<Material[]>([]);
  const [templates, setTemplates] = useState<JobTemplate[]>([]);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(isEditMode);
  const [quoteNumber, setQuoteNumber] = useState("");
  const [customerId, setCustomerId] = useState<string | null>(null);
  const [quoteId, setQuoteId] = useState<string | null>(id || null);
  const [pricingTier, setPricingTier] = useState<PricingTier>("good");

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [lineItems, setLineItems] = useState<LineItem[]>([]);
  const [laborHours, setLaborHours] = useState(0);
  const [laborRate, setLaborRate] = useState(85);
  const [markupPercent, setMarkupPercent] = useState(25);
  const [notes, setNotes] = useState("");

  // Calculations
  const materialsSubtotal = lineItems.reduce((sum, item) => sum + item.subtotal, 0);
  const laborTotal = laborHours * laborRate;
  const markupAmount = (materialsSubtotal * markupPercent) / 100;
  const baseTotal = materialsSubtotal + markupAmount + laborTotal;

  // Tier-adjusted calculations
  const tierPricing = calculateTierPricing(pricingTier, materialsSubtotal, laborTotal, markupPercent);
  const grandTotal = tierPricing.total;

  // Auto-save function
  const performAutoSave = useCallback(async () => {
    if (!customer.name.trim()) return;

    const quoteData = {
      customer_name: customer.name,
      customer_email: customer.email || null,
      customer_phone: customer.phone || null,
      job_address: customer.address || null,
      customer_id: customerId,
      line_items: JSON.parse(JSON.stringify(lineItems)),
      labor_hours: laborHours,
      labor_rate: laborRate,
      markup_percentage: markupPercent,
      notes: notes || null,
      subtotal: materialsSubtotal + markupAmount,
      total: grandTotal,
      status: "draft" as const,
    };

    if (quoteId) {
      await supabase.from("quotes").update(quoteData).eq("id", quoteId);
    } else {
      const { data } = await supabase
        .from("quotes")
        .insert([{ ...quoteData, quote_number: "" }])
        .select()
        .single();
      if (data) {
        setQuoteId(data.id);
        setQuoteNumber(data.quote_number);
      }
    }
  }, [customer, customerId, lineItems, laborHours, laborRate, markupPercent, notes, materialsSubtotal, markupAmount, grandTotal, quoteId]);

  const { saveStatus, markDirty } = useAutoSave({
    onSave: performAutoSave,
    enabled: customer.name.trim().length > 0,
    delay: 5000,
  });

  // Mark dirty on any change
  useEffect(() => {
    if (customer.name.trim()) {
      markDirty();
    }
  }, [customer, lineItems, laborHours, laborRate, markupPercent, notes, pricingTier]);

  useEffect(() => {
    const fetchData = async () => {
      const [materialsRes, templatesRes] = await Promise.all([
        supabase.from("materials").select("*").order("name"),
        supabase.from("job_templates").select("*").order("name"),
      ]);

      if (materialsRes.data) setMaterials(materialsRes.data);
      if (templatesRes.data) setTemplates(templatesRes.data);

      if (isEditMode && id) {
        const { data: quote, error } = await supabase
          .from("quotes")
          .select("*")
          .eq("id", id)
          .maybeSingle();

        if (error || !quote) {
          toast.error("Quote not found");
          navigate("/quotes");
          return;
        }

        setQuoteNumber(quote.quote_number);
        setQuoteId(quote.id);
        setCustomerId(quote.customer_id || null);
        setCustomer({
          name: quote.customer_name,
          email: quote.customer_email || "",
          phone: quote.customer_phone || "",
          address: quote.job_address || "",
        });
        setLineItems((quote.line_items as unknown as LineItem[]) || []);
        setLaborHours(Number(quote.labor_hours) || 0);
        setLaborRate(Number(quote.labor_rate) || 85);
        setMarkupPercent(Number(quote.markup_percentage) || 25);
        setNotes(quote.notes || "");
        setLoading(false);
      }
    };
    fetchData();
  }, [id, isEditMode, navigate]);

  const handleSelectCustomer = (selectedCustomer: Customer) => {
    setCustomerId(selectedCustomer.id);
    setCustomer({
      name: selectedCustomer.name,
      email: selectedCustomer.email || "",
      phone: selectedCustomer.phone || "",
      address: selectedCustomer.address || "",
    });
    toast.success(`Loaded customer: ${selectedCustomer.name}`);
  };

  const addLineItem = (materialId?: string) => {
    if (materialId) {
      const material = materials.find((m) => m.id === materialId);
      if (material) {
        setLineItems([
          ...lineItems,
          {
            id: crypto.randomUUID(),
            material_id: material.id,
            name: material.name,
            quantity: 1,
            unit_price: Number(material.unit_price),
            unit_type: material.unit_type,
            subtotal: Number(material.unit_price),
            is_custom: false,
          },
        ]);
      }
    } else {
      setLineItems([
        ...lineItems,
        {
          id: crypto.randomUUID(),
          material_id: null,
          name: "",
          quantity: 1,
          unit_price: 0,
          unit_type: "each",
          subtotal: 0,
          is_custom: true,
        },
      ]);
    }
  };

  const updateLineItem = (id: string, updates: Partial<LineItem>) => {
    setLineItems(
      lineItems.map((item) => {
        if (item.id === id) {
          const updated = { ...item, ...updates };
          updated.subtotal = updated.quantity * updated.unit_price;
          return updated;
        }
        return item;
      })
    );
  };

  const removeLineItem = (id: string) => {
    setLineItems(lineItems.filter((item) => item.id !== id));
  };

  const applyTemplate = (templateId: string) => {
    const template = templates.find((t) => t.id === templateId);
    if (template) {
      setLaborHours(Number(template.default_labor_hours));
      toast.success(`Applied template: ${template.name}`);
    }
  };

  const saveOrCreateCustomer = async (): Promise<string | null> => {
    if (!customer.name.trim()) return null;

    if (customerId) {
      await supabase
        .from("customers")
        .update({
          name: customer.name,
          email: customer.email || null,
          phone: customer.phone || null,
          address: customer.address || null,
        })
        .eq("id", customerId);
      return customerId;
    }

    const { data: existing } = await supabase
      .from("customers")
      .select("id")
      .eq("name", customer.name)
      .maybeSingle();

    if (existing) {
      await supabase
        .from("customers")
        .update({
          email: customer.email || null,
          phone: customer.phone || null,
          address: customer.address || null,
        })
        .eq("id", existing.id);
      return existing.id;
    }

    const { data: newCustomer } = await supabase
      .from("customers")
      .insert([{
        name: customer.name,
        email: customer.email || null,
        phone: customer.phone || null,
        address: customer.address || null,
      }])
      .select()
      .single();

    return newCustomer?.id || null;
  };

  const handleSave = async (asDraft = true) => {
    if (!customer.name.trim()) {
      toast.error("Please enter customer name");
      return;
    }

    setSaving(true);
    const savedCustomerId = await saveOrCreateCustomer();

    const quoteData = {
      customer_name: customer.name,
      customer_email: customer.email || null,
      customer_phone: customer.phone || null,
      job_address: customer.address || null,
      customer_id: savedCustomerId,
      line_items: JSON.parse(JSON.stringify(lineItems)),
      labor_hours: laborHours,
      labor_rate: laborRate,
      markup_percentage: markupPercent,
      notes: notes || null,
      subtotal: materialsSubtotal + markupAmount,
      total: grandTotal,
      status: asDraft ? "draft" as const : "sent" as const,
    };

    let result;

    if (quoteId) {
      result = await supabase
        .from("quotes")
        .update(quoteData)
        .eq("id", quoteId)
        .select()
        .single();
    } else {
      result = await supabase
        .from("quotes")
        .insert([{ ...quoteData, quote_number: "" }])
        .select()
        .single();
    }

    setSaving(false);

    if (result.error) {
      toast.error("Failed to save quote");
      console.error(result.error);
    } else {
      toast.success(isEditMode ? "Quote updated successfully" : "Quote saved successfully");
      navigate(`/quotes/${result.data.id}`);
    }
  };

  const handleApplyPhotoSuggestions = (suggestedMaterials: { name: string; quantity: number; unit: string }[], hours: number) => {
    suggestedMaterials.forEach(mat => {
      setLineItems(prev => [...prev, {
        id: crypto.randomUUID(),
        material_id: null,
        name: mat.name,
        quantity: mat.quantity,
        unit_price: 0,
        unit_type: mat.unit,
        subtotal: 0,
        is_custom: true,
      }]);
    });
    setLaborHours(hours);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-pulse text-gray-500">Loading quote...</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pb-24 sm:pb-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
        <div className="flex items-center gap-3">
          <Link to="/quotes">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Back</span>
            </Button>
          </Link>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              {isEditMode ? "Edit Quote" : "New Quote"}
            </h2>
            {quoteNumber && (
              <p className="text-sm text-gray-500">{quoteNumber}</p>
            )}
          </div>
          <SaveStatusIndicator status={saveStatus} />
        </div>
        
        {/* Desktop actions */}
        <div className="hidden sm:flex gap-2">
          <PhotoQuoteAssist onApplySuggestions={handleApplyPhotoSuggestions} />
          <Button variant="outline" onClick={() => handleSave(true)} disabled={saving}>
            <Save className="w-4 h-4 mr-2" />
            {saving ? "Saving..." : "Save Draft"}
          </Button>
          <Button onClick={() => handleSave(false)} disabled={saving}>
            <FileText className="w-4 h-4 mr-2" />
            Save & Preview
          </Button>
        </div>
      </div>

      {/* Warnings */}
      <QuoteWarnings
        customerName={customer.name}
        customerEmail={customer.email}
        lineItems={lineItems}
        laborHours={laborHours}
        markupPercent={markupPercent}
      />

      <div className="grid gap-4 sm:gap-6 mt-4">
        {/* Customer Info */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base sm:text-lg">Customer Information</CardTitle>
              <CustomerLookup 
                onSelectCustomer={handleSelectCustomer}
                currentName={customer.name}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <Label htmlFor="customer_name">Customer Name *</Label>
                <Input
                  id="customer_name"
                  value={customer.name}
                  onChange={(e) => {
                    setCustomer({ ...customer, name: e.target.value });
                    setCustomerId(null);
                  }}
                  placeholder="John Smith"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="customer_phone">Phone</Label>
                <Input
                  id="customer_phone"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  placeholder="(403) 555-0123"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="customer_email">Email</Label>
                <Input
                  id="customer_email"
                  type="email"
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  placeholder="john@example.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="customer_address">Job Address</Label>
                <Input
                  id="customer_address"
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  placeholder="123 Main St, Calgary AB"
                  className="mt-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Template Selector */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Job Template (Optional)</CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={applyTemplate}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a template to pre-fill labor hours..." />
              </SelectTrigger>
              <SelectContent>
                {templates.map((template) => (
                  <SelectItem key={template.id} value={template.id}>
                    {template.name} ({template.default_labor_hours} hrs)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Line Items */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <CardTitle className="text-base sm:text-lg">Materials & Line Items</CardTitle>
              <div className="flex gap-2">
                <Select onValueChange={addLineItem}>
                  <SelectTrigger className="w-full sm:w-64">
                    <SelectValue placeholder="Add from materials..." />
                  </SelectTrigger>
                  <SelectContent>
                    {materials.map((m) => (
                      <SelectItem key={m.id} value={m.id}>
                        {m.name} (${Number(m.unit_price).toFixed(2)})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={() => addLineItem()} className="whitespace-nowrap">
                  <Plus className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Custom</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {lineItems.length === 0 ? (
              <p className="text-center text-gray-500 py-6 sm:py-8">
                No items added yet. Add materials from the dropdown above.
              </p>
            ) : (
              <div className="space-y-3">
                {lineItems.map((item) => (
                  <LineItemCard
                    key={item.id}
                    item={item}
                    onUpdate={updateLineItem}
                    onRemove={removeLineItem}
                  />
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Labor & Markup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <Card>
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-base sm:text-lg">Labor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label htmlFor="labor_hours">Hours</Label>
                  <Input
                    id="labor_hours"
                    type="number"
                    step="0.5"
                    value={laborHours}
                    onChange={(e) => setLaborHours(parseFloat(e.target.value) || 0)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="labor_rate">Rate ($/hr)</Label>
                  <Input
                    id="labor_rate"
                    type="number"
                    value={laborRate}
                    onChange={(e) => setLaborRate(parseFloat(e.target.value) || 0)}
                    className="mt-1"
                  />
                </div>
              </div>
              <p className="mt-3 text-right font-medium">
                Labor Total: ${laborTotal.toFixed(2)}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-base sm:text-lg">Markup</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="markup">Markup Percentage (%)</Label>
                <Input
                  id="markup"
                  type="number"
                  value={markupPercent}
                  onChange={(e) => setMarkupPercent(parseFloat(e.target.value) || 0)}
                  className="mt-1"
                />
              </div>
              <p className="mt-3 text-right font-medium">
                Markup Amount: ${markupAmount.toFixed(2)}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Tiers */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Pricing Options</CardTitle>
          </CardHeader>
          <CardContent>
            <PricingTierSelector
              selectedTier={pricingTier}
              onTierChange={setPricingTier}
              baseTotal={baseTotal}
              materialsSubtotal={materialsSubtotal}
              laborTotal={laborTotal}
              markupAmount={markupAmount}
            />
          </CardContent>
        </Card>

        {/* Notes */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Additional notes for this quote..."
              rows={4}
            />
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="bg-gray-50">
          <CardContent className="pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1 text-sm">
                <p className="text-gray-600">Materials: ${materialsSubtotal.toFixed(2)}</p>
                <p className="text-gray-600">Markup ({markupPercent}%): ${markupAmount.toFixed(2)}</p>
                <p className="text-gray-600">Labor: ${laborTotal.toFixed(2)}</p>
                {pricingTier !== "good" && (
                  <p className="text-gray-600">
                    Tier Adjustment ({PRICING_TIERS[pricingTier].name}): +${(grandTotal - baseTotal).toFixed(2)}
                  </p>
                )}
              </div>
              <div className="text-right w-full sm:w-auto">
                <p className="text-sm text-gray-500">Grand Total ({PRICING_TIERS[pricingTier].name})</p>
                <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                  ${grandTotal.toFixed(2)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-2 sm:hidden z-50">
        <PhotoQuoteAssist onApplySuggestions={handleApplyPhotoSuggestions} />
        <Button variant="outline" onClick={() => handleSave(true)} disabled={saving} className="flex-1">
          <Save className="w-4 h-4 mr-1" />
          Draft
        </Button>
        <Button onClick={() => handleSave(false)} disabled={saving} className="flex-1">
          <FileText className="w-4 h-4 mr-1" />
          Preview
        </Button>
      </div>
    </div>
  );
};

export default QuoteBuilder;
