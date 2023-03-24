import React from "react";

import Test from "@components/Test/Test";
import { Button, Text, Title } from "@components/UI";

const page1 = () => {
  return (
    <>
      <Title>Что такое дизайн?</Title>
      <Text>
        Прежде чем погрузиться в бизнес-контекст, давайте точно определимся,
        что такое дизайн. Кажется, на этот простой вопрос ответить можно
        очень по-разному, давайте проверим:
      </Text>
      <Test done={false} />
      <div className="page__btns">
        <Button>Так и какой же правильный ответ?</Button>
      </div>
    </>
  );
};

export default page1;
