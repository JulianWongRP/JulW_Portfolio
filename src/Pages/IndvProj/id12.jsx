import React, { useState } from 'react';
import './all.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Id11 = ({ navigateTo }) => {
    const galleryImages = ["RM_1.png", "RM_2.png", "RM_3.png", "RM_4.png", "RM_5.png"];

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
                                <img alt="Recipe-Manager" src="RM_1.png"
                />
                                <p>Recipe Manager-Web App</p>
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
                                        <p>React, CSS, MongoDB</p>
                                        <p><a href='https://problem-statement-recipe-c2219-team-2-sjk8.onrender.com/'>Click for Page</a></p>
                                        <DemoButton images={galleryImages} />
                                    </div>

                                </div>
                            </div>
                            <div className="contentPara">
                                <p>
                                    This is a Recipe Manager Web Application used for making users save recipes on a webpage that they want to try and experiment on.
                                    <br></br>
                                    <br></br>
                                Uitilizing both Frontend (React) and Backend (MongoDB, ExpressJS). I have made it so that users can freely Sign up and Log in to their previous recipes that they already have created for easier and more convinent ways.
                                    <br></br>
                                    <br></br>
                                    I have also implemented an AI that helps to detect and give nutritional information about the the food that is given to detect.
                                    <br></br><br></br>
                                    
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

export default Id11;
