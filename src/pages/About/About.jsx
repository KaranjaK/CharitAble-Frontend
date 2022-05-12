import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./About.css";

const About = ()=>{return(
<div className="container">
<div className="enclose">
    <div className="brand">
      <img className="imag4" src={logo} alt="charity" />
    </div>
    <div>
      <ul className="Navbar">
        <li>
          <Link
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/donations"
          >
            Donations
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
          >
            Contacts
          </Link>
        </li>
      
        
      </ul>
    </div>
  </div>
<div className="paragraph">
We are a charity management system where <br />  <br />
charity organizations get funding from donors easily. 
Charitable advances the common <br /> <br /> good in communities across  the world. Our focus is on education, income  and health—the building blocks <br /> <br /> for a good quality of life. 


</div>

</div>
)}

export default About;