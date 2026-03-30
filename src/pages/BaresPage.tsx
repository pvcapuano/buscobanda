import { Wine, MapPin, Instagram, Globe } from "lucide-react";
import { mockBares } from "@/data/mockData";
import type { Bar } from "@/types/types";
import { Badge } from "@/components/ui/badge";

function BarCard({ bar }: { bar: Bar }) {
  return (
    <article className="bg-card border border-border-warm rounded-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shrink-0">
          <Wine size={20} className="text-ink" />
        </div>
        <div>
          <p className="font-semibold text-ink text-sm">{bar.nome}</p>
          {bar.capacidade && (
            <p className="text-muted text-[10px] font-mono uppercase tracking-widest">
              Até {bar.capacidade} pessoas
            </p>
          )}
        </div>
      </div>

      <p className="text-muted text-xs leading-relaxed line-clamp-3 flex-1">
        {bar.descricao}
      </p>

      <div className="flex flex-wrap gap-1">
        {bar.generosPreferidos.map((g) => (
          <Badge
            key={g}
            variant="outline"
            className="text-[10px] font-mono border-border-warm text-ink-soft rounded-sm"
          >
            {g}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-border-warm">
        <div className="flex items-center gap-1 text-muted text-xs">
          <MapPin size={11} />
          <span>
            {bar.bairro}, {bar.cidade}
          </span>
        </div>
        <div className="flex gap-2">
          {bar.instagram && (
            <a
              href={`https://instagram.com/${bar.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-punch"
            >
              <Instagram size={13} />
            </a>
          )}
          {bar.site && (
            <a
              href={bar.site}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-punch"
            >
              <Globe size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function BaresPage() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <p className="text-punch text-[10px] uppercase tracking-widest font-mono mb-1">
          // encontre
        </p>
        <h1
          className="text-ink leading-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(36px, 5vw, 52px)",
          }}
        >
          BARES & CASAS DE SHOW
        </h1>
        <p className="text-muted text-sm mt-1">
          {mockBares.length} locais cadastrados
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mockBares.map((b) => (
          <BarCard key={b.id} bar={b} />
        ))}
      </div>
    </div>
  );
}
