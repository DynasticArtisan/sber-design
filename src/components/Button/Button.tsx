import { FC, HTMLProps, ReactNode } from "react";
import "./button.css"

interface Button extends HTMLProps<HTMLButtonElement>  {

}

const Button: FC<Button> = ({ children, className }) => {
    return (
        <button className={"button "+ className}>{ children }</button>
    )
}

export default Button