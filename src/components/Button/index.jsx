import React from 'react';

const Button = ({ title, btnClass, onClick }) => {
  return (
    <button className={`${btnClass}`} onClick={() => onClick()}>
      {title}
    </button>
  );
};

export default Button;
