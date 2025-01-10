import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header_inner">
        <div className="header_left">
          <div className="logo">
            <figure><img src="img/logo.svg" alt="Logo" /></figure>
          </div>
        </div>

        <div className="header_right">
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className="globalMenuSp">
            <ul>
              <li><a href="#PICKUP">PICK UP</a></li>
              <li><a href="#FEATURE">FEATURE</a></li>
              <li><a href="#CONTACT">CONTACT</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
