import React, {useEffect, useState} from 'react';
import './header.scss'
import './navItem/navItem.scss'
import {SocialIcon} from "../../commons/socialIcon/SocialIcon";
import facebook from "../../assets/socialIcon/bx_bxl-facebook.png";
import linkedIn from "../../assets/socialIcon/bx_bxl-linkedin.png";
import instagram from "../../assets/socialIcon/bx_bxl-instagram.png";
import telegram from "../../assets/socialIcon/bx_bxl-telegram.png";
import {Button} from "../../commons/button/Button";
import Scrollspy from 'react-scrollspy'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const fullClassHeader = `header ${isScrolled ? "sticky_header" : ""}`
  const fullClassHeaderWrapper = `header_wrapper  d-flex justify-content-between align-items-center ${isScrolled ? "sticky_wrapper" : ""}`

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 1);
    });
  }, []);

  return (
    <header className={fullClassHeader}>
      <div className={fullClassHeaderWrapper}>
        <div className="header_left d-flex align-items-center">
          <div className="logo">
            <img src="" alt=""/>
          </div>
          <nav className="menu_nav">
            <Scrollspy className="main_menu" items={['home','about','skills','projects','contacts']} currentClassName="is-current" offset={-200}>
              <li className="nav_item"><a href={"#home"}>Home</a></li>
              <li className="nav_item"><a href={"#about"}>About</a></li>
              <li className="nav_item"><a href={"#skills"}>Skills</a></li>
              <li className="nav_item"><a href={"#projects"}>Projects</a></li>
              <li className="nav_item"><a href={"#contacts"}>Contacts</a></li>
            </Scrollspy>
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