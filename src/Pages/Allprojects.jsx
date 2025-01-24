import React from 'react';
import '../Pages/Allprojects.scss';

const Allprojects = ({ navigateTo }) => {
    // Project data array
    const projects = [
        {
            id: 'id1',
            image: 'ND1.jpg',
            title: 'Blender Project',
            subtitle: 'Night Drive',
            action: () => navigateTo('id1'),
        },
        {
            id: 'id2',
            image: 'ER1.png',
            title: 'Unity VR Game',
            subtitle: 'Escape Room',
            action: () => navigateTo('id2'),
        },
        {
            id: 'id3',
            image: 'websitehomepage.png',
            title: 'Web Application',
            subtitle: 'Workout Calendar',
            action: () => navigateTo('id3'),
        },
        {
            id: 'id4',
            image: 'MA1.png',
            title: 'Mobile Application',
            subtitle: 'Pokemon Index',
            action: () => navigateTo('id4'),
        },
        {
            id: 'id5',
            image: 'websitehomepage.png',
            title: 'Application',
            subtitle: 'Workout Calendar',
            action: () => navigateTo('id5'),
        },

    ];

    return (
        <div className="Allprojects">
            <div className="headerContainer">
                <h1 className="title">All Projects</h1>
                <div className="button">
                    <button onClick={() => navigateTo('home')}>Back to Home</button>
                </div>
            </div>
            <div className="container">
                {projects.map((project, index) => (
                    <div className="card" key={index}>
                        <div className="content">
                            <div className="imgBx">
                                <img src={project.image} alt={`${project.title}`} />
                            </div>
                            <div className="contentBx">
                                <br />
                                <span>
                                    {project.title}: <span>{project.subtitle}</span>
                                </span>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                {project.action ? (
                                    <button onClick={project.action}>See Details</button>
                                ) : (
                                    []
                                )}
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Allprojects;
