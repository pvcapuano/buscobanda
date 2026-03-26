import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md border-b border-border-warm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <img
              src="/buscobanda-icon-removebg.png"
              alt="Icon"
              className="w-10 h-8"
            />{" "}
            <span
              className="text-xl tracking-widest text-ink"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              BUSCO<span className="text-punch">BANDA</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Início", href: "#inicio" },
              { label: "Para quem é", href: "#para-quem" },
              { label: "Como funciona", href: "#como-funciona" },
              { label: "Propósito", href: "#proposito" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-ink-soft hover:text-punch transition-colors"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "11px",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              className="border-ink text-ink hover:bg-ink hover:text-cream rounded-sm font-mono tracking-widest text-xs"
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>

            <Button
              size="sm"
              className="bg-punch text-white hover:bg-punch-warm rounded-sm font-mono tracking-widest text-xs"
              asChild
            >
              <Link to="/signin">Cadastro</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ink"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border-warm pt-4">
            {[
              { label: "Início", href: "#inicio" },
              { label: "Para quem é", href: "#para-quem" },
              { label: "Como funciona", href: "#como-funciona" },
              { label: "Propósito", href: "#proposito" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-ink-soft hover:text-punch transition-colors"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-2 pt-2">
              <Button
                size="sm"
                variant="outline"
                className="border-ink text-ink hover:bg-ink hover:text-cream rounded-sm"
                asChild
              >
                <Link to="/login">Login</Link>
              </Button>

              <Button
                size="sm"
                className="bg-punch text-white hover:bg-punch-warm rounded-sm"
                asChild
              >
                <Link to="/signin">Cadastro</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
