import "./App.css";
import ContextButtonComponent from "./components/products/components/context-example/button";
import ContextTextComponent from "./components/products/components/context-example/text";
import Users from "./components/products/components/users/Users";
import ProductList from "./components/products/products";

const dummyproduct = ["product1", "product2", "product3"];

function App() {
  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      {/* <ProductList listOfProducts={dummyproduct} /> */}
      {/* <Users /> */}

      <ContextButtonComponent />
      <ContextTextComponent />
    </div>
  );
}

export default App;
