import { Routes, Route } from 'react-router-dom';
import ProductList from './components/store/productlist';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <div>
      <Navigation />
      
      <Routes>
        <Route path="/" element={
          <>
            <h1>Главная страница</h1>
            <p>Добро пожаловать в магазин</p>
          </>
        } />
        
        <Route path="/catalog" element={
          <>
            <h1>Каталог товаров</h1>
            <ProductList />
          </>
        } />
        
        <Route path="/cart" element={
          <h1>Корзина (пусто)</h1>
        } />
      </Routes>
    </div>
  );
}

export default App;
