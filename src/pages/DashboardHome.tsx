import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

import { buildFeed } from "@/utils/buildFeed";
import { MusicoCard } from "@/components/MusicoCard";
import { BandaCard } from "@/components/BandaCard";

import type { Musico, Banda } from "@/types/types";

export default function DashboardHome() {
  const { user } = useAuth();
  const feed = buildFeed();

  const firstName =
    user?.user_metadata?.full_name?.split(" ")[0] ??
    user?.email?.split("@")[0] ??
    "músico";

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <p className="text-punch uppercase tracking-widest text-[10px] mb-1 font-mono">
          // bem-vindo de volta
        </p>

        <h1 className="text-ink text-[42px]">OLÁ, {firstName.toUpperCase()}</h1>

        <p className="text-muted text-sm mt-1">
          Veja o que está acontecendo na cena musical hoje.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        <Button
          asChild
          className="bg-punch text-white hover:bg-punch-warm py-5"
        >
          <Link to="/dashboard/musicos">Ver músicos</Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="border-ink text-ink hover:bg-ink hover:text-cream py-5"
        >
          <Link to="/dashboard/bandas">Ver bandas</Link>
        </Button>
      </div>

      <div className="flex justify-between mb-4">
        <h2 className="text-ink text-xl">ÚLTIMOS CADASTROS</h2>
        <span className="text-muted text-xs">{feed.length} posts</span>
      </div>

      <div className="flex flex-col gap-4">
        {feed.map((item) =>
          item.tipo === "musico" ? (
            <MusicoCard key={item.data.id} musico={item.data as Musico} />
          ) : (
            <BandaCard key={item.data.id} banda={item.data as Banda} />
          ),
        )}
      </div>
    </div>
  );
}
