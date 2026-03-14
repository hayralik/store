import Navigation from '../navigation/navigation';
import './layout.css';
import RegisterForm from '../store/RegisterForm';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        Шапка сайта (лого, контакты)
      </header>

      <Navigation />

      <div className="main-container">
        <aside className="sidebar-left">
          <RegisterForm onRegisterSuccess={() => {
            // Что сделать после успешной регистрации
            // Например, перенаправить на страницу входа
            console.log('Регистрация успешна!');
          }} />
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