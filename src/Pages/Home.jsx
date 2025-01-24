import React, { useState } from "react"; // Make sure 'useState' is imported
import "../Pages/Home.scss";
import NavBar from '../Components/Navbar/navbar';
import Hero from "../Components/Hero/hero";
import Parallex from "../Components/Parallex/Parallex";
import About from "../Components/About/AboutMe";
import Portfolio from "../Components/Portfolio/Portfolio";
import Contact from "../Components/Contact/Contact"


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
