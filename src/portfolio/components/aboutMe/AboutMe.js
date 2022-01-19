import React from 'react';
import './aboutMe.scss'
import {Title} from "../../commons/title/Title";
import {Tab} from "../../commons/tabs/tab/Tab";
import {TabPanel} from "../../commons/tabs/tabpanel/TabPanel";

export const AboutMe = ({urlImg}) => {
  return (
    <div className="about">
      <div className="about_wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="thumbnail">
                <img src={urlImg} alt="photo"/>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="inner">
                <Title title={"About Me"}
                       subtitle={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum"}
                />
                <div className="row section_info">
                  <div className="col-lg-12">
                    <ul className="tabs">
                      <Tab title={"Main skills"} selected={true}/>
                      <Tab title={"Awards"} selected={false}/>
                      <Tab title={"Experience"} selected={false}/>
                      <Tab title={"Education & Certification"} selected={false}/>
                    </ul>
                  </div>
                  <TabPanel clicked={true}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};