interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

/**
 * Componente de carregamento reutilizável.
 *
 * @param message   - Texto exibido abaixo do spinner. Padrão: "Carregando..."
 * @param fullScreen - Se true, ocupa a tela inteira (min-h-screen). Padrão: true
 *
 * @example
 * // Tela cheia (ex.: PrivateRoute, páginas)
 * <Loading />
 *
 * @example
 * // Mensagem customizada
 * <Loading message="Buscando músicos..." />
 *
 * @example
 * // Inline dentro de um card/seção
 * <Loading fullScreen={false} message="Salvando..." />
 */
export default function Loading({
  message = "Carregando...",
  fullScreen = true,
}: LoadingProps) {
  return (
    <div
      className={`flex items-center justify-center bg-cream ${
        fullScreen ? "min-h-screen" : "min-h-40 w-full"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-10 h-10">
          {/* Trilha */}
          <div className="absolute inset-0 rounded-full border-4 border-border-warm" />
          {/* Arco girando */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-punch animate-spin" />
        </div>

        {/* Mensagem */}
        <p
          className="text-muted tracking-widest uppercase text-xs"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}
