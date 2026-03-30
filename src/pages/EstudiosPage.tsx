import { Mic2, MapPin, Instagram, Globe, DollarSign } from "lucide-react";
import { mockEstudios } from "@/data/mockData";
import type { Estudio } from "@/types/types";
import { Badge } from "@/components/ui/badge";

function EstudioCard({ estudio }: { estudio: Estudio }) {
  return (
    <article className="bg-card border border-border-warm rounded-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center shrink-0">
          <Mic2 size={20} className="text-cream" />
        </div>
        <div>
          <p className="font-semibold text-ink text-sm">{estudio.nome}</p>
          {estudio.precoHora && (
            <div className="flex items-center gap-1 text-muted text-[10px] font-mono uppercase tracking-widest">
              <DollarSign size={10} />
              <span>R$ {estudio.precoHora}/hora</span>
            </div>
          )}
        </div>
      </div>

      <p className="text-muted text-xs leading-relaxed line-clamp-3 flex-1">
        {estudio.descricao}
      </p>

      <div className="flex flex-wrap gap-1">
        {estudio.servicos.map((s) => (
          <Badge
            key={s}
            variant="outline"
            className="text-[10px] font-mono border-border-warm text-ink-soft rounded-sm"
          >
            {s}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-border-warm">
        <div className="flex items-center gap-1 text-muted text-xs">
          <MapPin size={11} />
          <span>
            {estudio.bairro}, {estudio.cidade}
          </span>
        </div>
        <div className="flex gap-2">
          {estudio.instagram && (
            <a
              href={`https://instagram.com/${estudio.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-punch"
            >
              <Instagram size={13} />
            </a>
          )}
          {estudio.site && (
            <a
              href={estudio.site}
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

export default function EstudiosPage() {
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
          ESTÚDIOS
        </h1>
        <p className="text-muted text-sm mt-1">
          {mockEstudios.length} estúdios cadastrados
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mockEstudios.map((e) => (
          <EstudioCard key={e.id} estudio={e} />
        ))}
      </div>
    </div>
  );
}
