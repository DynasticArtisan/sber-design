import React, { useEffect } from "react";
import { Header, Lesson, Lessons } from "../../components";
import { useMatchTablet } from "../../hooks/useMatchMedia";
import Container from "../../layout/Container/Container";
import Layout from "../../layout/Layout/Layout";
import { useRouter } from "../../router/Router";
import { RoutePath } from "../../router/Routes";

const LessonsPage = () => {
  const isTablet = useMatchTablet();
  const { navigate } = useRouter();

  useEffect(() => {
    if (!isTablet) {
      navigate({ path: RoutePath.lesson });
    }
  }, [isTablet]);

  return (
    <Layout>
      <Header />
      <Container>
        <div className="page">
          <Lessons />
        </div>
      </Container>
    </Layout>
  );
};

export default LessonsPage;
