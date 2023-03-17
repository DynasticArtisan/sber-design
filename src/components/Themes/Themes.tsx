import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import cn from "classnames";

import { modules } from "../../course";
import TriangleSvg from "../SVG/TriangleSvg";
import "./themes.scss";

const Themes: React.FC = () => {
  const params = useParams();
  const module = Number(params.module);
  const theme = Number(params.theme) || 0;
  const lesson = Number(params.lesson);

  const themes = modules[Number(module)].themes;
  const [open, setOpen] = useState(theme || 0);

  return (
    <div className="themes">
      {themes.map(({ lessons, title }, themeNumber) => (
        <div className={cn("theme", { open: open === themeNumber })}>
          <div className="theme__label">Тема {themeNumber}</div>
          <div className="theme__title" onClick={() => setOpen(themeNumber)}>
            <TriangleSvg />
            <span>{title}</span>
          </div>
          <div className="theme__dropdown">
            <div className="theme__lessons">
              <span className="theme__lessons-label">Уроки</span>
              <div className="theme__lessons-list">
                {lessons.map(({ title }, lessonNumber) => (
                  <Link
                    className={cn("theme__lessons-item", {
                      current: theme === themeNumber && lesson === lessonNumber,
                    })}
                    to={`/modules/${module}/${themeNumber}/${lessonNumber}/0`}
                    key={lesson}
                  >
                    {lessonNumber}. {title}
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
