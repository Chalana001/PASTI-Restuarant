import React from "react";
import "../css/GoogleReviews.css";

const GoogleReviews = () => {
  return (
    <section className="google-reviews">
      <h2 className="reviews-title">⭐ What Our Customers Say</h2>

      <div className="google-reviews-embed">
        <iframe
          src="https://widgets.sociablekit.com/google-reviews/iframe/25640121"
          title="PASTI Restaurant Google Reviews"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "16px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Action buttons */}
      <div className="reviews-actions">
        <a
          href="https://maps.google.com/?q=PASTI+Restaurant+Girandurukotte"
          target="_blank"
          rel="noopener noreferrer"
          className="reviews-btn primary"
        >
          Read more reviews
        </a>

        <a
          href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="reviews-btn secondary"
        >
          Write a review
        </a>
      </div>
    </section>
  );
};

export default GoogleReviews;

