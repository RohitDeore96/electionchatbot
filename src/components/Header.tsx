import React from 'react';
import { ShieldCheck, UserCircle, Menu } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header glass-panel">
      <div className="header-container">
        <div className="logo">
          <ShieldCheck className="logo-icon" size={28} />
          <span className="logo-text">ElectAssist</span>
        </div>
        
        <nav className="desktop-nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#security" className="nav-link">Security & Privacy</a>
        </nav>

        <div className="header-actions">
          <button className="auth-btn">
            <UserCircle size={20} />
            <span>Sign In</span>
          </button>
          <button className="mobile-menu-btn">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
