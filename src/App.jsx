import React, { useState } from 'react';
import Home from "./Pages/Home"
import Cursor from "./components/cursor/Cursor";
import Allprojects from './Pages/Allprojects';
import Id1 from './Pages/IndvProj/id1';
import Id2 from './Pages/IndvProj/id2';
import Id3 from './Pages/IndvProj/id3';
import Id4 from './Pages/IndvProj/id4';
import Id5 from './Pages/IndvProj/id5';
import Id6 from './Pages/IndvProj/id6';
import Id7 from './Pages/IndvProj/id7';
import Id8 from './Pages/IndvProj/id8';
import Id9 from './Pages/IndvProj/id9';
import Id10 from './Pages/IndvProj/id10';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'allprojects'

    const navigateTo = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Cursor/>
            {currentPage === 'home' && <Home navigateTo={navigateTo} />}
            {currentPage === 'allprojects' && <Allprojects navigateTo={navigateTo} />}
            {currentPage === 'id1' && <Id1 navigateTo={navigateTo}/>}
            {currentPage === 'id2' && <Id2 navigateTo={navigateTo}/>}
            {currentPage === 'id3' && <Id3 navigateTo={navigateTo}/>}
            {currentPage === 'id4' && <Id4 navigateTo={navigateTo}/>}
            {currentPage === 'id5' && <Id5 navigateTo={navigateTo}/>}
            {currentPage === 'id6' && <Id6 navigateTo={navigateTo}/>}
            {currentPage === 'id7' && <Id7 navigateTo={navigateTo}/>}
            {currentPage === 'id8' && <Id8 navigateTo={navigateTo}/>}
            {currentPage === 'id9' && <Id9 navigateTo={navigateTo}/>}
            {currentPage === 'id10' && <Id10 navigateTo={navigateTo}/>}
        </div>
    );
};

export default App;
