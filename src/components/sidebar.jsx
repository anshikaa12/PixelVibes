import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="vid-sidebar">
      <ul className="sidebar-list flex-col-center">
        <li className="sidebar-item">
          <Link to="/">
            <i className="fas fa-home"></i>
            <p className="foot-p">Home</p>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/">
            <i className="far fa-compass"></i>
            <p className="foot-p">Explore</p>
          </Link>
        </li>
        <Link to="/">
          <li className="sidebar-item">
            <i class="fas fa-user-friends"></i>
            <p className="foot-p">People</p>
          </li>
        </Link>
        <Link to="/">
          <li className="sidebar-item">
            <i class="fas fa-user-alt"></i>
            <p className="foot-p">Profile</p>
          </li>
        </Link>
        <Link to="/">
          <li className="sidebar-item">
            <i class="fas fa-sign-out-alt"></i>
            <p className="foot-p">Log Out</p>
          </li>
        </Link>
       
      </ul>
    </div>
  );
}

export default Sidebar;
