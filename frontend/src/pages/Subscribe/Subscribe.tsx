import React, { useState } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getToken } from "../../utils/functions";
import UserExperience from "./UserExperience/UserExperience";
import styles from "./Subscribe.module.css";
import UserInfo from "./UserInfo/UserInfo";
import { API } from "../../constants";
import { updateAuthToken } from "../../redux/auth/authSlice";

interface State {
  authToken: string;
}
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
  const authToken = useSelector((state: State) => state.authToken);

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

  // const onClick = async (e: React.MouseEvent) => {
  const onClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const responseData = await getToken(API.signup, userInfo);
    if (responseData.authToken) {
      //dispatch action to set token
      dispatch(updateAuthToken(responseData.authToken));
      navigate("/user-content", { replace: true });
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
        <div>auth token here: {authToken}</div>
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
