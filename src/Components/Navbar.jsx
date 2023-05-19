import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('clicked');
  };

  return (
    <div className="navbar">
      <div className="navbar__dropdown" onClick={toggleMenu}>
        <MenuIcon className="menu-icon" />
        {isOpen && (
          <ul className="menu">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="services">Services</a>
            </li>
            <li>
              <a href="cuntact">Contact</a>
            </li>
          </ul>
        )}
      </div>
      <img
        src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"
        alt="navbar-logo"
        className="navbar__logo"
      />
    </div>
  );
};

export default Navbar;
