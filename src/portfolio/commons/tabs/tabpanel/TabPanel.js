import React from 'react';
import './tabPanel.scss'

export const TabPanel = ({clicked, tabs}) => {

  return (
    <>
      <div className={`tab_panel ${tabs[0].selected ? "visible" : ""}`}>
        <ul>

          <li>
            <span>Software development</span>
            <span> - Development</span>
            <p>React / Redux / Type Script</p>
          </li>
          <li>
            <span>User experience development</span>
            <span> - Development</span>
            <p>Delight the user and make it work.</p>
          </li>
          <li>
            <span>Interaction design</span>
            <span> - Development</span>
            <p>Use of different UI libraries</p>
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
            <span>Front-end developer</span>
            <span> - IT-Incubator</span>
            <p>2021 - now</p>
          </li>
          <li>
            <span>Back-end developer</span>
            <span> - JavaRush</span>
            <p>2019 - 2020</p>
          </li>
          <li>
            <span>Operation of the air transport</span>
            <span> - Military Academy, Belarus, Minsk</span>
            <p>2012 - 2017</p>
          </li>
        </ul>
      </div>
    </>
  );
};