import React from 'react';
import "./navbar.scss";
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = ({ setOpenProjects }) => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src='PDlogo.png' style={{ maxWidth: 150 }} />
        </motion.span>

        <div className="social">
          <a href='https://www.linkedin.com/in/jl-wg30303/'><img src="LinkedIn1.png" alt="LinkedIn" /></a>
          <a href='https://www.instagram.com/jul_wyh/'><img src="instagram.png" alt="instagram" /></a>
          <a href='https://github.com/JulianWongRP'><img src="githubs.png" alt="github" /></a>

          <button onClick={() => setOpenProjects((prev) => !prev)}>View Projects</button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
