import "./title.scss";

import React from "react";

const Title: React.FC<{ children: string }> = ({ children }) => {
  return <div className="title">{children}</div>;
};

export default Title;
