import { HomePage, LessonPage, LessonsPage, ModulesPage } from "../pages";
import { useRouter } from "./Router";
export enum RoutePath {
  home,
  modules,
  lessons,
  lesson,
}

const Routes = () => {
  const { location } = useRouter();
  switch (location.path) {
    case RoutePath.modules:
      return <ModulesPage />;
    case RoutePath.lessons:
      return <LessonsPage />;
    case RoutePath.lesson:
      return <LessonPage />;
    default:
      return <HomePage />;
  }
};

export default Routes;
