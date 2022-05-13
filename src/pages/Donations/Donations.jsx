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
import Navbarmain from "../../components/navbarmain/Navbarmain";

const Donations = () => {
  return (
    <div className="container">
      <Navbarmain />
      <div className="allimage">
        <div className="set1">
          <div className="imagg1">
            Donations : $13Billion
            <img className="img2" src={char15} alt="charity" />
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
  );
};

export default Donations;
