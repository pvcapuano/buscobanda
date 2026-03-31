import { Guitar, MapPin, Instagram, Youtube } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Musico } from "@/types/types";
import { DisponibilidadeBadge } from "./DisponibilidadeBadge";

type Props = {
  musico: Musico;
};

export function MusicoCard({ musico }: Props) {
  return (
    <article className="bg-card border border-border-warm rounded-sm p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-ink flex items-center justify-center shrink-0">
            <Guitar size={18} className="text-cream" />
          </div>
          <div>
            <p className="font-semibold text-ink text-sm">{musico.nome}</p>
            <p className="text-punch text-[10px] uppercase tracking-widest font-mono">
              {musico.instrumento}
            </p>
          </div>
        </div>

        <DisponibilidadeBadge status={musico.disponibilidade} />
      </div>

      <p className="text-muted text-sm mb-3 line-clamp-2">{musico.bio}</p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {musico.generos.map((g) => (
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
            {musico.bairro}, {musico.cidade}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {musico.instagram && (
            <a
              href={`https://instagram.com/${musico.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-punch transition-colors"
            >
              <Instagram size={14} />
            </a>
          )}

          {musico.youtube && (
            <a
              href={`https://youtube.com/@${musico.youtube}`}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-punch transition-colors"
            >
              <Youtube size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
