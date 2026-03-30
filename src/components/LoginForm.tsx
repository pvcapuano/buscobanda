import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Chrome } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAuth } from "@/contexts/AuthContext";
import { Logo } from "./Logo";

/* ── Schema ─────────────────────────────────────────────── */
const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

type LoginData = z.infer<typeof loginSchema>;

/* ── Component ───────────────────────────────────────────── */
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { signInWithEmail, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [googleLoading, setGoogleLoading] = useState(false);

  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(data: LoginData) {
    setAuthError(null);

    try {
      await signInWithEmail(data.email, data.password);
      navigate("/dashboard");
    } catch (err: unknown) {
      setAuthError(
        err instanceof Error
          ? err.message
          : "Erro ao fazer login. Tente novamente.",
      );
    }
  }

  async function handleGoogle() {
    setAuthError(null);
    setGoogleLoading(true);

    try {
      await signInWithGoogle();
    } catch (err: unknown) {
      setAuthError(
        err instanceof Error ? err.message : "Erro ao entrar com Google.",
      );
      setGoogleLoading(false);
    }
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen px-4",
        className,
      )}
      {...props}
    >
      <Card className="w-full max-w-md shadow-md">
        <CardContent className="p-8 flex flex-col gap-6">
          {/* Logo + título */}
          <div className="flex flex-col items-center gap-2 text-center">
            <Logo className="w-18 h-14" />

            <h1 className="text-ink text-2xl tracking-wide">
              BEM-VINDO DE VOLTA
            </h1>

            <p className="text-muted text-sm">Faça seu login para continuar</p>
          </div>

          {/* Erro */}
          {authError && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-sm">
              {authError}
            </div>
          )}

          {/* Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="usuario@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Senha */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel>Senha</FormLabel>
                      <span className="text-xs text-punch cursor-pointer">
                        Esqueceu a senha?
                      </span>
                    </div>

                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                          onClick={() => setShowPassword((p) => !p)}
                        >
                          {showPassword ? (
                            <EyeOff size={16} />
                          ) : (
                            <Eye size={16} />
                          )}
                        </button>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="border border-border-warm bg-punch text-white hover:bg-cream hover:text-ink hover:border-ink transition-colors w-full"
              >
                {form.formState.isSubmitting ? "Entrando..." : "Entrar"}
              </Button>
            </form>
          </Form>

          {/* Divider */}
          <div className="flex items-center gap-2 text-xs text-muted">
            <div className="h-px bg-border flex-1" />
            ou
            <div className="h-px bg-border flex-1" />
          </div>

          {/* Google */}
          <Button
            type="button"
            variant="outline"
            disabled={googleLoading}
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-2 bg-cream text-ink border border-border-warm hover:bg-punch hover:text-white hover:border-punch transition-colors"
          >
            <Chrome size={16} />
            {googleLoading ? "Redirecionando..." : "Continuar com Google"}
          </Button>

          {/* Footer */}
          <p className="text-center text-xs">
            Não tem conta?{" "}
            <Link to="/signin" className="underline">
              Cadastre-se
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
