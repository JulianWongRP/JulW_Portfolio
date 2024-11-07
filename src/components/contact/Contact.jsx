import React, { useRef, useState } from 'react';
import './contact.scss';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

const variants = {
    initial: { y: 500, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_e4e04jf', 'template_98u49ma', formRef.current, '4ggbym6GxcUR5Nggt')
            .then(
                () => {
                    setSuccess(true);
                    setError(null);
                    formRef.current.reset();
                },
                () => {
                    setError(true);
                    setSuccess(null);
                },
            );
    };

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div ref={ref} className='contact' variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1>Let's work together</motion.h1>
                <motion.div className="item" variants={variants} key="mail">
                    <h2>Mail</h2>
                    <span>23019734@myrp.edu.sg</span>
                </motion.div>
                <motion.div className="item" variants={variants} key="location">
                    <h2>Location</h2>
                    <span>Singapore, SG</span>
                </motion.div>
                <motion.div className="item" variants={variants} key="resume">
                    <h2>Resume</h2>
                    <span><a href=''>Placeholder</a></span>
                </motion.div>
            </motion.div>
            <motion.div className="formContainer">
                <motion.div className="phoneSvg"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 3, duration: 1 }}>
                    <svg width="450px" height="450px" viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 1 }}
                            className="c"
                            d="m19.308,12.467c-.4234-1.4115-.7215-2.8773-.8813-4.3843-.1571-1.4812-1.449-2.5826-2.9385-2.5826h-6.9092c-1.7767,0-3.1454,1.5345-2.989,3.3043,1.5754,17.8285,15.7771,32.0302,33.6056,33.6056,1.7698.1564,3.3043-1.2073,3.3043-2.9839v-6.1595c0-2.2488-1.1015-3.5362-2.5826-3.6932-1.507-.1598-2.9728-.4579-4.3843-.8813-1.7266-.5179-3.5957-.0304-4.8704,1.2442l-2.9566,2.9566c-5.326-2.8825-9.7164-7.2729-12.5989-12.5989l2.9566-2.9567c1.2746-1.2746,1.7621-3.1438,1.2442-4.8703Z" /><line className="c" x1="26.1873" y1="34.4116" x2="27.706" y2="32.8928" /><line className="c" x1="13.5888" y1="21.8131" x2="15.1076" y2="20.2944" />
                    </svg>
                </motion.div>
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}>
                    <input type='text' required placeholder="Name" name="name" />
                    <input type='email' required placeholder="Email" name="email"/>
                    <textarea rows={8} placeholder='Message' name="message"/>
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </motion.div>
        </motion.div>
    )
}

export default Contact;
