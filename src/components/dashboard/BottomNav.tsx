import { NavLink } from "react-router-dom";
import { navItems } from "@/config/navItems";

function navClass(isActive: boolean) {
  const base =
    "flex flex-col items-center gap-0.5 px-3 py-2 text-[10px] font-mono tracking-widest uppercase transition-all duration-200 cursor-pointer";

  const hover = "hover:text-punch hover:scale-[1.03]";

  return isActive ? `${base} text-punch` : `${base} text-muted ${hover}`;
}

export function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-card border-t border-border-warm flex justify-around items-center px-2 py-1 safe-area-pb">
      {navItems.map(({ label, href, icon: Icon }) => (
        <NavLink
          key={href}
          to={href}
          end={href === "/dashboard"}
          className={({ isActive }) => navClass(isActive)}
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
  );
}
