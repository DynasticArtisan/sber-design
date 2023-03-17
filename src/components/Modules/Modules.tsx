import { Link } from "react-router-dom";

import "./modules.scss";
import { modules } from "../../course";
import { Module } from "../UI";

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
