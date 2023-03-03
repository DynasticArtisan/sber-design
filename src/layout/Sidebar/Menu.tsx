import React from "react";
import { Themes } from "../../components";
import ArrowSvg from "../../UI/SVG/ArrowSvg";
import "./menu.css";
import { Link, useParams } from "react-router-dom";

const Menu = () => {
  const { module, theme, lesson } = useParams();
  const moduleIdx = Number(module) || 0;
  const curTheme = Number(theme);
  const curLesson = Number(lesson);
  return (
    <div className="menu">
      <Link className="menu__modules-link" to="/modules">
        <ArrowSvg />
        <span>Модули</span>
      </Link>
      <div className="menu__themes">
        <Themes module={moduleIdx} curTheme={curTheme} curLesson={curLesson} />
      </div>
    </div>
  );
};

export default Menu;
