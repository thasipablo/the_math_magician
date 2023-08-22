import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => (
  <main className="main-content">
    <header>
      <div>Math Magician</div>
      <nav>
        <Link to="/calculator" />
        <Link to="/quotes" />
      </nav>
    </header>
    <Outlet />
  </main>
);

export default Home;
