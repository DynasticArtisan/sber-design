import React from "react";

import { Container } from "@components/UI";
import useLesson from "@hooks/useLesson";

const LessonPage: React.FC = () => {
  const Lesson = useLesson();
  return (
    <Container>
      <Lesson />
    </Container>
  );
};

export default LessonPage;
