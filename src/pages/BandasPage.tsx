import { useState, useMemo } from "react";
import {
  Music2,
  MapPin,
  Instagram,
  SlidersHorizontal,
  X,
  Users,
} from "lucide-react";
import { mockBandas } from "@/data/mockData";
import type { Banda, Genero } from "@/types/types";
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
const instrumentosBuscados = [
  "Guitarra",
  "Baixo",
  "Bateria",
  "Teclado",
  "Voz",
  "Violão",
  "Saxofone",
  "Outro",
  "Qualquer",
];

/* ── Card de banda (grid) ───────────────────────────────── */
function BandaCardGrid({ banda }: { banda: Banda }) {
  return (
    <article className="bg-card border border-border-warm rounded-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col gap-3">
      {/* Logo + nome */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-punch flex items-center justify-center shrink-0">
          <Music2 size={20} className="text-white" />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-ink text-sm truncate">
            {banda.nome}
          </p>
          <div className="flex items-center gap-1 text-muted text-[10px] font-mono">
            <Users size={10} />
            <span>{banda.integrantes} integrantes</span>
          </div>
        </div>
      </div>

      {/* Vagas abertas */}
      {banda.integrantesBuscados.length > 0 && (
        <div className="flex flex-wrap gap-1">
          <span className="text-[10px] text-ink-soft font-mono uppercase tracking-widest self-center">
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

      {/* Bio */}
      <p className="text-muted text-xs leading-relaxed line-clamp-3 flex-1">
        {banda.bio}
      </p>

      {/* Gêneros */}
      <div className="flex flex-wrap gap-1">
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

      {/* Rodapé */}
      <div className="flex items-center justify-between pt-1 border-t border-border-warm">
        <div className="flex items-center gap-1 text-muted text-xs">
          <MapPin size={11} />
          <span className="truncate max-w-[120px]">
            {banda.bairro}, {banda.cidade}
          </span>
        </div>
        <div className="flex gap-2">
          {banda.instagram && (
            <a
              href={`https://instagram.com/${banda.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-punch"
            >
              <Instagram size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ── Card de banda (lista mobile) ──────────────────────── */
function BandaCardList({ banda }: { banda: Banda }) {
  return (
    <article className="bg-card border border-border-warm rounded-sm p-4 hover:shadow-sm transition-shadow flex gap-4 items-start">
      <div className="w-11 h-11 rounded-full bg-punch flex items-center justify-center shrink-0">
        <Music2 size={18} className="text-white" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div>
            <p className="font-semibold text-ink text-sm">{banda.nome}</p>
            <div className="flex items-center gap-1 text-muted text-[10px] font-mono">
              <Users size={10} />
              <span>{banda.integrantes} integrantes</span>
            </div>
          </div>
          {banda.integrantesBuscados.length > 0 && (
            <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-sm border bg-punch/10 text-punch border-punch/30 shrink-0">
              Vaga aberta
            </span>
          )}
        </div>

        <p className="text-muted text-xs leading-relaxed line-clamp-2 mb-2">
          {banda.bio}
        </p>

        {banda.integrantesBuscados.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            <span className="text-[10px] text-ink-soft font-mono uppercase tracking-widest self-center mr-1">
              Busca:
            </span>
            {banda.integrantesBuscados.map((i) => (
              <Badge
                key={i}
                className="text-[10px] font-mono bg-punch/10 text-punch border border-punch/30 rounded-sm"
              >
                {i}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-muted text-xs">
            <MapPin size={11} />
            <span>
              {banda.bairro}, {banda.cidade}
            </span>
          </div>
          {banda.instagram && (
            <a
              href={`https://instagram.com/${banda.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-punch"
            >
              <Instagram size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ── Painel de filtros ──────────────────────────────────── */
function PainelFiltros({
  busca,
  setBusca,
  genero,
  setGenero,
  buscando,
  setBuscando,
  cidade,
  setCidade,
  onLimpar,
  totalFiltros,
}: {
  busca: string;
  setBusca: (v: string) => void;
  genero: string;
  setGenero: (v: string) => void;
  buscando: string;
  setBuscando: (v: string) => void;
  cidade: string;
  setCidade: (v: string) => void;
  onLimpar: () => void;
  totalFiltros: number;
}) {
  const labelClass =
    "text-ink-soft text-[10px] uppercase tracking-widest font-mono mb-1 block";

  return (
    <div className="bg-card border border-border-warm rounded-sm p-4 flex flex-col gap-4">
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

      <div>
        <label className={labelClass}>Nome da banda</label>
        <Input
          placeholder="Buscar por nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="bg-cream border-border-warm focus-visible:ring-punch rounded-sm text-sm"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
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
          <label className={labelClass}>Buscando</label>
          <Select value={buscando} onValueChange={setBuscando}>
            <SelectTrigger className="bg-cream border-border-warm focus:ring-punch rounded-sm text-sm h-9">
              <SelectValue placeholder="Qualquer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="qualquer">Qualquer</SelectItem>
              {instrumentosBuscados.map((i) => (
                <SelectItem key={i} value={i}>
                  {i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className={labelClass}>Cidade</label>
          <Input
            placeholder="Ex: Rio de Janeiro"
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
export default function BandasPage() {
  const [busca, setBusca] = useState("");
  const [genero, setGenero] = useState("todos");
  const [buscando, setBuscando] = useState("qualquer");
  const [cidade, setCidade] = useState("");

  function limparFiltros() {
    setBusca("");
    setGenero("todos");
    setBuscando("qualquer");
    setCidade("");
  }

  const totalFiltros = [
    busca,
    genero !== "todos" ? genero : "",
    buscando !== "qualquer" ? buscando : "",
    cidade,
  ].filter(Boolean).length;

  const bandas = useMemo(() => {
    return mockBandas.filter((b) => {
      if (busca && !b.nome.toLowerCase().includes(busca.toLowerCase()))
        return false;
      if (genero !== "todos" && !b.generos.includes(genero as Genero))
        return false;
      if (
        buscando !== "qualquer" &&
        !b.integrantesBuscados.some(
          (i) => i.toLowerCase() === buscando.toLowerCase(),
        )
      )
        return false;
      if (
        cidade &&
        !b.cidade.toLowerCase().includes(cidade.toLowerCase()) &&
        !b.bairro.toLowerCase().includes(cidade.toLowerCase())
      )
        return false;
      return true;
    });
  }, [busca, genero, buscando, cidade]);

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
          BANDAS
        </h1>
        <p className="text-muted text-sm mt-1">
          {bandas.length} banda{bandas.length !== 1 ? "s" : ""} encontrada
          {bandas.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Filtros */}
      <div className="mb-6">
        <PainelFiltros
          busca={busca}
          setBusca={setBusca}
          genero={genero}
          setGenero={setGenero}
          buscando={buscando}
          setBuscando={setBuscando}
          cidade={cidade}
          setCidade={setCidade}
          onLimpar={limparFiltros}
          totalFiltros={totalFiltros}
        />
      </div>

      {/* Resultados */}
      {bandas.length === 0 ? (
        <div className="text-center py-20 text-muted">
          <Music2 size={40} className="mx-auto mb-4 opacity-30" />
          <p className="font-mono text-sm uppercase tracking-widest">
            Nenhuma banda encontrada
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
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {bandas.map((b) => (
              <BandaCardGrid key={b.id} banda={b} />
            ))}
          </div>
          <div className="flex flex-col gap-3 md:hidden">
            {bandas.map((b) => (
              <BandaCardList key={b.id} banda={b} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
