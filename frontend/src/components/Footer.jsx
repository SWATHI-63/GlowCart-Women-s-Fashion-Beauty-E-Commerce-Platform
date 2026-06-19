import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>GlowCart ✨</h3>
          <p>Your ultimate destination for women's fashion and beauty. Shine bright, live beautifully.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#shop">Shop Fashion</a></li>
            <li><a href="#beauty">Shop Beauty</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customer Care</h4>
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#shipping">Shipping & Returns</a></li>
            <li><a href="#size-guide">Size Guide</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GlowCart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
