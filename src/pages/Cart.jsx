import React from 'react';
import './Cart.css';
import Cross from '../assets/img/cross.svg';

const Cart = () => {
  return (
    <div className="cart__wrapper">
      <div className="cart__header">
        <h2>Товар доданий у кошик</h2>
        <div className="cart__close">
          <img src={Cross} alt="cross" className="cross" />
        </div>
      </div>
      <div className="cart__inf">
        <p>Кінцеву вартість буде розраховано на сторінці оформлення замовлення</p>
      </div>
      <div className="cart__item-wrapper">
        <div className="cart__item">
          <div className="cart__book-img">
            <img
              src="https://book-ye.com.ua/upload/resize_cache/iblock/7f4/160_160_1/b91545ef_334e_11ed_8175_0050568ef5e6_68d5c824_340b_11ed_8175_0050568ef5e6.jpg"
              alt="book"
            />
          </div>
          <div className="cart__book-description">
            <div className="book__header">
              <h2>Чотири скарби неба (м'яка обкладинка)</h2>
            </div>
            <p>UA</p>
            <p>Код товару:</p>
          </div>
          <div className="cart__book-price">
            <span>279 грн</span>
          </div>
          <div className="cart__book-counter">
            <span>-</span>
            <p>1</p>
            <span>+</span>
          </div>
          <div className="cart__book-price-inc">
            <p>279 грн</p>
          </div>
          <div className="cart__book-delete">
            <img src={Cross} alt="cross" className="cross" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
