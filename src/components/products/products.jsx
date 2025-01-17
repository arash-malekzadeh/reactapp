import { useState } from "react";
import ProductItem from "./components/Product-item";

function ProductList({ name, city, listOfProducts }) {
  const [flag, setFlag] = useState(false);
  const handletoggleText = () => {
    setFlag(!flag);
  };
  return (
    <div>
      <h3> ecommerce project</h3>
      <button onClick={handletoggleText}>toggle text</button>
      {flag ? (
        <h4>
          name is {name} and he is from {city}
        </h4>
      ) : (
        <h3>Hello World</h3>
      )}
      <ul>
        {listOfProducts.map((item, index) => (
          <ProductItem singlProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
