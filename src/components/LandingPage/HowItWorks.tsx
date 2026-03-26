const steps = [
  {
    num: "01",
    title: "Crie seu perfil",
    description:
      "Monte um perfil completo com seus instrumentos, gêneros musicais, localização e disponibilidade.",
  },
  {
    num: "02",
    title: "Busque e descubra",
    description:
      "Use os filtros avançados para encontrar exatamente o que você precisa — músico, banda, estúdio ou bar.",
  },
  {
    num: "03",
    title: "Conecte-se",
    description:
      "Entre em contato direto, troque mensagens, compartilhe áudios e marque encontros musicais.",
  },
  {
    num: "04",
    title: "Toque junto",
    description:
      "Forme sua banda, feche shows, reserve estúdios. Tudo dentro da plataforma.",
  },
];

/* Mock profile card shown on the right side */
function MockProfileCard() {
  return (
    <div className="bg-ink rounded p-8 relative overflow-hidden min-h-80 flex flex-col justify-center">
      {/* Diagonal pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.015) 20px, rgba(255,255,255,0.015) 21px)",
        }}
      />

      {/* Card */}
      <div className="relative z-10 bg-white/5 border border-white/10 rounded p-6 max-w-xs">
        <div className="w-14 h-14 bg-punch rounded-full flex items-center justify-center text-2xl mb-4">
          🎸
        </div>
        <div
          className="text-cream tracking-wide mb-1"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "22px" }}
        >
          CAIO MENDES
        </div>
        <div
          className="text-gold uppercase tracking-widest mb-4"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px" }}
        >
          ✦ Guitarrista — Rio de Janeiro
        </div>
        <div className="flex flex-wrap gap-2">
          {["Rock", "Blues", "Les Paul", "Disponível"].map((tag) => (
            <span
              key={tag}
              className="bg-white/8 border border-white/10 text-cream/70 px-2 py-1 rounded-sm uppercase tracking-wide"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Secondary mini card */}
      <div className="absolute top-6 right-6 bg-white/5 border border-white/8 rounded p-3">
        <div
          className="text-cream"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "13px" }}
        >
          Studio Wave
        </div>
        <div
          className="text-gold/80 uppercase tracking-widest"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px" }}
        >
          ✦ Estúdio — RJ
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <p
          className="text-punch uppercase tracking-widest mb-3"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px" }}
        >
          // simples assim
        </p>
        <h2
          className="text-ink leading-none mb-16"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(40px, 5vw, 64px)",
          }}
        >
          COMO FUNCIONA
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Steps list */}
          <ul className="divide-y divide-border-warm">
            {steps.map((step) => (
              <li
                key={step.num}
                className="flex gap-6 py-7 group cursor-default"
              >
                <span
                  className="text-border-warm group-hover:text-punch transition-colors leading-none select-none min-w-[56px]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "48px",
                  }}
                >
                  {step.num}
                </span>
                <div>
                  <h3
                    className="text-ink group-hover:text-punch transition-colors mb-1"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "22px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Visual */}
          <MockProfileCard />
        </div>
      </div>
    </section>
  );
}
