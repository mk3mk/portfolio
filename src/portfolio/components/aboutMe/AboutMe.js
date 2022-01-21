import React, {useState} from 'react';
import './aboutMe.scss'
import {Title} from "../../commons/title/Title";
import {Tab} from "../../commons/tabs/tab/Tab";
import {TabPanel} from "../../commons/tabs/tabpanel/TabPanel";

export const AboutMe = ({urlImg}) => {
  const initialTabs = [
    {id: 1, title: "Main Skills", selected: true},
    {id: 2, title: "Awards", selected: false},
    {id: 3, title: "Experience", selected: false},
    {id: 4, title: "Education & Certification", selected: false},
  ]
  const [tabs, setTabs] = useState(initialTabs)
  const changeSelectTabCallback = (id, selected) => {
    const newTabs = tabs.map(tab => tab.id === id ? {...tab, selected: selected} : {...tab, selected: false})
    setTabs(newTabs)
  }

  return (
    <div id="about" className="about">
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
                       subtitle={"There are many variations of passages of Lorem Ipsum available, " +
                       "but the majority have suffered in some form, by injected humour, " +
                       "or randomised words which dont look even slightly believable. " +
                       "If you are going to use a passage of Lorem Ipsum"}/>
                <div className="row section_info">
                  <div className="col-lg-12">
                    <ul className="tabs">
                      {tabs.map(tab => {
                        return (
                          <Tab
                            key={`${tab.id}-${tab.title}`}
                            id={tab.id}
                            title={tab.title}
                            selected={tab.selected}
                            changeSelectTabCallback={changeSelectTabCallback}
                          />
                        )
                      })}

                    </ul>
                  </div>
                  <TabPanel clicked={true} tabs={tabs}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};