import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, Routes, Route } from "react-router-dom";
import styles from "./UserContent.module.css";
import { API } from "../../constants";
import { getApiDataWithToken } from "../../utils/functions";
import BeenThere from "./BeenThere/BeenThere";
import WantToGo from "./WantToGo/WantToGo";
import Explore from "./Explore/Explore";
import SearchBar from "../../components/SearchBar/SearchBar";

const UserContent = () => {
  const test = async () => {
    const apiData = await getApiDataWithToken(API.userContent);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className={styles.formContainer}>
      <SearchBar />
      <nav>
        <NavLink
          to="been-there"
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.NavLink
          }
        >
          Been There
        </NavLink>
        <NavLink
          to="want-to-go"
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.NavLink
          }
        >
          Want to Go
        </NavLink>
        <NavLink
          to="explore"
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.NavLink
          }
        >
          Explore
        </NavLink>
      </nav>
      <div className={styles.formOutlet}>
        <Routes>
          <Route path="been-there" element={<BeenThere />} />
          <Route path="want-to-go" element={<WantToGo />} />
          <Route path="explore" element={<Explore />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserContent;
