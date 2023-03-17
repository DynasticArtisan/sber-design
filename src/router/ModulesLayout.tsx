import React from "react";

import { Modules } from "../components";
import { Container } from "../components/UI";

const ModulesPage: React.FC = () => {
  return (
    <Container>
      <div className="page">
        <div className="page__title">Модули</div>
        <Modules />
      </div>
    </Container>
  );
};

export default ModulesPage;
