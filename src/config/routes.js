import ProductList from '../components/store/productlist';
import ProductPage from '../components/store/productpage';

export const routes = [
  { path: "/", element: <h1>Главная страница</h1> },
  { path: "/catalog", element: <ProductList /> },
  { path: "/cart", element: <h1>Корзина (пусто)</h1> },
  { path: "/product/:id", element: <ProductPage /> }
];