import Link from "../../router/Link";
import { useRouter } from "../../router/Router";
import { RoutePath } from "../../router/Routes";
import CornerSvg from "../../UI/SVG/CornerSvg";
import "./breadcrumbs.css";

const Breadcrumbs = () => {
  const { location } = useRouter();
  return (
    <div className="breadcrumbs">
      <Link to={{ path: RoutePath.modules }} className="breadcrumbs__link">
        Модули
      </Link>

      <CornerSvg />
      <Link
        to={{ path: RoutePath.lessons }}
        className={
          location.path === RoutePath.lessons
            ? "breadcrumbs__link _current"
            : "breadcrumbs__link"
        }
      >
        Тема и Уроки
      </Link>

      {location.path !== RoutePath.lessons && (
        <>
          <CornerSvg />
          <Link
            to={{ path: RoutePath.lesson }}
            className={
              location.path === RoutePath.lesson
                ? "breadcrumbs__link _current"
                : "breadcrumbs__link"
            }
          >
            Урок 2
          </Link>
        </>
      )}
    </div>
  );
};
export default Breadcrumbs;
