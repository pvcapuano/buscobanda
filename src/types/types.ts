/* ── Enums / literais ──────────────────────────────────── */

export type Instrumento =
  | "Guitarra"
  | "Baixo"
  | "Bateria"
  | "Teclado"
  | "Violão"
  | "Voz"
  | "Saxofone"
  | "Trompete"
  | "Violino"
  | "Outro";

export type Genero =
  | "Rock"
  | "Metal"
  | "MPB"
  | "Samba"
  | "Jazz"
  | "Blues"
  | "Funk"
  | "Pop"
  | "Forró"
  | "Eletrônico"
  | "Outro";

export type Disponibilidade = "Disponível" | "Ocupado" | "Em turnê";

export type IntegranteBuscado = Instrumento | "Voz" | "Qualquer";

/* ── Músico ────────────────────────────────────────────── */
export interface Musico {
  id: string;
  nome: string;
  instrumento: Instrumento;
  generos: Genero[];
  cidade: string;
  bairro: string;
  bio: string;
  disponibilidade: Disponibilidade;
  avatar?: string;
  instagram?: string;
  youtube?: string;
  spotify?: string;
  demos?: string[]; // URLs de áudio/vídeo
  criadoEm: string; // ISO date
}

/* ── Banda ─────────────────────────────────────────────── */
export interface Banda {
  id: string;
  nome: string;
  generos: Genero[];
  cidade: string;
  bairro: string;
  bio: string;
  logo?: string;
  integrantesBuscados: IntegranteBuscado[];
  integrantes: number;
  instagram?: string;
  youtube?: string;
  spotify?: string;
  criadoEm: string;
}

/* ── Bar ───────────────────────────────────────────────── */
export interface Bar {
  id: string;
  nome: string;
  cidade: string;
  bairro: string;
  descricao: string;
  logo?: string;
  instagram?: string;
  site?: string;
  capacidade?: number;
  generosPreferidos: Genero[];
  criadoEm: string;
}

/* ── Estúdio ───────────────────────────────────────────── */
export interface Estudio {
  id: string;
  nome: string;
  cidade: string;
  bairro: string;
  descricao: string;
  logo?: string;
  instagram?: string;
  site?: string;
  servicos: string[];
  precoHora?: number;
  criadoEm: string;
}

/* ── Feed item ─────────────────────────────────────────── */
export type FeedItemTipo = "musico" | "banda";

export interface FeedItem {
  tipo: FeedItemTipo;
  data: Musico | Banda;
}
