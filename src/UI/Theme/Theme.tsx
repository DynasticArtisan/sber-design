import { FC, useState } from "react";
import TriangleSvg from "../SVG/TriangleSvg";
import "./theme.css";

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
                // className={
                //   location.params?.theme === theme &&
                //   location.params?.lesson === idx
                //     ? "theme__lessons-item _current"
                //     : "theme__lessons-item"
                // }
                className="theme__lessons-item"
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
