const items = [
  "Músicos",
  "Bandas",
  "Estúdios",
  "Bares",
  "Shows",
  "Conexões",
  "Rock",
  "MPB",
  "Jazz",
  "Samba",
  "Metal",
  "Funk",
];

export default function Ticker() {
  // Duplicamos para loop contínuo perfeito
  const doubled = [...items, ...items];

  return (
    <div className="bg-punch overflow-hidden py-3">
      <div className="flex animate-ticker" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-white px-8"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "14px",
              letterSpacing: "3px",
            }}
          >
            <span className="opacity-60 mr-8">♦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
