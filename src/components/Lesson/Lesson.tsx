import React from "react";
import Button from "../Button/Button";
import Test from "../Test/Test";

import "./lesson.css";

const Lesson = () => {
  return (
    <div className="page">
      <div className="page__title">Что такое дизайн?</div>
      <div className="page__text">
        Прежде чем погрузиться в бизнес-контекст, давайте точно определимся,
        что такое дизайн. Кажется, на этот простой вопрос ответить можно
        очень по-разному, давайте проверим:
      </div>
      <Test />
      <div className="page__btns">
        <Button>Так и какой же правильный ответ?</Button>
      </div>
    </div>
  );
};

export default Lesson;
