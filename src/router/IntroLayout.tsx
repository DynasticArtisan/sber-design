import React from "react";

import { Container } from "@components/UI";
import useIntro from "@hooks/useIntro";

const IntroLayout: React.FC = () => {
  const Intro = useIntro();
  return (
    <Container>
      <Intro />
    </Container>
  );
};

export default IntroLayout;
