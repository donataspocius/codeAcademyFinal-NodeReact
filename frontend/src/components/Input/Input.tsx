import React, { Fragment, InputHTMLAttributes, useId } from "react";
import styles from "./input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  type?: "text" | "email" | "password" | "search" | "radio";
  name?: string | undefined;
  value?: any;
}

const Input = ({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
}: InputProps) => {
  const uniqueId = useId();
  return (
    <Fragment>
      <label htmlFor={id || uniqueId}>{label}</label>
      <input
        className={styles.input}
        id={id || uniqueId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Fragment>
  );
};

export default Input;
