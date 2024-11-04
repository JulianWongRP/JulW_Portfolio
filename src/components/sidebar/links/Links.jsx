import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemvariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};



const items = [
  "Homepage",
  "About",
  "Portfolio",
  "Contact",
  
];

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -20 },
};

const Links = () => {
  return (
    <motion.div className='links' variants={variants} >
      {items.map(item => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          className="link-item"
          whileHover={{scale:1.1}} 
          whileTap={{scale:0.95}}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
