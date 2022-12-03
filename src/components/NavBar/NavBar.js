import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import searchIcon from "../Images/search.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";
import Profileimage from "../Images/Profile.png";

const NavBar = () => {
  return (
    <div className="mainNavbar">
      <div className="LogoContainer">
        <p>Social</p>
      </div>
      <div>
        <div className="searchInputContainer">
          <img src={`${searchIcon}`} className="searchIcon" alt="" />
          <input
            type="text"
            className="searchInput"
            placeholder="search your friends"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="IconsContainer">
        <img src={`${Notifications}`} className="Icons" alt="" />
        <img src={`${Message}`} className="Icons" alt="" />
        <Link to={""}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${Profileimage}`} className="ProfileImage" alt="" />
            <p style={{ marginLeft: "5px" }}></p>
          </div>
        </Link>
        <div
          style={{ marginRight: "30px", marginLeft: "20px", cursor: "pointer" }}
        >
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
