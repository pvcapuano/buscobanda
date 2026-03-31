import { Link } from "react-router-dom";
import { Guitar, MapPin, Instagram, Youtube } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Musico } from "@/types/types";
import { DisponibilidadeBadge } from "./DisponibilidadeBadge";

export function MusicoCardGrid({ musico }: { musico: Musico }) {
  return (
    <Link to={`/dashboard/musicos/${musico.id}`}>
      <article className="bg-card border border-border-warm rounded-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col gap-3 cursor-pointer h-full min-h-[260px]">
        {" "}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center shrink-0">
            <Guitar size={20} className="text-cream" />
          </div>

          <div className="min-w-0">
            <p className="font-semibold text-ink text-sm truncate">
              {musico.nome}
            </p>
            <p className="text-punch text-[10px] uppercase tracking-widest font-mono">
              {musico.instrumento}
            </p>
          </div>
        </div>
        <DisponibilidadeBadge status={musico.disponibilidade} />
        <p className="text-muted text-xs line-clamp-3 flex-1 min-h-[54px]">
          {musico.bio}
        </p>
        <div className="flex flex-wrap gap-1">
          {musico.generos.map((g) => (
            <Badge key={g} variant="outline" className="text-[10px] font-mono">
              {g}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between pt-1 border-t border-border-warm">
          <div className="flex items-center gap-1 text-muted text-xs">
            <MapPin size={11} />
            <span className="truncate max-w-[110px]">
              {musico.bairro}, {musico.cidade}
            </span>
          </div>

          <div className="flex gap-2">
            {musico.instagram && <Instagram size={13} />}
            {musico.youtube && <Youtube size={13} />}
          </div>
        </div>
      </article>
    </Link>
  );
}
