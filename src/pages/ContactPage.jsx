import React from "react";
import "../App.css";

const ContactPage = () => (
  <main className="contact-page">
    <h2>Contact Us</h2>
    <div className="contact-info">
      <div>
        <strong>Phone:</strong> <a href="tel:+94771234567">+94 77 123 4567</a>
      </div>
      <div>
        <strong>WhatsApp:</strong> <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
      </div>
      <div>
        <strong>Opening Hours:</strong> 10:00 AM – 10:00 PM (Mon–Sun)
      </div>
      <div className="map-placeholder">
        <strong>Find us:</strong>
        <div className="map-embed">
          {/* Google Map embed placeholder */}
          <div style={{background:'#222',color:'#fff',height:'180px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'8px'}}>Google Map Here</div>
        </div>
      </div>
    </div>
  </main>
);

export default ContactPage;
