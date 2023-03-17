import React from "react";
import { useParams } from "react-router-dom";

import "./lesson.scss";
import { modules } from "../../course";

const Lesson = () => {
  const { module, theme, lesson, page } = useParams();
  const curModule = modules[Number(module)];
  const curTheme = curModule.themes[Number(theme)];
  const curLesson = curTheme.lessons[Number(lesson)];
  const Lesson = curLesson.pages[Number(page)];
  return <Lesson />;
};

export default Lesson;
