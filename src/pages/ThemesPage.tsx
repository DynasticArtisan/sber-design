import React, { useEffect } from "react";
import { useMatchTablet } from "../hooks/useMatchMedia";
import Container from "../UI/Container/Container";
import { useNavigate, useParams } from "react-router-dom";
import { Themes } from "../components";

const LessonsPage = () => {
  const params = useParams();
  const module = Number(params.module) || 0;

  const isTablet = useMatchTablet();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTablet) {
      navigate("0/0/0", { replace: true });
    }
  }, [isTablet]);

  return (
    <Container>
      <div className="page">
        <Themes module={module} />
      </div>
    </Container>
  );
};

export default LessonsPage;
