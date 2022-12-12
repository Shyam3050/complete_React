import style from "./CourseGoalList.module.css";
import CourseGoalItem from "./CourseGoalItem";
function CourseGoalList(props) {
    return <ul className= {style['goal-list']}> 
           {props.goals.map(goal => <CourseGoalItem key = {goal.id}  id = {goal.id} title = {goal.text} onDelete= {props.onDelete}/>)}
    </ul>
}

export default CourseGoalList;