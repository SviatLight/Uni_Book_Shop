import React from 'react';
import Filter from './Filter';

const SideBar = () => {
  return (
    <div className="side__bar">
      <div className="side__bar-header">
        <span>Вибір за параметрами</span>
      </div>
      <div className="checkbox__section">
        <Filter />
      </div>
    </div>
  );
};

export default SideBar;
