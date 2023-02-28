import React, { FC, HTMLProps } from "react";
import "./input.css";

interface Input extends HTMLProps<HTMLInputElement> {}

const Input: FC<Input> = ({ type, className, ...props }) => {
  return <input type="text" className={"input " + className} {...props} />;
};

export default Input;
