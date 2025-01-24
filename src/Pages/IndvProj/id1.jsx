import React, { useState } from 'react';
import './all.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Id2 = ({ navigateTo }) => {
  const galleryImages = ['ND1.jpg', 'ND2.jpg', 'ND3.jpg'];

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
                <img alt="Blender Night Driver Gif" src="Cycles -Edited.gif" />
                <p>Night Drive - Animation</p>
              </div>
              <div className="contentBx">
                <div className="infoContainer">
                  <div className="content-key">
                    <p>CATEGORY:</p>
                    <p>LANGUAGE/TOOLS USED:</p>
                    <p>IMAGES:</p>
                  </div>
                  <div className="content-value">
                    <p>2D/3D Modelling, Animations</p>
                    <p>Blender</p>
                    <DemoButton images={galleryImages} />
                  </div>

                </div>
              </div>
              <div className="contentPara">
                <p>
                  This is a short animation that comprises 3D elements from Blender Engine. Using different components of tools and assets, I was able to create a semi-futuristic animation of a car driving towards the sunset.
                  <br></br>
                  <br></br>
                  Using the tools provided, I shaped my structures and components slowly, making sure that each area compliments one another. 
                  <br></br>
                  Using Animations tools, I gave a finishing touch to my project and made it cool and fascinating short animation.
                  <br></br>
                  <br></br>
                  This project of mine started after I had finished my O levels. I was interested and wanted to explore into the world of 3D and 2D modelling which I then took online courses to learnt how to use Blender. Through this work, I truly beileve I am able to explore areas unfamiliar to me and try out new things.
                </p>
              </div>

              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>

    </div>


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

export default Id2;
