import "./modules.scss";

import { Link } from "react-router-dom";

import { Module } from "@components/UI";
import intro from "@course/intro";
import modules from "@course/modules";
import outro from "@course/outro";

const Modules = () => {
  return (
    <div className="modules">
      <Link to="/intro/0">
        <Module {...intro} />
      </Link>

      {modules.map((module, idx) => (
        <Link to={String(idx)}>
          <Module {...module} key={idx} />
        </Link>
      ))}

      <Link to="/outro/0">
        <Module {...outro} />
      </Link>
    </div>
  );
};

export default Modules;
