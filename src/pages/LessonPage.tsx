import React from "react";
import { Link, useParams } from "react-router-dom";
import { useMatchTablet } from "../hooks/useMatchMedia";
import Menu from "../layout/Sidebar/Menu";
import Container from "../UI/Container/Container";
import { modules } from "../content";

const LessonPage = () => {
  const { module, theme, lesson, page } = useParams();
  const curModule = modules[Number(module)];
  const curTheme = curModule.themes[Number(theme)];
  const curLesson = curTheme.lessons[Number(lesson)];
  const Page = curLesson.pages[Number(page)];

  const isTablet = useMatchTablet();
  return (
    <>
      {!isTablet && <Menu />}

      <Container>
        <Page />
      </Container>
    </>
  );
};

export default LessonPage;
