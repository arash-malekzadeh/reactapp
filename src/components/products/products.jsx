import ProductItem from "./components/Product-item";

const dummyproduct = ["product1", "product2", "product3"];

function ProductList(props) {
  const { name, city } = props;
  return (
    <div>
      <h3> ecommerce project</h3>
      <h4>
        name is {name} and he is from {city}
      </h4>
      <ul>
        {dummyproduct.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
