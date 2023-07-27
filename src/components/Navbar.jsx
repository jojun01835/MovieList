import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="nav-item">
          <NavLink to="">
            <h1>Movie</h1>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="Movies">Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="Users">Users</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="UserView">Views</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
