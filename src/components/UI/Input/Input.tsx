import React, { FC, HTMLProps } from "react";
import "./input.scss";

interface InputProps extends HTMLProps<HTMLInputElement> {}

const Input: FC<InputProps> = ({ type, className, ...props }) => {
  return <input type="text" className={"input " + className} {...props} />;
};

export default Input;
