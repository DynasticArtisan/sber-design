import React from "react";
import { useParams } from "react-router-dom";
import intro from "../course/intro";

const useIntro = () => {
  const { page } = useParams();
  return intro.pages[Number(page)];
};

export default useIntro;
