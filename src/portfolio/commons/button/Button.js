import React from 'react';
import './button.scss'

export const Button = ( { btnName, btnClass, } ) => {
  const btnFullClass = `btn ${btnClass}`
  return (
    <div className={btnFullClass}>
      <a href="" className="btn">
        <span>{btnName}</span>
      </a>
    </div>
  );
};