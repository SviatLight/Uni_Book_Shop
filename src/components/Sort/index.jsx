import React from 'react';
import './SortBlock.css';
import Pagination from './Pagination';
import Sort from './Sort';

const SortBlock = () => {
  return (
    <div className="sort__block-wrapper">
      <div className="sort__wrapper">
        <Sort />
      </div>
      <div className="pagination__wrapper">
        <Pagination />
      </div>
    </div>
  );
};

export default SortBlock;
