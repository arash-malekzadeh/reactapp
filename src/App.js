import "./App.css";
import ProductList from "./components/products/products";
const dummyproduct = ["product1", "product2", "product3"];

function App() {
  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <ProductList
        listOfProducts={dummyproduct}
        name="arash malekzadeh"
        city="yasooj"
      />
    </div>
  );
}

export default App;
