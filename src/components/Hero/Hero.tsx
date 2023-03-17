import React from "react";
import { useNavigate } from "react-router-dom";

import "./hero.scss";
import logo from "../../assets/img/logo.png";
import hero from "../../assets/img/hero.png";
import decor from "../../assets/img/hero-decor.png";
import { Button } from "../UI";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero__logo">
        <img src={logo} alt="Сберуниверситет" />
      </div>
      <div className="hero__image" style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero__course">Курс</div>
        <div className="hero__title">Дизайн-стратегия:</div>
        <div className="hero__description">
          бизнес-решения на основе дизайна
        </div>
        <Button className="hero__btn" onClick={() => navigate("/modules")}>
          Начать учиться
        </Button>
      </div>
      <img src={decor} className="hero__decor" />
    </div>
  );
};

export default Hero;
