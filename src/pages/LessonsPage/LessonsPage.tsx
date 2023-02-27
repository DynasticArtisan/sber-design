import React from "react";
import { Header, Lesson, Lessons } from "../../components";
import { useMatchTablet } from "../../hooks/useMatchMedia";
import Container from "../../layout/Container/Container";
import Layout from "../../layout/Layout/Layout";
import Menu from "../../layout/Menu/Menu";

const LessonsPage = () => {
  const isTablet = useMatchTablet()
  return (
    <Layout>
      <Header />
      {
        !isTablet && <Menu />
      }
      <Container>
        
        {
          isTablet ? <Lessons /> : <Lesson/>
        }
      </Container>
    </Layout>
  );
};

export default LessonsPage;
