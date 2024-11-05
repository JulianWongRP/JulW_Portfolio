import React, { useRef } from 'react'
import "./Parallex.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallex = ({ type }) => {
    // Reference to the main div
    const ref = useRef();

    // Get scroll progress for the target
    const { scrollYProgress } = useScroll({ 
        target: ref,
        offset: ["start start", "end start"]
    });

    // Transformations for text and background elements
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "350%"]);

    return (
        <div
            className="parallex"
            ref={ref}
        >
            {/* Parallax moving text */}
            <motion.h1 style={{ y: yText }}>
                {type === "about" ? "Who Am I?" : "What I have done?"}
            </motion.h1>

            {/* Parallax moving background elements */}
            <motion.div className="mountains"></motion.div>
            <motion.div style={{ y: yBg }} className="planets"></motion.div>
            <motion.div style={{ x: yBg }}className="stars"></motion.div>
        </div>
    );
}

export default Parallex;
