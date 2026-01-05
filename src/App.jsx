
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-logo">
      <img src="/images/logo.png" alt="PASTI Logo" className="nav-logo-img" />
      <span>PASTI</span>
    </Link>
    <div className="nav-links">
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

function App() {
  const navigate = useNavigate();
  return (
    <div className="app-root">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage onViewMenu={() => navigate("/menu")} />}
        />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:foodId" element={<FoodDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <footer className="footer">© {new Date().getFullYear()} PASTI Restaurant</footer>
    </div>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
