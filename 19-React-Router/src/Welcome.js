import { Route } from "react-router-dom";
const Welcome = () => {
  return (
    <section>
      <h2>Welcome Component</h2>
      <Route path="/welcome/new-user">
        <p>Welcome, new User!</p>
      </Route>
    </section>
  );
};
export default Welcome;
