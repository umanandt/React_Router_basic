import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Route path="/welcome/new-user">
        <h2> This the page for new user</h2>
      </Route>
    </section>
  );
};

export default Welcome;
