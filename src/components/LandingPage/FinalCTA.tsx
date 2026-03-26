import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-cream-dark border-t border-border-warm relative overflow-hidden">
      {/* Ghost headline watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(60px, 15vw, 180px)",
          color: "rgba(26,22,18,0.04)",
          letterSpacing: "12px",
          whiteSpace: "nowrap",
        }}
      >
        TOQUE JUNTO
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8">
        {/* Label */}
        <p
          className="text-punch uppercase tracking-widest"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px" }}
        >
          // pronto para começar?
        </p>

        {/* Headline */}
        <h2
          className="text-ink leading-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 7vw, 88px)",
          }}
        >
          PRONTO PARA <span className="text-punch">TOCAR JUNTO?</span>
        </h2>

        <p className="text-muted text-lg max-w-md mx-auto">
          Músicos não crescem sozinhos — crescem em conjunto.{" "}
          <strong className="text-ink-soft">Sua jornada começa aqui.</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center pt-2">
          <Button
            size="lg"
            className="bg-punch text-white hover:bg-punch-warm rounded-sm font-mono tracking-widest text-xs px-10 py-6"
            asChild
          >
            <a href="/signin">♪ Criar minha conta agora</a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-ink text-ink hover:bg-ink hover:text-cream rounded-sm font-mono tracking-widest text-xs py-6"
            asChild
          >
            <a href="#como-funciona">Ver como funciona →</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
