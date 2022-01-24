import React from 'react';
import './socialIcon.scss'

export const SocialIcon = ({urlIcon, urlSocial}) => {
  return (
    <li>
      <a href={urlSocial}>
        <img src={urlIcon} alt="social_icon"/>
      </a>
    </li>
  );
};