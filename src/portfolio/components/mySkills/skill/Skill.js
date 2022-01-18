import React from 'react';
import './skill.scss'
import react from './../../../assets/mySkills/react.png'

export const Skill = (
  {
    urlImg
  }
) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12 text-left">
      <div className="skill">
        <img className="skill_img" src={urlImg} alt=""/>
      </div>
    </div>

  );
};