import React from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import styles from "../Subscribe.module.css";

interface UserInfo {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInfo = ({ onChange }: UserInfo) => {
  return (
    <form className={styles.inputContainer}>
      <Input label="Username" name="username" onChange={onChange} />
      <Input label="Email" name="email" type="email" onChange={onChange} />
      <Input
        label="Password"
        name="password"
        type="password"
        onChange={onChange}
      />
      <div>
        <Button to={"/signup/user-experience"}>Continue</Button>
      </div>
    </form>
  );
};

export default UserInfo;
