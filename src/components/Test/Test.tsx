import Checkbox from "../UI/Checkbox/Checkbox";
import Input from "../UI/Input/Input";
import "./test.css";

const Test = () => {
  return (
    <div className="test">
      <div className="test__top">
        <div className="test__question">Что такое дизайн для вас? </div>
        <div className="test__condition">
          <div className="test__condition-text">
            Не более двух правильных ответов{" "}
          </div>
          <div className="test__condition-counts">2/2</div>
        </div>
      </div>
      <div className="test__answers">
        <label className="test__answer">
          <Checkbox />
          <div className="test__answer-text">Красота</div>
        </label>
        <label className="test__answer">
          <Checkbox />

          <div className="test__answer-text">Форма</div>
        </label>
        <label className="test__answer">
          <Checkbox />

          <div className="test__answer-text">Функция</div>
        </label>
      </div>
      <div className="test__other-answer">
        <div className="test__other-answer-label">Ваш вариант</div>
        <Input className="test__other-answer-input" placeholder="Твой ответ" />
      </div>
    </div>
  );
};
export default Test;
