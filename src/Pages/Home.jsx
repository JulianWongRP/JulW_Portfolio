import React, { useState } from "react"; // Make sure 'useState' is imported
import "../Pages/Home.scss";
import NavBar from '../Components/navbar/Navbar';
import Hero from "../Components/hero/hero";
import Parallex from "../components/parallex/Parallex";
import About from "../components/about/AboutMe";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";


const Home = ({ navigateTo }) => {
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

export default Home;
