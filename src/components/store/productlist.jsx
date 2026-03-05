import { Link } from 'react-router-dom';
import Product from './product';
import './productlist.css';
import { useState, useEffect } from 'react';

// Выносим функцию рендера
const renderProduct = (product) => (
  <Link key={product.id} to={`/product/${product.id}`} className="product-link">
    <Product id={product.id} name={product.name} price={product.price} />
  </Link>
);

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Ошибка:', err));
  }, []);

  console.log('products from server:', products);
  return (
    <div className="product-list">
      {products.map(renderProduct)}
    </div>
  );
}