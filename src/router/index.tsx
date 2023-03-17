import {
  createMemoryRouter,
  createBrowserRouter,
  createHashRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import HeaderLayout from "./HeaderLayout";
import BreadcrumbsLayout from "./BreadcrumbsLayout";

import ModulesLayout from "./ModulesLayout";
import ThemesLayout from "./ThemesLayout";
import LessonLayout from "./LessonLayout";
import { Hero } from "../components";

const router = createBrowserRouter([
  {
    index: true,
    element: <Hero />,
  },
  {
    path: "/*",
    element: <HeaderLayout />,
    children: [
      {
        path: "modules",
        children: [
          {
            index: true,
            element: <ModulesLayout />,
          },
          {
            path: ":module",
            element: <BreadcrumbsLayout />,
            errorElement: <Navigate to="../" replace={true} />,
            children: [
              {
                index: true,
                element: <ThemesLayout />,
              },
              {
                path: ":theme/:lesson/:page",
                element: <LessonLayout />,
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
