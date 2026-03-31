import { useState, useMemo } from "react";
import {
  Calendar,
  MapPin,
  Users,
  DollarSign,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* ── Tipos ─────────────────────────────────────────────── */
interface Event {
  id: string;
  title: string;
  description: string;
  type: "freela" | "festival" | "agenda" | "workshop";
  date: string;
  location: string;
  organizer: string;
  price?: number;
  capacity?: number;
  genre?: string;
}

/* ── Filtros ───────────────────────────────────────────── */
const tipos = ["freela", "festival", "agenda", "workshop"];
const generos = [
  "rock",
  "samba",
  "jazz",
  "mpb",
  "eletronica",
  "sertanejo",
  "reggae",
];

/* ── Badge tipo evento ─────────────────────────────────── */
function TipoEventoBadge({ type }: { type: string }) {
  return (
    <span className={`text-[10px] font-mono px-2 py-0.5 border rounded-sm`}>
      {type}
    </span>
  );
}

/* ── Card Grid ─────────────────────────────────────────── */
function EventCardGrid({ event }: { event: Event }) {
  return (
    <article className="bg-card border border-border-warm rounded-sm p-5 flex flex-col gap-3 hover:shadow-md transition-all">
      <div className="flex items-start justify-between">
        <TipoEventoBadge type={event.type} />
        {event.genre && (
          <Badge
            variant="outline"
            className="text-[10px] font-mono border-border-warm"
          >
            {event.genre}
          </Badge>
        )}
      </div>

      <h3 className="font-semibold text-ink text-sm">{event.title}</h3>

      <p className="text-muted text-xs line-clamp-3 flex-1">
        {event.description}
      </p>

      <div className="flex flex-col gap-1 text-xs text-muted">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {new Date(event.date).toLocaleDateString("pt-BR")}
        </span>

        <span className="flex items-center gap-1">
          <MapPin size={12} />
          {event.location}
        </span>

        <span className="flex items-center gap-1">
          <Users size={12} />
          {event.organizer}
        </span>

        {event.price !== undefined && (
          <span className="flex items-center gap-1">
            <DollarSign size={12} />
            {event.price === 0 ? "Gratuito" : `R$ ${event.price}`}
          </span>
        )}
      </div>

      <Button className="mt-2 text-xs">Ver detalhes</Button>
    </article>
  );
}

/* ── Card Mobile ───────────────────────────────────────── */
function EventCardList({ event }: { event: Event }) {
  return (
    <article className="bg-card border border-border-warm rounded-sm p-4 flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="font-semibold text-sm">{event.title}</p>
        <TipoEventoBadge type={event.type} />
      </div>

      <p className="text-xs text-muted line-clamp-2">{event.description}</p>

      <div className="flex justify-between text-xs text-muted">
        <span>{event.location}</span>
        <span>{new Date(event.date).toLocaleDateString("pt-BR")}</span>
      </div>
    </article>
  );
}

/* ── Painel Filtros ────────────────────────────────────── */
function PainelFiltros({
  busca,
  setBusca,
  tipo,
  setTipo,
  genero,
  setGenero,
  onLimpar,
  totalFiltros,
}: any) {
  const label =
    "text-ink-soft text-[10px] uppercase tracking-widest font-mono mb-1 block";

  return (
    <div className="bg-card border border-border-warm rounded-sm p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={14} className="text-punch" />
          <span className="text-xs font-mono uppercase">Filtros</span>
          {totalFiltros > 0 && (
            <span className="bg-punch text-white text-[10px] px-1.5">
              {totalFiltros}
            </span>
          )}
        </div>

        {totalFiltros > 0 && (
          <button onClick={onLimpar} className="text-xs flex gap-1">
            <X size={11} /> Limpar
          </button>
        )}
      </div>

      <div>
        <label className={label}>Busca</label>
        <Input value={busca} onChange={(e) => setBusca(e.target.value)} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={label}>Tipo</label>
          <Select value={tipo} onValueChange={setTipo}>
            <SelectTrigger>
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              {tipos.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className={label}>Gênero</label>
          <Select value={genero} onValueChange={setGenero}>
            <SelectTrigger>
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              {generos.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */
export default function EventosPage() {
  const [busca, setBusca] = useState("");
  const [tipo, setTipo] = useState("todos");
  const [genero, setGenero] = useState("todos");

  const events: Event[] = [];

  function limpar() {
    setBusca("");
    setTipo("todos");
    setGenero("todos");
  }

  const totalFiltros = [
    busca,
    tipo !== "todos" && tipo,
    genero !== "todos" && genero,
  ].filter(Boolean).length;

  const filtrados = useMemo(() => {
    return events.filter((e) => {
      if (busca && !e.title.toLowerCase().includes(busca.toLowerCase()))
        return false;
      if (tipo !== "todos" && e.type !== tipo) return false;
      if (genero !== "todos" && e.genre !== genero) return false;
      return true;
    });
  }, [busca, tipo, genero]);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <p className="text-punch text-[10px] uppercase font-mono mb-1">
          // encontre
        </p>
        <h1 className="text-ink text-4xl font-bold">EVENTOS</h1>
        <p className="text-muted text-sm mt-1">
          {filtrados.length} evento(s) encontrado(s)
        </p>
      </div>

      <div className="mb-6">
        <PainelFiltros
          busca={busca}
          setBusca={setBusca}
          tipo={tipo}
          setTipo={setTipo}
          genero={genero}
          setGenero={setGenero}
          onLimpar={limpar}
          totalFiltros={totalFiltros}
        />
      </div>

      {filtrados.length === 0 ? (
        <div className="text-center py-20 text-muted">
          <Calendar size={40} className="mx-auto mb-4 opacity-30" />
          <p className="font-mono text-sm uppercase">
            Nenhum evento encontrado
          </p>
        </div>
      ) : (
        <>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtrados.map((e) => (
              <EventCardGrid key={e.id} event={e} />
            ))}
          </div>

          <div className="flex flex-col gap-3 md:hidden">
            {filtrados.map((e) => (
              <EventCardList key={e.id} event={e} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
