export function countFiltros({
  busca,
  instrumento,
  genero,
  disponibilidade,
  cidade,
}: {
  busca: string;
  instrumento: string;
  genero: string;
  disponibilidade: string;
  cidade: string;
}) {
  return [
    busca,
    instrumento !== "todos" ? instrumento : "",
    genero !== "todos" ? genero : "",
    disponibilidade !== "todas" ? disponibilidade : "",
    cidade,
  ].filter(Boolean).length;
}
