import User from "./User";
import style from "./UserList.module.css";
import Card from "../Ui/Card";
const UserList = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.usersLists.map((user) => (
          <User
            key={user.id}
            id={user.id}
            userName={user.userName}
            userAge={user.userAge}
            deleteUser = {props.deleteUser}
          />
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
