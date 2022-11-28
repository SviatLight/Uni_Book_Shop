import React from 'react';
import './Input.css';

const Input = ({
  placeholder,
  type,
  labelTitle,
  divClass,
  labelClass,
  inputClass,
  error,
  errorClass,
  onChange,
}) => {
  const onChangeInput = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={`${divClass}`}>
      <label className={`${labelClass}`}>{labelTitle}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`${inputClass} input__component`}
        onChange={(event) => onChangeInput(event)}
      />
      <p className={errorClass}>{error}</p>
    </div>
  );
};

export default Input;
