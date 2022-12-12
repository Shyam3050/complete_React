import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  // for fName
  
  const {
    value: enteredFName,
    valueIsValid: fNameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: fNameReset,
  } = useInput((value) => value.trim() !== "");
  //last name
  const {
    value: enteredLName,
    valueIsValid: lNameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: lNameReset,
  } = useInput((value) => value.trim() !== "");
  // email
  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes('@'));

  let formValid;
  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formValid = true;
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!fNameIsValid && !lNameIsValid && !emailIsValid) return;
    fNameReset();
    lNameReset();
    emailReset()
    console.log(enteredFName, enteredLName, enteredEmail);
  }

  const fNameErrorClasses = fNameHasError
    ? "form-control invalid"
    : "form-control";

  const lNameErrorClasses = lNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailErrorClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={fNameErrorClasses}>
          <label htmlFor="Firstname">First Name</label>
          <input
            type="text"
            id="Firstname"
            onBlur={fNameBlurHandler}
            onChange={fNameChangeHandler}
            value={enteredFName}
          />
          {fNameHasError && <p className="error-text">Enter Valid First Name</p>}
        </div>
        <div className={lNameErrorClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onBlur={lNameBlurHandler}
            onChange={lNameChangeHandler}
            value={enteredLName}
          />
          {lNameHasError && <p className="error-text">Enter Valid Last Name</p>}
        </div>
      </div>
      <div className={emailErrorClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input type="email" id="email" 
        onBlur={emailBlurHandler}
        onChange={emailChangeHandler}
        value={enteredEmail}
        />
        {emailHasError && <p className="error-text">Enter Valid Name</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
