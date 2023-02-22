import React from "react";
import { Header, Lessons } from "../../components";
import Container from "../../layout/Container/Container";
import Menu from "../../layout/Menu/Menu";

const LessonsPage = () => {
  return (
    <>
      <Header />
      <Menu />
      <Container>
        <Lessons />
      </Container>
    </>
  );
};

export default LessonsPage;
