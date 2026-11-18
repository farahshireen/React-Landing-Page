
import React from "react";
import "./Hero.css";
import heroImage from "../assets/hero-coffee.jpg";

function Hero() {
  return (
    <section className="hero-section" id="about">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 hero-content">

            <p className="hero-subtitle">
              WELCOME TO COFFEA
            </p>

            <h1>
              Start Your Day With A
              <span> Fresh Coffee</span>
            </h1>

            <p className="hero-description">
              Enjoy the perfect blend of rich flavors
              and freshly brewed coffee. Every cup is
              made with love and passion.
            </p>

            <button className="btn hero-btn">
              Explore Menu
            </button>

            <button className="btn hero-outline-btn">
              Learn More
            </button>

          </div>

          <div className="col-lg-6">
            <div className="hero-image">
              <img src={heroImage} alt="Fresh Coffee" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
