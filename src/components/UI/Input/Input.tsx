import "./input.scss";

import React, { HTMLProps } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ type, className, ...props }) => {
  return <input type="text" className={"input " + className} {...props} />;
};

export default Input;
