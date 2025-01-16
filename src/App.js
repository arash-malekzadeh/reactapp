import "./App.css";
import ProductList from "./components/products/products";
import ClassBasedComponent from "./components/ClassBasedComponent";

const dummyproduct = ["product1", "product2", "product3"];

function App() {
  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <ClassBasedComponent />
    </div>
  );
}

export default App;
