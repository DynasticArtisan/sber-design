import React from "react";
import Link from "../../router/Link";
import { RoutePath } from "../../router/Routes";
import Button from "../Button/Button";
import "./hero.css";
import image from "./hero.png"

const Hero = () => {
  return (
    <div className="hero" style={{backgroundImage: `url(${image})`}}>
      <div className="hero__course">Курс</div>
      <div className="hero__title">Дизайн-стратегия:</div>
      <div className="hero__description">бизнес-решения на основе дизайна</div>
      <Link to={{ path: RoutePath.modules }} className="hero__btn">
        <Button>Начать учиться</Button>
      </Link>
    </div>
  );
};

export default Hero;
