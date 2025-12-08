import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignInPage from "../pages/SignInPage";

export default function AppRoutes() {
  const basename = import.meta.env.MODE === "production" ? "/buscobanda" : "/";
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignInPage />} />
        {/* opcional: 404 */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
