import React from "react";
import { Link } from "react-router-dom";

import CornerSvg from "../SVG/CornerSvg";
import "./breadcrumbs.scss";

const Breadcrumbs: React.FC = () => {
  return (
    <div className="breadcrumbs">
      <Link to={"/modules"} className="breadcrumbs__link">
        Модули
      </Link>
      <CornerSvg />
      <Link
        to={"/modules"}
        className={
          location.pathname === "/"
            ? "breadcrumbs__link _current"
            : "breadcrumbs__link"
        }
      >
        Тема и Уроки
      </Link>
      {location.pathname !== "/" && (
        <>
          <CornerSvg />
          <Link to="/modules" className="breadcrumbs__link _current">
            Урок 2
          </Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
