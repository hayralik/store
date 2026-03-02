import { useContext } from 'react';
import { CartContext } from '../../context/cartcontext';

const renderCartItem = (item) => (
  <div key={item.id}>
    {item.name}: {item.price} ₽
  </div>
);

export default function CartPage() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p>Корзина пуста</p>;
  }

  return (
    <div>
      <h2>Корзина</h2>
      {cart.map(renderCartItem)}
    </div>
  );
}