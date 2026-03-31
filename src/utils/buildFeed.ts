import { mockMusicos, mockBandas } from "@/data/mockData";
import type { FeedItem } from "@/types/types";

export function buildFeed(): FeedItem[] {
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
