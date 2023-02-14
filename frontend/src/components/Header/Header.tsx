import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../imgs/Go.svg";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { AuthState } from "../../redux/interfaces";
import { updateAuthToken } from "../../redux/auth/authSlice";
import { selectAuthToken } from "../../redux/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  // const authToken = useSelector((state: AuthState) => state.auth.authToken);
  const authToken = useSelector(selectAuthToken);

  const handleLogout = () => {
    dispatch(updateAuthToken(""));
  };

  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <img className={styles.logo} src={logo} alt="company logo" />
      </Link>
      <Link
        className={styles.myPlaces}
        to={authToken ? "/user-content/explore" : "/login"}
      >
        My Places
      </Link>
      <div>
        <Button
          to={authToken ? "/" : "/login"}
          size={"big"}
          onClick={authToken ? handleLogout : undefined}
        >
          {authToken ? "Logout" : "Sign in"}
        </Button>
      </div>
    </div>
  );
};

export default Header;
