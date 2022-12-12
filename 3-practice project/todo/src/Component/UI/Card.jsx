import classes from  "./Card.module.css";
const Card = (props) => {
  const styles = `${props.className} ${classes.card}`;
     return <div className= {styles}>
        {props.children}
     </div>
};
export default Card;