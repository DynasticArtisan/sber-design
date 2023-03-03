import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components";
import { useMatchTablet } from "../hooks/useMatchMedia";
import LargeDecor from "./LargeDecor/LargeDecor";
import "./layout.css";
import Menu from "./Sidebar/Menu";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout">
      {location.pathname === "/" ? <LargeDecor /> : <Header />}
      <Outlet />
    </div>
  );
};

export default Layout;
