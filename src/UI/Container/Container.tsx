import React, { FC, ReactNode } from "react";
import "./container.css";

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
