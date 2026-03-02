import { useContext } from 'react';
import { CartContext } from '../../context/cartcontext';
import './product.css';

export default function Product({ id, name, price }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Цена: {price} ₽</p>
      <button onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Добавляем:', { id, name, price });
        addToCart({ id, name, price });
      }}>
        В корзину
      </button>
    </div>
  );
}