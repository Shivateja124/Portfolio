import './App.css';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Education from './Components/Education';
import Skills from './Components/Skills';
import CodingProfiles from './Components/CodingProfiles';
import Work from './Components/Work';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='total'>
     <NavBar />

      <div id="home" className="section">
        <Home />
      </div>

      <div id="education" className="section">
        <Education />
      </div>

      <div id="skills" className="section">
        <Skills />
      </div>

      <div id="codingprofiles" className="section">
        <CodingProfiles />
      </div>

      <div id="work" className="section">
        <Work />
      </div>

      <div id="contact" className="section">
        <Contact />
      </div>
    </div>
  )

}


export default App;
