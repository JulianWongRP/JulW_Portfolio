import React, { useState } from "react"; // Make sure 'useState' is imported
import "../Pages/Home.scss";
import NavBar from '../Components/Navbar/navbar.jsx';
import Hero from "../Components/Hero/hero.jsx";
import Parallex from "../Components/Parallex/Parallex.jsx";
import About from "../Components/About/AboutMe.jsx";
import Portfolio from "../Components/Portfolio/Portfolio.jsx";
import Contact from "../Components/Contact/Contact.jsx"


const App = ({ navigateTo }) => {
    const [openProjects, setOpenProjects] = useState(false);

    return (
        <div className="Home">
            <section id="Homepage">
                <NavBar setOpenProjects={setOpenProjects} />
                <Hero openProjects={openProjects} navigateTo={navigateTo}/> {/* Passing openProjects correctly */}
            </section>
            <section id="About"><Parallex type="about" /></section>
            <section><About /></section>
            <section id="Portfolio"><Parallex type="portfolio" /></section>
            <Portfolio navigateTo={navigateTo} />
            <section id="Contact">
                <Contact />
            </section>
        </div>
    );
};

export default App;
