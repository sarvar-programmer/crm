import React from "react";
import "./Sidebar.css";
import sidebarLogo from "../../../assets/svg/logo.svg";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import icon1 from "../../../assets/svg/icons1.svg";
import icon2 from "../../../assets/svg/icons2.svg";
import icon3 from "../../../assets/svg/icons3.svg";
import icon4 from "../../../assets/svg/icons4.svg";
import icon5 from "../../../assets/svg/icons5.svg";
import icon6 from "../../../assets/svg/icons6.svg";
import logout from "../../../assets/svg/logout.svg";
import supportImage from "../../../assets/images/image.png";
import supportIcon from "../../../assets/svg/sms.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_wrapper">
        <div className="sidebar_blog">
          <img className="sidebar_logo" src={sidebarLogo} alt="" />
        </div>

        <ul className="sidebar_list">
          <li className="sidebar_item">
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <RxDashboard />
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li className="sidebar_item">
            <NavLink
              to={"/projects"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <img src={icon1} alt="" />
              <p>Projects</p>
            </NavLink>
          </li>
          <li className="sidebar_item">
            <NavLink
              to={"/calendar"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <img src={icon2} alt="" />
              <p>Calendar</p>
            </NavLink>
          </li>
          <li className="sidebar_item">
            <NavLink
              to={"/vacations"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <img src={icon3} alt="" />
              <p>Vacations</p>
            </NavLink>
          </li>
          <li className="sidebar_item">
            <NavLink
              to={"/employees"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <img src={icon4} alt="" />
              <p>Employees</p>
            </NavLink>
          </li>
          <li className="sidebar_item">
            <NavLink
              to={"/messenger"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <img src={icon5} alt="" />
              <p>Messenger</p>
            </NavLink>
          </li>
          <li className="sidebar_item">
            <NavLink
              to={"/info"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <img src={icon6} alt="" />
              <p>Info Portal</p>
            </NavLink>
          </li>
        </ul>
      </div>
      
      <div className="sidebar_bottom">
        <div className="sidebar_support">
          <img className="sidebar_support_img" src={supportImage} alt="" />
          <button className="sidebar_support_button">
            <img src={supportIcon} alt="" />
            Support
          </button>
        </div>
        <div className="logout">
          <img src={logout} alt="" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
