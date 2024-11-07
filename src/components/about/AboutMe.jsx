import React from 'react';
import './aboutMe.scss';

const About = () => {
  return (
    <div className="aboutMe">
  
      <div className="textContainer">
        <span className="Hello">About</span>
        <span className='desc'>I am Julian Wong. I am a Singaporean and a current
        Republic Polytechnic Year 2 Student. I am also currently
        studying in the Sector of Infocomm Technology. My favourite
        color is Purple and I like to eat!<br/><br/>
        I am currently a practitioner in Taekwondo (Blue-Tip), and I have
        participated in competitions.
        I also have a knack for Blender 3D modeling, and I enjoy going to
        the gym when I have the time too!
        </span>
      </div>


      <div className="polaroidCont">
        <div className="item">
          <div className="polaroid">
            <img
              src="weight.png"
              alt="Weights"
            />
            <div className="caption">Weight Training</div>
          </div>
        </div>
        <div className="item">
          <div className="polaroid">
            <img
              src="blender.jpg"
              alt="Weights"
            />
            <div className="caption">Blender</div>
          </div>
        </div><div className="item">
          <div className="polaroid">
            <img
              src="Taekwondo.png"
              alt="Weights"
            />
            <div className="caption">Taekwondo</div>
          </div>
        </div>
        <div className="item">
          <div className="polaroid">
            <img
              src="Html5.jpg"
              alt="Weights"
            />
            <div className="caption">HTML</div>
          </div>
        </div>
        <div className="item">
          <div className="polaroid">
            <img
              src="CSS.jpg"
              alt="Weights"
            />
            <div className="caption">CSS</div>
          </div>
        </div>
        <div className="item">
          <div className="polaroid">
            <img
              src="JS.jpg"
              alt="Weights"
            />
            <div className="caption">JavaScript</div>
          </div>
        </div>
        <div className="item">
          <div className="polaroid">
            <img
              src="SQL.jpg"
              alt="Weights"
            />
            <div className="caption">MySQL</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
