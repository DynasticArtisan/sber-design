import "./modules.css";
import { Link } from "react-router-dom";
import Module from "../../UI/Module/Module";
import { modules } from "../../content";

const Modules = () => {
  return (
    <div className="modules">
      {modules.map((module, idx) => (
        <Link to={String(idx)}>
          <Module {...module} idx={idx} key={idx} />
        </Link>
      ))}
    </div>
  );
};

export default Modules;
