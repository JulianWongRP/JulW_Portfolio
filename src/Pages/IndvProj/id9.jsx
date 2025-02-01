import React, { useState } from 'react';
import './all.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Id9 = ({ navigateTo }) => {
    const galleryImages = ["BR1.png", "BR2.png", "BR3.png"];

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
                                <img alt="Blender Room" src="BR1.png"
                />
                                <p>Low Polygon Room</p>
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
                                        <p>3D Design</p>
                                        <p>Blender</p>
                                        <p><a href='https://www.youtube.com/watch?v=VoZRYWapUuI'>Click for video</a></p>
                                        <DemoButton images={galleryImages} />
                                    </div>

                                </div>
                            </div>
                            <div className="contentPara">
                                <p>
                                    This is a 3D Design of a how a low polygon room would look like using Blender. The room includes a Bed, Wardrobe, Shelf, Table, Lamp, Pciture Frames. All in Polygon Form
                                    <br></br>
                                    <br></br>
                                    This was one of the projects I worked on before going into bigger projects such as my <a onClick={() => navigateTo('id1')}>Night Drive Animation</a>. I made simple assets and tols like bevel to help smooth out the edges of furniture in the room.
                                    <br></br>
                                    <br></br>
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

export default Id9;
