import React, { useEffect, useState } from "react";
import "../App.css";

const heroImages = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
  "/images/hero/hero4.jpg",
  "/images/hero/hero5.jpg"
];

const tagline = "Comfortable Dining for Locals & Travelers";

const HeroSection = ({ onViewMenu }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <img
        src={heroImages[current]}
        alt="Delicious food"
        className="hero-image"
      />
      <div className="hero-overlay">
        <img src="/images/logo.jpg" alt="PASTI Logo" className="hero-logo" />
        <h1 className="hero-title">PASTI</h1>
        <p className="hero-tagline">{tagline}</p>
        <button className="hero-btn" onClick={onViewMenu}>
          View Menu
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
