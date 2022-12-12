import { useState } from "react";
import Button from "./UI/Button";
import style from "./CourseInput.module.css";

function CourseInput(props) {
    const [enteredGoal,setEnteredGoal] = useState('');
    const [isValid, setIsValid] = useState(true); 
  

    const addGoalHandler = e =>{
        e.preventDefault();
        if(enteredGoal.length === 0){
          setIsValid(false);
          return;
        }
       props.onSubmit(enteredGoal);
    }
    const inputChangeHandler = e =>{
      if(e.target.value.trim().length > 0){
        setIsValid(true);
      }
        setEnteredGoal(e.target.value);
    }
  return (
    <form onSubmit={addGoalHandler}>
      <div className={`${style["form-control"]} ${!isValid && style.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={inputChangeHandler} />
      </div>
      <Button type = 'submit'>Add Goal</Button>
    </form>
  );
}

export default CourseInput;
