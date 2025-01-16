function ButtonComponent() {
  return <button>Click</button>;
}

function ProductItem() {
  return (
    <div>
      <p>product1</p>
      <ButtonComponent />
    </div>
  );
}

export default ProductItem;
