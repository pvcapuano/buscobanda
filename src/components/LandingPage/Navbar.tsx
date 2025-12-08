import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/buscobanda-icon-removebg.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-blue-dark border-b border-teal-dark">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img
                src={logo}
                alt="Busco Banda Logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            <Link to="/" className="text-xl font-bold text-blue-light">
              Busco Banda
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-sm text-blue-medium hover:text-blue-light"
            >
              Início
            </a>
            <a
              href="#como-funciona"
              className="text-sm text-blue-medium hover:text-blue-light"
            >
              Como funciona
            </a>
            <a
              href="#para-quem"
              className="text-sm text-blue-medium hover:text-blue-light"
            >
              Para quem é
            </a>
            <a
              href="#contato"
              className="text-sm text-blue-medium hover:text-blue-light"
            >
              Contato
            </a>
          </div>

          {/* Auth */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              asChild
              className="bg-teal-dark text-blue-light hover:bg-teal-light hover:text-blue-dark"
            >
              <Link to="/login">Login</Link>
            </Button>

            <Button
              size="sm"
              asChild
              className="bg-teal-light text-blue-dark hover:bg-teal-dark hover:text-blue-light"
            >
              <Link to="/signin">Cadastro</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-blue-light"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#inicio"
              className="block text-sm text-blue-medium hover:text-blue-light"
            >
              Início
            </a>
            <a
              href="#como-funciona"
              className="block text-sm text-blue-medium hover:text-blue-light"
            >
              Como funciona
            </a>
            <a
              href="#para-quem"
              className="block text-sm text-blue-medium hover:text-blue-light"
            >
              Para quem é
            </a>
            <a
              href="#contato"
              className="block text-sm text-blue-medium hover:text-blue-light"
            >
              Contato
            </a>

            <div className="flex flex-col gap-2 pt-2">
              <Button
                size="sm"
                asChild
                className="bg-teal-dark text-blue-light hover:bg-teal-light hover:text-blue-dark"
              >
                <Link to="/login">Login</Link>
              </Button>

              <Button
                size="sm"
                asChild
                className="bg-teal-light text-blue-dark hover:bg-teal-dark hover:text-blue-light"
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
