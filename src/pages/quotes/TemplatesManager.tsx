import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface JobTemplate {
  id: string;
  name: string;
  description: string | null;
  default_labor_hours: number;
  created_at: string;
}

const TemplatesManager = () => {
  const [templates, setTemplates] = useState<JobTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<JobTemplate | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    default_labor_hours: "",
  });

  const fetchTemplates = async () => {
    const { data, error } = await supabase
      .from("job_templates")
      .select("*")
      .order("name");

    if (error) {
      toast.error("Failed to load templates");
      console.error(error);
    } else {
      setTemplates(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      default_labor_hours: "",
    });
    setEditingTemplate(null);
  };

  const handleEdit = (template: JobTemplate) => {
    setEditingTemplate(template);
    setFormData({
      name: template.name,
      description: template.description || "",
      default_labor_hours: template.default_labor_hours.toString(),
    });
    setDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const templateData = {
      name: formData.name,
      description: formData.description || null,
      default_labor_hours: parseFloat(formData.default_labor_hours) || 0,
    };

    if (editingTemplate) {
      const { error } = await supabase
        .from("job_templates")
        .update(templateData)
        .eq("id", editingTemplate.id);

      if (error) {
        toast.error("Failed to update template");
      } else {
        toast.success("Template updated");
        setDialogOpen(false);
        resetForm();
        fetchTemplates();
      }
    } else {
      const { error } = await supabase.from("job_templates").insert(templateData);

      if (error) {
        toast.error("Failed to add template");
      } else {
        toast.success("Template added");
        setDialogOpen(false);
        resetForm();
        fetchTemplates();
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this template?")) return;
    
    const { error } = await supabase.from("job_templates").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete template");
    } else {
      toast.success("Template deleted");
      fetchTemplates();
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading templates...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Job Templates</h2>
        <Dialog open={dialogOpen} onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Template
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingTemplate ? "Edit Template" : "Add New Template"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Template Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Panel Upgrade (100A to 200A)"
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description of this job type..."
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="default_labor_hours">Default Labor Hours</Label>
                <Input
                  id="default_labor_hours"
                  type="number"
                  step="0.5"
                  value={formData.default_labor_hours}
                  onChange={(e) => setFormData({ ...formData, default_labor_hours: e.target.value })}
                  placeholder="0"
                />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingTemplate ? "Update" : "Add"} Template
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Template Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Default Hours</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {templates.map((template) => (
              <TableRow key={template.id}>
                <TableCell className="font-medium">{template.name}</TableCell>
                <TableCell className="text-gray-600 max-w-md truncate">
                  {template.description || "—"}
                </TableCell>
                <TableCell>{template.default_labor_hours} hrs</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(template)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(template.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {templates.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No templates found
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplatesManager;