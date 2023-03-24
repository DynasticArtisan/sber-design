import "./text.scss";

import React from "react";

const Text: React.FC<{ children: string }> = ({ children }) => {
  return <div className="text">{children}</div>;
};

export default Text;
