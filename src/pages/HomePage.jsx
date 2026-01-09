import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import FoodCard from "../components/FoodCard";
import InfoSection from "../components/InfoSection";
import GoogleReviews from "../components/GoogleReviews";
import "../App.css";
import { useNavigate } from "react-router-dom";


const fetchMenu = async () => {
  const res = await fetch("/menu.json");
  return res.json();
};

const HomePage = ({ onViewMenu }) => {
  const [comboFoods, setComboFoods] = useState([]);
  const [sections, setSections] = useState([]);
  const navigate = useNavigate();

  // 🔥 load combo-packages from menu.json
  useEffect(() => {
    fetchMenu().then((data) => {
      const comboCategory = data?.categories?.find(
        (cat) => cat.id === "combo-packages"
      );

      setComboFoods(comboCategory?.foods || []);
    });
  }, []);

  // 🔥 load home sections
  useEffect(() => {
    fetch("/homeSections.json")
      .then((res) => res.json())
      .then((data) => setSections(data.sections || []))
      .catch((err) =>
        console.error("Failed to load home sections", err)
      );
  }, []);

  return (
    <div className="home-page">
      <HeroSection onViewMenu={onViewMenu} />

      {/* ✅ COMBO PACKAGES (only if available) */}
      {comboFoods.length > 0 && (
        <section className="special-deals">
          <h2 className="section-title">🔥 Combo Packages</h2>
          <div className="special-deals-row">
            {comboFoods.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
                onClick={() => navigate(`/menu/${food.id}`)}
                variant="list"
              />
            ))}
          </div>
        </section>
      )}

      {/* INFO SECTIONS */}
      <section className="info-sections-h">
      {sections.map((section) => (
        <InfoSection
          key={section.id}
          title={section.title}
          text={section.text}
          image={section.image}
          reverse={section.reverse}
        />
      ))}
      </section>
      <GoogleReviews />
    </div>
  );
};

export default HomePage;
