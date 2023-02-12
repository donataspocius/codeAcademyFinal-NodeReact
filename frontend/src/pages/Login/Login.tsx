import React, { useState } from "react";
import styles from "./Login.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { getToken } from "../../utils/functions";
import { API } from "../../constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAuthToken } from "../../redux/auth/authSlice";

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

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const getLoginCredentials = await getToken(API.login, userData);
    const token = getLoginCredentials.accessToken;
    if (token) {
      setInputCorrect(true);
      dispatch(updateAuthToken(token));
      navigate("/user-content");
    }
    setInputCorrect(false);
    // e.target.reset();
  };

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
        {!inputCorrect && <p>Please check the login details.</p>}
      </form>
    </div>
  );
};

export default Login;
