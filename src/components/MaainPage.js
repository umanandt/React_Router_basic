//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import classes from "../components/MaainPage.module.css";

const MainPage = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              {" "}
              Welcome
            </NavLink>
          </li>

          <li>
            <NavLink activeClassName={classes.active} to="/product">
              {" "}
              Product{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainPage;
