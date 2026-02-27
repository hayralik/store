import { Routes, Route } from 'react-router-dom';
import ProductList from './components/store/productlist';
import Navigation from './components/navigation/navigation';
import ProductPage from './components/store/productpage';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>Главная страница</h1>} />
        <Route path="/catalog" element={<ProductList />} />
        <Route path="/cart" element={<h1>Корзина (пусто)</h1>} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;