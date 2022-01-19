import './App.css';
import {MyLatestProjects} from "./portfolio/components/myLatestProjects/MyLatestProjects";
import {MySkills} from "./portfolio/components/mySkills/MySkills";
import {CallToAction} from "./portfolio/components/callToAction/CallToAction";
import {Contacts} from "./portfolio/components/contacts/Contacts";
import {Footer} from "./portfolio/components/footer/Footer";
import {AboutMe} from "./portfolio/components/aboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <AboutMe urlImg={"https://trydo.rainbowit.net/assets/images/about/about-8.jpg"}/>
      <MySkills/>
      <MyLatestProjects/>
      <CallToAction/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
