import React from 'react';
import './BookItem.css';
import EmptyStar from '../../assets/img/star.png';

const BookItem = ({ name, price, photo, author }) => {
  return (
    <div className="book__item">
      <div className="book__image">
        <img src={photo} alt={name} />
      </div>
      <div className="book__title">
        <p>{name}</p>
      </div>
      <div className="book__author">
        <p>{author}</p>
      </div>
      <div className="book__feedback">
        <span>Напиши відгук першим</span>
      </div>
      <div className="book__rate">
        <img src={EmptyStar} alt="" />
        <img src={EmptyStar} alt="" />
        <img src={EmptyStar} alt="" />
        <img src={EmptyStar} alt="" />
        <img src={EmptyStar} alt="" />
      </div>
      <div className="book__nav">
        <div className="book__price">
          <span>{price} грн</span>
        </div>
        <div className="book__btn">
          <button>Купити</button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
