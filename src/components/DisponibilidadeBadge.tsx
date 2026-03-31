type Props = {
  status: string;
};

export function DisponibilidadeBadge({ status }: Props) {
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
