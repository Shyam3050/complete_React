import { useState } from "react";
import Button from "../Ui/Button";
import Card from "../Ui/Card";
import ErrorModal from "../Ui/ErrorModal";
import style from "./AddUser.module.css";
const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(false);
  function userSubmit(e) {
    e.preventDefault();
    if (enteredName.trim().length < 2) {
      setError({
        title: "Invalid UserName",
        message: "Please Enter valid UserName",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter valid Age",
      });
      return;
    }
    const user = {
      id: Math.trunc(Math.random() * 123),
      userName: enteredName,
      userAge: +enteredAge,
    };
    props.addUser(user);
    setEnteredName("");
    setEnteredAge("");
  }
  function nameChangeHandler(e) {
    setEnteredName(e.target.value);
  }
  function ageChanggeHandler(e) {
    setEnteredAge(e.target.value);
  }
  function errorCloser() {
    setError(null);
  }
  return (
    <div>
      {error && (
        <ErrorModal
          errorModalClosr={errorCloser}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={userSubmit}>
          <label>UserName</label>
          <input type="text" onChange={nameChangeHandler} value={enteredName} />
          <label>Age (Years)</label>
          <input
            type="number"
            onChange={ageChanggeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
