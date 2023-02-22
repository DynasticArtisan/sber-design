import React from "react";
import { Header } from "../../components";
import Modules from "../../components/Modules/Modules";
import Container from "../../layout/Container/Container";
import Layout from "../../layout/Layout/Layout";
import Menu from "../../layout/Menu/Menu";

const ModulesPage = () => {
  return (
    <Layout>
      <Header />
      <Menu />
      <Container>
        <Modules />
      </Container>
    </Layout>
  );
};

export default ModulesPage;
