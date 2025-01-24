import React from 'react'; // Ensure 'React' is imported
import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        x: -500, // Start position 500px to the left (off-screen)
        opacity: 0, // Fully transparent (invisible)
    },
    animate: {
        x: 0, // Move to original position (0px)
        opacity: 1, // Fully visible
        transition: {
            duration: 1, // Animation lasts 1 second
            staggerChildren: 0.1, // Delay child animations by 0.1 seconds for a cascading effect
        },
    },
    scrollButton: {
        opacity: 0, // Start as fully transparent (invisible)
        y: 10, // Move down 10 pixels from original position
        transition: {
            duration: 2, // Animation lasts 2 seconds
            repeat: Infinity, // Loop the animation indefinitely
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0, // Start position is at the original horizontal position (0%)
    },
    animate: {
        x: "-220%", // Move to 220% left of the original position (off-screen to the left)
        transition: {
            repeat: Infinity, // Loop the animation indefinitely
            repeatType: "mirror", // Reverse the animation when it reaches the end (animate back to original)
            duration: 20, // The entire animation takes 20 seconds to complete
        },
    },
};

const Dropdown = ({ navigateTo }) => {
    const handleClick = (id) => {
        console.log(`Navigating to ${id}`);
        navigateTo(id);
    };

    return (
        <div className='dropDownProject'>
            <ul>
                <li onClick={() => handleClick('id1')}>Night Drive - Animation</li>
                <li onClick={() => handleClick('id2')}>Escape Room - VR Game</li>
                <li onClick={() => handleClick('id3')}>Workout Calendar - App</li>
                <li onClick={() => handleClick('id4')}>Placeholder</li> 
                <li onClick={() => handleClick('id5')}>Placeholder</li>
                <div style={{color: "black"}}>----------------------</div>
                <li onClick={() => handleClick('allprojects')} style={{color: "orange", fontWeight: "1000", fontSize: "20px"}}>All Projects</li>
            </ul>
        </div>
    );
};



const Hero = ({ openProjects, navigateTo }) => { 
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    {openProjects && <Dropdown navigateTo={navigateTo} />} {/* Pass navigateTo to Dropdown */}
                    <motion.h2 variants={textVariants}>JULIAN WONG</motion.h2>
                    <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}><a href='#Portfolio'>Featured Works</a></motion.button>
                        <motion.button variants={textVariants}><a href="#Contact">Contact Me</a></motion.button>
                    </motion.div>
                    <motion.img src='scroll.png' alt='' variants={textVariants} animate="scrollButton" />
                </motion.div>
            </div>
            <motion.div className='slidingTextContainer' variants={sliderVariants} initial="initial" animate='animate'>
                Student Gamer Developer
            </motion.div>
            <div className="imageContainer">
                <img src='statueHD.png' alt="person" />
            </div>
        </div>
    );
};


export default Hero;

