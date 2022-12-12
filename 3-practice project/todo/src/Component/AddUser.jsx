import React, { useState } from "react";
import Card from "./UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "./UI/ErrorModal";
const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  // user Name change handler
  const nameChangeHandler = function (e) {
    setEnteredName(e.target.value);
  };
  // age ChangeHandler
  const ageChangeHandler = function (e) {
    setEnteredAge(e.target.value);
  };

  // submit handler
  const submitHandler = function (e) {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
         title: "Invalid UserName & Age",
         message: "Please enter a valid name and age (non-empty values).",
       });
       return;
    }
    if(+enteredAge < 1){
      setError({
         title: "Invalid Age",
         message: "Atleast Age  must be greather than 0 years",
       });
       return;
     }
     props.onAddUser(enteredName, enteredAge);
     setEnteredName("")
     setEnteredAge("")
   
  };
 
  const errorCloseHandler = function () {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onOkay={errorCloseHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label>UserName</label>
          <input type="text" onChange={nameChangeHandler} value = {enteredName}/>
          <label>Age (Years)</label>
          <input type="number" onChange={ageChangeHandler} value= {enteredAge} />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
