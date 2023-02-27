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
        <Modules />
      </Container>
    </Layout>
  );
};

export default ModulesPage;
