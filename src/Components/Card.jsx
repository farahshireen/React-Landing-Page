
import React from "react";
import "./Card.css";

import cappuccino from "../assets/cappuccino.jpg";
import espresso from "../assets/espresso.jpg";
import latte from "../assets/latte.jpg";

function Card() {

  const products = [
    {
      name: "Cappuccino",
      price: "$4.50",
      image: cappuccino
    },
    {
      name: "Espresso",
      price: "$3.50",
      image: espresso
    },
    {
      name: "Latte Coffee",
      price: "$5.00",
      image: latte
    }
  ];

  return (
    <section className="menu-section" id="menu">
      <div className="container">

        <div className="menu-heading text-center">
          <p>OUR POPULAR MENU</p>
          <h2>Choose Your Favorite Coffee</h2>
        </div>

        <div className="row g-4">

          {products.map((product, index) => (
            <div className="col-md-6 col-lg-4" key={index}>

              <div className="card coffee-card h-100">

                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />

                <div className="card-body">

                  <h5 className="card-title">
                    {product.name}
                  </h5>

                  <p className="card-text">
                    Freshly brewed coffee with a
                    delicious taste.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">

                    <h5 className="product-price">
                      {product.price}
                    </h5>

                    <button className="btn card-btn">
                      Order Now
                    </button>

                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Card;
