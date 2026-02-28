import { useParams } from 'react-router-dom';

// Временные данные (потом вынесем)
const products = [
  { id: 1, name: "Ноутбук", price: 75000, description: "Мощный ноутбук для работы и игр" },
  { id: 2, name: "Мышь", price: 1500, description: "Беспроводная мышь" },
  { id: 3, name: "Клавиатура", price: 3500, description: "Механическая клавиатура" },
  { id: 4, name: "Монитор", price: 18000, description: "4K монитор 27 дюймов" },
  { id: 5, name: "Жесткий диск (HDD) Seagate Barracuda 4TB", price: 2000, description: "Надежный внутренний жесткий диск объемом 4 ТБ для хранения фотографий, видео и других файлов. Форм-фактор 3.5\", интерфейс SATA-III, скорость вращения 5400 об/мин, кэш 256 МБ." }
];

export default function ProductPage() {
  const { id } = useParams();  // получаем id из URL
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <h2>Товар не найден</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <p>Цена: {product.price} ₽</p>
      <p>Описание: {product.description}</p>
      <button>В корзину</button>
    </div>
  );
}