import React, { useRef } from 'react';
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "Node.JS Mini Project",
        img: "https://images.pexels.com/photos/12419737/pexels-photo-12419737.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sapiente laudantium quaerat vel quo ullam corrupti distinctio, reiciendis vitae beatae esse fuga facere ut commodi recusandae rem nostrum tempora deleniti."
    },
    {
        id: 2,
        title: "Blender Project: Night Drive",
        img: "https://images.pexels.com/photos/29074352/pexels-photo-29074352/free-photo-of-aerial-view-of-offshore-wind-farm-with-turbines.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sapiente laudantium quaerat vel quo ullam corrupti distinctio, reiciendis vitae beatae esse fuga facere ut commodi recusandae rem nostrum tempora deleniti."
    },
    {
        id: 3,
        title: "Unity5 VR Game: EscapeRooms",
        img: "https://images.pexels.com/photos/27920659/pexels-photo-27920659/free-photo-of-a-person-paragliding-in-the-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sapiente laudantium quaerat vel quo ullam corrupti distinctio, reiciendis vitae beatae esse fuga facere ut commodi recusandae rem nostrum tempora deleniti."
    },
    {
        id: 4,
        title: " Music App",
        img: "https://images.pexels.com/photos/27402087/pexels-photo-27402087/free-photo-of-a-grouper-fish-underwater.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sapiente laudantium quaerat vel quo ullam corrupti distinctio, reiciendis vitae beatae esse fuga facere ut commodi recusandae rem nostrum tempora deleniti."
    },

];


const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2 style={{color:"lightgrey", fontWeight: 600, lineHeight: 0.99}}>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}




const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })


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

    )
}

export default Portfolio