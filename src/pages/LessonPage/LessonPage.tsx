import React from "react";
import { Header, Lesson } from "../../components";
import Container from "../../layout/Container/Container";
import Menu from "../../layout/Menu/Menu";

const LessonPage = () => {
  return (
    <>
      <Header />
      <Menu />
      <Container>
        <Lesson />
      </Container>
    </>
  );
};

export default LessonPage;
