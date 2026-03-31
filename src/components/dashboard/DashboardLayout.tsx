import { Outlet } from "react-router-dom";
import { X } from "lucide-react";

import { useDashboardLayout } from "@/hooks/useDashboardLayout";

import { SidebarContent } from "@/components/dashboard/SidebarContent";
import { MobileTopbar } from "@/components/dashboard/MobileTopbar";
import { BottomNav } from "@/components/dashboard/BottomNav";

export default function DashboardLayout() {
  const { user, sidebarOpen, setSidebarOpen, handleSignOut } =
    useDashboardLayout();

  return (
    <div className="flex h-screen bg-cream overflow-hidden">
      {/* ── Sidebar desktop ──────────────────────────────── */}
      <aside className="hidden md:flex flex-col w-56 bg-card border-r border-border-warm shrink-0">
        <SidebarContent
          user={user}
          setSidebarOpen={setSidebarOpen}
          handleSignOut={handleSignOut}
        />
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

            <SidebarContent
              user={user}
              setSidebarOpen={setSidebarOpen}
              handleSignOut={handleSignOut}
            />
          </aside>
        </div>
      )}

      {/* ── Main area ────────────────────────────────────── */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Mobile top bar */}
        <MobileTopbar handleSignOut={handleSignOut} />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <Outlet />
        </main>

        {/* Bottom nav mobile */}
        <BottomNav />
      </div>
    </div>
  );
}
