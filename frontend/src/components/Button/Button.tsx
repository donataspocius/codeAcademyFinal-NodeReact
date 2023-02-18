import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  to?: string | null;
  type?: "button" | "submit" | "reset" | undefined;
  size?: "big" | "small";
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
}

const Button = ({
  children,
  to,
  type = "button",
  size = "big",
  onClick,
  disabled,
}: ButtonProps) => {
  const Component = to ? Link : "button";
  const buttonType = to ? undefined : type;
  return (
    <Component
      to={to ?? ""}
      type={buttonType}
      className={`${styles.button} ${styles[`button--${size}`]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Component>
  );
};

export default Button;
