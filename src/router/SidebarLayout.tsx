import React from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "@components/index";
import useMatchMedia from "@hooks/useMatchMedia";

const SidebarLayout: React.FC = () => {
  const isDesctop = useMatchMedia("(min-width: 1340px)");
  return (
    <>
      {isDesctop && <Sidebar />}
      <Outlet />
    </>
  );
};

export default SidebarLayout;
