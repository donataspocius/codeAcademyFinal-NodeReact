import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { getToken, getUserLists } from "../../utils/functions";
import { API } from "../../constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAuthToken, updateUserId } from "../../redux/auth/authSlice";
import { initializeContentState } from "../../redux/content/contentSlice";

const Login = () => {
  const [userData, setUserData] = useState({});
  const [inputCorrect, setInputCorrect] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCorrect(true);
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [e.target.name]: e.target.value,
      };
    });
  };

  let userId: string;

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // function to get user data from database
    const getLists = async () => {
      const lists = async () => await getUserLists(API.updateUser(userId));
      const userLists = await lists();
      dispatch(initializeContentState(userLists));
    };

    const getLoginCredentials = await getToken(API.login, userData);
    const token = getLoginCredentials.accessToken;
    userId = getLoginCredentials.userId;

    if (token && userId) {
      setInputCorrect(true);
      dispatch(updateAuthToken(token));
      dispatch(updateUserId(userId));
      getLists();
      navigate("/user-content/explore", { replace: true });
    }

    setInputCorrect(false);

    // e.target.reset();
  };

  // getting users data from database

  return (
    <div className={styles.loginMain}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <Input label="Email " type="email" name="email" onChange={onChange} />
        <Input
          label="Password "
          type="password"
          name="password"
          onChange={onChange}
        />
        <Button type="submit">Sign In</Button>
        {!inputCorrect && <p>Please check login details.</p>}
      </form>
    </div>
  );
};

export default Login;
