import Navigation from '../navigation/navigation';
import './layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        Шапка сайта (лого, контакты)
      </header>

      <Navigation />

      <div className="main-container">
        <aside className="sidebar-left">
          Левая колонка (фильтры, категории)
        </aside>

        <main className="content">
          {children}  {/* сюда подставятся страницы */}
        </main>

        <aside className="sidebar-right">
          Правая колонка (реклама, корзина)
        </aside>
      </div>

      <footer className="footer">
        Подвал (копирайт, ссылки)
      </footer>
    </div>
  );
}