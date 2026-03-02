import { Link } from 'react-router-dom';
import Product from './product';
import './productlist.css';

import { useContext } from 'react';
import { CartContext } from '../../context/cartcontext';

const renderProduct = (product) => (
  <Link key={product.id} to={`/product/${product.id}`} className="product-link">
    <Product id={product.id} name={product.name} price={product.price} />
  </Link>
);

export default function CartPage() {
  const { cart } = useContext(CartContext);
  {/* return renderProduct ({ id: 1, name: "Ноутбук", price: 75 }); */}
  return renderProduct ({ cart });
}
    
