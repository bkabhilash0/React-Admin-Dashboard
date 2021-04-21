import React from "react";
import "./Navbar.css";
import avatar from "../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" style={{cursor: 'pointer'}}></i>
      </div>
      <div className="navbar__left">
        <a href="#">Subscribers</a>
        <a href="#">Video ManageMent</a>
        <a href="#" className="active_link">
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search"></i>
        </a>
        <a href="#">
          <i className="fa fa-clock"></i>
        </a>
        <a href="#">
          <img src={avatar} alt="avatar" width="30"/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
