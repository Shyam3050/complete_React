import Card from "./Component/UI/Card";
import styles from "./UserList.module.css";
import Button from "./Component/UI/Button";
const UserList = (props) => {

  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.userName} ({user.userAge} Years Old)
            <Button id = {user.id} onClick = {props.userDelete}>Delete</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
