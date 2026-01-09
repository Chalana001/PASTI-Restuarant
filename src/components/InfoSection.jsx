import { useEffect, useRef, useState } from "react";
import "../css/Infosection.css";

export default function InfoSection({ title, text, image, reverse }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`info-section ${reverse ? "reverse" : ""} ${visible ? "visible" : ""
        }`}
    >
      <div className="info-inner">
        <div className="info-text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="info-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
}
