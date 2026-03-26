const stats = [
  { number: "12K+", label: "Músicos Cadastrados" },
  { number: "3.4K", label: "Bandas Ativas" },
  { number: "800+", label: "Estúdios Parceiros" },
  { number: "500+", label: "Bares e Casas de Show" },
  { number: "27", label: "Estados Cobertos" },
];

export default function StatsBanner() {
  return (
    <div className="relative bg-ink overflow-hidden">
      {/* Decorative music notes watermark */}
      <div
        className="absolute inset-0 flex items-center pointer-events-none select-none"
        style={{
          fontSize: "80px",
          opacity: 0.03,
          letterSpacing: "12px",
          whiteSpace: "nowrap",
        }}
      >
        ♩ ♪ ♫ ♬ ♩ ♪ ♫ ♬ ♩ ♪ ♫ ♬ ♩ ♪ ♫ ♬ ♩ ♪ ♫ ♬
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-around items-center gap-6">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-6">
            <div className="text-center">
              <div
                className="text-gold leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "38px",
                }}
              >
                {stat.number}
              </div>
              <div
                className="text-cream/50 uppercase tracking-widest mt-1"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "10px",
                }}
              >
                {stat.label}
              </div>
            </div>

            {/* Divider — hide after last item */}
            {i < stats.length - 1 && (
              <div className="hidden sm:block w-px h-10 bg-cream/10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
