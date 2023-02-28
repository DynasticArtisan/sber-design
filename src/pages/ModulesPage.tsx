import React from "react";
import { Modules } from "../components";
import Container from "../UI/Container/Container";
const ModulesPage = () => {
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
