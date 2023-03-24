import React from "react";

import { Container } from "@components/UI";
import useOutro from "@hooks/useOutro";

const OutroLayout: React.FC = () => {
  const Outro = useOutro();
  return (
    <Container>
      <Outro />
    </Container>
  );
};

export default OutroLayout;
