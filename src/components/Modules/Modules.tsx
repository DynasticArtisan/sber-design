import "./modules.css";
import { Link } from "react-router-dom";
import Module from "../../UI/Module/Module";

const modules = [
  {
    counts: "1 тема • 3 урока",
    title: "1. Введение",
    description: "Расскажем, что вас ждет при изучении курса Дизайн-стратегия",
  },
  {
    counts: "2 темы • 24 урока",
    title: "2. Про дизайн в бизнесе",
    description: "Что такое дизайн и как он связан с бизнесом",
  },
  {
    counts: "3 темы • 14 уроков",
    title: "3. Про дизайн в бизнесе",
    description: "Как именно должна происходить работа с дизайном ",
  },
  {
    counts: "3 темы • 10 уроков",
    title: "4. Дизайн-культура",
    description:
      "Что делать мне как менеджеру и как дизайн связан с инновациями",
  },
  {
    counts: "1 тема • 1 урок",
    title: "5. Заключение",
    description: "Подведем итоги и поделимся чек-листом",
  },
];

const Modules = () => {
  return (
    <div className="modules">
      {modules.map((module, idx) => (
        <Link to={`/modules/${idx}/themes`}>
          <Module {...module} idx={idx} key={idx} />
        </Link>
      ))}
    </div>
  );
};

export default Modules;
