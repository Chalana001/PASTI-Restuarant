import React from "react";
import "../css/ContactPage.css";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We’d love to hear from you. Reach us easily using the details below.
      </p>

      {/* Contact cards */}
      <div className="contact-cards">
        <div className="contact-card">
          <h3>📞 Phone</h3>
          <a href="tel:+94552257850">055 225 78 50</a>
        </div>

        <div className="contact-card">
          <h3>💬 WhatsApp</h3>
          <a
            href="https://wa.me/94771168145"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <h3>⏰ Opening Hours</h3>
          <p>11:00 AM – 11:00 PM</p>
          <span>Tuesday – Sunday</span>
        </div>

        <div className="contact-card">
          <h3>📍 Location</h3>
          <p>Mahiyanganaya, Sri Lanka</p>
        </div>
      </div>

      {/* Map */}
      <div className="contact-map">
        <iframe
          title="PASTI Restaurant Map"
          src="https://www.google.com/maps?q=PASTI+Restaurant+Mahiyanganaya&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* CTA */}
      <div className="contact-actions">
        <a href="tel:+94552257850" className="contact-btn dark">
          Call Now
        </a>
        <a
          href="https://wa.me/94771168145"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp"
        >
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}
