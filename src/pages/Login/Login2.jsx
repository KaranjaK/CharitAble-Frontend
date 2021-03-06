import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import "./Login.css";
import { BiDonateHeart } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import axios from 'axios';
import Navbarmain from "../../components/navbarmain/Navbarmain";

const Login = () => {

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      email: this.email,
      password: this.password
    }

    axios.post('http://127.0.0.1:8000/api/login/', data)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="Login">
      <Navbarmain />
      <div className="head">
        <h3>Welcome Back</h3>
        <p>Choose Account Type</p>
      </div>
      <div className="over">
        <form onSubmit = {handleSubmit}>
          <div className="icos">
            <div className="ic">
              <a href="login1">
                <BiDonateHeart className="icon" />
                <p>Donor</p>
              </a>
            </div>
            <div className="ic">
              <a href="login">
                <FaHandsHelping className="icon" />
                <p>Charity Org.</p>
              </a>
            </div>
          </div>
          <div className="slide">
            <div className="smal">
              <p>Hello Estimeed Donor,</p>
            </div>
            <p>Kindly provide the necessary details to Access your account</p>
            <div className="col-md-4">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your Email"
                onChange={e => this.email = e.target.value}
              />
            </div>
            <div className="col-md-4">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter the password"
                onChange={e => this.password = e.target.value}
              />
            </div>
            <div className="col-md-4">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="col-md-4 d-flex ">
              <button type="submit" className="btn btn-primary">
                FORGOT?
              </button>{" "}
              <br />
              <button type="submit" className="btn btn-primary">
                LOG IN
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="fot">
        <h5>NO ACCOUNT?</h5>
        <button className="sign">SIGN UP</button>
      </div>
      <Outlet />
    </div>
  );
};
export default Login;
