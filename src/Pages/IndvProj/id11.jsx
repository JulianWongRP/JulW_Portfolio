import React, { useState } from 'react';
import './all.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Id10 = ({ navigateTo }) => {
    

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
                                <img alt="Prototype Portfolio" src="AI1.jpg"
                />
                                <p>ActiveIcon - Figma Prototype</p>
                            </div>
                            <div className="contentBx">
                                <div className="infoContainer">
                                    <div className="content-key">
                                        <p>CATEGORY:</p>
                                        <p>LANGUAGE/TOOLS USED:</p>
                                        
                                        
                                    </div>
                                    <div className="content-value">
                                        <p>Design Prototype</p>
                                        <p>Figma</p>
                                        
                                       
                                    </div>

                                </div>
                            </div>
                            <div className="contentPara">
                                <p>
                                    What the design is all about:
                                    <br></br>
                                    <br></br>
                                    With obesity rates on the rise, many individuals struggles lack the will to track their BMI, calorie intake and physical activity effectively. The lack of tools to track such habits will often lead to increased risk of obesity and obesity-related health issues.
                                    <br></br>
                                    <br></br>
                                    My Idea is to create a straightforward and easy-to-use app that enables people to monitor their BMI, calorie intake, and physical activity, enabling them to make healthier lifestyle choices and lower their risk of obesity-related health problems.
                                    <br></br>
                                    <br></br>
                                    Therefore it is my idea to create a FIgma Wireframe that simulates an mobile application that helps and tackle the problems stated.
                                    <br></br>
                                    <br></br>
                                    <a href='https://www.figma.com/proto/oEtm7jyulYm2bqsqGPDKk8/ActiveIcon?node-id=1-2&p=f&t=NXyjKhUQqBJZhcHO-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1'>Figma Link (for Testing)</a>
                                    <br></br>
                                    <a href='https://www.figma.com/design/oEtm7jyulYm2bqsqGPDKk8/ActiveIcon?node-id=0-1&t=DAAN3tB411lj3PFX-1'>Figma Wireframe</a>
                                    <br></br>
                                    <a href='https://youtu.be/sNaIXaN4GqI'>Youtube Video</a>
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
