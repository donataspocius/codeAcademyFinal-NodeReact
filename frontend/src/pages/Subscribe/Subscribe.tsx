import React, { Fragment } from "react";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import Plan from "./Plan/Plan";
import styles from "./Subscribe.module.css";
import UserInfo from "./UserInfo/UserInfo";

const Subscribe = () => {
  return (
    <div className={styles.formContainer}>
      <nav>
        <NavLink
          to="user-info"
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.NavLink
          }
        >
          User info
        </NavLink>
        <NavLink
          to="plan"
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.NavLink
          }
        >
          Pick a plan
        </NavLink>
      </nav>
      <div className={styles.formOutlet}>
        <Routes>
          <Route path="user-info" element={<UserInfo />} />
          <Route path="plan" element={<Plan />} />
        </Routes>
      </div>
    </div>
  );
};

export default Subscribe;
