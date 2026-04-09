import React from "react";
import "./AboutPreview.css";
import product from "../../assets/Product10.jpeg";

const AboutPreview = () => {

  const scrollToAbout = () => {
    const section = document.getElementById("about");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="about-preview">

      {/* Left Image */}
      <div className="about-image">
        <img src={product} alt="product" />
      </div>

      {/* Right Content */}
      <div className="about-content">
        <h5>ABOUT US</h5>
        <h1>Welcome To Ambica Kum-Kum</h1>

        <p>
          At Ambica Kum-Kum, we believe that every religious ritual deserves the finest quality.
  Our pooja powders are manufactured with utmost care, combining traditional methods
  with modern standards to deliver unmatched excellence. We aim to serve our customers
  with products that symbolize faith, purity, and devotion.
        </p>

        <p>
          With years of experience, we focus on delivering trusted and 
          premium products to our customers.
        </p>

        {/* Points */}
        <div className="points">
          <span>✔ Best Quality Products</span>
          <span>✔ Trusted Company</span>
          <span>✔ Affordable Price</span>
          <span>✔ Best Service</span>
        </div>

        <button onClick={scrollToAbout}>Learn More</button>
      </div>

    </section>
  );
};

export default AboutPreview;