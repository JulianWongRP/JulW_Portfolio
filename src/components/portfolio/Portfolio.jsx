import React, { useRef } from 'react';
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import DemoButton from './DemoButton'; // Import DemoButton


const items = [
    {
        id: 1,
        title: "Workout Calender Appliaction",
        images: ["websitehomepage.png", "workouts.png", "addroutine.png", "addworkout.png"],
        desc: "This Node.JS Mini Project is a Mini Workout Routine Calender which comprises of different components which include: Adding Workout Dates, Adding different types of Workouts, Editing & Deleting Different Routines. Using MySQL Database, There are data stored that will update based on your usage of the mini web application. "
    },
    {
        id: 2,
        title: "Blender Project: Night Drive",
        images: ["ND1.jpg", "ND2.jpg", "ND3.jpg"], 
        desc: "This is Short Animation comprises of 3D elements from Blender Engine, using different components of Tools and Assets, I am able to create a semi-futurstic animation of a Drive towards the sunset."
    },
    {
        id: 3,
        title: "Unity5 VR Game: EscapeRooms",
        images: ["ER1.png","ER2.png","ER3.png","ER4.png"],
        desc: "Made with Unity5, I have created a playable VR Puzzle Game. Using C#, I have coded puzzles for players to try and solve, so that they can Escape from the Rooms."
    },

];


const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.images[0]} alt={item.title} /> {/* Display first image */}
                    </div>

                    <motion.div className="textContainer" style={{ y }}>
                        <h2 style={{ color: "lightgrey", fontWeight: 600, lineHeight: 0.99 }}>
                            {item.title}
                        </h2>
                        <p>{item.desc}</p>
                        
                    </motion.div>
                    <DemoButton images={item.images} /> {/* Pass only images */}
                    

                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;