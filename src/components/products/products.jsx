import ProductItem from "./components/Product-item";

function ProductList({ name, city, listOfProducts }) {
  return (
    <div>
      <h3> ecommerce project</h3>
      <h4>
        name is {name} and he is from {city}
      </h4>
      <ul>
        {listOfProducts.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
