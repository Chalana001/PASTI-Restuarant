import React from "react";
import HeroSection from "../components/HeroSection";
import "../App.css";

const HomePage = ({ onViewMenu }) => {
  return (
    <div className="home-page">
      <HeroSection onViewMenu={onViewMenu} />
      {/* Add more home page sections here if needed */}
    </div>
  );
};

export default HomePage;
