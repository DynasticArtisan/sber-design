import React from "react";
import {
  createMemoryRouter,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import ThemesPage from "./pages/ThemesPage";
import ModulesPage from "./pages/ModulesPage";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CoursePage />,
      },
      {
        path: "/modules",
        element: <ModulesPage />,
      },
      {
        id: "themes",
        path: "/modules/:module/themes",
        element: <ThemesPage />,
      },
    ],
  },
]);

export default router;
