import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../imgs/1.svg";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <img className={styles.logo} src={logo} alt="company logo" />
      </Link>
      <Button size={"big"}>SIGN IN</Button>
    </div>
  );
};

export default Header;
