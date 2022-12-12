import React,{useState} from "react";
import AddUser from "./Component/AddUser";
import UserList from "./UserList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUser = function(name, age) {
   setUserList(prevState => [{userName: name,
  userAge: age,
  id: Math.random().toString()
 } , ...prevState])
  }
  const deleteUser = (userId) =>{
    setUserList(prevUser => {
      const updatedUser = prevUser.filter(user => user.id != userId);
      return updatedUser;
    })
  }
  console.log(userList);
  return (
    <div>
      <AddUser onAddUser = {addUser} />
      <UserList users = {userList} userDelete = {deleteUser}/>
    </div>
  );
}

export default App;
