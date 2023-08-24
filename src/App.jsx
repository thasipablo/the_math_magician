import {
  BrowserRouter, Link, Outlet, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

const MainLayout = () => (
  <main className="main-content">
    <header className="header">
      <div className="logo">Math Magician</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quotes">Quote</Link>
      </nav>
    </header>
    <section className="page-container">
      <Outlet />
    </section>
  </main>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quote />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
