import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-dark to-black-custom">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-light">
            Faça parte da maior comunidade musical
          </h2>

          <p className="text-lg text-blue-light">
            Músicos não crescem sozinhos — crescem em conjunto.
          </p>
          <p className="text-lg text-blue-light font-bold">
            Sua jornada começa aqui.
          </p>
        </div>

        <Button
          size="lg"
          className="px-8 bg-teal-light text-blue-dark hover:bg-teal-dark hover:text-blue-light"
          asChild
        >
          <a href="/cadastro">Criar minha conta agora</a>
        </Button>
      </div>
    </section>
  );
}
