import React, { useEffect } from "react";
import { Lessons } from "../components";
import { useMatchTablet } from "../hooks/useMatchMedia";
import Container from "../UI/Container/Container";
import { useNavigate } from "react-router-dom";

const LessonsPage = () => {
  const isTablet = useMatchTablet();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isTablet) {
      navigate("/modules", { replace: true });
    }
  }, [isTablet]);

  return (
    <Container>
      <div className="page">
        <Lessons />
      </div>
    </Container>
  );
};

export default LessonsPage;
