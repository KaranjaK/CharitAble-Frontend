import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Donations.css";
import char15 from "../../assets/images/char15.jpeg";
import char16 from "../../assets/images/char16.jpeg";
import char17 from "../../assets/images/char17.jpeg";
import char18 from "../../assets/images/char18.jpeg";
import char19 from "../../assets/images/char19.jpeg";
import char20 from "../../assets/images/char20.jpeg";

const Donations = ()=>{return(
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
  <div className="allimage">
   <div className="set1">
       <div className="imagg1">
       Donations : $13Billion
       <img  className="img2" src={char15} alt="charity" />
       </div>
       <div className="imagg1">

       Donations : $113Billion

       <img className="img2" src={char16} alt="charity" />
</div>
<div className="imagg1">
Donations : $10Million

       <img className="img2" src={char17} alt="charity" />
</div>

   </div>
   <div className="set2">
   <div className="imagg1">

   Donations : $500Billion

       <img className="img2" src={char18} alt="charity" />
</div>
<div className="imagg1">

Donations : ksh3Billion

<img className="img2" src={char19} alt="charity" />
</div>
<div className="imagg1">

Donations : $103Billion

<img className="img2" src={char20} alt="charity" />
</div>

</div>

</div>

</div>
)}

export default Donations;