import React from "react";
import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import "../App.css";

import InfoSection from "../components/InfoSection";
import GoogleReviews from "../components/GoogleReviews";


const HomePage = ({ onViewMenu }) => {

      const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("/homeSections.json")
      .then((res) => res.json())
      .then((data) => setSections(data.sections))
      .catch((err) => console.error("Failed to load home sections", err));
  }, []);

  return (
    <div className="home-page">
      <HeroSection onViewMenu={onViewMenu} />

      {sections.map((section) => (
        <InfoSection
          key={section.id}
          title={section.title}
          text={section.text}
          image={section.image}
          reverse={section.reverse}
        />
      ))}
      


      <GoogleReviews />
    </div>
  );
};

export default HomePage;
