import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";

import "./App.css";

/* ---------------- ROUTES ---------------- */

function AppRoutes() {
  const navigate = useNavigate();

  return (
    <div className="app-root">
      <Routes>
        <Route
          path="/"
          element={<HomePage onViewMenu={() => navigate("/menu")} />}
        />

        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:foodId" element={<FoodDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>

      <footer className="footer">
        © {new Date().getFullYear()} PASTI Restaurant
      </footer>
    </div>
  );
}

/* ---------------- ROUTER WRAPPER ---------------- */

export default function AppWithRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}