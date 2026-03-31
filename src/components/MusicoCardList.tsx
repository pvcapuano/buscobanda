import { Link } from "react-router-dom";
import { Guitar, Instagram } from "lucide-react";
import type { Musico } from "@/types/types";
import { DisponibilidadeBadge } from "./DisponibilidadeBadge";

export function MusicoCardList({ musico }: { musico: Musico }) {
  return (
    <Link to={`/dashboard/musicos/${musico.id}`}>
      <article className="bg-card border border-border-warm rounded-sm p-4 flex gap-4 hover:shadow-sm cursor-pointer">
        <div className="w-11 h-11 rounded-full bg-ink flex items-center justify-center">
          <Guitar size={18} className="text-cream" />
        </div>

        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <div>
              <p className="font-semibold text-ink text-sm">{musico.nome}</p>
              <p className="text-punch text-[10px] font-mono">
                {musico.instrumento}
              </p>
            </div>

            <DisponibilidadeBadge status={musico.disponibilidade} />
          </div>

          <p className="text-muted text-xs line-clamp-2 mb-2">{musico.bio}</p>

          <div className="flex justify-between">
            <span className="text-muted text-xs">{musico.cidade}</span>

            {musico.instagram && <Instagram size={13} />}
          </div>
        </div>
      </article>
    </Link>
  );
}
