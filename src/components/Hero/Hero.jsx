import React from 'react'
import './Hero.css'
import product1 from '../../assets/Product03.jpeg'
import product2 from '../../assets/Product01.jpeg'

const Hero = () => {
  return (
     <section className="hero">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-text">
          <h1>Premium Pooja Powder Manufacturer</h1>
          <p>
            We provide high-quality pooja powders made with purity and devotion.
            Our products are perfect for all religious rituals and ceremonies.
          </p>

          <button className="hero-btn">View Products</button>
        </div>

        {/* Right Images */}
        <div className="hero-images">
          <img src={product1} alt="Pooja Powder 1" />
          <img src={product2} alt="Pooja Powder 2" />
        </div>

      </div>
    </section>
  )
}

export default Hero