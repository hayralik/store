import { Link } from 'react-router-dom';
import './navigation.css';

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to="/">Главная</Link>
      <Link to="/catalog">Каталог</Link>
      <Link to="/cart">Корзина</Link>
      <Link to="/about">О нас</Link>
    </nav>
  );
}