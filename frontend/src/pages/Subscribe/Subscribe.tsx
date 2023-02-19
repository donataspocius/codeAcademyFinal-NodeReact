import React, { useState } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getToken } from "../../utils/functions";
import UserExperience from "./UserExperience/UserExperience";
import styles from "./Subscribe.module.css";
import UserInfo from "./UserInfo/UserInfo";
import { API } from "../../constants";
import { updateAuthToken, updateUserId } from "../../redux/auth/authSlice";

interface InputData {
  name: string;
  value: string;
  type: string;
  checked: boolean;
}

const Subscribe = () => {
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked }: InputData =
      e.target as HTMLInputElement;
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const onClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const responseData = await getToken(API.signup, userInfo);

    if (responseData.authToken && responseData.userId) {
      dispatch(updateAuthToken(responseData.authToken));
      dispatch(updateUserId(responseData.userId));
      navigate("/user-content/explore", { replace: true });
    }
  };

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
          to="user-experience"
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.NavLink
          }
        >
          User experience
        </NavLink>
      </nav>
      <div className={styles.formOutlet}>
        <Routes>
          <Route path="user-info" element={<UserInfo onChange={onChange} />} />
          <Route
            path="user-experience"
            element={<UserExperience onChange={onChange} onClick={onClick} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Subscribe;
