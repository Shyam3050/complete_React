import style from "./CourseGoalItem.module.css"
function CourseGoalItem(props) {
    function deleteHandler (){
        props.onDelete(props.id);
    }
    return <li className={style['goal-item']} onClick = {deleteHandler}>{props.title}</li>
}

export default CourseGoalItem;