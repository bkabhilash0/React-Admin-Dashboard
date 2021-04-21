import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { links } from "../../data/navData";
import Links from "../BarLinks/Links";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div id="sidebar" className={sidebarOpen ? "sidebar-responsive" : ""}>
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>BKoders</h1>
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
      <div className="sidebar__menu">
        {links.map((link, index) => (
          <Links {...link} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
