import "./sidebar.scss";

import React from "react";
import { Link } from "react-router-dom";

import { Themes } from "@components/index";
import { ArrowSvg } from "@components/SVG";

const Sidebar: React.FC = () => {
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
