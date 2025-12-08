import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/buscobanda-icon-removebg.png";

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-black-custom border-t border-blue-dark/40">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Busco Banda" className="w-14 h-10" />
              <span className="font-bold text-lg text-blue-light">
                Busco Banda
              </span>
            </div>

            <p className="text-sm text-blue-light/70">
              Conectando músicos, bandas e palcos.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-light">Menu</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-sm text-blue-light/70 hover:text-teal-light transition"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="text-sm text-blue-light/70 hover:text-teal-light transition"
                >
                  Como funciona
                </a>
              </li>
              <li>
                <a
                  href="#para-quem"
                  className="text-sm text-blue-light/70 hover:text-teal-light transition"
                >
                  Para quem é
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-light">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-blue-light/70 hover:text-teal-light transition"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-sm text-blue-light/70 hover:text-teal-light transition"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-blue-light/70 hover:text-teal-light transition"
                >
                  Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-light">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-blue-dark/40 
                  flex items-center justify-center 
                  text-blue-light/70 hover:text-teal-light 
                  hover:border-teal-light transition"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-dark p-4 text-center text-sm text-blue-light/70">
        <p>© 2025 Busco Banda. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
