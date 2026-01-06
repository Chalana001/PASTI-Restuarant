import React from "react";
import "../App.css";

const GoogleReviews = () => {
	return (
		<section className="google-reviews">
			<h2 className="reviews-title">What Our Customers Say</h2>
			<div className="google-reviews-embed">
				<iframe
					src="https://widgets.sociablekit.com/google-reviews/iframe/25640121"
					frameBorder="0"
					width="100%"
					height="450"
					style={{ border: 0, borderRadius: '16px' }}
					allowFullScreen
				></iframe>
			</div>
		</section>
	);
};

export default GoogleReviews;
