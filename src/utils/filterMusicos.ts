import { mockMusicos } from "@/data/mockData";
import type { Genero } from "@/types/types";

interface Params {
  busca: string;
  instrumento: string;
  genero: string;
  disponibilidade: string;
  cidade: string;
}

export function filterMusicos({
  busca,
  instrumento,
  genero,
  disponibilidade,
  cidade,
}: Params) {
  return mockMusicos.filter((m) => {
    if (busca && !m.nome.toLowerCase().includes(busca.toLowerCase()))
      return false;

    if (instrumento !== "todos" && m.instrumento !== instrumento) return false;

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
}
