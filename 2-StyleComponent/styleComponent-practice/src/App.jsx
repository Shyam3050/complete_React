import CourseInput from "./Comp/CourseInput";
import CourseGoalList from "./Comp/CourseGoalList";
import { useState } from "react";
import "./App.css";
function App() {
  const [userGoal, setUserGoal] = useState([
    { id: "g1", text: "Do all Exercise" },
    { id: "g2", text: "demo text" },
  ]);
  const submitHandler = (enteredGoal) => {
    setUserGoal((prevState) => {
      const newGoal = {
        id: Math.random(),
        text: enteredGoal,
      };
      return [newGoal, ...prevState];
    });
  };
  const deleteHandler = (id) => {
    setUserGoal( prevGoal => {
      const updatedGoal = prevGoal.filter(goal => goal.id != id);
      return updatedGoal;
    })
  };
  return (
    <>
      <section id="goal-form">
        <CourseInput onSubmit={submitHandler} />
      </section>
      <section id="goals">
        <CourseGoalList goals={userGoal} onDelete={deleteHandler} />
      </section>
    </>
  );
}

export default App;
