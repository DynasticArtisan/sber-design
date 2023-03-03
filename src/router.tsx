import React from "react";
import {
  createMemoryRouter,
  createBrowserRouter,
  createHashRouter,
  Navigate,
} from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import ThemesPage from "./pages/ThemesPage";
import ModulesPage from "./pages/ModulesPage";
import Layout from "./layout/Layout";
import LessonPage from "./pages/LessonPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CoursePage />,
      },
      {
        path: "modules",
        children: [
          {
            index: true,
            element: <ModulesPage />,
          },
          {
            path: ":module",
            errorElement: <Navigate to="../" replace={true} />,
            children: [
              {
                index: true,
                element: <ThemesPage />,
              },
              {
                path: ":theme/:lesson/:page",
                element: <LessonPage />,
                errorElement: <Navigate to="../" replace={true} />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
