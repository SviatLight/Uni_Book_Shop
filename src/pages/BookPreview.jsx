import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookPreview.css';
import EmptyStar from '../assets/img/star.png';
import Feedback from '../assets/img/feedback.png';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BookPreview = () => {
  const { id } = useParams();
  const [bookItem, setBookItem] = useState({});
  const [bookError, setBookError] = useState();
  const [isLoadingBook, setIsLoadingBook] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoadingBook(true);
        const { data } = await axios(`https://localhost:5001/api/books/${id}`);
        setBookItem(data);
      } catch (error) {
        if (error) {
          setBookError(error.message);
        }
      } finally {
        setIsLoadingBook(false);
      }
    })();
  }, [id]);

  if (isLoadingBook) {
    return <h1>Завантаження ...</h1>;
  }

  if (bookError) {
    return (
      <>
        <h1>Книги не знайдено</h1>
        <Link to="/">Повернутися на головну!</Link>
      </>
    );
  }

  return (
    <div className="book__preview-wrapper">
      <div className="book__preview-side">
        <div className="book__preview-img">
          <img src={bookItem.photo} alt={bookItem.name} />
        </div>
        <div className="book__preview-details">
          <div className="book__preview-title">
            <h2>{bookItem.name}</h2>
          </div>
          <div className="book__preview-key">
            <p>Код товару: ІЛ-{bookItem.bookCode}</p>
          </div>
          <div className="book__preview-feedback">
            <div className="feedback-stars">
              <img src={EmptyStar} alt="" />
              <img src={EmptyStar} alt="" />
              <img src={EmptyStar} alt="" />
              <img src={EmptyStar} alt="" />
              <img src={EmptyStar} alt="" />
            </div>
            <p>
              <span>
                <img src={Feedback} alt="Feedback" className="feedback" />
              </span>{' '}
              Відгуки 9
            </p>
          </div>
          <div className="book__preview-description">
            <div className="description-author-year">
              <p>Автор: {bookItem.author}</p>
              <p>Рік видання: 2022</p>
            </div>
            <div className="description-translated">
              <p>Видавництво: {bookItem.edition}</p>
              <p>Перекладна: Так</p>
            </div>
          </div>
        </div>
      </div>
      <div className="advice-side"></div>
    </div>
  );
};

export default BookPreview;
