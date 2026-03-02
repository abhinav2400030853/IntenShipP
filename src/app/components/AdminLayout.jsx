import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, PlusCircle, FileText, TrendingUp, ClipboardCheck, LogOut } from "lucide-react";

export default function AdminLayout() {
  const location = useLocation();

  const menuItems = [
    { path: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { path: "/admin/post-internship", label: "Post Internship", icon: PlusCircle },
    { path: "/admin/applications", label: "Applications", icon: FileText },
    { path: "/admin/intern-progress", label: "Intern Progress", icon: TrendingUp },
    { path: "/admin/evaluations", label: "Evaluations", icon: ClipboardCheck },
  ];

  const isActive = (path) => {
    if (path === "/admin") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-indigo-600">Admin Portal</h1>
          <p className="text-sm text-gray-600 mt-1">Employer Dashboard</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
