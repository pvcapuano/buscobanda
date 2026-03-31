import { SlidersHorizontal, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type { Instrumento, Genero, Disponibilidade } from "@/types/types";

/* ── Opções ────────────────────────────────────── */
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

const cidades = [
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Curitiba",
  "Porto Alegre",
  "Salvador",
  "Brasília",
  "Recife",
];

/* ── Tipagem ──────────────────────────────────── */
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

/* ── Componente ───────────────────────────────── */
export function PainelFiltros({
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
            className="text-muted hover:text-punch text-[10px] font-mono uppercase tracking-widest flex items-center gap-1 cursor-pointer"
          >
            <X size={11} /> Limpar
          </button>
        )}
      </div>

      {/* Busca */}
      <div>
        <label className={labelClass}>Nome</label>
        <Input
          placeholder="Buscar por nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="bg-cream border-border-warm focus-visible:ring-punch rounded-sm text-sm"
        />
      </div>

      {/* Selects */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Instrumento */}
        <div>
          <label className={labelClass}>Instrumento</label>
          <Select value={instrumento} onValueChange={setInstrumento}>
            <SelectTrigger className="bg-cream border-border-warm rounded-sm text-sm h-9 cursor-pointer">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent className="bg-card border border-border-warm shadow-md rounded-sm">
              <SelectItem
                className="text-sm focus:bg-cream focus:text-ink focus:text-punch cursor-pointer"
                value="todos"
              >
                Todos
              </SelectItem>
              {instrumentos.map((i) => (
                <SelectItem
                  className="text-sm focus:bg-cream focus:text-ink focus:text-punch cursor-pointer"
                  key={i}
                  value={i}
                >
                  {i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Gênero */}
        <div>
          <label className={labelClass}>Gênero</label>
          <Select value={genero} onValueChange={setGenero}>
            <SelectTrigger className="bg-cream border-border-warm rounded-sm text-sm h-9 cursor-pointer">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent className="bg-card border border-border-warm shadow-md rounded-sm">
              <SelectItem
                className="text-sm focus:bg-cream focus:text-ink focus:text-punch cursor-pointer"
                value="todos"
              >
                Todos
              </SelectItem>
              {generos.map((g) => (
                <SelectItem
                  className="text-sm focus:bg-cream focus:text-ink focus:text-punch cursor-pointer"
                  key={g}
                  value={g}
                >
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Disponibilidade */}
        <div>
          <label className={labelClass}>Disponibilidade</label>
          <Select value={disponibilidade} onValueChange={setDisponibilidade}>
            <SelectTrigger className="bg-cream border-border-warm rounded-sm text-sm h-9 cursor-pointer">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent className="bg-card border border-border-warm shadow-md rounded-sm">
              {" "}
              <SelectItem
                className="text-sm focus:bg-cream focus:text-ink focus:text-punch cursor-pointer"
                value="todas"
              >
                Todas
              </SelectItem>
              {disponibilidades.map((d) => (
                <SelectItem
                  className="text-sm focus:bg-cream focus:text-ink focus:text-punch cursor-pointer"
                  key={d}
                  value={d}
                >
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Cidade */}
        <div>
          <label className={labelClass}>Cidade</label>
          <Select value={cidade} onValueChange={setCidade}>
            <SelectTrigger className="bg-cream border-border-warm rounded-sm text-sm h-9 cursor-pointer">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>

            <SelectContent className="bg-card border border-border-warm shadow-md rounded-sm ">
              <SelectItem
                className="text-sm hover:text-punch focus:bg-cream focus:text-punch cursor-pointer"
                value="todas"
              >
                Todas
              </SelectItem>

              {cidades.map((c) => (
                <SelectItem
                  key={c}
                  value={c}
                  className="text-sm hover:text-punch focus:bg-cream focus:text-punch cursor-pointer"
                >
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
