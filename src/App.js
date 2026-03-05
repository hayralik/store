import { Routes, Route } from 'react-router-dom';
import ProductList from './components/store/productlist';
import ProductPage from './components/store/productpage';
import CartPage from './components/store/cartpage';
import Layout from './components/layout/layout';

/* просто для того, чтобы изменить что-то в файле!*/
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Главная страница</h1>} />
          <Route path="/catalog" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<h1>А вы знаете, почему нас не перебодали?<br />
            Потому что мы - банда!</h1>} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;