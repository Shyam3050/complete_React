import { useState } from "react";
import AddUser from "./Comp/UserList/AddUser";
import UserList from "./Comp/UserList/UserList";
function App() {
  const [userList, setUserList] = useState([]);
  function addUser(newUser) {
    setUserList((prevUser) => [newUser, ...prevUser]);
  }
  function deleteHandler(id) {
     setUserList((prevList) => {
     const filtered = prevList.filter((user) => user.id != id);
      return filtered;
    });
  }
  return (
    <>
      <AddUser addUser={addUser} />
      <UserList usersLists={userList} deleteUser={deleteHandler} />
    </>
  );
}

export default App;
