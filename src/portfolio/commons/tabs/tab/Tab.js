import React from 'react';
import './tab.scss'

export const Tab = ({selected, title}) => {

  const fullTabClass = `tab ${selected ? "tab_selected" : ""}`

  return (
    <li className={fullTabClass}>{title}</li>
  );
};