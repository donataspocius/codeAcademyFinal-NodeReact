import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../imgs/Go.svg";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <img className={styles.logo} src={logo} alt="company logo" />
      </Link>
      <div>
        <Button to={"/login"} size={"big"}>
          SIGN IN
        </Button>
      </div>
    </div>
  );
};

export default Header;
