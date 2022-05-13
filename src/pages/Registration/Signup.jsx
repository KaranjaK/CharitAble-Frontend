import React from "react";
import Navbarmain from "../../components/navbarmain/Navbarmain";
import "./signup.css";
import charity from "../../assets/images/charity.jpg";

const Signup = () => {
  return (
    <div className="signup">
      <Navbarmain />
      <div className="signbody">
        <div className="signleft">
          <div className="st2">
            <img className="imag6" src={charity} alt="charity" />
          </div>
          <div className="st1">
            <h3>
              Keep that smile <br />
              Bright in Challenging
              <br />
              times through <br />
              Charity.
            </h3>
          </div>
        </div>
        <div className="signright">
          <h1 className="title">Charity Organization Registration</h1>
          <form className="reg">
              <div className="col-md-6">
                <label>Organization Name </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="col-md-6">
                <label>Registration Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Reg. No."
                />
              </div>
              <div className="col-md-6">
                <label>Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Where are you located"
                />
              </div>
              <div className="col-md-6">
                <label>TelePhone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Contact Number"
                />
              </div>
              <div className="col-md-6">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email address"
                />
              </div>
              <div className="col-md-6">
                <label>Website</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Website link"
                />
              </div>
              <div className="col-md-6">
                <label>Field of Support</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Who do you support?"
                />
              </div>
              <br />
                <button type="submit" className="btn btn-primary" formAction="/login">
                  SIGN UP
                </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
