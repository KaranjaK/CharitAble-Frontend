import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import background from "../images/background.jpg";


// import '//Login.css'
const Login = ()=>{return(
  <>
<div className="overlay" style={{ backgroundImage: `url(${background})` }}>
    <form>
        <h3>Sign In</h3>
        <div className="col-md-4">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
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
        <div className="col-md-4 d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>  
           
      </form>

</div>
<style>{"\
        .overlay{\
          color:white;\
        padding-left:500px;\
        padding-top:50px;\
        background: rgba(0, 0, 0, .7);\
        height:80vh;\
        }\
      "}</style>
      <Outlet />
</>
)}
export default Login;