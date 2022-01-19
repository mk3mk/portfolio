import React from 'react';
import './footer.scss'
import {SocialIcon} from "../../commons/socialIcon/SocialIcon";
import facebook from './../../assets/socialIcon/bx_bxl-facebook.png'
import linkedIn from './../../assets/socialIcon/bx_bxl-linkedin.png'
import instagram from './../../assets/socialIcon/bx_bxl-instagram.png'
import telegram from './../../assets/socialIcon/bx_bxl-telegram.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="logo">
              <a href="#">
                <img src="" alt=""/>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <ul className="social_share d-flex justify-content-center">
              <SocialIcon urlIcon={facebook}/>
              <SocialIcon urlIcon={linkedIn}/>
              <SocialIcon urlIcon={instagram}/>
              <SocialIcon urlIcon={telegram}/>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="text">
              <p>
                Copyright © 2021 Rainbow-Themes. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};