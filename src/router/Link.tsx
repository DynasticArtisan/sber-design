import React, { FC, ReactNode } from "react";
import { Location, useRouter } from "./Router";

interface Link {
  children: ReactNode;
  to: Location;
  className?: string;
}

const Link: FC<Link> = ({ children, className, to }) => {
  const { navigate } = useRouter();
  return (
    <a
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
};

export default Link;
