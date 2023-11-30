import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/about';
import Skills from './components/about/skills/Skills';
import Qualifications from './components/qualifications/Qualifications';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';



function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Qualifications/>
        <Contact/>
      </main>
        <Footer/>
        <ScrollUp/>
    </div>

  );
}

export default App;
