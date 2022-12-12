import classes from "./Success.module.css";
const Success = () => {
  return (
    <div className={classes.success_dialog}>
      <div className={classes.success_checkmark}>
        <div className={classes.check_icon}>
          <span
            className={`${classes.icon_line} ${classes.line_tip}`}
          ></span>
          <span
            className={`${classes.icon_line} ${classes.line_long}`}
          ></span>
          <div className={classes.icon_circle}></div>
          <div className={classes.icon_fix}></div>
        </div>
      </div>
      <p className={classes.success}>Order SuccessFul</p>
    </div>
  );
};
export default Success;
