import { Link, Outlet, useLocation } from "react-router-dom";
import { FileText, Package, FolderOpen, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const QuotesLayout = () => {
  const location = useLocation();
  
  const navItems = [
    { to: "/quotes", label: "All Quotes", icon: FileText, exact: true },
    { to: "/quotes/new", label: "New Quote", icon: Plus },
    { to: "/quotes/materials", label: "Materials", icon: Package },
    { to: "/quotes/templates", label: "Templates", icon: FolderOpen },
  ];

  const isActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm">
                ← Back to Site
              </Link>
              <span className="text-gray-300">|</span>
              <h1 className="text-xl font-bold text-gray-900">TrueCan Quoting</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors",
                  isActive(item.to, item.exact)
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default QuotesLayout;