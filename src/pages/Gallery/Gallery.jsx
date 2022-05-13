import React from "react";
import { Link } from "react-router-dom";
import char5 from "../../assets/images/char5.jpeg";
import char6 from "../../assets/images/char6.jpeg";
import char7 from "../../assets/images/char7.jpeg";
import char8 from "../../assets/images/char8.jpeg";
import char9 from "../../assets/images/char9.jpeg";
import char10 from "../../assets/images/char10.jpeg";
import char11 from "../../assets/images/char11.jpeg";
import char12 from "../../assets/images/char12.jpeg";
import charity from "../../assets/images/charity.jpg";
import logo from "../../assets/images/logo.png";

import "./Gallery.css";
import Navbarmain from "../../components/navbarmain/Navbarmain";

const Gallery = () => {
  return (
    <div className="container-fluid">
      <Navbarmain />

      <div className="allimages">
        <div className="set1">
          <img className="imagg" src={char5} alt="charity" />
          <img className="imagg" src={char6} alt="charity" />
          <img className="imagg" src={char7} alt="charity" />
        </div>
        <div className="set2">
          <img className="imagg" src={char8} alt="charity" />
          <img className="imagg" src={char9} alt="charity" />
          <img className="imagg" src={char10} alt="charity" />
        </div>
        <div className="set3">
          <img className="imagg" src={char11} alt="charity" />
          <img className="imagg" src={char12} alt="charity" />
          <img className="imagg" src={charity} alt="charity" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
