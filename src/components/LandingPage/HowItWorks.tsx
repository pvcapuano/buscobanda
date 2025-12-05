import { Users, Search, Music } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Crie seu perfil",
    description: "Como músico, banda ou bar. Mostre seu talento e objetivos.",
  },
  {
    icon: Search,
    title: "Procure pessoas",
    description: "Encontre pessoas compatíveis com seus interesses musicais.",
  },
  {
    icon: Music,
    title: "Converse e toque",
    description: "Combine horários, repertórios e suba no palco juntos.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-black-custom">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-light">
            Como funciona?
          </h2>
          <p className="text-lg text-blue-medium max-w-2xl mx-auto">
            Um sistema intuitivo, rápido e gratuito para conectar você com o
            mundo da música.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Hover BG */}
              <div
                className="absolute inset-0 bg-gradient-to-br 
                from-teal-dark/20 
                to-blue-dark/20 
                rounded-2xl 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300"
              />

              {/* Card */}
              <div
                className="relative p-8 rounded-2xl border border-teal-dark/40
                group-hover:border-blue-medium/70 transition-colors"
              >
                {/* Ícone */}
                <div
                  className="w-12 h-12 rounded-full bg-blue-dark/40 
                  flex items-center justify-center mb-6
                  group-hover:bg-blue-dark/60 transition-colors"
                >
                  <step.icon className="w-6 h-6 text-blue-light" />
                </div>

                {/* Número + título */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl font-bold text-blue-medium/70">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-light">
                    {step.title}
                  </h3>
                </div>

                {/* Descrição */}
                <p className="text-blue-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
