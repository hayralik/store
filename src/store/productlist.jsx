import Product from './product';

function ProductList() {
  const products = [
    { name: "Ноутбук", price: 75000 },
    { name: "Мышь", price: 1500 },
    { name: "Клавиатура", price: 3500 },
    { name: "Монитор", price: 18000 }
  ];

  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      {products.map((product, index) => (
        <Product key={index} name={product.name} price={product.price} />
      ))}
    </div>
  );
}

export default ProductList;