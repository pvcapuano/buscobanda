import { Guitar, Radio, Wine, Music2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cards = [
  {
    icon: Guitar,
    title: "Músicos",
    description:
      "Achar bandas, projetos, gigs e amigos para tocar. Filtre por instrumento, gênero e cidade.",
    count: "12K+ músicos",
  },
  {
    icon: Radio,
    title: "Bandas",
    description:
      "Completar integrantes, ampliar contatos e marcar shows. Poste sua vaga e encontre o membro certo.",
    count: "3.4K bandas",
  },
  {
    icon: Wine,
    title: "Bares & Casas de Show",
    description:
      "Encontre artistas para tocar ao vivo. Negocie e agende diretamente pela plataforma.",
    count: "500+ locais",
  },
  {
    icon: Music2,
    title: "Estúdios",
    description:
      "Conecte músicos e bandas ao espaço ideal para gravar ou ensaiar. Aumente sua visibilidade.",
    count: "800+ estúdios",
  },
];

export default function ForWhom() {
  return (
    <section
      id="para-quem"
      className="py-24 md:py-32 bg-cream-dark border-t border-border-warm"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-punch uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px" }}
          >
            // o que você busca?
          </p>
          <h2
            className="text-ink leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(40px, 5vw, 64px)",
            }}
          >
            PARA QUEM É?
          </h2>
          <p className="text-muted text-base mt-3 max-w-lg">
            Busco Banda é para qualquer pessoa apaixonada por música que quer
            conectar-se com outros artistas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-warm border border-border-warm">
          {cards.map((card) => (
            <Card
              key={card.title}
              className="bg-card rounded-none border-none shadow-none group cursor-pointer
                         hover:bg-white transition-colors relative overflow-hidden"
            >
              {/* Bottom accent bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0 bg-punch group-hover:h-1 transition-all duration-300" />

              <CardHeader className="pb-2">
                {/* Icon box */}
                <div className="w-11 h-11 bg-ink rounded-sm flex items-center justify-center mb-5">
                  <card.icon className="w-5 h-5 text-cream" />
                </div>

                <CardTitle
                  className="text-ink"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "26px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {card.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {card.description}
                </p>
                <span
                  className="text-punch uppercase tracking-widest group-hover:underline"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "10px",
                  }}
                >
                  → {card.count}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
