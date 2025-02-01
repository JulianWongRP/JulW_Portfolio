import React, { useState } from 'react';
import './all.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Id10 = ({ navigateTo }) => {
    const galleryImages = ["Design1.png", "Design2.png", "Design3.png", "Design4.png", "Design5.png", "Design6.png", "Design7.png"];

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
                                <img alt="Prototype Portfolio" src="Design1.png"
                />
                                <p>Portfolio - Prototype</p>
                            </div>
                            <div className="contentBx">
                                <div className="infoContainer">
                                    <div className="content-key">
                                        <p>CATEGORY:</p>
                                        <p>LANGUAGE/TOOLS USED:</p>
                                        
                                        <p>IMAGES:</p>
                                    </div>
                                    <div className="content-value">
                                        <p>Design</p>
                                        <p>Adobe Illstructor, Adobe Photoshop, Adobe Color</p>
                                        
                                        <DemoButton images={galleryImages} />
                                    </div>

                                </div>
                            </div>
                            <div className="contentPara">
                                <p>
                                    Before I started working on my website, I had a prototype design for my currently portfolio. Ill call this "Phase 1" Portfolio.
                                    <br></br>
                                    <br></br>
                                    The whole purpose of my color scheme to be more analogus is to convey a chill and intriguing personality through a retro aesthetic. Having the influence of enjoying the "vaporwave" genre, it gave me the idea of create the portfolio aesthetic to be similar of that area.
                                    <br></br>
                                    <br></br>
                                    With the current portfolio, I feel that I reached the satisfactory level of what I was planning initially. All pages of the portfolio always try to convey what I wantto present and still allows for interesting and fun user interactions and animations.
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

export default Id10;
