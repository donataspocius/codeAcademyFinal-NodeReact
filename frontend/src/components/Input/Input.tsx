import React, { Fragment, InputHTMLAttributes, useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label: string;
  type: "text" | "email" | "password" | "search";
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
