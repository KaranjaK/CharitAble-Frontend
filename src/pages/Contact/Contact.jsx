import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";

const Contact = ()=>{return(
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
  <div className="paragraph">
  Please write or call us with your questions or comments <br /> <br />

Physical Address <br /> 
Kibera Plaza Ground floor, next to Vostrum Clinic , <br /> Kibera Drive, Off Ngong Road <br />

Contact Us <br />
+254 726172393 / +254110547515/ +254 797558414 <br />
info@ucesco.org / Ucesco.2014@gmail.com <br />
Keep In Touch <br />
            <BsInstagram className="ico" />
            <BsFacebook className="ico" />
            <AiFillTwitterSquare className="ico" />
</div>
</div>
)}

export default Contact;