import { Music2, MapPin, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Banda } from "@/types/types";

type Props = {
  banda: Banda;
};

export function BandaCard({ banda }: Props) {
  return (
    <article className="bg-card border border-border-warm rounded-sm p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-punch flex items-center justify-center shrink-0">
            <Music2 size={18} className="text-white" />
          </div>

          <div>
            <p className="font-semibold text-ink text-sm">{banda.nome}</p>
            <p className="text-muted text-[10px] uppercase tracking-widest font-mono">
              {banda.integrantes} integrantes
            </p>
          </div>
        </div>

        {banda.integrantesBuscados.length > 0 && (
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 border rounded-sm bg-punch/10 text-punch border-punch/30">
            Vaga aberta
          </span>
        )}
      </div>

      <p className="text-muted text-sm mb-3 line-clamp-2">{banda.bio}</p>

      {banda.integrantesBuscados.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="text-[10px] text-ink-soft font-mono uppercase mr-1">
            Busca:
          </span>

          {banda.integrantesBuscados.map((i) => (
            <Badge
              key={i}
              className="text-[10px] font-mono bg-punch/10 text-punch border border-punch/30 rounded-sm hover:bg-punch/20"
            >
              {i}
            </Badge>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 mb-3">
        {banda.generos.map((g) => (
          <Badge
            key={g}
            variant="outline"
            className="text-[10px] font-mono border-border-warm text-ink-soft rounded-sm"
          >
            {g}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-muted text-xs">
          <MapPin size={12} />
          <span>
            {banda.bairro}, {banda.cidade}
          </span>
        </div>

        {banda.instagram && (
          <a
            href={`https://instagram.com/${banda.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-punch transition-colors"
          >
            <Instagram size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
