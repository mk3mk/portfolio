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

function App() {
  return (
    <div className="App">
      <Home urlImage={homeImg}/>
      <AboutMe urlImg={aboutImg}/>
      <MySkills/>
      <MyLatestProjects/>
      <CallToAction/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
