import { Routes, Route } from 'react-router-dom';
import ProductList from './components/store/productlist';
import Navigation from './components/navigation/navigation';

function App() {
  const routes = [
    { 
      path: "/", 
      element: (
        <>
          <h1>Главная страница</h1>
          <p>Добро пожаловать в магазин</p>
        </>
      )
    },
    { 
      path: "/catalog", 
      element: <ProductList />
    },
    { 
      path: "/cart", 
      element: <h1>Корзина (пусто)</h1>
    }
  ];

  return (
    <div>
      <Navigation />
      
      <Routes>
        {routes.map(route => (
          <Route 
            key={route.path} 
            path={route.path} 
            element={route.element} 
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;