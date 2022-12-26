import React from 'react';
import FilterItem from './FilterItem';
import {
  setActiveThemes,
  removeAnActiveThemes,
  removeAllThemes,
} from '../../../redux/slices/paramsSlice';

const themes = ['Детектив', 'Пригоди'];

const Filter = () => {
  return (
    <div className="side__bar">
      <div className="header-themes">
        <h2>Тематика</h2>
      </div>
      <div className="checkbox__section">
        {themes.map((item, index) => (
          <FilterItem
            key={item + index}
            item={item}
            name={'theme'}
            setActiveCheckbox={setActiveThemes}
            removeAnActiveCheckbox={removeAnActiveThemes}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
