import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import Navbarmain from "../../components/navbarmain/Navbarmain";

const Contact = ()=>{return(
<div>
< Navbarmain />
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
