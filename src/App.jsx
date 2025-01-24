import React, { useState } from 'react';
import "./Home.scss";
import NavBar from "./Components/Navbar/navbar.jsx";
import Hero from "./Components/Hero/hero.jsx";
import Parallex from "./Components/Parallex/Parallex.jsx";
import About from "./Components/About/AboutMe.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Contact from "./Components/Contact/Contact.jsx"
import Allprojects from './Allprojects';

import Id1 from "./Components/IndvProj/id1.jsx"
import Id2 from "./Components/IndvProj/id2.jsx"
import Id3 from "./Components/IndvProj/id3.jsx"


const App = () => {
    const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'allprojects'

    const navigateTo = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Home/>
            {currentPage === 'home' && <Home navigateTo={navigateTo} />}
            {currentPage === 'allprojects' && <Allprojects navigateTo={navigateTo} />}
            {currentPage === 'id1' && <Id1 navigateTo={navigateTo}/>}
            {currentPage === 'id2' && <Id2 navigateTo={navigateTo}/>}
            {currentPage === 'id3' && <Id3 navigateTo={navigateTo}/>}
            {currentPage === 'id4' && <Id4 navigateTo={navigateTo}/>}
            {currentPage === 'id5' && <Id5 navigateTo={navigateTo}/>}
        </div>
    );
};



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

export default App;
