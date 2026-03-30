import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Loading from "./Loading";

/**
 * Protege rotas que exigem autenticação.
 * Enquanto o Supabase resolve a sessão inicial, exibe um loader.
 * Se não houver usuário logado, redireciona para /login.
 */
export default function PrivateRoute() {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
