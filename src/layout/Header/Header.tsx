import React, { useEffect, useState } from "react";
import { useMatchTablet } from "../../hooks/useMatchMedia";
import ArrowSvg from "../../UI/SVG/ArrowSvg";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./header.css";
import sberIcon from "./sberIcon.svg";
import decor from "../../assets/img/header-decor.png";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const isTablet = useMatchTablet();
  const location = useLocation();
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
    <div className="header">
      <div className="header__container">
        <img className="header__decor" src={decor} />
        <div
          className={
            isTablet && isScrolled ? "header__card _scrolled" : "header__card"
          }
        >
          {isTablet && location.pathname === "/modules" && (
            <Link className="header__back-link" to="/">
              <ArrowSvg />
              <span>
                <b>Курс. Дизайн-стратегия:</b> бизнес-решения на основе дизайна
              </span>
            </Link>
          )}
          {/* {isTablet && location.pathname === RoutePath.lessons && (
            <Link
              className="header__back-link"
              to={{ path: RoutePath.modules }}
            >
              <ArrowSvg />
              <span>
                <b>Модули курса</b>
              </span>
            </Link>
          )}
          {isTablet && location.path === RoutePath.lesson && (
            <Link
              className="header__back-link"
              to={{ path: RoutePath.lessons }}
            >
              <ArrowSvg />
              <span>
                <b>Тема и Уроки</b>
              </span>
            </Link>
          )} */}
          <Link to="/" className="header__home-link">
            <img src={sberIcon} alt="Сберуниверситет" />
          </Link>
        </div>
        {/* {isTablet && !isScrolled && location.path !== RoutePath.modules && (
          <Breadcrumbs />
        )} */}
      </div>
    </div>
  );
};

export default Header;
