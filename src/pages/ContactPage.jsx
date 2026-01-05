import React from "react";
import "../App.css";

const ContactPage = () => (
  <main className="contact-page">
    <h2>Contact Us</h2>
    <div className="contact-info">
      <div>
        <strong>Phone:</strong> <a href="tel:+94704589764">+94 70 458 9764</a>
      </div>
      <div>
        <strong>WhatsApp:</strong> <a href="https://wa.me/94704589764" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
      </div>
      <div>
        <strong>Opening Hours:</strong> 10:00 AM – 10:00 PM (Mon–Sun)
      </div>
      <div className="map-placeholder">
        <strong>Find us:</strong>
        <div className="map-embed" style={{marginTop: '10px'}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6403.660252310156!2d80.98904674533435!3d7.339955228929853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae497406e53798b%3A0x7d9b01a0cf7b83ea!2sPASTI%20RESTAURANT!5e0!3m2!1sen!2slk!4v1767649622953!5m2!1sen!2slk"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PASTI Location"
          ></iframe>
        </div>
      </div>
    </div>
  </main>
);

export default ContactPage;
