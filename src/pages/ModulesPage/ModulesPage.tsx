import React from "react";
import { Header } from "../../components";
import Modules from "../../components/Modules/Modules";
import Container from "../../layout/Container/Container";
import Layout from "../../layout/Layout/Layout";

const ModulesPage = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <div className="page">
          <div className="page__title">Модули</div>
          <Modules />
        </div>
      </Container>
    </Layout>
  );
};

export default ModulesPage;
