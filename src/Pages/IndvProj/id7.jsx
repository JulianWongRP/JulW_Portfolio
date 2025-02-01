import React, { useState } from 'react';
import './all.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Id7 = ({ navigateTo }) => {
    const galleryImages = ["FGO1.png", "FGO2.png", 'FGO3.png'];

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
                                <img alt="Team-Selector" src="FGO1.png "
                />
                                <p>Team Selector - MobileApp</p>
                            </div>
                            <div className="contentBx">
                                <div className="infoContainer">
                                    <div className="content-key">
                                        <p>CATEGORY:</p>
                                        <p>LANGUAGE/TOOLS USED:</p>
                                        <p>VIDEO:</p>
                                        <p>IMAGES:</p>
                                    </div>
                                    <div className="content-value">
                                        <p>Mobile App Development</p>
                                        <p>react-native, Webstorm</p>
                                        <p><a href="https://youtube.com/shorts/c8jF5Vm_hgc?feature=share">Click for video</a></p>
                                        <DemoButton images={galleryImages} />
                                    </div>

                                </div>
                            </div>
                            <div className="contentPara">
                                <p>
                                    This is a Team Selector Application for games, for now I have made it dor a game called "Fate Grand Order". THe main purpose of the application is to allow the user to select 3 character from the character datasource so that the user's team can be formed.
                                    <br></br>
                                    <br></br>
                                    Using React-native, I have made create a datasource which stores different character data such as their name, class and image. Therefore if the user wants to see the available character and what characters to choose, the code will grab the data from the source and display to the user. 
                                    <br></br>
                                    <br></br>
                                    I also added some styles to give more usability and make it more visually appealing.
                                    <br></br><br></br>
                                    <a href="https://github.com/JulianWongRP/FGOTeamSelector"> Github Repository</a>
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

export default Id7;
