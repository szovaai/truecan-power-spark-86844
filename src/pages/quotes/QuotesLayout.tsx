import { Link, Outlet, useLocation } from "react-router-dom";
import { FileText, Package, FolderOpen, Plus, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import PasswordGate from "./PasswordGate";

const QuotesLayout = () => {
  const location = useLocation();
  
  const navItems = [
    { to: "/quotes", label: "Quotes", icon: FileText, exact: true },
    { to: "/quotes/new", label: "New", icon: Plus },
    { to: "/quotes/materials", label: "Materials", icon: Package },
    { to: "/quotes/templates", label: "Templates", icon: FolderOpen },
  ];

  const isActive = (path: string, exact?: boolean) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <PasswordGate>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16">
              <div className="flex items-center gap-2 sm:gap-3">
                <Link to="/" className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-1">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back to Site</span>
                </Link>
                <span className="text-gray-300 hidden sm:inline">|</span>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">TrueCan Quoting</h1>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation - Scrollable on mobile */}
        <nav className="bg-white border-b border-gray-200 sticky top-14 sm:top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                    isActive(item.to, item.exact)
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden xs:inline sm:inline">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <Outlet />
        </main>
      </div>
    </PasswordGate>
  );
};

export default QuotesLayout;
