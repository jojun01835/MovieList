import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="nav-item">
          <NavLink to="">
            <h1>
              <img src={require("../img/logo1.png")} style={{ width: "200px", height: "200px" }} alt="이미지1" />
            </h1>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="UserView">Views</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
