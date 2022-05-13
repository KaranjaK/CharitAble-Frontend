import React from "react";
import "./navbarmain.css";
import logo from "../../assets/images/logo.png";

const Navbarmain = () => {
  return (
    <div className="Navbarmain">
      <nav class="navbar navbar-expand-lg border-0">
        <div class="container-fluid">
          <img className="imag4" src={logo} alt="charity" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/gallery">
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/donations">
                  Donations
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contacts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login">
                  <button className="one">LOGIN</button>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login">
                  <button className="three">SIGNUP</button>
                </a>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbarmain;
