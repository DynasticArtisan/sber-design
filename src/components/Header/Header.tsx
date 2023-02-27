import React, { useEffect, useState } from "react";
import { useMatchTablet } from "../../hooks/useMatchMedia";
import Link from "../../router/Link";
import { useRouter } from "../../router/Router";
import { RoutePath } from "../../router/Routes";
import ArrowSvg from "../../svg/ArrowSvg";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./header.css";
import sberIcon from "./sberIcon.svg"

const Header = () => {
  const isTablet = useMatchTablet()
  const {location} = useRouter()
  const [isScrolled, setScrolled] = useState(false)

  useEffect(()=> {
    const scrollListener = () => {
      if(window.scrollY > 20){
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener )
  })

  
  return <div className="header">
    <div className="header__container">
      <div className={(isTablet && isScrolled) ? "header__card _scrolled" : "header__card"}>
        {
          isTablet && location.path === RoutePath.modules && 
          <Link className="header__back-link" to={{path:RoutePath.home}}>
            <ArrowSvg/>
            <span><b>Курс. Дизайн-стратегия:</b> бизнес-решения на основе дизайна</span>
          </Link>  
        }
        {
          isTablet && location.path === RoutePath.lessons && 
          <Link className="header__back-link" to={{path:RoutePath.modules}}>
            <ArrowSvg/>
            <span><b>Модули курса</b></span>
          </Link>  
        }
        {
          isTablet && location.path === RoutePath.lesson && 
          <Link className="header__back-link" to={{path:RoutePath.lessons}}>
            <ArrowSvg/>
            <span><b>Тема и Уроки</b></span>
          </Link>  
        }       
        <Link to={{path: RoutePath.home}} className="header__home-link">
          <img src={sberIcon} alt="Сберуниверситет" />
        </Link>
      </div>
      {
        isTablet && !isScrolled && location.path !== RoutePath.modules && <Breadcrumbs/>
      }
    </div>
  </div>;
};

export default Header;
