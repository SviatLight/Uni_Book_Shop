import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './FilterItem.css';

const FilterItem = ({ item, name, setActiveCheckbox, removeAnActiveCheckbox }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const onChangeCheckbox = ({ target: { checked, value } }) => {
    if (checked === true) {
      dispatch(setActiveCheckbox(`&${name}=${value.toLowerCase().replace(/ /g, '_')}`));
    } else {
      dispatch(removeAnActiveCheckbox(`&${name}=${item.toLowerCase().replace(/ /g, '_')}`));
    }
    setIsChecked(!isChecked);
  };

  return (
    <div className="filter__item">
      <input
        id={item}
        className="checkbox"
        type="checkbox"
        value={item}
        checked={isChecked}
        onChange={onChangeCheckbox}
        name={name}
      />
      <label htmlFor={item}>{item}</label>
    </div>
  );
};

export default FilterItem;
