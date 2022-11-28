import React from 'react';
import './Header.css';
import Sale from '../../assets/img/sale_1.png';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';

const Header = () => {
  return (
    <div className="header">
      <div className="sale__banner">
        <img src={Sale} alt="Sale" />
      </div>
      <div className="header__top-m">
        <HeaderTop />
      </div>
      <div className="header__middle-m">
        <HeaderMiddle />
      </div>
      <div className="header__bottom-m">
        <HeaderBottom />
      </div>
    </div>
  );
};

export default Header;
