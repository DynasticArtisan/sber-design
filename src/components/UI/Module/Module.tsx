import "./module.scss";

import { FC, HTMLProps } from "react";

import defaultImage from "@assets/img/module.png";

export interface Module extends HTMLProps<HTMLDivElement> {
  title: string;
  description: string;
  image?: string;
  counts?: string;
}

const Module: FC<Module> = ({
  counts,
  image,
  title,
  description,
  ...props
}) => {
  return (
    <div className="module" {...props}>
      {counts && <div className="module__counts">{counts}</div>}
      <div className="module__image">
        <img src={image || defaultImage} alt={title} />
      </div>
      <div className="module__text">
        <div className="module__title">{title}</div>
        <div className="module__description">{description}</div>
      </div>
    </div>
  );
};

export default Module;
