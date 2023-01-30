import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../imgs/logo.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to={"/"}>
        <img className={styles.logo} src={logo} alt="company logo" />
      </NavLink>
    </div>
  );
};

export default Header;
