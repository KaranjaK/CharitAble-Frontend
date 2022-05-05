import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import charity from "../../assets/images/charity.jpg";
import charity2 from "../../assets/images/charity2.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFirstAid } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaHands } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { BsClockHistory } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";
import { GoOrganization } from "react-icons/go";
import { FaHandsHelping } from "react-icons/fa";
import "./Home.css"
import { BiDonateHeart } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { MdStarRate } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
const Home = ()=>{
  return(
<>
<div className="main">
<nav>
        <div className="enclose">
        <div className="brand">  
        <img className="imag4" src={logo} alt='charity'/> 

          {/* <h3>  <FaHandshake  className="con"/> CHARITABLE</h3> */}
          </div>
        <div>
      
        <ul className="Navbar" >
    
            <li>
            <Link style={{paddingRight:42,textDecoration:"none",color:"#3D5476" }} to="">Home</Link>
          </li>
          <li>
            <Link style={{paddingRight:42,textDecoration:"none",color:"#3D5476" }} to="/about">About</Link>
          </li>
          <li>
            <Link style={{paddingRight:42,textDecoration:"none",color:"#3D5476" }} to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link style={{paddingRight:42,textDecoration:"none",color:"#3D5476" }} to="donations">Donations</Link>
          </li>
          <li>
            <Link style={{paddingRight:42,textDecoration:"none",color:"#3D5476" }} to="contacts">Contacts</Link>
          </li>
          <li>
            <Link style={{paddingRight:42}}  to="login"><button className="one">LOGIN</button></Link>
          </li>
          <li>
            <Link  style={{paddingRight:42}}to="signup"><button className="three">SIGNUP</button></Link>
          </li>
        </ul>
        </div>
        </div>
        
      </nav>
<section >
    <div className="overl" >
        <h2 >
           Charity Begins At Home <br />But Should Not End There <br /> <br />
        </h2>
        <div className="par">
          <div className="p1">
          <p>
            Touch a life today, miles away from home by donating. <br />
            Lives worth changing, by your donations. <br /> 

        </p>
          </div>
          <div className="p2">
          <img className="imag5" src={charity} alt='charity'/> 

          </div>
        </div>
        
        <div className="btns">
        <button className="four" >Donate Now</button> 
        <button className="two">Contact Us</button> <br /> <br />
        </div>
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
          <div className="lines">
          <h2 className="first">Spread the Love</h2>
        <h3>Spread the Love with various Donations <br /> <br /></h3>
        <p>Make donations to various sectors</p>
          </div>
        <div className="all">
          <div className="set">
        <h4>
          <FaFirstAid className="icon" /> <br />
        Emergency Aid
        </h4>
        <h4>
          <FaHands className="icon" /> <br />
          Eliminate Poverty
        </h4>
        <h4>
          <FaBook className="icon" /> <br />
          Top Notch Education
        </h4>
        <h4>
          <GiHotMeal className="icon" /> <br />
          Food Relief
        </h4>
        </div>
        <div className="sets">
        <h4>
          <FaHeartbeat className="icon"/> <br />
          Medical Support
        </h4>
        <h4>
          <GoOrganization className="icon"/> <br />
          Supports Orphans
        </h4>
        <h4>
          <BiCoinStack className="icon" /> <br />
          Financial Aid
        </h4>
        <h4>
          <BsClockHistory className="icon" /> <br />
          Among Many More
        </h4>
        </div>
        </div>
        </div>
        <div className="hands" >
            <div className="enc">
            <div className="beer">
             <BiDonateHeart className="icon" />
              <h3>

                Be a Donar
              </h3>
              <button className="but">
                Donate Now
              </button>
            </div>
            <div className="beer">
            <FaHandsHelping className="icon" />

            <h3>
              Be an NGO or Charity Org <br />
            </h3>
            <button className="but">
              Join Now
            </button>
            </div>
            </div>
            <div className="sep">
            <p>Having any challenges?</p>
            <h3>
              Reach out to us for help via
            </h3>
            <FiPhoneCall className="icon"/>

            <h3>
              +254591877324
            </h3>
            </div>
        </div>
        <div className="review">

          <h2 className="han">Reviews</h2>
          <h3 className="han">What our Donors Partners say</h3>
        

          <div className="rev">
            <AiOutlineArrowLeft className="iconi" />
            <div className="blue">
            <MdStarRate className="star"/>
          <MdStarRate className="star"/>
          <MdStarRate className="star"/>
          <MdStarRate className="star"/>
          <MdStarRate className="star"/>
              <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Repellat <br />
               rerum praesentium deserunt, neque <br /> deleniti quos maxime. Veniam nesciunt <br /> maiores recusandae at? Rem quod non, nesciunt <br /> voluptates distinctio consequatur! Rem, ex.</p>
            </div>
            <div className="blue">
            <MdStarRate className="star"/>
          <MdStarRate className="star"/>
          <MdStarRate className="star"/>
          <MdStarRate className="star"/>
          <MdStarRate className="star"/>
            <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Repellat <br />
               rerum praesentium deserunt, neque <br /> deleniti quos maxime. Veniam nesciunt <br /> maiores recusandae at? Rem quod non, nesciunt <br /> voluptates distinctio consequatur! Rem, ex.</p>
            </div>
            <div className="blue">
            <MdStarRate className="star"/>
          <MdStarRate className="star"/>
          <MdStarRate className="star"/>
          <MdStarRate className="star"/>
          <MdStarRate className="star"/>
            <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Repellat <br />
               rerum praesentium deserunt, neque <br /> deleniti quos maxime. Veniam nesciunt <br /> maiores recusandae at? Rem quod non, nesciunt <br /> voluptates distinctio consequatur! Rem, ex.</p>
            </div>
            <AiOutlineArrowRight  className="iconi"/>
          </div>
        </div>
        <div className="foot">
          <div className="char">
         
            <h2>  <FaHandsHelping  className="iconif"/>Charitable</h2>
            <p>
            Change begins with you and I. <br />
      We are all super heroes. One  <br />
      does not have to do extraordinary <br />
      things to be a super hero. It is in the <br />
      ordinary things that are done in <br />
      an extraordinary manner that make <br />
      use heroes. Charity is that  <br />
      extraordinary thing <br />
            </p>
          </div>
          <div className="char">
            <h4>Our Pages</h4>
            <p> Home <br /> About <br /> Gallery <br /> Donations <br /> Contact Us </p>
          </div>
          <div className="char"> 
          <h4>Connect with us</h4>
          <BsInstagram  className="ico"/>
          <BsFacebook className="ico"/>
          <AiFillTwitterSquare className="ico"/>
          </div>

        </div>
    </div>


      <Outlet />
</>
)}

export default Home;