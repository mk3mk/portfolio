import './App.css';
import {MyLatestProjects} from "./portfolio/components/myLatestProjects/MyLatestProjects";
import {MySkills} from "./portfolio/components/mySkills/MySkills";
import {CallToAction} from "./portfolio/components/callToAction/CallToAction";
import {Contacts} from "./portfolio/components/contacts/Contacts";
import {Footer} from "./portfolio/components/footer/Footer";

function App() {
  return (
    <div className="App">
      <MySkills/>
      <MyLatestProjects/>
      <CallToAction/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
