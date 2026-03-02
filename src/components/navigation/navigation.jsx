import { Link } from 'react-router-dom';
import './navigation.css';

import { useContext } from 'react';
import { CartContext } from '../../context/cartcontext';

export default function Navigation() {
  const { cart } = useContext(CartContext);
  return (
    <nav className="nav">
      <Link to="/">Главная</Link>
      <Link to="/catalog">Каталог</Link>
      <Link to="/cart">Корзина ({cart.length})</Link>
      <Link to="/about">О нас</Link>
    </nav>
  );
}