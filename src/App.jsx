
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";
import Navbar from "./components/Navbar";


function App() {
  const navigate = useNavigate();
  return (
    <div className="app-root">
      <Routes>

        <Route path="/" element={<HomePage />} />


        {/* <Route
          path="/"
          element={<HomePage onViewMenu={() => navigate("/menu")} />}
        /> */}
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
    <Navbar /> {/* 🔥 GLOBAL NAVBAR */}
    <App />
  </Router>
);

export default AppWithRouter;
