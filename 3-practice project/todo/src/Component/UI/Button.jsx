import UserList from "../../UserList";
import styles from "./Button.module.css";
const Button = (props) => {
  const clickHandler = () => {
    // props.onDelete(props.id);
    props.onClick(props.id);
  }

  return <button className={styles.button} onClick ={clickHandler} type = {props.type} id = {props.id}>{props.children}</button>;
};
export default Button;