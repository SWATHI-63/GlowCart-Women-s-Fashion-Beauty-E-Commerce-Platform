import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>GlowCart ✨</h1>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#beauty">Beauty</a>
        <a href="#cart" className="cart-icon">🛒 Cart (0)</a>
      </nav>
    </header>
  );
};

export default Header;
