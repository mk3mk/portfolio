import React from 'react';
import './myLatestProjects.scss'
import {Project} from "./project/Project";
import {Title} from "../../commons/title/Title";
import {Button} from "../../commons/button/Button";

export const MyLatestProjects = () => {
  return (
    <div id="projects" className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Title title={"My Latest Project"}
                   subtitle={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."}/>
          </div>
        </div>
        <div className="row">
          <Project title={"Getting tickets to the big show"}
                   urlImage={"https://trydo.rainbowit.net/assets/images/portfolio/portfolio-1.jpg"}
                   technologies={"Development"}/>
          <Project title={"Getting tickets to the big show"}
                   urlImage={"https://trydo.rainbowit.net/assets/images/portfolio/portfolio-1.jpg"}
                   technologies={"Development"}/>
          <Project title={"Getting tickets to the big show"}
                   urlImage={"https://trydo.rainbowit.net/assets/images/portfolio/portfolio-1.jpg"}
                   technologies={"Development"}/>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Button btnName={"View more"} btnClass={"view-more-btn"}/>
          </div>
        </div>
      </div>
    </div>
  );
};