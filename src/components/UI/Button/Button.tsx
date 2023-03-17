import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import "./button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={"button " + className} {...props}>
      {children}
    </button>
  );
};

export default Button;
