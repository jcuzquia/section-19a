import classes from "./Card.module.css";
import { FC } from "react";

interface CardProps {
  className?: string;
}

const Card: FC<CardProps> = (props) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
