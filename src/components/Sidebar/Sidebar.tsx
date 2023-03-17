import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";
import Themes from "../Themes/Themes";
import { ArrowSvg } from "../SVG";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link className="sidebar__modules-link" to="/modules">
        <ArrowSvg />
        <span>Модули</span>
      </Link>
      <div className="sidebar__themes">
        <Themes />
      </div>
    </div>
  );
};
export default Sidebar;
