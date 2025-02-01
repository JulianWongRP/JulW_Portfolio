import React, { useState } from 'react';
import './all.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Id5 = ({ navigateTo }) => {
    const galleryImages = ["travel-list1.png"];

    return (
        <div className="id1">

            {/* <button className="naviButton" onClick={() => navigateTo('allprojects')}>Back to Home</button> */}
            <div className="IndvTemplate">
                <div className="container">
                    <div>
                        <div className='allprojbutton'>
                            <button onClick={() => navigateTo('allprojects')}>SEE ALL PROJECTS</button>
                        </div>
                        <div className='homeButton'>
                            <button onClick={() => navigateTo('home')}>Home</button>
                        </div>
                        <div className="content">
                            <div className="gifContainer">
                                <img alt="travel list app" src="My-travel-vid.gif "
                />
                                <p>Travel List - Web App</p>
                            </div>
                            <div className="contentBx">
                                <div className="infoContainer">
                                    <div className="content-key">
                                        <p>CATEGORY:</p>
                                        <p>LANGUAGE/TOOLS USED:</p>
                                        <p>LIVE PAGE:</p>
                                        <p>IMAGES:</p>
                                    </div>
                                    <div className="content-value">
                                        <p>Web Design and Developement</p>
                                        <p>React, CSS</p>
                                        <p><a href='https://julianwongrp.github.io/travel-list-app-2.0/'>Click for Page</a></p>
                                        <DemoButton images={galleryImages} />
                                    </div>

                                </div>
                            </div>
                            <div className="contentPara">
                                <p>
                                    This is a Travel Packing List Web Application, it helps to aid in the keeping track of items that needs to be packed for the users next trip.
                                    <br></br>
                                    <br></br>
                                    Using React (Javascript), I coded the application to Add, Delete with additional features such as packing everything at once or removing everything at once.
                                    <br></br>
                                    <br></br>
                                    I also added some styles to give more usability and make it more visually appealing.
                                    <br></br><br></br>
                                    <a href='https://github.com/JulianWongRP/travel-list-app-2.0/'> Github Repository</a>
                                </p>
                                <br></br>
                                <br></br>
                                <p> 
                                </p>


                            </div>

                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>

        </div >


    );
};

const DemoButton = ({ images }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal((prev) => !prev);
    };

    return (
        <div>
            <button onClick={toggleModal} className="demo-button">
                See Images
            </button>

            {showModal && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button onClick={toggleModal} className="close-button">
                            X
                        </button>
                        <Carousel showThumbs={false}>
                            {images.map((img, index) => (
                                <div key={index}>
                                    <img src={img} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Id5;
