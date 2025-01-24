import React, { useState } from 'react';
import './all.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Id3 = ({ navigateTo }) => {
  const galleryImages = ["websitehomepage.png", "workouts.png", "addroutine.png", "addworkout.png"];

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
                <img alt="Blender Night Driver Gif" src="WKAmp4.gif
                " />
                <p>Workout Calendar - App</p>
              </div>
              <div className="contentBx">
                <div className="infoContainer">
                  <div className="content-key">
                    <p>CATEGORY:</p>
                    <p>LANGUAGE/TOOLS USED:</p>
                    <p>IMAGES:</p>
                  </div>
                  <div className="content-value">
                    <p>Web Design and Developement</p>
                    <p>Javascript, CSS</p>
                    <DemoButton images={galleryImages} />
                  </div>

                </div>
              </div>
              <div className="contentPara">
                <p>
                This Node.JS Mini Project is a Mini Workout Routine Calendar which comprises of different components which include: Adding Workout Dates, Adding different types of Workouts, Editing & Deleting Different Routines. Using MySQL Database, There are data stored that will update based on your usage of the mini web application.
                  <br></br>
                  <br></br>
                  My target audience for this  web application is for users who wish to track their gym progress over a certain period of time.
                  <br></br>
                  <br></br>
                  Additional feature that I want to add in the future would be a BMI Calculator, which calculates BMI to check whether you are within or out of the scale
                  <br></br>
                  <br></br>
                  Through this project, I gained valuable experience in back-end development by working with SQL database. I also applied styling techniques to enhance the website's usability and make it more visually appealing.
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

export default Id3;
