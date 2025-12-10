import { useEffect, useState } from "react";
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
import { Plus, Trash2, Save, FileText, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

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

const QuoteBuilder = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);
  
  const [materials, setMaterials] = useState<Material[]>([]);
  const [templates, setTemplates] = useState<JobTemplate[]>([]);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(isEditMode);
  const [quoteNumber, setQuoteNumber] = useState("");

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

  useEffect(() => {
    const fetchData = async () => {
      const [materialsRes, templatesRes] = await Promise.all([
        supabase.from("materials").select("*").order("name"),
        supabase.from("job_templates").select("*").order("name"),
      ]);

      if (materialsRes.data) setMaterials(materialsRes.data);
      if (templatesRes.data) setTemplates(templatesRes.data);

      // If editing, fetch the quote data
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

        // Populate form with existing data
        setQuoteNumber(quote.quote_number);
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

  // Calculations
  const materialsSubtotal = lineItems.reduce((sum, item) => sum + item.subtotal, 0);
  const laborTotal = laborHours * laborRate;
  const markupAmount = (materialsSubtotal * markupPercent) / 100;
  const grandTotal = materialsSubtotal + markupAmount + laborTotal;

  const handleSave = async (asDraft = true) => {
    if (!customer.name.trim()) {
      toast.error("Please enter customer name");
      return;
    }

    setSaving(true);

    const quoteData = {
      customer_name: customer.name,
      customer_email: customer.email || null,
      customer_phone: customer.phone || null,
      job_address: customer.address || null,
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

    if (isEditMode && id) {
      // Update existing quote
      result = await supabase
        .from("quotes")
        .update(quoteData)
        .eq("id", id)
        .select()
        .single();
    } else {
      // Create new quote
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

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-pulse text-gray-500">Loading quote...</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link to="/quotes">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {isEditMode ? "Edit Quote" : "New Quote"}
            </h2>
            {quoteNumber && (
              <p className="text-sm text-gray-500">{quoteNumber}</p>
            )}
          </div>
        </div>
        <div className="flex gap-2">
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

      <div className="grid gap-6">
        {/* Customer Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Customer Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customer_name">Customer Name *</Label>
                <Input
                  id="customer_name"
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  placeholder="John Smith"
                />
              </div>
              <div>
                <Label htmlFor="customer_phone">Phone</Label>
                <Input
                  id="customer_phone"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  placeholder="(403) 555-0123"
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
                />
              </div>
              <div>
                <Label htmlFor="customer_address">Job Address</Label>
                <Input
                  id="customer_address"
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  placeholder="123 Main St, Calgary AB"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Template Selector */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Job Template (Optional)</CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={applyTemplate}>
              <SelectTrigger className="w-full md:w-96">
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
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Materials & Line Items</CardTitle>
              <div className="flex gap-2">
                <Select onValueChange={addLineItem}>
                  <SelectTrigger className="w-64">
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
                <Button variant="outline" onClick={() => addLineItem()}>
                  <Plus className="w-4 h-4 mr-2" />
                  Custom Item
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {lineItems.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                No items added yet. Add materials from the dropdown above.
              </p>
            ) : (
              <div className="space-y-3">
                {lineItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-1">
                      {item.is_custom ? (
                        <Input
                          value={item.name}
                          onChange={(e) =>
                            updateLineItem(item.id, { name: e.target.value })
                          }
                          placeholder="Item name"
                          className="bg-white"
                        />
                      ) : (
                        <span className="font-medium">{item.name}</span>
                      )}
                    </div>
                    <div className="w-20">
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateLineItem(item.id, {
                            quantity: parseFloat(e.target.value) || 0,
                          })
                        }
                        className="text-center bg-white"
                      />
                    </div>
                    <span className="text-gray-500 text-sm w-12">{item.unit_type}</span>
                    <div className="w-24">
                      <Input
                        type="number"
                        step="0.01"
                        value={item.unit_price}
                        onChange={(e) =>
                          updateLineItem(item.id, {
                            unit_price: parseFloat(e.target.value) || 0,
                          })
                        }
                        className="text-right bg-white"
                        disabled={!item.is_custom}
                      />
                    </div>
                    <span className="w-24 text-right font-medium">
                      ${item.subtotal.toFixed(2)}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeLineItem(item.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Labor & Markup */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Labor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="labor_hours">Hours</Label>
                  <Input
                    id="labor_hours"
                    type="number"
                    step="0.5"
                    value={laborHours}
                    onChange={(e) => setLaborHours(parseFloat(e.target.value) || 0)}
                  />
                </div>
                <div>
                  <Label htmlFor="labor_rate">Rate ($/hr)</Label>
                  <Input
                    id="labor_rate"
                    type="number"
                    value={laborRate}
                    onChange={(e) => setLaborRate(parseFloat(e.target.value) || 0)}
                  />
                </div>
              </div>
              <p className="mt-3 text-right font-medium">
                Labor Total: ${laborTotal.toFixed(2)}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Markup</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="markup">Markup Percentage (%)</Label>
                <Input
                  id="markup"
                  type="number"
                  value={markupPercent}
                  onChange={(e) => setMarkupPercent(parseFloat(e.target.value) || 0)}
                />
              </div>
              <p className="mt-3 text-right font-medium">
                Markup Amount: ${markupAmount.toFixed(2)}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Notes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Notes</CardTitle>
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
        <Card className="bg-gray-900 text-white">
          <CardContent className="pt-6">
            <div className="space-y-2 text-right">
              <div className="flex justify-between">
                <span>Materials Subtotal:</span>
                <span>${materialsSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Markup ({markupPercent}%):</span>
                <span>${markupAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Labor ({laborHours} hrs × ${laborRate}):</span>
                <span>${laborTotal.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-700 pt-2 mt-2">
                <div className="flex justify-between text-xl font-bold">
                  <span>Grand Total:</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuoteBuilder;
