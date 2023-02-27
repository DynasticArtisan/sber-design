import React from "react";
import Link from "../../router/Link";
import { useRouter } from "../../router/Router";
import { RoutePath } from "../../router/Routes";
import Button from "../Button/Button";
import "./hero.css";
import image from "./hero.png";

const Hero = () => {
  const { navigate } = useRouter();
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero__course">Курс</div>
      <div className="hero__title">Дизайн-стратегия:</div>
      <div className="hero__description">бизнес-решения на основе дизайна</div>
      <Button
        className="hero__btn"
        onClick={() => navigate({ path: RoutePath.modules })}
      >
        Начать учиться
      </Button>
    </div>
  );
};

export default Hero;
