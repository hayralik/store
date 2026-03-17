import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';  // добавил useState, useEffect
import { CartContext } from '../../context/cartcontext';
import './productpage.css';

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);  // внутри компонента

  useEffect(() => {
    console.log('API_URL:', process.env.REACT_APP_API_URL)
    fetch(`${process.env.REACT_APP_API_URL}/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error('Ошибка:', err));
  }, [id]);

  if (!product) return <h2>Загрузка...</h2>;

  return (
    <div className='product-page'>
      <h1>{product.name}</h1>
      <p>Цена: {product.price} ₽</p>
      <p>Описание: {product.description}</p>
      <button onClick={() => {
        console.log('Добавляем:', product);
        addToCart({ id: product.id, name: product.name, price: product.price });
      }}>
        В корзину
      </button>
    </div>
  );
}