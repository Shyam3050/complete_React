import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick= {props.onClick}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick = {props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
