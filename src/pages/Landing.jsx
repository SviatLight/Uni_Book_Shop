import React from 'react';
import './Landing.css';
import BooksList from '../components/BooksList';
import SideBar from '../components/SideBar';
import SortBlock from '../components/Sort';

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="sidebar-wrapper">
        <SideBar />
      </div>
      <div className="book__list-wrapper">
        <SortBlock />
        <BooksList />
      </div>
    </div>
  );
};

export default Landing;
