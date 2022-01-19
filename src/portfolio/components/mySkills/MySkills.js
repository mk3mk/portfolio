import React from 'react';
import './mySkills.scss'
import {Title} from "../../commons/title/Title";

import antDesign from './../../assets/mySkills/logos_ant-design.png'
import bootstrap from './../../assets/mySkills/logos_bootstrap.png'
import css3 from './../../assets/mySkills/logos_css-3.png'
import html5 from './../../assets/mySkills/logos_html-5.png'
import js from './../../assets/mySkills/logos_javascript.png'
import mui from './../../assets/mySkills/logos_material-ui.png'
import react from './../../assets/mySkills/logos_react.png'
import redux from './../../assets/mySkills/logos_redux.png'
import ts from './../../assets/mySkills/logos_typescript.png'

import {Skill} from "./skill/Skill";

export const MySkills = () => {
  return (
    <div className="my_skills">
      <div className="container">
        <div className="row">
          <Title title={"My professional skills"}
                 subtitle={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."}/>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="my_skills_section">
              <Skill urlImg={antDesign}/>
              <Skill urlImg={bootstrap}/>
              <Skill urlImg={css3}/>
              <Skill urlImg={html5}/>
              <Skill urlImg={js}/>
              <Skill urlImg={mui}/>
              <Skill urlImg={react}/>
              <Skill urlImg={redux}/>
              <Skill urlImg={ts}/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};