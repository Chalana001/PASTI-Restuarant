import React from "react";
import "../App.css";

export default function AboutPage() {
  return (
    <section className="about-page">
      {/* HERO */}
      <div className="about-hero">
        <h1>About PASTI</h1>
        <p>
          Authentic Sri Lankan flavors, crafted with passion and served with
          heart.
        </p>
      </div>

      {/* STORY */}
      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          Welcome to <strong>PASTI</strong>, your own place for authentic Sri
          Lankan flavors. Our journey began with one goal — bringing people
          together through delicious food.
        </p>
        <p>
          Every dish is prepared using fresh ingredients and traditional
          recipes, served in a warm and friendly atmosphere.
        </p>
      </div>

      {/* Real Restaurant Photos */}
      <section className="restaurant-photos">
        <h2 className="section-title">Inside PASTI</h2>
        <p className="section-subtitle">
          A closer look at our space and how we work.
        </p>

        <div className="photo-cards">
          <div className="photo-card">
            <img src="/images/restaurant/interior.jpg" alt="Restaurant Interior" />
            <h4>Cozy Interior</h4>
            <p>Designed for comfort and relaxation, our interior offers a warm and welcoming space for families, friends, and casual dining. Every detail is carefully arranged to create a pleasant dining experience.</p>
          </div>

          <div className="photo-card">
            <img src="/images/restaurant/dining.jpg" alt="Customers Dining" />
            <h4>Comfortable Dining</h4>
            <p>Whether you're dining with family or friends, PASTI provides a friendly atmosphere where good food and great conversations come together. A perfect place to enjoy authentic Sri Lankan flavors.</p>
          </div>

          <div className="photo-card">
            <img src="/images/restaurant/kitchen.jpg" alt="Hygienic Kitchen" />
            <h4>Hygienic Kitchen</h4>
            <p>Our kitchen operates with strict cleanliness and food safety standards. Every meal is prepared with care, using fresh ingredients and proper hygiene practices to ensure quality and taste in every dish.</p>
          </div>
        </div>
      </section>

      <section className="team-section">

  {/* Founder */}
  <div className="team-row">
    <div className="team-image">
      <img src="/images/owner/founder.jpg" alt="Founder" />
    </div>

    <div className="team-content">
      <h3>Meet the Founder</h3>
      <h4>Mr. Rukmal Thushara</h4>
      <p>
        PASTI was founded with a vision to create a welcoming space where
        people can enjoy authentic Sri Lankan cuisine.
      </p>
      <p>
        His focus is on quality, customer satisfaction, and building a strong
        local community around great food.
      </p>
      <span className="line"></span>
    </div>
  </div>

  {/* Chef */}
  <div className="team-row reverse">
    <div className="team-image">
      <img src="/images/owner/chef.jpg" alt="Head Chef" />
    </div>

    <div className="team-content">
      <h3>Meet Our Head Chef</h3>
      <h4>Chef [Chef Name]</h4>
      <p>
        Our Head Chef brings years of experience in preparing traditional
        Sri Lankan dishes using time-tested recipes.
      </p>
      <p>
        Every plate served reflects passion for flavor, freshness, and
        consistency.
      </p>
      <span className="line"></span>
    </div>
  </div>

</section>


      {/* CTA */}
      <div className="about-cta">
        <a href="/menu" className="about-btn primary">
          View Our Menu
        </a>
        <a href="/contact" className="about-btn secondary">
          Contact Us
        </a>
      </div>
    </section>
  );
}
