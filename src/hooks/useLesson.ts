import React from "react";
import { useParams } from "react-router-dom";
import modules from "../course/modules";

const useLesson = () => {
  const { module, theme, lesson, page } = useParams();
  const curModule = modules[Number(module)];
  const curTheme = curModule.themes[Number(theme)];
  const curLesson = curTheme.lessons[Number(lesson)];
  return curLesson.pages[Number(page)];
};

export default useLesson;
