import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import "./Login.css";
import { BiDonateHeart } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";

const Login = ()=>{return(
  <>
  <div className="head">
    <h3>
      Welcome Back
    </h3>
    <p>
      Choose Account Type
    </p>
  </div>
<div className="over" >
    <form>
      <div className="icos">
        <div className="ic1">
        <BiDonateHeart className="icon" />

        </div>
        <div className="ic2">
        <FaHandsHelping className="icon" />

        </div>
      </div>
<div className="slide">


       
         <div className="smal">
         <p>
         Hello Estimeed Donor,
         </p>
         </div>
         <p>
          Kindly provide the necessary details to Access your account
       </p>
        <div className="col-md-4">
          <label>Username/Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter username/email"
          />
        </div>
        <div className="col-md-4">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
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
          </button> <br />
          <button type="submit" className="btn btn-primary">
            LOG IN
          </button>
        </div>  
           </div>
      </form>

</div>
<div className="fot">
  <h5>
    NO ACCOUNT?
  </h5>
  <button className="sign">
    SIGN UP
  </button>
</div>
      <Outlet />
</>
)}
export default Login;