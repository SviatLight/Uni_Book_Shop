import React from 'react';
import './BookList.css';
import BookItem from './BookItem';
import { useGetBooksQuery } from '../../redux/booksAPI';
import BookItemSkeleton from './Skeleton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BooksList = () => {
  const { search } = useSelector((state) => state.paramsSlice);
  const { data: books = [], isError: BookError, isLoading: BookLoading } = useGetBooksQuery();
  console.log(search);
  if (BookError) {
    return <h1>Сталася посилка, спробуйте перезавантажити сторінку!</h1>;
  }

  return (
    <div className="book__items">
      {BookLoading
        ? [...new Array(8)].map((_, index) => <BookItemSkeleton key={index} />)
        : books.map((item) => (
            <Link to={`/book/${item.id}`} key={item.id}>
              <BookItem {...item} />
            </Link>
          ))}
    </div>
  );
};

export default BooksList;
