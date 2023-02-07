import React from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import styles from "./UserInfo.module.css";

const UserInfo = () => {
  return (
    <form className={styles.formContainer}>
      <Input label="Username" name="username" />
      <Input label="Email" name="email" type="email" />
      <Input label="Password" name="password" type="password" />
      <div>
        <Button to={"/signup/plan"}>Continue</Button>
      </div>
    </form>
  );
};

export default UserInfo;
