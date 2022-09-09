import { useParams } from "react-router-dom";


// params is a hook to capture the dynamic url value by react router
// params.productID - where productId is already mentioned in the app page
// route path
const ProductDetails = () => {
  const params = useParams();
  return (
    <nav>
      <h1> Product Details</h1>
      <ul>
        <p>Hello {params.productId}</p>
        
      </ul>
    </nav>
  );
};

export default ProductDetails;
