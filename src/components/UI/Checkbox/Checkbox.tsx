import "./checkbox.scss";

import React, { FC } from "react";
import { CheckSvg, CrossSvg } from "@components/SVG";

interface CheckboxProps {
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  valid?: boolean;
  onChange?: () => void;
}

const Checkbox: FC<CheckboxProps> = ({
  className,
  checked,
  disabled,
  valid,
  onChange,
}) => {
  const classNames = [
    "checkbox",
    valid !== undefined ? (valid ? "_right" : "_wrong") : "",
    checked ? "_checked" : "",
    className,
  ];

  return (
    <label className={classNames.join(" ")}>
      <input
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        hidden={true}
      />
      {valid === false && <CrossSvg />}
      {(valid === true || (valid === undefined && checked)) && <CheckSvg />}
    </label>
  );
};

export default Checkbox;
