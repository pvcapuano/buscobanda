import {
  Guitar,
  Music2,
  Wine,
  Mic2,
  LayoutDashboard,
  Calendar,
} from "lucide-react";

export const navItems = [
  { label: "Início", href: "/dashboard", icon: LayoutDashboard },
  { label: "Músicos", href: "/dashboard/musicos", icon: Guitar },
  { label: "Bandas", href: "/dashboard/bandas", icon: Music2 },
  { label: "Bares", href: "/dashboard/bares", icon: Wine },
  { label: "Estúdios", href: "/dashboard/estudios", icon: Mic2 },
  { label: "Eventos", href: "/dashboard/eventos", icon: Calendar },
];
