import { Guitar, Music2, MapPin, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { mockMusicos, mockBandas } from "@/data/mockData";
import type { FeedItem, Musico, Banda } from "@/types/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

/* ── Monta feed intercalando músicos e bandas por data ── */
function buildFeed(): FeedItem[] {
  const musicos: FeedItem[] = mockMusicos.map((m) => ({
    tipo: "musico",
    data: m,
  }));

  const bandas: FeedItem[] = mockBandas.map((b) => ({
    tipo: "banda",
    data: b,
  }));

  return [...musicos, ...bandas].sort(
    (a, b) =>
      new Date(b.data.criadoEm).getTime() - new Date(a.data.criadoEm).getTime(),
  );
}

/* ── Badge de disponibilidade ───────────────────────────── */
function DisponibilidadeBadge({ status }: { status: string }) {
  const color =
    status === "Disponível"
      ? "bg-green-100 text-green-700 border-green-200"
      : status === "Ocupado"
        ? "bg-yellow-100 text-yellow-700 border-yellow-200"
        : "bg-blue-100 text-blue-700 border-blue-200";

  return (
    <span
      className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-sm border ${color}`}
    >
      {status}
    </span>
  );
}

/* ── Card de músico ─────────────────────────────────────── */
function MusicoCard({ musico }: { musico: Musico }) {
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
              className="text-muted hover:text-punch transition-colors cursor-pointer"
            >
              <Instagram size={14} />
            </a>
          )}

          {musico.youtube && (
            <a
              href={`https://youtube.com/@${musico.youtube}`}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-punch transition-colors cursor-pointer"
            >
              <Youtube size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ── Card de banda ─────────────────────────────────────── */
function BandaCard({ banda }: { banda: Banda }) {
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
            className="text-muted hover:text-punch transition-colors cursor-pointer"
          >
            <Instagram size={14} />
          </a>
        )}
      </div>
    </article>
  );
}

/* ── Page ─────────────────────────────────────────────── */
export default function DashboardHome() {
  const { user } = useAuth();
  const feed = buildFeed();

  const firstName =
    user?.user_metadata?.full_name?.split(" ")[0] ??
    user?.email?.split("@")[0] ??
    "músico";

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <p className="text-punch uppercase tracking-widest text-[10px] mb-1 font-mono">
          // bem-vindo de volta
        </p>

        <h1 className="text-ink text-[42px]">OLÁ, {firstName.toUpperCase()}</h1>

        <p className="text-muted text-sm mt-1">
          Veja o que está acontecendo na cena musical hoje.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        <Button
          asChild
          className="bg-punch text-white hover:bg-punch-warm py-5"
        >
          <Link to="/dashboard/musicos">Ver músicos</Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="border-ink text-ink hover:bg-ink hover:text-cream py-5"
        >
          <Link to="/dashboard/bandas">Ver bandas</Link>
        </Button>
      </div>

      <div className="flex justify-between mb-4">
        <h2 className="text-ink text-xl">ÚLTIMOS CADASTROS</h2>
        <span className="text-muted text-xs">{feed.length} posts</span>
      </div>

      <div className="flex flex-col gap-4">
        {feed.map((item) =>
          item.tipo === "musico" ? (
            <MusicoCard key={item.data.id} musico={item.data as Musico} />
          ) : (
            <BandaCard key={item.data.id} banda={item.data as Banda} />
          ),
        )}
      </div>
    </div>
  );
}
