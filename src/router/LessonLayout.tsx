import React from "react";

import { useMatchTablet } from "../hooks/useMatchMedia";
import { Lesson, Sidebar } from "../components";
import { Container } from "../components/UI";

const LessonPage: React.FC = () => {
  const isTablet = useMatchTablet();
  return (
    <>
      {!isTablet && <Sidebar />}
      <Container>
        <Lesson />
      </Container>
    </>
  );
};

export default LessonPage;
