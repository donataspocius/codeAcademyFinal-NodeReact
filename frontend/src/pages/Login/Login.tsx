import React from "react";
import styles from "./Login.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Login = () => {
  const submitHandler = () => {
    console.log("form submited");
  };

  const clickHandler = () => {};
  return (
    <div className={styles.loginMain}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <Input label="Email " type="email" name="email" />
        <Input label="Password " type="password" name="password" />
        <Button onClick={clickHandler}>Sign In</Button>
      </form>
    </div>
  );
};

export default Login;
