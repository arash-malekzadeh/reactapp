import "./App.css";
import ProductList from "./components/products/products";

function App() {
  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <ProductList name="arash malekzadeh" city="yasooj" />
    </div>
  );
}

export default App;
