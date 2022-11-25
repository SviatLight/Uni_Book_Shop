import React from 'react';
import './HeaderMiddle.css';
import Logo from '../../assets/img/header-logo.png';
import { Link } from 'react-router-dom';

const HeaderMiddle = () => {
  return (
    <div className="header__middle-wrapper">
      <div className="header__logo">
        <Link to={'/'}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="header__slider"></div>
      <div className="header__contact">
        <ul>
          <li>Інтернет-магазин</li>
          <li>
            <a href="tel:0(800) 33-05-66">(0800) 33-05-66</a>
          </li>
          <li>
            <a href="tel:(044) 333-42-20">(044) 333-42-20</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMiddle;
