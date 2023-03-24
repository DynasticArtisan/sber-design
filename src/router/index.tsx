import {
  createMemoryRouter,
  createBrowserRouter,
  createHashRouter,
  Navigate,
} from "react-router-dom";

import { Hero } from "@components/index";

import HeaderLayout from "./HeaderLayout";
import BreadcrumbsLayout from "./BreadcrumbsLayout";
import IntroLayout from "./IntroLayout";
import ModulesLayout from "./ModulesLayout";
import ThemesLayout from "./ThemesLayout";
import LessonLayout from "./LessonLayout";
import OutroLayout from "./OutroLayout";
import SidebarLayout from "./SidebarLayout";

const router = createBrowserRouter([
  {
    index: true,
    element: <Hero />,
  },
  {
    path: "/*",
    element: <HeaderLayout />,
    errorElement: <Navigate to="/" replace={true} />,
    children: [
      {
        path: "intro/:page",
        element: <IntroLayout />,
      },
      {
        path: "modules",
        errorElement: <Navigate to="/modules" replace={true} />,
        children: [
          {
            index: true,
            element: <ModulesLayout />,
          },
          {
            path: ":module",
            element: <BreadcrumbsLayout />,
            children: [
              {
                index: true,
                element: <ThemesLayout />,
              },
              {
                path: ":theme/:lesson",
                element: <SidebarLayout />,
                children: [
                  {
                    path: ":page",
                    element: <LessonLayout />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "outro/:page",
        element: <OutroLayout />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace={true} />,
      },
    ],
  },
]);

export default router;
