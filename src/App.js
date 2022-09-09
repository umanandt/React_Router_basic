import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Product from "./Pages/Product";
import MainPage from "./components/MaainPage";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <div>
      <MainPage />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome"/>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>

        <Route path="/product" exact>
          <Product />
        </Route>

        <Route path="/product/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
