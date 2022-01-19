import React from 'react';
import './header.scss'
import {NavItem} from "./navItem/NavItem";
import {SocialIcon} from "../../commons/socialIcon/SocialIcon";
import facebook from "../../assets/socialIcon/bx_bxl-facebook.png";
import linkedIn from "../../assets/socialIcon/bx_bxl-linkedin.png";
import instagram from "../../assets/socialIcon/bx_bxl-instagram.png";
import telegram from "../../assets/socialIcon/bx_bxl-telegram.png";
import {Button} from "../../commons/button/Button";

export const Header = () => {
  const isScrolled = false
  const fullClassHeader = `header ${isScrolled ? "sticky_header" : ""}`
  const fullClassHeaderWrapper = `header_wrapper  d-flex justify-content-between align-items-center ${isScrolled ? "sticky_wrapper" : ""}`

  return (
    <header className={fullClassHeader}>
      <div className={fullClassHeaderWrapper}>
        <div className="header_left d-flex align-items-center">
          <div className="logo">
            <img src="" alt=""/>
          </div>
          <nav className="menu_nav">
            <ul>
              <NavItem isCurrent={true} title={"Home"}/>
              <NavItem isCurrent={false} title={"About"}/>
              <NavItem isCurrent={false} title={"Skills"}/>
              <NavItem isCurrent={false} title={"Projects"}/>
              <NavItem isCurrent={false} title={"Contacts"}/>
            </ul>
          </nav>
        </div>
        <div className="header_right d-flex justify-content-between align-items-center flex-wrap">
          <ul className="social_inner d-flex justify-content-start align-items-center flex-wrap">
            <SocialIcon urlIcon={facebook}/>
            <SocialIcon urlIcon={linkedIn}/>
            <SocialIcon urlIcon={instagram}/>
            <SocialIcon urlIcon={telegram}/>
          </ul>
          <Button btnName={"Call me"} btnClass={"header_btn"}/>
        </div>
      </div>
    </header>
  );
};