import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListIcon from "@mui/icons-material/List";
import Smart from "..//..//assets/images/charity2.jpg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="item">
          <div className="items">
            <LanguageIcon />
            English
          </div>
          <div className="items">
            <DarkModeIcon />
          </div>
          <div className="items">
            <FullscreenExitIcon />
          </div>
          <div className="items">
            <NotificationsNoneIcon />
            <div className="counter">2</div>
          </div>
          <div className="items">
            <ChatBubbleOutlineIcon />
            <div className="counter">3</div>
          </div>
          <div className="items">
            <ListIcon />
          </div>
          <div className="items">
            <img src={Smart} alt="A beautiful girl" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;