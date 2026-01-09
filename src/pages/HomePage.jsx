import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import FoodCard from "../components/FoodCard";
import InfoSection from "../components/InfoSection";
import GoogleReviews from "../components/GoogleReviews";
import "../css/HomePage.css";
import { useNavigate } from "react-router-dom";


const fetchMenu = async () => {
  const res = await fetch("/menu.json");
  return res.json();
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
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

      {/* <div className="mini-highlights">
  <div className="mini-item">🍽️ Comfortable Dining</div>
  <div className="mini-item">🏡 Cozy Interior</div>
  <div className="mini-item">❤️ Loved by Locals</div>
</div> */}
      <div className="mini-highlights">
        <button className="mini-item" onClick={() => scrollToSection("1")}>
          🍽️ Comfortable Dining
        </button>

        <button className="mini-item" onClick={() => scrollToSection("3")}>
          🏡 Cozy Interior
        </button>

        <button className="mini-item" onClick={() => scrollToSection("2")}>
          ❤️ Loved by Locals
        </button>

        <button className="mini-item" onClick={() => scrollToSection("services")}>
          🚚 Delivery & Services
        </button>
      </div>



      <section id="services" className="services">
        <h2 className="section-title">Services</h2>

        <div className="services-grid">
          <div className="service-card">
            <span className="service-icon">🚚</span>
            <h3>Delivery Available</h3>
            <p>Fast delivery around Mahiyanganaya</p>
          </div>

          <div className="service-card">
            <span className="service-icon">🎉</span>
            <h3>Small Parties</h3>
            <p>For birthday & small parties</p>
          </div>

          <div className="service-card">
            <span className="service-icon">💵</span>
            <h3>Cash on Delivery</h3>
            <p>Pay when you receive your order</p>
          </div>

          <div className="service-card">
            <span className="service-icon">✅</span>
            <h3>Delivery Charges</h3>
            <p>Free within 2km • +LKR 50 per extra 1km</p>
          </div>

        </div>
      </section>
      <p className="delivery-note">
        📍 Free within 2km of PASTI • Extra 1km = LKR 50 • COD Available
      </p>
      <p className="party-note">
        🎉 Small party space available • you can book for small birthday parties
      </p>



      {/* INFO SECTIONS */}
      <section id="infosection" className="info-sections-h">
        {sections.map((section) => (
          <div id={section.id} >
            <InfoSection
              key={section.id}
              title={section.title}
              text={section.text}
              image={section.image}
              reverse={section.reverse}
            />
          </div>
        ))}
      </section>
      <GoogleReviews />
    </div>
  );
};

export default HomePage;
