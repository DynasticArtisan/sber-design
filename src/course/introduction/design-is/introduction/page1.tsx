import React from "react";
import Test from "../../../../components/Test/Test";
import Button from "../../../../components/UI/Button/Button";

const page1 = () => {
  return (
    <div className="page">
      <div className="page__title">Что такое дизайн?</div>
      <div className="page__text">
        Прежде чем погрузиться в бизнес-контекст, давайте точно определимся,
        что такое дизайн. Кажется, на этот простой вопрос ответить можно
        очень по-разному, давайте проверим:
      </div>
      <Test done={false} />
      <div className="page__btns">
        <Button>Так и какой же правильный ответ?</Button>
      </div>
    </div>
  );
};

export default page1;
