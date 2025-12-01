import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import buscobandaLogo from "@/assets/buscobanda-logo.jpg";
import { Eye, EyeOff } from "lucide-react";

const signUpSchema = z
  .object({
    name: z.string().min(2, "Nome inválido"),

    email: z.string().email("Email inválido"),

    accountType: z.enum(["musico", "bar"]),

    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),

    confirmPassword: z.string().min(6, "Confirme sua senha"),

    acceptPolicy: z.literal(true),
  })
  .refine((data) => data.accountType, {
    message: "Selecione um tipo de conta",
    path: ["accountType"],
  })
  .refine((data) => data.acceptPolicy === true, {
    message: "Você deve aceitar a Política de Privacidade",
    path: ["acceptPolicy"],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem",
    path: ["confirmPassword"],
  });

type SignUpData = z.infer<typeof signUpSchema>;

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = (data: z.infer<typeof signUpSchema>) => {
    console.log("Dados enviados:", data);
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-6 text-[var(--color-blue-dark)]",
        className
      )}
      {...props}
    >
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Cadastre-se</h1>
                <p className="text-muted-foreground text-balance">
                  Preencha os campos abaixo
                </p>
              </div>

              <Field>
                <FieldLabel htmlFor="name">Nome</FieldLabel>
                <Input
                  id="name"
                  placeholder="Seu nome completo"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-600 text-xs">{errors.name.message}</p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="accountType">Tipo de conta</FieldLabel>
                <select
                  id="accountType"
                  {...register("accountType")}
                  className="
                    w-full rounded-md border border-input bg-background px-3 py-2
                    text-sm focus:outline-none focus:ring-2 focus:ring-ring
                  "
                >
                  <option value="">Selecione...</option>
                  <option value="musico">Músico</option>
                  <option value="bar">Bar</option>
                </select>
                {errors.accountType && (
                  <p className="text-red-600 text-xs">
                    {errors.accountType.message}
                  </p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="usuario@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-600 text-xs">{errors.email.message}</p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Senha</FieldLabel>

                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("password")}
                  />

                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-600 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="confirmPassword">
                  Confirmar senha
                </FieldLabel>

                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("confirmPassword")}
                  />

                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    onClick={() => setShowConfirm((prev) => !prev)}
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="text-red-600 text-xs">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </Field>

              <Field>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    {...register("acceptPolicy")}
                    className="w-4 h-4"
                  />
                  <span>
                    Eu aceito os{" "}
                    <a href="#" className="underline font-medium">
                      Termos de uso
                    </a>
                  </span>
                </label>

                {errors.acceptPolicy && (
                  <p className="text-red-600 text-xs">
                    {errors.acceptPolicy.message}
                  </p>
                )}
              </Field>

              <Field>
                <Button
                  type="submit"
                  className="bg-[var(--color-blue-dark)] text-white hover:bg-[var(--color-teal-dark)]"
                >
                  Criar conta
                </Button>
              </Field>
            </FieldGroup>
          </form>

          <div className="bg-muted relative hidden md:block">
            <img
              src={buscobandaLogo}
              alt="Logo Busco Banda"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
