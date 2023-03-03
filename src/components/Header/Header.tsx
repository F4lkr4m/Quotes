import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.scss';

export const HeaderWithLayout = () => {
  return (
    <>
    <div className="header">
      <nav className="header_navigation">
        <Link to="/about">О приложении</Link>
        <Link to="/quotes/a">Котировки А</Link>
        <Link to="/quotes/b">Котировки Б</Link>
      </nav>
    </div>
    <main className="content">
      <Outlet />
    </main>
    </>
  );
}