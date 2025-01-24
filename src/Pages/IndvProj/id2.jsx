import React, { useState } from 'react';
import './all.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Id2 = ({ navigateTo }) => {
  const galleryImages = ['ER1.png', 'ER2.png', 'ER3.png', 'ER4.png'];

  return (
    <div className="id1">

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
                <img alt="VR Gif" src="VR.gif" />
                <p>Escape Room - VR Game</p>
              </div>
              <div className="contentBx">
                <div className="infoContainer">
                  <div className="content-key">
                    <p>CATEGORY:</p>
                    <p>LANGUAGE/TOOLS USED:</p>
                    <p>IMAGES:</p>
                  </div>
                  <div className="content-value">
                    <p>Game Design</p>
                    <p>C#, Unity</p>
                    <DemoButton images={galleryImages} />
                  </div>

                </div>
              </div>
              <div className="contentPara">
                <p>
                Made with Unity5, I have created a playable VR Puzzle Game. Using C#, I have coded puzzles for players to try and solve, so that they can escape from the rooms.
                  <br></br>
                  <br></br>
                  The Genre of “MazeRooms” is a horror/maze/puzzle that has the following narrative. If you are not careful, you will encounter strange occurrences in the “MazeRooms”. Puzzles and obstacles block your way to your way of freedom, and you have to escape the rooms without dying.
                  <br></br>
                  <br></br>
                I am keen to explore this passion further with more side projects to create video games that I like in the future such as turn based First Peron Shooters (FPS)
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
