function Product(props) {
  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <h3>{props.name}</h3>
      <p>Цена: {props.price} ₽</p>
      <button>В корзину</button>
    </div>
  );
}

export default Product;