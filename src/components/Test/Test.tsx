import Checkbox from "../../UI/Checkbox/Checkbox";

import "./test.css";
import { useReducer } from "react";
import { FC } from "react";
import Input from "../../UI/Input/Input";

const test = {
  id: "designForYou",
  question: "Что такое дизайн для вас?",
  answers: [
    "Красота",
    "Форма",
    "Функция",
    "Удобство",
    "Инновационность",
    "Творчество",
  ],
  withOtherAnswer: true,
  rightAnswers: [0, 4],
};

const answered = [0, 3];

const Test: FC<{ done: boolean }> = ({ done }) => {
  const { question, answers, rightAnswers, withOtherAnswer } = test;

  const [selected, select] = useReducer(
    (selected: number[], answer: number) => {
      if (selected.includes(answer)) {
        return selected.filter((a) => a !== answer);
      }
      return [...selected, answer];
    },
    []
  );
  const isLimited = selected.length >= rightAnswers.length;

  return (
    <div className="test">
      <div className="test__top">
        <div className="test__question">{question}</div>

        <div className="test__condition">
          <div className="test__condition-text">
            Не более {rightAnswers.length} правильных ответов{" "}
          </div>
          <div className="test__condition-counts">
            {selected.length}/{rightAnswers.length}
          </div>
        </div>
      </div>

      <div className="test__answers">
        {answers.map((answer, idx) => {
          const checked = selected.includes(idx);
          return (
            <label className="test__answer" key={idx}>
              <Checkbox
                valid={done ? rightAnswers.includes(idx) : undefined}
                checked={checked}
                disabled={!checked && isLimited}
                onChange={() => select(idx)}
              />
              <div className="test__answer-text">{answer}</div>
            </label>
          );
        })}
      </div>

      {withOtherAnswer && (
        <div className="test__other-answer">
          <div className="test__other-answer-label">Ваш вариант</div>
          <Input
            className="test__other-answer-input"
            placeholder="Твой ответ"
          />
        </div>
      )}
    </div>
  );
};

export default Test;
