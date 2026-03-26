export default function DreamSection() {
  return (
    <section
      className="py-24 md:py-32 bg-ink relative overflow-hidden"
      id="proposito"
    >
      {/* Ghost text watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(80px, 18vw, 200px)",
          color: "rgba(255,255,255,0.02)",
          letterSpacing: "16px",
          whiteSpace: "nowrap",
        }}
      >
        BUSCO BANDA
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-10">
        {/* Section label */}
        <p
          className="text-punch uppercase tracking-widest"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px" }}
        >
          // propósito
        </p>

        {/* Headline */}
        <h2
          className="text-gold leading-tight"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(40px, 6vw, 72px)",
          }}
        >
          O SONHO COMEÇA AQUI
        </h2>

        {/* Body text */}
        <div className="space-y-6 text-cream/80 text-lg leading-relaxed">
          <p>
            Desde jovem, você sonhava em formar uma banda. Aquele sentimento de
            estar no palco, a energia do público, o som perfeito. O momento
            mágico em que a música te conecta com as pessoas ao redor.
          </p>
          <p>
            Busco Banda aproxima pessoas com o mesmo sonho. Aqui, você não está
            sozinho — você está em comunidade. Músicos, bandas e locais que
            entendem a paixão pela música e querem crescer juntos.
          </p>
        </div>

        {/* Highlight line */}
        <div className="border-l-4 border-punch pl-6">
          <p
            className="text-gold text-lg font-semibold"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Propósito. Comunidade. Paixão pela música.
          </p>
          <p className="text-cream/70 mt-3 leading-relaxed">
            Cada conexão que você faz aqui é um passo em direção ao seu sonho.
            Cada colaboração é um aprendizado. Cada show é uma vitória
            compartilhada.
          </p>
        </div>
      </div>
    </section>
  );
}
