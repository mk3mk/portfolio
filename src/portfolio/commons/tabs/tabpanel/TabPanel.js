import React from 'react';
import './tabPanel.scss'

export const TabPanel = ({tabs}) => {

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
          <li className="personal_quality">
            <p className="personal_quality_item">Independence</p>
            <p className="personal_quality_item">Stress resistance</p>
            <p className="personal_quality_item">A responsibility</p>
            <p className="personal_quality_item">Attentiveness</p>
            <p className="personal_quality_item">Mobility</p>
          </li>
          {/*<li>*/}
          {/*  <span>Initiative</span>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <span>Stress resistance</span>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <span>Energy</span>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <span>A responsibility</span>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <span>Attentiveness</span>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <span>Creativity</span>*/}
          {/*</li>*/}

        </ul>
      </div>

      <div className={`tab_panel ${tabs[2].selected ? "visible" : ""}`}>
        <ul>
          <li>
            <span>Front-end developer</span>
            <span> - IT-Incubator</span>
            <p>2021 - current</p>
          </li>
          <li>
            <span>Serviceman</span>
            <span> - Ministry of Defence</span>
            <p>2017 - 2021</p>
          </li>
        </ul>
      </div>

      <div className={`tab_panel ${tabs[3].selected ? "visible" : ""}`}>
        <ul>
          <li>
            <span>Front-end developer</span>
            <span> - IT-Incubator</span>
            <p>2021 - current</p>
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