import ReactDom from "react-dom";
import style from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

function BackDrop(props) {
  return <div className={style.backdrop} onClick={props.errorModalClosr} />;
}
function Modal_overlay(props) {
  return (
    <Card className={style.modal}>
      <div className={style.header}>
        <h2>{props.title}</h2>
      </div>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <div className={style.actions}>
        <Button type="button" onClick={props.errorModalClosr}>
          Okay
        </Button>
      </div>
    </Card>
  );
}
const ErrorModal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <BackDrop errorModalClosr={props.errorModalClosr} />,
        document.getElementById("backdrop")
      )}

      {ReactDom.createPortal(
        <Modal_overlay
          errorModalClosr={props.errorModalClosr}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("modal")
      )}
    </>
  );
};
export default ErrorModal;
