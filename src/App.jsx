import React, { useState } from 'react';
import Home from "./Pages/Home"
import Allprojects from './Pages/Allprojects';
import Id1 from './Pages/IndvProj/id1';
import Id2 from './Pages/IndvProj/id2'
import Id3 from './Pages/IndvProj/id3'


const App = () => {
    const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'allprojects'

    const navigateTo = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            
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

export default App;
