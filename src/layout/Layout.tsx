import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components";
import { useMatchTablet } from "../hooks/useMatchMedia";
import LargeDecor from "./LargeDecor/LargeDecor";
import "./layout.css";
import Menu from "./Sidebar/Menu";

const Layout = () => {
  const location = useLocation();
  const isTablet = useMatchTablet();
  const showSidebar =
    location.pathname !== "/" && location.pathname !== "/modules" && !isTablet;

  return (
    <div className="layout">
      {location.pathname === "/" ? <LargeDecor /> : <Header />}
      {showSidebar && <Menu />}
      <Outlet />
    </div>
  );
};

export default Layout;
