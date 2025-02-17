import React, { useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import "./cursor.scss";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 }) // State to store the current mouse position

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })   // Function to update state with the mouse's current position
        }

        window.addEventListener("mousemove", mouseMove)   // event listener for mouse movement


        return () => {
            window.removeEventListener("mousemove", mouseMove)   // cleanup event listener when the component unmounts
        };
    }, []);  //makes sures thta it only mount once when the component mounts

    console.log(position)

    return (
        <motion.div className='cursor' animate={{x:position.x, y:position.y}}>

        </motion.div>
    )
}

export default Cursor