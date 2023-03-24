import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Themes } from "@components/index";
import { Container } from "@components/UI";
import useMatchMedia from "@hooks/useMatchMedia";

const LessonsPage: React.FC = () => {
  const isDesctop = useMatchMedia("(min-width: 1340px)");
  const navigate = useNavigate();

  useEffect(() => {
    if (isDesctop) {
      navigate("0/0/0", { replace: true });
    }
  }, [isDesctop]);

  return (
    <Container>
      <Themes />
    </Container>
  );
};

export default LessonsPage;
