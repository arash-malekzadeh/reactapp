import { useEffect, useState } from "react";
import ProductItem from "./components/Product-item";

function ProductList({ name, city, listOfProducts }) {
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  const handletoggleText = () => {
    setFlag(!flag);
  };

  useEffect(() => {
    console.log("runs only once on page load");

    return () => {
      console.log("component unmounted");
    };
  }, []);
  const increaseCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (count === 10) setChangeStyle(true);
  }, [count]);
  return (
    <div>
      <h3> ecommerce project</h3>

      <h2> Count is {count}</h2>
      <button
        onClick={increaseCount}
        style={{
          color: changeStyle ? "red" : "black",
          background: changeStyle ? "blue" : "black",
        }}
      >
        Increase Count
      </button>
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
