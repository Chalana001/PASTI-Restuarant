import React, { useEffect, useState } from "react";
import "../css/StickyContactButton.css";

export default function StickyContactButtons() {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        // scrolling DOWN
        setVisible(true);
      } else {
        // scrolling UP
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!visible) return null;

  return (
    <div className="sticky-contact">
      <a href="tel:+94XXXXXXXXX" className="sticky-btn call">
        Call
      </a>

      <a
        href="https://wa.me/94XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-btn whatsapp"
      >
        WhatsApp
      </a>
    </div>
  );
}
