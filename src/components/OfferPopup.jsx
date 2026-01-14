import React, { useEffect, useState } from "react";
import "../css/OfferPopup.css";

export default function OfferPopup({ imageUrl }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup after page load (with small delay)
    const timer = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="popupOverlay" onClick={() => setOpen(false)}>
      <div className="popupBox" onClick={(e) => e.stopPropagation()}>
        <button className="popupClose" onClick={() => setOpen(false)}>
          ✕
        </button>

        <img src={imageUrl} alt="Offer" className="popupImg" />

        {/* Optional button */}
        {/* <a href="/offers" className="popupBtn">View Offers</a> */}
      </div>
    </div>
  );
}