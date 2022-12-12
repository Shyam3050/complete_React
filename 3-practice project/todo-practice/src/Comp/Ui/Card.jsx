import style from "./Card.module.css";
const Card = (props) => {
    const classes = `${props.className} ${style.card}`;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
