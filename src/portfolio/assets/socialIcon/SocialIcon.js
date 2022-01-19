import React from 'react';
import './socialIcon.scss'

export const SocialIcon = ({urlIcon}) => {
  return (
    <li>
      <a href="">
        <img src={urlIcon} alt="social_icon"/>
      </a>
    </li>
  );
};