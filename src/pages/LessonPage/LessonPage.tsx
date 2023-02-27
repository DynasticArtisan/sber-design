import React from "react";
import { Header, Lesson } from "../../components";
import Button from "../../components/Button/Button";
import { useMatchTablet } from "../../hooks/useMatchMedia";
import Container from "../../layout/Container/Container";
import Layout from "../../layout/Layout/Layout";
import Menu from "../../layout/Menu/Menu";

const LessonPage = () => {
  const isTablet = useMatchTablet();

  return (
    <Layout>
      <Header />
      {!isTablet && <Menu />}
      <Container>
        <Lesson />
      </Container>
    </Layout>
  );
};

export default LessonPage;
