import React from "react";
import { Lessons } from "../../components";
import ArrowSvg from "../../UI/SVG/ArrowSvg";
import "./menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <Link className="menu__modules-link" to="/modules">
        <ArrowSvg />
        <span>Модули</span>
      </Link>
      <div className="menu__themes">
        <Lessons />
      </div>
    </div>
  );
};

export default Menu;
