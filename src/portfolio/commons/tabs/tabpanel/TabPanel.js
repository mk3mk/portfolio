import React from 'react';
import './tabPanel.scss'

export const TabPanel = ({clicked}) => {

  const fullTabPanelClass = `tab_panel ${clicked ? "visible" : ""}`

  return (
    <div className={fullTabPanelClass}>
      <ul>
        <li>
          <span>User experience design</span>
          <span> - UI/UX</span>
          <p>Delight the user and make it work.</p>
        </li>
        <li>
          <span>User experience design</span>
          <span> - Development</span>
          <p>Websites, web experiences, ...</p>
        </li>
        <li>
          <span>Interaction design</span>
          <span> - Animation</span>
          <p>I like to move it move it.</p>
        </li>
      </ul>
    </div>
  );
};