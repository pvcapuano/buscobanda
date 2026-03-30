import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignInPage from "../pages/SignInPage";
import { AuthProvider } from "@/contexts/AuthContext";
import PrivateRoute from "@/components/PrivateRoute";
import DashboardHome from "@/pages/DashboardHome";
import MusicosPage from "@/pages/MusicosPage";
import BandasPage from "@/pages/BandasPage";
import BaresPage from "@/pages/BaresPage";
import EstudiosPage from "@/pages/EstudiosPage";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* ── Rotas públicas ── */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignInPage />} />

          {/* ── Rotas privadas (exigem login) ── */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="musicos" element={<MusicosPage />} />
              <Route path="bandas" element={<BandasPage />} />
              <Route path="bares" element={<BaresPage />} />
              <Route path="estudios" element={<EstudiosPage />} />
            </Route>
          </Route>

          {/* ── 404 ── */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
