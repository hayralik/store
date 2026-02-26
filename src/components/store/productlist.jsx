import Product from './product';
import './productlist.css';

function ProductList() {
  const products = [
    { id: 1, name: "Ноутбук", price: 75000 },
    { id: 2, name: "Мышь", price: 1500 },
    { id: 3, name: "Клавиатура", price: 3500 },
    { id: 4, name: "Монитор", price: 18000 },
    { id: 5, name: "Ноутбук", price: 75000 },
    { id: 6, name: "Мышь", price: 1500 },
    { id: 7, name: "Клавиатура", price: 3500 },
    { id: 8, name: "Монитор", price: 18000 }
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;