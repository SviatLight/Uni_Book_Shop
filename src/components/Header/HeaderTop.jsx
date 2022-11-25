import React from 'react';
import './HeaderTop.css';

const HeaderTop = () => {
  return (
    <div className="header__top">
      <ul className="menu">
        <li className="menu__item">
          <a href="/">Автори</a>
        </li>
        <li className="menu__item">
          <a href="/">ТОП книг</a>
        </li>
        <li className="menu__item">
          <a href="/">Доставка і оплата</a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderTop;
