import { FC, useState } from "react";
import Link from "../../router/Link";
import { useRouter } from "../../router/Router";
import { RoutePath } from "../../router/Routes";
import TriangleSvg from "../../svg/TriangleSvg";
import "./themes.css";

interface Theme {
  theme: number;
  title: string;
  lessons: Array<{
    title: string;
  }>;
}

const Theme: FC<Theme> = ({ theme, title, lessons }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleHandler = () => setOpen((b) => !b);
  const { location, navigate } = useRouter();

  const selectLesson = (lesson: number) => {
    if (location.params?.lesson !== lesson) {
      navigate({ path: RoutePath.lesson, params: { lesson, theme: theme } });
    }
  };

  return (
    <div className={"theme" + (isOpen ? " _open" : "")}>
      <div className="theme__label">Тема {theme}</div>
      <div className="theme__title" onClick={toggleHandler}>
        <TriangleSvg />
        <span>{title}</span>
      </div>
      <div className="theme__dropdown">
        <div className="theme__lessons">
          <span className="theme__lessons-label">Уроки</span>
          <div className="theme__lessons-list">
            {lessons.map(({ title }, idx) => (
              <div
                className={
                  location.params?.theme === theme &&
                  location.params?.lesson === idx
                    ? "theme__lessons-item _current"
                    : "theme__lessons-item"
                }
                onClick={() => selectLesson(idx)}
              >
                <span>{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Theme;
