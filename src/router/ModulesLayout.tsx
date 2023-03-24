import React from "react";

import { Modules } from "@components/index";
import { Container, Title } from "@components/UI";

const ModulesPage: React.FC = () => {
  return (
    <Container>
      <Title>Модули</Title>
      <Modules />
    </Container>
  );
};

export default ModulesPage;
