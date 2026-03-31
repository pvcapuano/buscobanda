import { useState } from "react";
import { User, LogOut } from "lucide-react";
import type { MobileTopbarProps } from "@/types/types";

export function MobileTopbar({ handleSignOut }: MobileTopbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="md:hidden flex items-center justify-between px-4 py-3 bg-card border-b border-border-warm relative">
      {/* espaço à esquerda pra balancear */}
      <div className="w-6" />

      {/* logo + texto */}
      <div className="flex items-center gap-2">
        <img
          src="/buscobanda-icon-removebg.png"
          alt="BuscaBanda"
          className="w-8 h-8 object-contain"
        />
        <span
          className="text-ink tracking-widest"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "20px",
          }}
        >
          BUSCO<span className="text-punch">BANDA</span>
        </span>
      </div>

      {/* avatar + dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-8 h-8 rounded-full bg-ink flex items-center justify-center"
        >
          <User size={14} className="text-cream" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-32 bg-card border border-border-warm shadow-md z-50">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-2 px-3 py-2 text-xs font-mono tracking-widest uppercase text-muted hover:text-punch"
            >
              <LogOut size={14} />
              Sair
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
