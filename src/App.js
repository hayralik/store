import { Routes, Route } from 'react-router-dom';
import ProductList from './components/store/productlist';
import Navigation from './components/navigation/navigation';
import ProductPage from './components/store/productpage';
import CartPage from './components/store/cartpage';
// import { Children } from 'react';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>Главная страница</h1>} />
        <Route path="/catalog" element={<ProductList />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<h1>А вы знаете, почему нас не перебодали?<br />
        Потому что мы - банда!</h1>} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;