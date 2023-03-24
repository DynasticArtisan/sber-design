import React from "react";
import { Outlet } from "react-router-dom";

import { Breadcrumbs } from "@components/index";
import useMatchMedia from "@hooks/useMatchMedia";

const BreadcrumbsLayout: React.FC = () => {
  const isTablet = useMatchMedia("(max-width: 1339px)");
  return (
    <>
      {isTablet && <Breadcrumbs />}
      <Outlet />
    </>
  );
};

export default BreadcrumbsLayout;
