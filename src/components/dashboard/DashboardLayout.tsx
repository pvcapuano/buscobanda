import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  Guitar,
  Music2,
  Wine,
  Mic2,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
  User,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

/* ── Itens de navegação ────────────────────────────────── */
const navItems = [
  { label: "Início", href: "/dashboard", icon: LayoutDashboard },
  { label: "Músicos", href: "/dashboard/musicos", icon: Guitar },
  { label: "Bandas", href: "/dashboard/bandas", icon: Music2 },
  { label: "Bares", href: "/dashboard/bares", icon: Wine },
  { label: "Estúdios", href: "/dashboard/estudios", icon: Mic2 },
];

/* ── Estilo ativo / inativo ────────────────────────────── */
function navClass(isActive: boolean, mobile = false) {
  const base = mobile
    ? "flex flex-col items-center gap-0.5 px-3 py-2 text-[10px] font-mono tracking-widest uppercase transition-colors"
    : "flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-mono tracking-widest uppercase transition-colors";

  return isActive ? `${base} text-punch` : `${base} text-muted hover:text-ink`;
}

export default function DashboardLayout() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  async function handleSignOut() {
    await signOut();
    navigate("/");
  }

  /* ── Sidebar content (shared between desktop and mobile drawer) ── */
  function SidebarContent() {
    return (
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="px-6 py-5 border-b border-border-warm">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-2"
            onClick={() => setSidebarOpen(false)}
          >
            <img
              src="/buscobanda-icon-removebg.png"
              alt="BuscaBanda"
              className="w-8 h-8 object-contain"
            />
            <span
              className="text-ink tracking-widest"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "16px",
              }}
            >
              BUSCO<span className="text-punch">BANDA</span>
            </span>
          </NavLink>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          {navItems.map(({ label, href, icon: Icon }) => (
            <NavLink
              key={href}
              to={href}
              end={href === "/dashboard"}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) => navClass(isActive)}
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={18}
                    className={isActive ? "text-punch" : "text-muted"}
                  />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* User + logout */}
        <div className="px-4 py-4 border-t border-border-warm space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center">
              <User size={14} className="text-cream" />
            </div>
            <p
              className="text-ink-soft text-xs truncate max-w-[140px]"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {user?.email}
            </p>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            className="w-full justify-start gap-2 text-muted hover:text-punch hover:bg-transparent px-1 font-mono text-xs tracking-widest uppercase"
          >
            <LogOut size={14} />
            Sair
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-cream overflow-hidden">
      {/* ── Sidebar desktop ──────────────────────────────── */}
      <aside className="hidden md:flex flex-col w-56 bg-card border-r border-border-warm shrink-0">
        <SidebarContent />
      </aside>

      {/* ── Mobile: drawer overlay ───────────────────────── */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setSidebarOpen(false)}
          />
          {/* Drawer */}
          <aside className="relative z-50 w-64 bg-card h-full shadow-xl">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 text-muted hover:text-ink"
            >
              <X size={20} />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* ── Main area ────────────────────────────────────── */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Mobile top bar */}
        <header className="md:hidden flex items-center justify-between px-4 py-3 bg-card border-b border-border-warm">
          <button onClick={() => setSidebarOpen(true)} className="text-ink p-1">
            <Menu size={22} />
          </button>

          <span
            className="text-ink tracking-widest"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "20px" }}
          >
            BUSCO<span className="text-punch">BANDA</span>
          </span>

          <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center">
            <User size={14} className="text-cream" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <Outlet />
        </main>

        {/* ── Bottom nav mobile ────────────────────────── */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-card border-t border-border-warm flex justify-around items-center px-2 py-1 safe-area-pb">
          {navItems.map(({ label, href, icon: Icon }) => (
            <NavLink
              key={href}
              to={href}
              end={href === "/dashboard"}
              className={({ isActive }) => navClass(isActive, true)}
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={20}
                    className={isActive ? "text-punch" : "text-muted"}
                  />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
