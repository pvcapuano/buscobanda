import { useState, useMemo } from "react";
import {
  Guitar,
  MapPin,
  Instagram,
  Youtube,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { mockMusicos } from "@/data/mockData";
import type {
  Musico,
  Instrumento,
  Genero,
  Disponibilidade,
} from "@/types/types";
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

/* ── Opções de filtro ────────────────────────────────────── */
const instrumentos: Instrumento[] = [
  "Guitarra",
  "Baixo",
  "Bateria",
  "Teclado",
  "Violão",
  "Voz",
  "Saxofone",
  "Trompete",
  "Violino",
  "Outro",
];
const generos: Genero[] = [
  "Rock",
  "Metal",
  "MPB",
  "Samba",
  "Jazz",
  "Blues",
  "Funk",
  "Pop",
  "Forró",
  "Eletrônico",
  "Outro",
];
const disponibilidades: Disponibilidade[] = [
  "Disponível",
  "Ocupado",
  "Em turnê",
];

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

/* ── Card de músico (grid) ──────────────────────────────── */
function MusicoCardGrid({ musico }: { musico: Musico }) {
  return (
    <article className="bg-card border border-border-warm rounded-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col gap-3">
      {/* Avatar + nome */}
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

      {/* Disponibilidade */}
      <DisponibilidadeBadge status={musico.disponibilidade} />

      {/* Bio */}
      <p className="text-muted text-xs leading-relaxed line-clamp-3 flex-1">
        {musico.bio}
      </p>

      {/* Gêneros */}
      <div className="flex flex-wrap gap-1">
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

      {/* Rodapé */}
      <div className="flex items-center justify-between pt-1 border-t border-border-warm">
        <div className="flex items-center gap-1 text-muted text-xs">
          <MapPin size={11} />
          <span className="truncate max-w-[110px]">
            {musico.bairro}, {musico.cidade}
          </span>
        </div>
        <div className="flex gap-2">
          {musico.instagram && (
            <a
              href={`https://instagram.com/${musico.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-punch"
            >
              <Instagram size={13} />
            </a>
          )}
          {musico.youtube && (
            <a
              href={`https://youtube.com/@${musico.youtube}`}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-punch"
            >
              <Youtube size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ── Card de músico (lista mobile) ─────────────────────── */
function MusicoCardList({ musico }: { musico: Musico }) {
  return (
    <article className="bg-card border border-border-warm rounded-sm p-4 hover:shadow-sm transition-shadow flex gap-4 items-start">
      <div className="w-11 h-11 rounded-full bg-ink flex items-center justify-center shrink-0">
        <Guitar size={18} className="text-cream" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div>
            <p className="font-semibold text-ink text-sm">{musico.nome}</p>
            <p className="text-punch text-[10px] uppercase tracking-widest font-mono">
              {musico.instrumento}
            </p>
          </div>
          <DisponibilidadeBadge status={musico.disponibilidade} />
        </div>

        <p className="text-muted text-xs leading-relaxed line-clamp-2 mb-2">
          {musico.bio}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-muted text-xs">
            <MapPin size={11} />
            <span>
              {musico.bairro}, {musico.cidade}
            </span>
          </div>
          <div className="flex gap-2">
            {musico.instagram && (
              <a
                href={`https://instagram.com/${musico.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-punch"
              >
                <Instagram size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── Painel de filtros ──────────────────────────────────── */
interface FiltrosProps {
  busca: string;
  setBusca: (v: string) => void;
  instrumento: string;
  setInstrumento: (v: string) => void;
  genero: string;
  setGenero: (v: string) => void;
  disponibilidade: string;
  setDisponibilidade: (v: string) => void;
  cidade: string;
  setCidade: (v: string) => void;
  onLimpar: () => void;
  totalFiltros: number;
}

function PainelFiltros({
  busca,
  setBusca,
  instrumento,
  setInstrumento,
  genero,
  setGenero,
  disponibilidade,
  setDisponibilidade,
  cidade,
  setCidade,
  onLimpar,
  totalFiltros,
}: FiltrosProps) {
  const labelClass =
    "text-ink-soft text-[10px] uppercase tracking-widest font-mono mb-1 block";

  return (
    <div className="bg-card border border-border-warm rounded-sm p-4 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={14} className="text-punch" />
          <span className="text-ink text-xs font-mono uppercase tracking-widest">
            Filtros
          </span>
          {totalFiltros > 0 && (
            <span className="bg-punch text-white text-[10px] font-mono px-1.5 py-0.5 rounded-sm">
              {totalFiltros}
            </span>
          )}
        </div>
        {totalFiltros > 0 && (
          <button
            onClick={onLimpar}
            className="text-muted hover:text-punch text-[10px] font-mono uppercase tracking-widest flex items-center gap-1"
          >
            <X size={11} /> Limpar
          </button>
        )}
      </div>

      {/* Busca por nome */}
      <div>
        <label className={labelClass}>Nome</label>
        <Input
          placeholder="Buscar por nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="bg-cream border-border-warm focus-visible:ring-punch rounded-sm text-sm"
        />
      </div>

      {/* Grid de selects */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className={labelClass}>Instrumento</label>
          <Select value={instrumento} onValueChange={setInstrumento}>
            <SelectTrigger className="bg-cream border-border-warm focus:ring-punch rounded-sm text-sm h-9">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              {instrumentos.map((i) => (
                <SelectItem key={i} value={i}>
                  {i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className={labelClass}>Gênero</label>
          <Select value={genero} onValueChange={setGenero}>
            <SelectTrigger className="bg-cream border-border-warm focus:ring-punch rounded-sm text-sm h-9">
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

        <div>
          <label className={labelClass}>Disponibilidade</label>
          <Select value={disponibilidade} onValueChange={setDisponibilidade}>
            <SelectTrigger className="bg-cream border-border-warm focus:ring-punch rounded-sm text-sm h-9">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas</SelectItem>
              {disponibilidades.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className={labelClass}>Cidade</label>
          <Input
            placeholder="Ex: São Paulo"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="bg-cream border-border-warm focus-visible:ring-punch rounded-sm text-sm h-9"
          />
        </div>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────── */
export default function MusicosPage() {
  const [busca, setBusca] = useState("");
  const [instrumento, setInstrumento] = useState("todos");
  const [genero, setGenero] = useState("todos");
  const [disponibilidade, setDisponibilidade] = useState("todas");
  const [cidade, setCidade] = useState("");

  function limparFiltros() {
    setBusca("");
    setInstrumento("todos");
    setGenero("todos");
    setDisponibilidade("todas");
    setCidade("");
  }

  const totalFiltros = [
    busca,
    instrumento !== "todos" ? instrumento : "",
    genero !== "todos" ? genero : "",
    disponibilidade !== "todas" ? disponibilidade : "",
    cidade,
  ].filter(Boolean).length;

  const musicos = useMemo(() => {
    return mockMusicos.filter((m) => {
      if (busca && !m.nome.toLowerCase().includes(busca.toLowerCase()))
        return false;
      if (instrumento !== "todos" && m.instrumento !== instrumento)
        return false;
      if (genero !== "todos" && !m.generos.includes(genero as Genero))
        return false;
      if (disponibilidade !== "todas" && m.disponibilidade !== disponibilidade)
        return false;
      if (
        cidade &&
        !m.cidade.toLowerCase().includes(cidade.toLowerCase()) &&
        !m.bairro.toLowerCase().includes(cidade.toLowerCase())
      )
        return false;
      return true;
    });
  }, [busca, instrumento, genero, disponibilidade, cidade]);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Header */}
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
          MÚSICOS
        </h1>
        <p className="text-muted text-sm mt-1">
          {musicos.length} músico{musicos.length !== 1 ? "s" : ""} encontrado
          {musicos.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Filtros */}
      <div className="mb-6">
        <PainelFiltros
          busca={busca}
          setBusca={setBusca}
          instrumento={instrumento}
          setInstrumento={setInstrumento}
          genero={genero}
          setGenero={setGenero}
          disponibilidade={disponibilidade}
          setDisponibilidade={setDisponibilidade}
          cidade={cidade}
          setCidade={setCidade}
          onLimpar={limparFiltros}
          totalFiltros={totalFiltros}
        />
      </div>

      {/* Resultados — grid desktop, lista mobile */}
      {musicos.length === 0 ? (
        <div className="text-center py-20 text-muted">
          <Guitar size={40} className="mx-auto mb-4 opacity-30" />
          <p className="font-mono text-sm uppercase tracking-widest">
            Nenhum músico encontrado
          </p>
          <Button
            variant="link"
            onClick={limparFiltros}
            className="text-punch mt-2 font-mono text-xs"
          >
            Limpar filtros
          </Button>
        </div>
      ) : (
        <>
          {/* Grid — visível apenas em md+ */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {musicos.map((m) => (
              <MusicoCardGrid key={m.id} musico={m} />
            ))}
          </div>

          {/* Lista — visível apenas em mobile */}
          <div className="flex flex-col gap-3 md:hidden">
            {musicos.map((m) => (
              <MusicoCardList key={m.id} musico={m} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
