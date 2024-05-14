import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faFlag } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import userpic from './Images/user.jpg'
import alpine from './Images/alpine.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={alpine} alt="Logo" />
      </div>
      <div className="navbar-right">
        <FontAwesomeIcon icon={faBell} className="navbar-icon" />
        <FontAwesomeIcon icon={faFlag} className="navbar-icon" />
        <select className="navbar-dropdown">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
        <div className="navbar-divider"></div>
        <div className="navbar-user">
          <img src={userpic} alt="User" className="navbar-user-image" />
          <span className="navbar-user-name">John Doe</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
