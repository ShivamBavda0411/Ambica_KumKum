import React from "react";
import "./ProductsPreview.css";

import p1 from "../../assets/Product17.jpeg";
import p2 from "../../assets/Product16.jpeg";

const ProductsPreview = () => {

  const scrollToProducts = () => {
    const section = document.getElementById("products");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="products-preview">

      <h5>OUR PRODUCTS</h5>
      <h1>Our Kumkum Products</h1>

      <div className="product-cards">

        {/* Card 1 */}
        <div className="card">
          <img src={p1} alt="product1" />
          <h3>Kumkum Powder</h3>
          <p>
            Premium quality kumkum powder made with natural ingredients,
            perfect for all pooja rituals.
          </p>

          <button onClick={scrollToProducts}>View More</button>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src={p2} alt="product2" />
          <h3>Chandan Powder</h3>
          <p>
            Special kumkum used in traditional ceremonies, known for purity
            and long-lasting color.
          </p>

          <button onClick={scrollToProducts}>View More</button>
        </div>

      </div>

    </section>
  );
};

export default ProductsPreview;