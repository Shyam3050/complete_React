import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory()
  const ctx = useContext(AuthContext);

  const newPasswordInputRef = useRef();

  function passwordSubmitHandler(e) {
    e.preventDefault();
    const enteredPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDOh0-PRXTn1aQGx8nVM4wCBu4USUvcr7M",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: ctx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
      }
    ).then(res =>{
      history.replace("/")
    })
  }
  return (
    <form className={classes.form} onSubmit={passwordSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          minLength= "7"
          id="new-password"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
