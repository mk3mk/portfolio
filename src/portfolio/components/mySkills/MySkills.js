import React from 'react';
import {Title} from "../../commons/title/Title";
import './mySkills.scss'
import {Skill} from "./skill/Skill";
import react from './../../assets/mySkills/react.png'

export const MySkills = () => {
  return (
    <div className="my_skills">
      <div className="container">
        <div className="row">
          <Title title={"My professional skills"}
                 subtitle={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."}/>
        </div>
        <div className="row">
          <Skill urlImg={react}/>
          <Skill urlImg={react}/>
          <Skill urlImg={react}/>
          <Skill urlImg={react}/>
          <Skill urlImg={react}/>
          <Skill urlImg={react}/>
        </div>
      </div>
    </div>
  );
};