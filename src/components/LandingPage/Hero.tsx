import { Button } from "@/components/ui/button";

/* SVG grande do bonequinho punk — exclusivo do Hero */
function HeroPunkFigure() {
  return (
    <svg
      className="w-full h-full animate-float"
      style={{ filter: "drop-shadow(0 20px 40px rgba(26,22,18,0.18))" }}
      viewBox="0 0 180 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mohawk spikes */}
      <polygon points="90,4 78,42 90,34 102,42" fill="#E8431A" />
      <polygon points="82,8 72,38 82,30 90,36" fill="#E8431A" opacity="0.8" />
      <polygon points="98,8 108,38 98,30 90,36" fill="#E8431A" opacity="0.8" />
      {/* Head */}
      <circle cx="90" cy="70" r="36" fill="#1A1612" />
      {/* Earring studs */}
      <circle cx="56" cy="72" r="4" fill="#D4A843" />
      <circle cx="124" cy="72" r="4" fill="#D4A843" />
      {/* Eyes */}
      <circle cx="78" cy="64" r="7" fill="#F5F0E8" />
      <circle cx="102" cy="64" r="7" fill="#F5F0E8" />
      <circle cx="80" cy="64" r="4" fill="#1A1612" />
      <circle cx="104" cy="64" r="4" fill="#1A1612" />
      <circle cx="81" cy="63" r="1.5" fill="#fff" />
      <circle cx="105" cy="63" r="1.5" fill="#fff" />
      {/* Angry brows */}
      <path
        d="M 70 56 Q 78 52 86 56"
        stroke="#E8431A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 110 56 Q 102 52 94 56"
        stroke="#E8431A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Nose */}
      <path
        d="M 90 68 L 86 78 L 90 80 L 94 78"
        stroke="#3D3530"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Smirk */}
      <path
        d="M 80 86 Q 90 96 100 86"
        stroke="#F5F0E8"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Neck */}
      <rect x="80" y="104" width="20" height="18" fill="#1A1612" />
      {/* Jacket body */}
      <rect x="52" y="118" width="76" height="82" rx="4" fill="#1A1612" />
      {/* Lapels */}
      <polygon points="90,122 52,118 62,156" fill="#2A2420" />
      <polygon points="90,122 128,118 118,156" fill="#2A2420" />
      {/* Studs */}
      <circle cx="68" cy="126" r="3.5" fill="#D4A843" />
      <circle cx="68" cy="136" r="3.5" fill="#D4A843" />
      <circle cx="112" cy="126" r="3.5" fill="#D4A843" />
      <circle cx="112" cy="136" r="3.5" fill="#D4A843" />
      {/* Patch */}
      <rect
        x="76"
        y="140"
        width="28"
        height="20"
        rx="2"
        fill="#E8431A"
        opacity="0.3"
      />
      <text
        x="90"
        y="154"
        fill="#E8431A"
        fontSize="8"
        textAnchor="middle"
        fontFamily="monospace"
      >
        ★ ROCK
      </text>
      {/* Guitar body */}
      <ellipse cx="142" cy="160" rx="18" ry="24" fill="#D4A843" />
      <ellipse cx="142" cy="160" rx="12" ry="8" fill="#A07830" />
      {/* Guitar neck */}
      <rect x="136" y="110" width="12" height="50" rx="3" fill="#A07830" />
      {/* Guitar head */}
      <rect x="134" y="100" width="14" height="16" rx="2" fill="#8B6520" />
      {/* Strings */}
      <line
        x1="139"
        y1="108"
        x2="139"
        y2="168"
        stroke="#888"
        strokeWidth="0.8"
      />
      <line
        x1="142"
        y1="108"
        x2="142"
        y2="168"
        stroke="#888"
        strokeWidth="0.8"
      />
      <line
        x1="145"
        y1="108"
        x2="145"
        y2="168"
        stroke="#888"
        strokeWidth="0.8"
      />
      {/* Sound hole */}
      <circle cx="142" cy="160" r="6" fill="#8B6520" />
      {/* Left arm */}
      <path
        d="M 52 130 Q 30 150 26 170"
        stroke="#1A1612"
        strokeWidth="16"
        strokeLinecap="round"
      />
      {/* Right arm */}
      <path
        d="M 128 130 Q 135 145 138 158"
        stroke="#1A1612"
        strokeWidth="16"
        strokeLinecap="round"
      />
      {/* Pants */}
      <rect x="58" y="198" width="28" height="52" rx="4" fill="#2A2420" />
      <rect x="94" y="198" width="28" height="52" rx="4" fill="#2A2420" />
      {/* Chain */}
      <path
        d="M 68 210 Q 90 220 112 210"
        stroke="#D4A843"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="3,3"
      />
      {/* Boots */}
      <rect x="52" y="242" width="36" height="18" rx="4" fill="#1A1612" />
      <rect x="90" y="242" width="36" height="18" rx="4" fill="#1A1612" />
      {/* Boot buckles */}
      <rect x="60" y="246" width="16" height="6" rx="1" fill="#D4A843" />
      <rect x="98" y="246" width="16" height="6" rx="1" fill="#D4A843" />
    </svg>
  );
}

/* Tag flutuante reutilizável */
function FloatingTag({
  dot,
  label,
  className = "",
}: {
  dot: "green" | "gold" | "red";
  label: string;
  className?: string;
}) {
  const dotColor =
    dot === "green" ? "bg-sage" : dot === "gold" ? "bg-gold" : "bg-punch";

  return (
    <div
      className={`absolute bg-card border border-border-warm rounded px-3 py-2 shadow-md whitespace-nowrap ${className}`}
      style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px" }}
    >
      <span className={`inline-block w-2 h-2 rounded-full mr-2 ${dotColor}`} />
      <span className="text-ink-soft">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center px-6 py-32 overflow-hidden bg-cream"
    >
      {/* Horizontal grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(26,22,18,0.04) 60px, rgba(26,22,18,0.04) 61px)",
        }}
      />

      {/* Warm glow blob */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(232,67,26,0.07) 0%, transparent 70%)",
          right: "-100px",
        }}
      />

      {/* ── Text content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-ink text-gold px-3 py-1.5 rounded-sm mb-7 animate-fade-in-up-1"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              letterSpacing: "2px",
            }}
          >
            ♪ A rede dos músicos brasileiros
          </div>

          {/* Headline */}
          <h1
            className="leading-none mb-3 animate-fade-in-up-2"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(72px, 10vw, 120px)",
              letterSpacing: "-1px",
              color: "#1A1612",
            }}
          >
            ENCONTRE
            <span className="block text-punch">SUA</span>
            <span
              className="block"
              style={{ WebkitTextStroke: "2px #1A1612", color: "transparent" }}
            >
              BANDA
            </span>
          </h1>

          {/* Sub */}
          <p className="text-lg text-ink-soft max-w-md mb-10 leading-relaxed font-light animate-fade-in-up-3">
            Conecte-se com músicos, bandas, estúdios e bares de todo o Brasil.
            Sua próxima parceria musical está a um clique de distância.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up-4">
            <Button
              size="lg"
              className="bg-punch text-white hover:bg-punch-warm rounded-sm font-mono tracking-widest text-xs px-8"
              asChild
            >
              <a href="/signin">♪ Criar Perfil Grátis</a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-ink text-ink hover:bg-ink hover:text-cream rounded-sm font-mono tracking-widest text-xs"
              asChild
            >
              <a href="#categorias">Explorar →</a>
            </Button>
          </div>
        </div>

        {/* ── Punk figure ── */}
        <div className="relative hidden lg:flex items-center justify-center animate-fade-in-up-5">
          <div className="relative w-72 h-96">
            {/* Glow behind figure */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-punch opacity-10 blur-3xl" />
            <HeroPunkFigure />

            {/* Floating tags */}
            <FloatingTag
              dot="green"
              label="Guitarrista disponível"
              className="-left-8 top-8 animate-float-tag"
            />
            <FloatingTag
              dot="gold"
              label="Estúdio — RJ"
              className="-right-12 top-1/2 animate-float-tag-2"
            />
            <FloatingTag
              dot="red"
              label="Banda buscando vocalista"
              className="-left-4 bottom-12 animate-float-tag-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
