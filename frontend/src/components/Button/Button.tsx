import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  to?: string | null;
  type?: "button" | "submit" | "reset" | undefined;
  size?: "big" | "small";
}

const Button = ({
  children,
  to,
  type = "button",
  size = "big",
}: ButtonProps) => {
  const Component = to ? Link : "button";
  const buttonType = to ? undefined : type;
  return (
    <Component
      to={to ?? ""}
      type={buttonType}
      className={`${styles.button} ${styles[`button--${size}`]}`}
    >
      {children}
    </Component>
  );
};

export default Button;
