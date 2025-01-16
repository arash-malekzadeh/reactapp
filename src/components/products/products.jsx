import ProductItem from "./components/Product-item";

const dummyproduct = ["product1", "product2", "product3"];

function ProductList() {
  return (
    <div>
      <h3> ecommerce project</h3>
      <ul>
        {dummyproduct.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
