import { useParams, Link } from "react-router-dom";
import {
  Guitar,
  MapPin,
  Instagram,
  Youtube,
  Facebook,
  MessageCircle,
  ArrowLeft,
  Star,
} from "lucide-react";

import { mockMusicos } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DisponibilidadeBadge } from "@/components/DisponibilidadeBadge";

export default function MusicoDetail() {
  const { id } = useParams();
  const musico = mockMusicos.find((m) => m.id === id);

  if (!musico) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-muted">
        <Guitar size={40} className="mb-4 opacity-30" />
        <p className="font-mono text-sm uppercase tracking-widest mb-2">
          Músico não encontrado
        </p>

        <Link to="/dashboard/musicos">
          <Button variant="link" className="text-punch font-mono text-xs">
            Voltar
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Voltar */}
      <div className="mb-6">
        <Link
          to="/dashboard/musicos"
          className="flex items-center gap-2 text-muted hover:text-punch text-xs font-mono uppercase tracking-widest"
        >
          <ArrowLeft size={14} />
          Voltar
        </Link>
      </div>

      {/* HEADER */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Avatar */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-ink flex items-center justify-center shrink-0">
          <Guitar size={28} className="text-cream" />
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h1 className="text-ink text-2xl md:text-3xl">{musico.nome}</h1>

              <p className="text-punch text-xs uppercase tracking-widest font-mono mb-1">
                {musico.instrumento}
              </p>

              <div className="flex items-center gap-2 text-muted text-sm">
                <MapPin size={14} />
                {musico.bairro}, {musico.cidade}
              </div>
            </div>

            {/* AÇÕES */}
            <div className="flex gap-2">
              <Button className="bg-punch text-white hover:bg-punch-warm">
                Contatar
              </Button>

              <Button
                variant="outline"
                className="border-ink text-ink hover:bg-ink hover:text-cream flex items-center gap-2"
              >
                <Star size={14} />
                Favoritar
              </Button>
            </div>
          </div>

          <div className="mt-2">
            <DisponibilidadeBadge status={musico.disponibilidade} />
          </div>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* ESQUERDA */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Bio */}
          <div>
            <p className="text-ink-soft text-sm leading-relaxed">
              {musico.bio}
            </p>
          </div>

          {/* Gêneros */}
          <div>
            <p className="text-ink-soft text-[10px] font-mono uppercase tracking-widest mb-2">
              Gêneros
            </p>

            <div className="flex flex-wrap gap-2">
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
          </div>
        </div>

        {/* DIREITA */}
        <div className="flex flex-col gap-4">
          <div className="bg-card border border-border-warm p-4 rounded-sm">
            <p className="text-ink-soft text-[10px] font-mono uppercase tracking-widest mb-3">
              Redes
            </p>

            <div className="flex flex-col gap-2">
              {musico.instagram && (
                <a
                  href={`https://instagram.com/${musico.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-punch"
                >
                  <Instagram size={16} />@{musico.instagram}
                </a>
              )}

              {musico.youtube && (
                <a
                  href={`https://youtube.com/@${musico.youtube}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-punch"
                >
                  <Youtube size={16} />
                  {musico.youtube}
                </a>
              )}

              {musico.facebook && (
                <a
                  href={`https://facebook.com/${musico.facebook}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-punch"
                >
                  <Facebook size={16} />
                  {musico.facebook}
                </a>
              )}

              {musico.whatsapp && (
                <a
                  href={`https://wa.me/${musico.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-punch"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
