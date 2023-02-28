import React from "react";
import Button from "../Button/Button";
import "./hero.css";
import image from "./hero.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero__course">Курс</div>
      <div className="hero__title">Дизайн-стратегия:</div>
      <div className="hero__description">бизнес-решения на основе дизайна</div>
      <Button className="hero__btn" onClick={() => navigate("/modules")}>
        Начать учиться
      </Button>
    </div>
  );
};

export default Hero;
