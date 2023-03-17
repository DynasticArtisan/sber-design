import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useMatchTablet } from "../hooks/useMatchMedia";
import { Themes } from "../components";
import { Container } from "../components/UI";

const LessonsPage: React.FC = () => {
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
        <Themes />
      </div>
    </Container>
  );
};

export default LessonsPage;
