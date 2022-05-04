import React from "react";
import { Outlet, Link } from "react-router-dom";
import background from "../images/background.jpg";
import charity2 from "../images/charity2.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ()=>{return(
<>
<div className="main">
<nav>
        <div className="enclose">
        <div> <h1>CHARITABLE</h1></div>
        <div>

        <ul className="list" style={{display:"flex",justifyccontent:"space-evenly"}}>
       
            <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="donations">Donations</Link>
          </li>
          <li>
            <Link to="contacts">Contacts</Link>
          </li>
          <li>
            <Link to="login"><button className="one">LOGIN</button></Link>
          </li>
          <li>
            <Link to="signup"><button className="three">SIGNUP</button></Link>
          </li>
        </ul>
        </div>
        </div>
        
      </nav>
<section >
    <div className="overlay" style={{ backgroundImage: `url(${background})`, width:"1500px",backgroundPosition:"center",backgroundSize:"cover"  }} >
        <h2>
           Charity Begins At Home <br />But Should Not End There <br /> <br />
        </h2>
        <p>
            Touch a life today, miles away from home by donating. <br />
            Lives worth changing, by your donations. <br />
        </p>
        <button className="one" >Donate Now</button> 
        <button className="two">Contact Us</button> <br /> <br />
        </div>
        
    <div className="define">
      <div className="imag">
     <img className="imag2" src={charity2} alt='charity'/> 
      </div>
      <div className="parag">
    <h2>What Defines us?</h2>
        <h3>
            We find ourselves in this life, <br /> by loosing ousrselves in charity
        </h3> 
        <p>It is in giving that we recieve. We believe <br /> that charity benefits more than the receiver. <br /> It 
        is in charity that our wealth increases. <br /></p>
    </div>
    </div>
    </section>
        <div className="whole">
        <h2>Spread the Love</h2>
        <h3>Spread the Love with various Donations <br /> <br /></h3>
        <p>Make donations to various sectors</p>
        <h4>
        Emergency Aid
        </h4>
        <h4>
          Eliminate Poverty
        </h4>
        <h4>
          Top Notch Education
        </h4>
        <h4>
          Food Relief
        </h4>
        <h4>
          Medical Support
        </h4>
        <h4>
          Supports Orphans
        </h4>
        <h4>
          Financial Aid
        </h4>
        <h4>
          Among Many More
        </h4>
        </div>
    </div>

<style>{"\
        .enclose{\
        margin-top:30px;\
        display:flex;\
        justify-content:space-evenly;\
        }\
        .list{\
          display:flex;\
          justify-content:space-evenly;\
        }\
        .list li{\
        list-style:none;\
        color: #3D5476;\
        }\
        .list ul Link {\
         text-decoration:none;\
         color: #3D5476;\
        }\
        .list ul li{\
          color: #3D5476;\
        }\
        .overlay{\
        margin-top:50px;\
        padding-top:120px;\
        padding-left:90px;\
        background: rgba(0, 0, 0, .7);\
        height:79vh;\
        width:250vh;\
        color:white;\
        }\
        .one{\
          background-color:#F15132;\
          border:none;\
          margin-right:15px;\
        }\
        .two{\
          color:orange;\
          border:none;\
        }\
        .define{\
          color:black;\
        }\
        "}</style>
<style>{"\
        .parag h2{\
        color:orange;\
        }\
        .define{\
        display:flex;\
        }\
        .three{\
          background-color:#3D5476;\
        }\
        .imag2{\
          height:250px;\
        }\
        "}</style>
       
      <Outlet />
</>
)}

export default Home;