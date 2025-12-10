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
import { Plus, Save, FileText, ArrowLeft, Minus } from "lucide-react";
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
import ProfitDashboard from "@/components/quotes/ProfitDashboard";
import UpsellSuggestions from "@/components/quotes/UpsellSuggestions";
import MaterialPicker from "@/components/quotes/MaterialPicker";

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
  const [pricingTier, setPricingTier] = useState<PricingTier>("better");
  const [recentMaterials, setRecentMaterials] = useState<string[]>([]);

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

      // Check for quick quote package
      const quickQuoteData = sessionStorage.getItem("quickQuotePackage");
      if (quickQuoteData && !isEditMode) {
        const pkg = JSON.parse(quickQuoteData);
        sessionStorage.removeItem("quickQuotePackage");
        
        // Apply the quick quote package
        const newLineItems = pkg.materials.map((mat: any) => ({
          id: crypto.randomUUID(),
          material_id: null,
          name: mat.name,
          quantity: mat.quantity,
          unit_price: mat.unit_price,
          unit_type: mat.unit_type,
          subtotal: mat.quantity * mat.unit_price,
          is_custom: true,
        }));
        setLineItems(newLineItems);
        setLaborHours(pkg.laborHours);
        toast.success(`${pkg.name} template loaded!`);
      }

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
        // Track recently used
        setRecentMaterials(prev => [material.id, ...prev.filter(id => id !== material.id)].slice(0, 8));
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

  const addMaterialFromPicker = (material: Material) => {
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
    setRecentMaterials(prev => [material.id, ...prev.filter(id => id !== material.id)].slice(0, 8));
    toast.success(`Added ${material.name}`);
  };

  const addUpsell = (upsell: { name: string; price: number; unit_type: string }) => {
    setLineItems([
      ...lineItems,
      {
        id: crypto.randomUUID(),
        material_id: null,
        name: upsell.name,
        quantity: 1,
        unit_price: upsell.price,
        unit_type: upsell.unit_type,
        subtotal: upsell.price,
        is_custom: true,
      },
    ]);
    toast.success(`Added ${upsell.name}`);
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

  const incrementLaborHours = () => setLaborHours(prev => prev + 0.5);
  const decrementLaborHours = () => setLaborHours(prev => Math.max(0, prev - 0.5));

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-pulse text-muted-foreground">Loading quote...</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pb-28 sm:pb-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <Link to="/quotes">
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 sm:w-auto sm:px-3">
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline ml-2">Back</span>
            </Button>
          </Link>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-foreground">
              {isEditMode ? "Edit Quote" : "New Quote"}
            </h2>
            {quoteNumber && (
              <p className="text-xs text-muted-foreground">{quoteNumber}</p>
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

      <div className="grid gap-4 mt-4">
        {/* Customer Info */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Customer</CardTitle>
              <CustomerLookup 
                onSelectCustomer={handleSelectCustomer}
                currentName={customer.name}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label htmlFor="customer_name" className="text-xs">Name *</Label>
                <Input
                  id="customer_name"
                  value={customer.name}
                  onChange={(e) => {
                    setCustomer({ ...customer, name: e.target.value });
                    setCustomerId(null);
                  }}
                  placeholder="John Smith"
                  className="mt-1 h-11"
                />
              </div>
              <div>
                <Label htmlFor="customer_phone" className="text-xs">Phone</Label>
                <Input
                  id="customer_phone"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  placeholder="(403) 555-0123"
                  className="mt-1 h-11"
                />
              </div>
              <div>
                <Label htmlFor="customer_email" className="text-xs">Email</Label>
                <Input
                  id="customer_email"
                  type="email"
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  placeholder="john@example.com"
                  className="mt-1 h-11"
                />
              </div>
              <div>
                <Label htmlFor="customer_address" className="text-xs">Job Address</Label>
                <Input
                  id="customer_address"
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  placeholder="123 Main St, Calgary AB"
                  className="mt-1 h-11"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Template Selector */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Quick Start Template</CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={applyTemplate}>
              <SelectTrigger className="w-full h-11">
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

        {/* Materials Section */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Materials</CardTitle>
              <Button variant="outline" size="sm" onClick={() => addLineItem()} className="h-9">
                <Plus className="w-4 h-4 mr-1" />
                Custom Item
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Material Picker */}
            <MaterialPicker
              materials={materials}
              recentlyUsed={recentMaterials}
              onAddMaterial={addMaterialFromPicker}
            />
            
            {/* Line Items */}
            {lineItems.length > 0 && (
              <div className="space-y-2 pt-4 border-t border-border">
                <Label className="text-xs text-muted-foreground">Added Items ({lineItems.length})</Label>
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

            {/* Upsell Suggestions */}
            {lineItems.length > 0 && (
              <UpsellSuggestions lineItems={lineItems} onAddUpsell={addUpsell} />
            )}
          </CardContent>
        </Card>

        {/* Labor Card with +/- buttons */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Labor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full text-lg"
                  onClick={decrementLaborHours}
                >
                  <Minus className="w-5 h-5" />
                </Button>
                <div className="text-center min-w-[80px]">
                  <div className="text-3xl font-bold text-foreground">{laborHours}</div>
                  <div className="text-xs text-muted-foreground">hours</div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full text-lg"
                  onClick={incrementLaborHours}
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">@ ${laborRate}/hr</div>
                <div className="text-xl font-bold text-foreground">${laborTotal.toFixed(0)}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Markup */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Markup</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Input
                type="number"
                value={markupPercent}
                onChange={(e) => setMarkupPercent(parseFloat(e.target.value) || 0)}
                className="w-24 h-11 text-center text-lg font-semibold"
              />
              <span className="text-lg font-medium text-muted-foreground">%</span>
              <div className="flex-1 text-right">
                <div className="text-xs text-muted-foreground">Markup Amount</div>
                <div className="text-xl font-bold text-foreground">${markupAmount.toFixed(0)}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profit Dashboard */}
        <ProfitDashboard
          materialCost={materialsSubtotal}
          laborCost={laborTotal}
          total={grandTotal}
        />

        {/* Pricing Tiers */}
        <Card>
          <CardContent className="pt-4">
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
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Additional notes for this quote..."
              rows={3}
              className="resize-none"
            />
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Materials: ${materialsSubtotal.toFixed(0)}</p>
                <p>Markup ({markupPercent}%): ${markupAmount.toFixed(0)}</p>
                <p>Labor: ${laborTotal.toFixed(0)}</p>
                {pricingTier !== "good" && (
                  <p className="text-primary">
                    {PRICING_TIERS[pricingTier].name} tier: +${(grandTotal - baseTotal).toFixed(0)}
                  </p>
                )}
              </div>
              <div className="text-right w-full sm:w-auto">
                <p className="text-sm text-muted-foreground">{PRICING_TIERS[pricingTier].name} Package</p>
                <p className="text-4xl font-bold text-foreground">
                  ${grandTotal.toFixed(0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-3 flex gap-2 sm:hidden z-50 shadow-lg">
        <PhotoQuoteAssist onApplySuggestions={handleApplyPhotoSuggestions} />
        <Button variant="outline" onClick={() => handleSave(true)} disabled={saving} className="flex-1 h-12">
          <Save className="w-4 h-4 mr-1" />
          Draft
        </Button>
        <Button onClick={() => handleSave(false)} disabled={saving} className="flex-1 h-12">
          <FileText className="w-4 h-4 mr-1" />
          Preview
        </Button>
      </div>
    </div>
  );
};

export default QuoteBuilder;
