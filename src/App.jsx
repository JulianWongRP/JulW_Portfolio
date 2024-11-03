import './app.scss';
import NavBar from './components/Navbar/navbar';
import Hero from './components/hero/hero';
import Parallex from './components/parallex/Parallex';
import About from './components/about/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';



const App = () => {
  return <div>
    <section id="Homepage">
      <NavBar/>
      <Hero/>
    </section>
    <section id="About"><Parallex type="about"/></section>
    <section><About/></section>
    <section id="Portfolio"><Parallex type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>

  
  </div>;
};

export default App;

