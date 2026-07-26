import { useState } from "react";
import { NavLink, Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, FolderTree, Wrench, Layers, Home, LogOut, Menu } from "lucide-react";
import logo from "@/assets/menz-tech-logo.png";
import { useAuth } from "@/context/AuthContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import RequireAdmin from "@/components/RequireAdmin";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/product-categories", label: "Product Categories", icon: FolderTree },
  { to: "/admin/services", label: "Services", icon: Wrench },
  { to: "/admin/service-categories", label: "Service Categories", icon: Layers },
];

const SidebarContent = ({ onNavigate, signOut }: { onNavigate?: () => void; signOut: () => void }) => (
  <>
    <Link to="/" onClick={onNavigate} className="flex items-center gap-2 h-16 px-5 border-b">
      <img src={logo} alt="MenzTech" className="h-8 w-8" />
      <div>
        <div className="font-display font-bold text-sm leading-none">MenzTech</div>
        <div className="text-[10px] text-muted-foreground mt-0.5">Admin panel</div>
      </div>
    </Link>
    <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
              isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
            }`
          }
        >
          <item.icon className="w-4 h-4 shrink-0" />
          {item.label}
        </NavLink>
      ))}
    </nav>
    <div className="border-t p-3 space-y-1">
      <Link to="/" onClick={onNavigate} className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted">
        <Home className="w-4 h-4" /> Back to store
      </Link>
      <button onClick={signOut} className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted">
        <LogOut className="w-4 h-4" /> Sign out
      </button>
    </div>
  </>
);

const AdminLayout = () => {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const activeLabel = navItems.find((i) => (i.end ? location.pathname === i.to : location.pathname.startsWith(i.to)))?.label ?? "Admin";

  return (
    <RequireAdmin>
      <div className="min-h-screen flex bg-muted/30">
        {/* Desktop sidebar */}
        <aside className="hidden lg:flex w-64 bg-background border-r flex-col shrink-0 sticky top-0 h-screen">
          <SidebarContent signOut={signOut} />
        </aside>

        {/* Main */}
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 bg-background border-b flex items-center justify-between gap-3 px-4 sm:px-6 sticky top-0 z-10">
            <div className="flex items-center gap-2 min-w-0">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden shrink-0" aria-label="Open menu">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64 flex flex-col">
                  <SidebarContent signOut={signOut} onNavigate={() => setOpen(false)} />
                </SheetContent>
              </Sheet>
              <div className="min-w-0">
                <h1 className="font-display font-semibold text-foreground truncate text-sm sm:text-base">
                  <span className="hidden sm:inline">Admin Dashboard</span>
                  <span className="sm:hidden">{activeLabel}</span>
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Manage your store catalog</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right hidden md:block">
                <div className="text-sm font-medium truncate max-w-[180px]">{user?.email}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Administrator</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm shrink-0">
                {user?.email?.[0]?.toUpperCase() ?? "A"}
              </div>
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6 overflow-x-hidden">
            <Outlet />
          </main>
        </div>
      </div>
    </RequireAdmin>
  );
};

export default AdminLayout;
