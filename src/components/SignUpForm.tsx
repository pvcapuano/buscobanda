import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { Logo } from "./Logo";

/* ── Schema ─────────────────────────────────────────────── */
const signUpSchema = z
  .object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    accountType: z.enum(["musico", "banda", "estudio", "bar"], {
      message: "Selecione um tipo de conta",
    }),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string().min(6, "Confirme sua senha"),
    acceptPolicy: z.boolean().refine((v) => v === true, {
      message: "Você deve aceitar os Termos de Uso",
    }),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "As senhas não conferem",
    path: ["confirmPassword"],
  });

type SignUpData = z.infer<typeof signUpSchema>;

/* ── Component ───────────────────────────────────────────── */
export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { signUpWithEmail } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const form = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      accountType: undefined,
      password: "",
      confirmPassword: "",
      acceptPolicy: false,
    },
  });

  async function onSubmit(data: SignUpData) {
    setAuthError(null);
    setSuccessMsg(null);

    try {
      const res = await signUpWithEmail(
        data.email,
        data.password,
        data.accountType,
      );

      if (res.error) throw res.error;

      setSuccessMsg("Conta criada! Faça login.");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err: unknown) {
      setAuthError(
        err instanceof Error
          ? err.message
          : "Erro ao criar conta. Tente novamente.",
      );
    }
  }
  const monoLabel = {
    className: "text-ink-soft text-xs uppercase tracking-widest",
    style: { fontFamily: "'Space Mono', monospace" },
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen px-4",
        className,
      )}
      {...props}
    >
      <Card className="w-full max-w-md shadow-md">
        <CardContent className="p-8 flex flex-col gap-5">
          {/* Logo + título */}
          <div className="flex flex-col items-center text-center gap-2">
            <Logo className="w-18 h-14" />

            <h1 className="text-ink text-2xl tracking-wide">CRIE SUA CONTA</h1>

            <p className="text-muted text-sm">
              Junte-se à cena musical brasileira
            </p>
          </div>

          {/* Feedback */}
          {authError && <div className="text-red-700 text-sm">{authError}</div>}

          {successMsg && (
            <div className="text-green-700 text-sm">{successMsg}</div>
          )}

          {/* Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* Nome */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel {...monoLabel}>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Tipo */}
              <FormField
                control={form.control}
                name="accountType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel {...monoLabel}>Tipo de conta</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-md z-50">
                        <SelectItem
                          value="musico"
                          className="py-2 text-sm cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                          Músico
                        </SelectItem>

                        <SelectItem
                          value="banda"
                          className="py-2 text-sm cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                          Banda
                        </SelectItem>

                        <SelectItem
                          value="estudio"
                          className="py-2 text-sm cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                          Estúdio
                        </SelectItem>

                        <SelectItem
                          value="bar"
                          className="py-2 text-sm cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                          Bar
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel {...monoLabel}>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
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
                    <FormLabel {...monoLabel}>Senha</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                          onClick={() => setShowPassword((prev) => !prev)}
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

              {/* Confirmar */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel {...monoLabel}>Confirmar senha</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirm ? "text" : "password"}
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                          onClick={() => setShowConfirm((prev) => !prev)}
                        >
                          {showConfirm ? (
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

              {/* Checkbox */}
              <FormField
                control={form.control}
                name="acceptPolicy"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-xs">Aceito os termos</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="border border-border-warm bg-punch text-white hover:bg-cream hover:text-ink hover:border-ink transition-colors w-full mt-4"
              >
                {form.formState.isSubmitting ? "Criando..." : "Criar conta"}
              </Button>
            </form>
          </Form>

          {/* Footer */}
          <p className="text-center text-xs">
            Já tem conta?{" "}
            <Link to="/login" className="underline">
              Fazer login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
