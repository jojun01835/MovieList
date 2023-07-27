import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink to="">
          <h1 className={styles.logo}>Movie</h1>
        </NavLink>
        <li className="nav-item">
          <NavLink to="">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="Movies">Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="Users">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
