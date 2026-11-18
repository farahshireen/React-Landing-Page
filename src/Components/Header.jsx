import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg coffea-navbar">
      <div className="container">

        <a className="navbar-brand coffea-logo" href="#">
          ☕ Coffea
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>

          <button className="btn header-btn">
            Order Now
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Header;

