import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";


const Events = ()=>{return(
<div>
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

</div>
)}

export default Events;