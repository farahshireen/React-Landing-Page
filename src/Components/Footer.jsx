
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="coffee-footer" id="contact">

      <div className="container">
        <div className="row g-4">

          <div className="col-md-4">
            <h3>☕ Coffea</h3>

            <p>
              Enjoy every sip of happiness with
              our freshly brewed coffee.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Quick Links</h5>

            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Our Menu</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Contact Us</h5>

            <p>Email: info@coffea.com</p>
            <p>Phone: +123 456 789</p>
            <p>Follow us on Instagram</p>
          </div>

        </div>

        <hr />

        <p className="copyright text-center">
          © 2026 Coffea. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
