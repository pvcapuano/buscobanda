import { NavLink } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/config/navItems";
import type { SidebarContentProps } from "@/types/types";

export function SidebarContent({
  user,
  setSidebarOpen,
  handleSignOut,
}: SidebarContentProps) {
  return (
    <div className="flex flex-col h-full">
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

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map(({ label, href, icon: Icon }) => (
          <NavLink
            key={href}
            to={href}
            end={href === "/dashboard"}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-mono tracking-widest uppercase transition-all duration-200 cursor-pointer text-punch"
                : "flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-mono tracking-widest uppercase transition-all duration-200 cursor-pointer text-muted hover:text-punch hover:scale-[1.03]"
            }
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
