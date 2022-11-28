import React from 'react';
import './SideBar.css';
import Filter from './Filter';

const SideBar = () => {
  return (
    <div className="side__bar">
      <div className="side__bar-header">
        <span>Вибір за параметрами</span>
      </div>
      <div className="checkbox__section-theme">
        <Filter />
      </div>
    </div>
  );
};

export default SideBar;
