import { FC, HTMLProps } from "react";
import defaultImage from "./defaultImage.png";
import "./module.css";

export interface Module extends HTMLProps<HTMLDivElement> {
  idx: number;
  image?: string;
  title: string;
  description: string;
  counts: string;
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
      <div className="module__counts">{counts}</div>
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
