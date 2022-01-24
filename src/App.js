import './App.css';
import {MyLatestProjects} from "./portfolio/components/myLatestProjects/MyLatestProjects";
import {MySkills} from "./portfolio/components/mySkills/MySkills";
import {CallToAction} from "./portfolio/components/callToAction/CallToAction";
import {Contacts} from "./portfolio/components/contacts/Contacts";
import {Footer} from "./portfolio/components/footer/Footer";
import {AboutMe} from "./portfolio/components/aboutMe/AboutMe";
import {Home} from "./portfolio/components/home/Home";
import homeImg from './portfolio/assets/home/bg-home-image.jpg'
import aboutImg from './portfolio/assets/aboutMe/about-image.jpg'
import {Header} from "./portfolio/components/header/Header";
// import contactImg from 'https://trydo.rainbowit.net/assets/images/about/about-9.jpg'

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Home urlImage={homeImg}/>
      <AboutMe urlImg={aboutImg}/>
      <MySkills/>
      <MyLatestProjects/>
      <CallToAction/>
      <Contacts urlImg={"https://trydo.rainbowit.net/assets/images/about/about-9.jpg"}/>
      <Footer/>
    </div>
  );
}
