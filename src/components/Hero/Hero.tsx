import React from "react";
import Link from "../../router/Link";
import { RoutePath } from "../../router/Routes";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__course">Курс</div>
      <div className="hero__title">Дизайн-стратегия:</div>
      <div className="hero__description">бизнес-решения на основе дизайна</div>
      <Link to={{ path: RoutePath.modules }} className="hero__btn">
        Начать учиться
      </Link>
    </div>
  );
};

export default Hero;
