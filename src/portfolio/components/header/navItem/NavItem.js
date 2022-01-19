import React from 'react';
import './navItem.scss'

export const NavItem = ({isCurrent, title}) => {

  const fullClassNavItem = `nav_item ${isCurrent ? "selected" : ""}`

  return (
    <li className={fullClassNavItem}>
      <a href="#">{title}</a>
    </li>
  );
};