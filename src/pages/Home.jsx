import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => (
  <main className="main-content">
    <header>
      <div>Math Magician</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quotes">Quote</Link>
      </nav>
    </header>
    <Outlet />
  </main>
);

export default Home;
