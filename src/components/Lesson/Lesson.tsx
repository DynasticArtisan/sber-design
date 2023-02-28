import React from "react";
import Button from "../Button/Button";
import Test from "../Test/Test";
import { useState } from "react";

import "./lesson.css";

const Lesson = () => {
  const [done, setDone] = useState(false);
  return (
    <div className="page">
      <div className="page__title">Что такое дизайн?</div>
      <div className="page__text">
        Прежде чем погрузиться в бизнес-контекст, давайте точно определимся,
        что такое дизайн. Кажется, на этот простой вопрос ответить можно
        очень по-разному, давайте проверим:
      </div>
      <Test done={done} />
      <div className="page__btns">
        <Button onClick={() => setDone((t) => !t)}>
          Так и какой же правильный ответ?
        </Button>
      </div>
    </div>
  );
};

export default Lesson;
