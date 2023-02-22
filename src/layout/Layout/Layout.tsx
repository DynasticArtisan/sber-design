import React, { FC, ReactNode } from "react";
import "./layout.css";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
