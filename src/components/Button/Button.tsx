import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import "./button.css";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<Button> = ({ children, className, ...props }) => {
  return (
    <button className={"button " + className} {...props}>
      {children}
    </button>
  );
};

export default Button;
