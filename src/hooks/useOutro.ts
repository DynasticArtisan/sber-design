import React from "react";
import { useParams } from "react-router-dom";
import outro from "../course/outro";

const useOutro = () => {
  const { page } = useParams();
  return outro.pages[Number(page)];
};

export default useOutro;
