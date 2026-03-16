import { Link } from 'react-router-dom';
import Product from './product';
import './productlist.css';
import { useState, useEffect } from 'react';
import AddProductForm from './AddProductForm';

// Выносим функцию рендера
const renderProduct = (product) => (
  <Link key={product.id} to={`/product/${product.id}`} className="product-link">
    <Product id={product.id} name={product.name} price={product.price} />
  </Link>
);

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Ошибка:', err));
  };
  useEffect(loadProducts, []);

  console.log('products from server:', products);

  return (
    <div>
      <AddProductForm onProductAdded={loadProducts} />
      <div className="product-list">
        {products.map(renderProduct)}
      </div>
    </div>
  );

  //  return (
  //    <div className="product-list">
  //      {products.map(renderProduct)}
  //    </div>
  //  );
}