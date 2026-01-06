import React from "react";
import "../App.css";

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
          <a href="tel:+94704589764">+94 70 458 9764</a>
        </div>

        <div className="contact-card">
          <h3>💬 WhatsApp</h3>
          <a
            href="https://wa.me/94704589764"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <h3>⏰ Opening Hours</h3>
          <p>10:00 AM – 10:00 PM</p>
          <span>Monday – Sunday</span>
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
        <a href="tel:+94704589764" className="contact-btn dark">
          Call Now
        </a>
        <a
          href="https://wa.me/94704589764"
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
