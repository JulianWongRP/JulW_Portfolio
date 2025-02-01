import React, { useState } from 'react';
import './all.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Id8 = ({ navigateTo }) => {
    const galleryImages = ["SSapp1.png", "SSapp2.png", "SSkit1.png", "SSkit2.png"];

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
                                <img alt="StyleShop gif" src="C218CA3Vid.gif "
                                />
                                <p>StyleShop - UI Kit</p>
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
                                        <p>Figma UI kit (w/ Wireframe)</p>
                                        <p>Figma</p>
                                        <p><a href="https://www.figma.com/proto/ntnTy3gw3fnK7fgCtqYHZ5/23019734's-StyleShop?node-id=0-1&t=KxIkqLC731cEQoay-1">Click for Prototype</a></p>
                                        <DemoButton images={galleryImages} />
                                    </div>

                                </div>
                            </div>
                            <div className="contentPara">
                                <p>
                                    StyleShop is a centralized online shopping application that allows for users to purchase clothing.
                                    <br></br>
                                    <br></br>
                                    It is currently a Wireframe will shows the general use of the application. I have also made a UI kit, this is so that when design the wireframe, it allows for easier use of interactions and components to form the page into a prototype.
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <a href="https://www.figma.com/design/ntnTy3gw3fnK7fgCtqYHZ5/23019734's-StyleShop?node-id=0-1&t=KxIkqLC731cEQoay-1"> Figma Wireframe + UI Kit</a>
                                    <br></br>
                                    <br></br>
                                    <a href="https://youtu.be/Vwb8UbZ8i6c"> Figma Prototype Video</a>


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

export default Id8;
