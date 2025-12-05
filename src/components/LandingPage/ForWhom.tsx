import { Guitar, Radio, Wine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cards = [
  {
    icon: Guitar,
    title: "Músicos",
    description: "Achar bandas, projetos, gigs e amigos para tocar.",
  },
  {
    icon: Radio,
    title: "Bandas",
    description: "Completar integrantes, ampliar contatos e marcar shows.",
  },
  {
    icon: Wine,
    title: "Bares e Casas de Show",
    description: "Encontrar artistas para tocar ao vivo.",
  },
];

export default function ForWhom() {
  return (
    <section
      id="para-quem"
      className="py-24 md:py-32 bg-gradient-to-br from-blue-dark to-black-custom"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-light">
            Para quem é?
          </h2>
          <p className="text-lg text-blue-medium max-w-2xl mx-auto">
            Busco Banda é para qualquer pessoa apaixonada por música e que quer
            conectar-se com outros artistas.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="bg-black-custom border-teal-dark/40 
              hover:border-blue-medium/60 transition-colors 
              group cursor-pointer rounded-2xl"
            >
              <CardHeader>
                {/* Ícone */}
                <div
                  className="w-12 h-12 rounded-full bg-blue-dark/40 
                  flex items-center justify-center mb-4 
                  group-hover:bg-blue-dark/60 transition-colors"
                >
                  <card.icon className="w-6 h-6 text-blue-light" />
                </div>

                <CardTitle className="text-2xl text-blue-light">
                  {card.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-blue-medium leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
