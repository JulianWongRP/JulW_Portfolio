import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';   // Import Carousel from the library
import 'react-responsive-carousel/lib/styles/carousel.min.css';  // Import Carousel's default styles
import './Demobutton.scss'

const DemoButton = ({ images }) => {   {/* Accepts an array of images as a prop*/}
    const [showModal, setShowModal] = useState(false);  {/* state variable to track the modal is visiable*/}

    const handleClick = () => {
        setShowModal(!showModal);  {/* Flips the boolean value of showModal*/}
    };

    return (
        <div>
            <button onClick={handleClick} className="demo-button">
                See Demo
            </button>
            


            {/* Render the modal only if `showModal` is true */}

            {showModal && (  
                <div className="modal-overlay" onClick={() => setShowModal(false)}>  {/* Clicking the overlay closes the modal*/ }
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>  {/*Prevents modal closing when clicking inside (img etc)*/}
                        <button onClick={handleClick} className="close-button">X</button>
                        <Carousel>
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

export default DemoButton;
