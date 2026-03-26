import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-cream border-t border-border-warm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/buscobanda-icon-removebg.png"
                alt="Icon"
                className="w-10 h-8"
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
            <p className="text-sm text-muted leading-relaxed">
              Conectando músicos, bandas e palcos em todo o Brasil.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4
              className="text-ink mb-4 tracking-widest uppercase"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
              }}
            >
              Menu
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Como funciona", href: "#como-funciona" },
                { label: "Para quem é", href: "#para-quem" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-punch transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-ink mb-4 tracking-widest uppercase"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
              }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Termos de Uso", href: "#" },
                { label: "Privacidade", href: "#" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-punch transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-ink mb-4 tracking-widest uppercase"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
              }}
            >
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded border border-border-warm flex items-center justify-center
                             text-muted hover:text-punch hover:border-punch transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-warm px-6 py-4 text-center">
        <p
          className="text-muted"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px" }}
        >
          © 2025 BuscoBanda. Feito com ♪ no Brasil.
        </p>
      </div>
    </footer>
  );
}
