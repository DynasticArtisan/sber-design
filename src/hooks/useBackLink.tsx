import React from "react";
import { useMatch, useParams } from "react-router-dom";

const useBackLink = () => {
  const { module } = useParams();
  const isThemesPage = useMatch("/modules/:module");
  const isLessonPage = useMatch("/modules/:module/:theme/:lesson/:page");

  if (isLessonPage) {
    return {
      to: "/modules/" + module,
      text: (
        <span>
          <b>Тема и Уроки</b>
        </span>
      ),
    };
  } else if (isThemesPage) {
    return {
      to: "/modules",
      text: (
        <span>
          <b>Модули курса</b>
        </span>
      ),
    };
  } else {
    return {
      to: "/",
      text: (
        <span>
          <b>Курс. Дизайн-стратегия:</b> бизнес-решения на основе дизайна
        </span>
      ),
    };
  }
};

export default useBackLink;
