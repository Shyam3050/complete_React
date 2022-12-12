import style from "./User.module.css";
import Button from "../Ui/Button";
const User = (props) => {
  function deleteHandler() {
    props.deleteUser(props.id);
  }
  return (
    <li>
      {props.userName} ( {props.userAge} )
      <Button type="button" onClick={deleteHandler}>
        Delete
      </Button>
    </li>
  );
};
export default User;
