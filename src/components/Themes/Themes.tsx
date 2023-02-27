import Theme from "./Theme";
import "./themes.css";

const themes = [
  {
    theme: 1,
    title: "Дизайн — это…",
    lessons: [
      {
        title: "1. Что такое дизайн?",
      },
      {
        title: "2. Что такое хороший дизайн?",
      },
      {
        title: "3. Кейс. Компьютерная мышь",
      },
      {
        title: "4. Кейс. Кухонный помощник",
      },
      {
        title: "5. Как создаётся дизайн-решение",
      },
      {
        title: "6. Зачем разбираться в дизайне?",
      },
    ],
  },
  {
    theme: 2,
    title: "Дизайн сегодня",
    lessons: [
      {
        title: "1. Что такое дизайн?",
      },
      {
        title: "2. Что такое хороший дизайн?",
      },
      {
        title: "3. Кейс. Компьютерная мышь",
      },
      {
        title: "4. Кейс. Кухонный помощник",
      },
      {
        title: "5. Как создаётся дизайн-решение",
      },
      {
        title: "6. Зачем разбираться в дизайне?",
      },
    ],
  },
];

const Themes = () => {
  return (
    <div className="themes">
      {themes.map((theme) => (
        <Theme {...theme} />
      ))}
    </div>
  );
};

export default Themes;
