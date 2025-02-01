import React, { useState } from 'react';
import './all.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Id6 = ({ navigateTo }) => {
    const galleryImages = ["NB1.png", "NB2.png","NB3.png","NB4.png","NB5.png"];

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
                                <img alt="Notebound Wireframe" src="NB1.png"
                />
                                <p>NoteBound - Figma</p>
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
                                        <p>Web Design</p>
                                        <p>Figma</p>
                                        <p><a href="https://www.figma.com/proto/a30bkZrrkUBRePUBetBgoo/NoteBound-Low-Fidelity-Wireframe?node-id=0-1&t=csEDeFpt91A6gUGJ-1">Click for prototype</a></p>
                                        <DemoButton images={galleryImages} />
                                    </div>
                                  

                                </div>
                            </div>
                            <div className="contentPara">
                                <p>
                                    Notebound is a notetaking application for users to create tasks and notes to allow them to remind themselves of assignments that they need to complete or are upcoming.
                                    <br></br>
                                    <br></br>
                                    Currently Notebound is made as a Figma Wireframe to demonstrate its functionality as an application. Implementing fundamentals of a note application together with other useful functions and purposes
                                    <br></br>
                                    <br></br><br></br>
                                    <a href="https://www.figma.com/design/a30bkZrrkUBRePUBetBgoo/NoteBound-Low-Fidelity-Wireframe?node-id=0-1&t=ePiWZ3J9aDKsTQ2C-1"> Figma Wireframe Design Link</a>
                                    <br></br>
                                    <br></br>
                                    <a href='https://youtube.com/shorts/lVeSIW-1sd0?feature=share'> Figma Prototype Video </a>

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

export default Id6;
