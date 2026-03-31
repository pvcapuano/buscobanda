import { useState, useMemo } from "react";
import { Guitar } from "lucide-react";
import { Button } from "@/components/ui/button";

import { PainelFiltros } from "@/components/PainelFiltros";
import { MusicoCardGrid } from "@/components/MusicoCardGrid";
import { MusicoCardList } from "@/components/MusicoCardList";

import { filterMusicos } from "@/utils/filterMusicos";
import { countFiltros } from "@/utils/countFiltros";

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

  const totalFiltros = countFiltros({
    busca,
    instrumento,
    genero,
    disponibilidade,
    cidade,
  });

  const musicos = useMemo(
    () =>
      filterMusicos({
        busca,
        instrumento,
        genero,
        disponibilidade,
        cidade,
      }),
    [busca, instrumento, genero, disponibilidade, cidade],
  );

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <p className="text-punch text-[10px] uppercase font-mono mb-1">
          // encontre
        </p>

        <h1 className="text-ink text-[clamp(36px,5vw,52px)]">MÚSICOS</h1>

        <p className="text-muted text-sm mt-1">
          {musicos.length} músico
          {musicos.length !== 1 ? "s" : ""} encontrado
          {musicos.length !== 1 ? "s" : ""}
        </p>
      </div>

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

      {musicos.length === 0 ? (
        <div className="text-center py-20 text-muted">
          <Guitar size={40} className="mx-auto mb-4 opacity-30" />
          <p className="font-mono text-sm uppercase">
            Nenhum músico encontrado
          </p>
          <Button variant="link" onClick={limparFiltros}>
            Limpar filtros
          </Button>
        </div>
      ) : (
        <>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {musicos.map((m) => (
              <MusicoCardGrid key={m.id} musico={m} />
            ))}
          </div>

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
