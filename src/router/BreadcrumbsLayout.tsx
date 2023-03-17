import React from "react";
import { Outlet } from "react-router-dom";

import { useMatchTablet } from "../hooks/useMatchMedia";
import { Breadcrumbs } from "../components";

const BreadcrumbsLayout = () => {
  const isTablet = useMatchTablet();
  return (
    <>
      {isTablet && <Breadcrumbs />}
      <Outlet />
    </>
  );
};

export default BreadcrumbsLayout;
