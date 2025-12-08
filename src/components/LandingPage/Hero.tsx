import { Button } from "@/components/ui/button";
import bandImage from "@/assets/band.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-blue-dark to-black-custom"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-teal-light">
                Encontre sua banda. Viva seu sonho.
              </h1>

              <p className="text-lg md:text-xl text-blue-medium">
                Realize o sonho de ter uma banda, subir no palco e ser um músico
                de sucesso. Conecte-se com pessoas que compartilham a mesma
                paixão pela música.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Cadastro */}
              <Button
                size="lg"
                className="bg-teal-dark text-blue-light hover:bg-teal-light hover:text-blue-dark"
                asChild
              >
                <a href="/signin">Começar agora</a>
              </Button>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative h-96 md:h-full min-h-[400px] rounded-2xl overflow-hidden bg-black-custom flex items-center justify-center">
            <div
              className="w-full h-full bg-cover bg-center opacity-90"
              style={{ backgroundImage: `url(${bandImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-custom/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
