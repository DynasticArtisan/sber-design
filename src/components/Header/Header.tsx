import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import "./header.scss";
import decor from "../../assets/img/header-decor.png";

import { ArrowSvg, SberSvg } from "@components/SVG";
import useMatchMedia from "@hooks/useMatchMedia";
import useBackLink from "@hooks/useBackLink";

const Header: React.FC = () => {
  const isTablet = useMatchMedia("(max-width: 1339px)");
  const [isScrolled, setScrolled] = useState(false);
  const backLink = useBackLink();

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
          className={cn("header__card", { scrolled: isTablet && isScrolled })}
        >
          {isTablet && (
            <Link className="header__back-link" to={backLink.to}>
              <ArrowSvg />
              {backLink.text}
            </Link>
          )}
          <Link to="/" className="header__home-link">
            <SberSvg />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
