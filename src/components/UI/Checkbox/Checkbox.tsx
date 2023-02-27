import React, { FC } from "react";
import "./checkbox.css";

interface Checkbox {
  className?: string;
  checked?: boolean;
}

const Checkbox: FC<Checkbox> = ({ className, checked }) => {
  return (
    <label className={"checkbox " + className}>
      <input type="checkbox" className="checkbox__input" checked={checked} />
    </label>
  );
};

export default Checkbox;
