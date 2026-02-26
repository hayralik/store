import './product.css';

function Product(props) {
  return (
    <div className="product-card">   {/* ← вместо style */}
      <h3>{props.name}</h3>
      <p>Цена: {props.price} ₽</p>
      <button>В корзину</button>
    </div>
  );
}
export default Product;