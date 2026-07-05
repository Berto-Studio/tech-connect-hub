import { NavLink, Outlet, Link } from "react-router-dom";
import { LayoutDashboard, Package, FolderTree, Wrench, Layers, Home, LogOut } from "lucide-react";
import logo from "@/assets/menz-tech-logo.png";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import RequireAdmin from "@/components/RequireAdmin";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/product-categories", label: "Product Categories", icon: FolderTree },
  { to: "/admin/services", label: "Services", icon: Wrench },
  { to: "/admin/service-categories", label: "Service Categories", icon: Layers },
];

const AdminLayout = () => {
  const { user, signOut } = useAuth();

  return (
    <RequireAdmin>
      <div className="min-h-screen flex bg-muted/30">
        {/* Sidebar */}
        <aside className="w-64 bg-background border-r flex flex-col shrink-0 sticky top-0 h-screen">
          <Link to="/" className="flex items-center gap-2 h-16 px-5 border-b">
            <img src={logo} alt="MenzTech" className="h-8 w-8" />
            <div>
              <div className="font-display font-bold text-sm leading-none">MenzTech</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Admin panel</div>
            </div>
          </Link>
          <nav className="flex-1 p-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="border-t p-3 space-y-1">
            <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted">
              <Home className="w-4 h-4" /> Back to store
            </Link>
            <button onClick={signOut} className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted">
              <LogOut className="w-4 h-4" /> Sign out
            </button>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 bg-background border-b flex items-center justify-between px-6 sticky top-0 z-10">
            <div>
              <h1 className="font-display font-semibold text-foreground">Admin Dashboard</h1>
              <p className="text-xs text-muted-foreground">Manage your store catalog</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium">{user?.email}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Administrator</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                {user?.email?.[0]?.toUpperCase() ?? "A"}
              </div>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </RequireAdmin>
  );
};

export default AdminLayout;
