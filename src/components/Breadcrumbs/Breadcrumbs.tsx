import React, { useEffect, useState } from "react";
import { Link, useMatch, useParams } from "react-router-dom";
import cn from "classnames";

import { CornerSvg } from "@components/SVG";
import "./breadcrumbs.scss";

const Breadcrumbs: React.FC = () => {
  const params = useParams();
  const isThemesPage = useMatch("/modules/:module");
  const isLessonPage = useMatch("/modules/:module/:theme/:lesson/:page");
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <div className={cn("breadcrumbs", { scrolled: isScrolled })}>
      <div className="breadcrumbs__container">
        <Link to={"/modules"} className="breadcrumbs__link">
          Модули
        </Link>
        <CornerSvg />
        <Link
          to={"/modules/" + params.module}
          className={cn("breadcrumbs__link", { current: isThemesPage })}
        >
          Тема и Уроки
        </Link>
        {isLessonPage && (
          <>
            <CornerSvg />
            <span className="breadcrumbs__link current">Урок 2</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Breadcrumbs;
