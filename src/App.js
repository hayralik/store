import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import { routes } from './config/routes';

const renderRoute = (route) => (
  <Route key={route.path} path={route.path} element={route.element} />
);

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        {routes.map(renderRoute)}
      </Routes>
    </div>
  );
}

export default App;