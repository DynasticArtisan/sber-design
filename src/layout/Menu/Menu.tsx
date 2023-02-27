import React from "react";
import { Lessons } from "../../components";
import Link from "../../router/Link";
import { RoutePath } from "../../router/Routes";
import ArrowSvg from "../../svg/ArrowSvg";
import "./menu.css";
const Menu = () => {
  return <div className="menu">
    <Link className="menu__modules-link" to={{path: RoutePath.modules}}>
      <ArrowSvg/>
      <span>Модули</span>
    </Link>
    <div className="menu__themes">
      <Lessons/>

    </div>
  </div>;
};

export default Menu;
