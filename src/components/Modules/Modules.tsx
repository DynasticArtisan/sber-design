import { useRouter } from "../../router/Router";
import { RoutePath } from "../../router/Routes";
import Module from "./Module";
import "./modules.css"

const modules = [
  {
    counts: '1 тема • 3 урока',
    title: '1. Введение',
    description: 'Расскажем, что вас ждет при изучении курса Дизайн-стратегия',
  },
  {
    counts: '2 темы • 24 урока',
    title: '2. Про дизайн в бизнесе',
    description: 'Что такое дизайн и как он связан с бизнесом',
  },
  {
    counts: '3 темы • 14 уроков',
    title: '3. Про дизайн в бизнесе',
    description: 'Как именно должна происходить работа с дизайном ',
  },
  {
    counts: '3 темы • 10 уроков',
    title: '4. Дизайн-культура',
    description: 'Что делать мне как менеджеру и как дизайн связан с инновациями',
  },
  {
    counts: '1 тема • 1 урок',
    title: '5. Заключение',
    description: 'Подведем итоги и поделимся чек-листом',
  },
]




const Modules = () => {
  const { navigate } = useRouter()
  return <div className="modules">
            <div className="modules__title">Модули</div>
            <div className="modules__list">
              {
                modules.map(module => <Module {...module} onClick={()=>navigate({path: RoutePath.lessons})} />)  
              }
            </div>
        </div>;
};

export default Modules;
