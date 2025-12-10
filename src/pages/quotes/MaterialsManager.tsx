import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import MaterialCard from "@/components/quotes/MaterialCard";

type MaterialCategory = "wiring" | "panels" | "lighting" | "ev_chargers" | "fixtures" | "misc";

interface Material {
  id: string;
  name: string;
  category: MaterialCategory;
  unit_price: number;
  unit_type: string;
  supplier: string | null;
}

const categoryLabels: Record<MaterialCategory, string> = {
  wiring: "Wiring",
  panels: "Panels",
  lighting: "Lighting",
  ev_chargers: "EV Chargers",
  fixtures: "Fixtures",
  misc: "Misc",
};

const MaterialsManager = () => {
  const isMobile = useIsMobile();
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState<Material | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    category: "misc" as MaterialCategory,
    unit_price: "",
    unit_type: "each",
    supplier: "",
  });

  const fetchMaterials = async () => {
    const { data, error } = await supabase
      .from("materials")
      .select("*")
      .order("category")
      .order("name");

    if (error) {
      toast.error("Failed to load materials");
      console.error(error);
    } else {
      setMaterials(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  const resetForm = () => {
    setFormData({
      name: "",
      category: "misc",
      unit_price: "",
      unit_type: "each",
      supplier: "",
    });
    setEditingMaterial(null);
  };

  const handleEdit = (material: Material) => {
    setEditingMaterial(material);
    setFormData({
      name: material.name,
      category: material.category,
      unit_price: material.unit_price.toString(),
      unit_type: material.unit_type,
      supplier: material.supplier || "",
    });
    setDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const materialData = {
      name: formData.name,
      category: formData.category,
      unit_price: parseFloat(formData.unit_price) || 0,
      unit_type: formData.unit_type,
      supplier: formData.supplier || null,
    };

    if (editingMaterial) {
      const { error } = await supabase
        .from("materials")
        .update(materialData)
        .eq("id", editingMaterial.id);

      if (error) {
        toast.error("Failed to update material");
      } else {
        toast.success("Material updated");
        setDialogOpen(false);
        resetForm();
        fetchMaterials();
      }
    } else {
      const { error } = await supabase.from("materials").insert(materialData);

      if (error) {
        toast.error("Failed to add material");
      } else {
        toast.success("Material added");
        setDialogOpen(false);
        resetForm();
        fetchMaterials();
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this material?")) return;
    
    const { error } = await supabase.from("materials").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete material");
    } else {
      toast.success("Material deleted");
      fetchMaterials();
    }
  };

  const filteredMaterials = materials.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
      (m.supplier?.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = filterCategory === "all" || m.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <div className="text-center py-12">Loading materials...</div>;
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Materials Database</h2>
        <Dialog open={dialogOpen} onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Add Material
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>
                {editingMaterial ? "Edit Material" : "Add New Material"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., 200A Main Breaker Panel"
                  required
                  className="mt-1"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value: MaterialCategory) =>
                      setFormData({ ...formData, category: value })
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(categoryLabels).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="supplier">Supplier</Label>
                  <Input
                    id="supplier"
                    value={formData.supplier}
                    onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
                    placeholder="e.g., Eaton"
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="unit_price">Unit Price ($)</Label>
                  <Input
                    id="unit_price"
                    type="number"
                    step="0.01"
                    value={formData.unit_price}
                    onChange={(e) => setFormData({ ...formData, unit_price: e.target.value })}
                    placeholder="0.00"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="unit_type">Unit Type</Label>
                  <Select
                    value={formData.unit_type}
                    onValueChange={(value) => setFormData({ ...formData, unit_type: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="each">Each</SelectItem>
                      <SelectItem value="meter">Meter</SelectItem>
                      <SelectItem value="foot">Foot</SelectItem>
                      <SelectItem value="roll">Roll</SelectItem>
                      <SelectItem value="box">Box</SelectItem>
                      <SelectItem value="hour">Hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingMaterial ? "Update" : "Add"} Material
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search materials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {Object.entries(categoryLabels).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Content - Card view on mobile, table on desktop */}
      {isMobile ? (
        <div className="space-y-3">
          {filteredMaterials.length === 0 ? (
            <div className="text-center py-8 text-gray-500 bg-white rounded-lg border">
              No materials found
            </div>
          ) : (
            filteredMaterials.map((material) => (
              <MaterialCard
                key={material.id}
                material={material}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Unit Price</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMaterials.map((material) => (
                <TableRow key={material.id}>
                  <TableCell className="font-medium">{material.name}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {categoryLabels[material.category]}
                    </span>
                  </TableCell>
                  <TableCell>
                    ${Number(material.unit_price).toFixed(2)}
                  </TableCell>
                  <TableCell className="text-gray-600">{material.unit_type}</TableCell>
                  <TableCell className="text-gray-600">
                    {material.supplier || "—"}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(material)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(material.id)}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filteredMaterials.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No materials found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MaterialsManager;
