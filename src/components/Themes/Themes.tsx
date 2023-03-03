import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { modules } from "../../content";
import TriangleSvg from "../../UI/SVG/TriangleSvg";
import "./themes.css";

interface Themes {
  module: number;
  curTheme?: number;
  curLesson?: number;
}

const Themes: FC<Themes> = ({ module, curTheme = 0, curLesson }) => {
  const [open, setOpen] = useState(curTheme);
  const themes = modules[module].themes;

  return (
    <div className="themes">
      {themes.map(({ lessons, title }, theme) => (
        <div className={"theme" + (theme === open ? " _open" : "")}>
          <div className="theme__label">Тема {theme}</div>
          <div className="theme__title" onClick={() => setOpen(theme)}>
            <TriangleSvg />
            <span>{title}</span>
          </div>
          <div className="theme__dropdown">
            <div className="theme__lessons">
              <span className="theme__lessons-label">Уроки</span>
              <div className="theme__lessons-list">
                {lessons.map(({ title }, lesson) => (
                  <Link
                    className={
                      curTheme === theme && curLesson === lesson
                        ? "theme__lessons-item _current"
                        : "theme__lessons-item"
                    }
                    to={`/modules/${module}/${theme}/${lesson}/0`}
                    key={lesson}
                  >
                    <span>
                      {lesson}. {title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Themes;
