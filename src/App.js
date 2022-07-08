import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import Education from './components/Education';
import './Nav.css'
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="App">
      <ParticlesBackground/>
      <NavBar />
      <Banner />
      <Skills />
      <Education/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
