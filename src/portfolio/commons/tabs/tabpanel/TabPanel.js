import React from 'react';
import './tabPanel.scss'

export const TabPanel = ({clicked, tabs}) => {

  return (
    <>
      <div className={`tab_panel ${tabs[0].selected ? "visible" : ""}`}>
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

      <div className={`tab_panel ${tabs[1].selected ? "visible" : ""}`}>
        <ul>
          <li>
            <span>Awwwards.com</span>
            <span> - Winner</span>
            <p>2019 - 2020</p>
          </li>
          <li>
            <span>User experience design</span>
            <p>2017 - 2018</p>
          </li>
        </ul>
      </div>

      <div className={`tab_panel ${tabs[2].selected ? "visible" : ""}`}>
        <ul>
          <li>
            <span>Sr. Front-end Engineer</span>
            <span> - Google</span>
            <p>2018 - Current</p>
          </li>
          <li>
            <span>Front-end Engineer</span>
            <span> - Microsoft</span>
            <p>2017 - 2018</p>
          </li>
          <li>
            <span>Software Engineer</span>
            <span> - Alibaba</span>
            <p>2013 - 2014</p>
          </li>
        </ul>
      </div>

      <div className={`tab_panel ${tabs[3].selected ? "visible" : ""}`}>
        <ul>
          <li>
            <span>BSc In CSE</span>
            <span> - ABC University, Los Angeles, CA</span>
            <p>2010</p>
          </li>
          <li>
            <span>Diploma in Computer Science</span>
            <span> - Gamma Technical Institute</span>
            <p>2009</p>
          </li>
          <li>
            <span>Graphic Designer</span>
            <span> - ABC Institute, Los Angeles, CA</span>
            <p>2008</p>
          </li>
        </ul>
      </div>
    </>
  );
};