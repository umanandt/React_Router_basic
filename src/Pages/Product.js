import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>Product Page new</h1>

      <li>
        <Link to="/product/p1">Product 1</Link>
      </li>
      <li>
        <Link to="/product/p2"> Product 2</Link>
      </li>
      <li>
        {" "}
        <Link to="/product/p3">Procuct 3</Link>
      </li>
    </div>
  );
};

export default Product;
