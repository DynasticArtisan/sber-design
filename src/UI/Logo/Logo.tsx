import React from "react";
import logoImg from "./logo.png"
import "./logo.css";

const Logo = () => {
  return <div className="logo">
    <img src={logoImg} alt="Сберуниверситет" />
  </div>;
};

export default Logo;
