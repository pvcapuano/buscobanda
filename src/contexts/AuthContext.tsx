import { createContext, useContext, useEffect, useState } from "react";
import type { AuthResponse, Session, User } from "@supabase/supabase-js";
import type { ReactNode } from "react";
import { supabase } from "@/lib/supabase";

/* ── Tipos ─────────────────────────────────────────────── */
interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;

  signInWithEmail: (email: string, password: string) => Promise<AuthResponse>;

  signUpWithEmail: (
    email: string,
    password: string,
    accountType: string,
  ) => Promise<AuthResponse>;

  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

/* ── Contexto ───────────────────────────────────────────── */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* ── Provider ───────────────────────────────────────────── */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* Carrega sessão inicial (ex.: reload de página) */
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    /* Escuta mudanças de auth (login, logout, refresh de token) */
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);

        // 🔥 CRIA PROFILE AUTOMATICAMENTE
        if (session?.user) {
          const user = session.user;

          const { data: profile } = await supabase
            .from("profiles")
            .select("id")
            .eq("id", user.id)
            .maybeSingle();

          if (!profile) {
            await supabase.from("profiles").insert({
              id: user.id,
              email: user.email,
              name: user.user_metadata?.full_name || "",
              account_type: user.user_metadata?.account_type || "user",
            });
          }
        }
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  /* ── Métodos ─────────────────────────────────────────── */
  async function signInWithEmail(email: string, password: string) {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (res.error) throw res.error;

    return res; // 🔥 ESSENCIAL
  }

  async function signUpWithEmail(
    email: string,
    password: string,
    accountType: string,
  ) {
    const res = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          account_type: accountType, // 🔥 AQUI
        },
      },
    });

    if (res.error) throw res.error;

    return res;
  }

  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
    if (error) throw error;
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signInWithEmail,
        signUpWithEmail,
        signInWithGoogle,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/* ── Hook ───────────────────────────────────────────────── */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  return ctx;
}
