import { Link } from 'react-router-dom';
import Product from './product';
import './productlist.css';

// Выносим функцию рендера
const renderProduct = (product) => (
  <Link 
    key={product.id} 
    to={`/product/${product.id}`}
    className="product-link"
  >
    <Product name={product.name} price={product.price} />
  </Link>
);

export default function ProductList() {
  const products = [
    { id: 1, name: "Ноутбук", price: 75000 },
    { id: 2, name: "Мышь", price: 1500 },
    { id: 3, name: "Клавиатура", price: 3500 },
    { id: 4, name: "Монитор", price: 18000 }
  ];

  return (
    <div className="product-list">
      {products.map(renderProduct)}
    </div>
  );
}