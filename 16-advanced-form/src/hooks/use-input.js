import { useReducer } from "react";
const inistialState = {
  value: "",
  isTouch: false,
};
function inputStateReducer(state, action) {
  if (action.type === "INPUT") {
    return { value: action.value, isTouch: state.isTouch };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouch: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouch: false };
  }
  return inistialState;
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, inistialState);
  //   const [inputState.value, setEnteredValue] = useState("");
  //   const [isTouch, setIsTouch] = useState(false);
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouch;
  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    //  setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
    //   setIsTouch(true);
  };
  const reset = () => {
    dispatch({ type: "RESET" });
    //  setEnteredValue("");
    //  setIsTouch(false);
  };
  return {
    value: inputState.value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
