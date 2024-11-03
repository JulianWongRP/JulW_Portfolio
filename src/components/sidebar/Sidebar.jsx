import React, { useState } from 'react';
import './Sidebar.scss';
import ToggleButton from './togglebutton/Togglebutton';
import Links from './links/Links';
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",  // Expands the shape to show the sidebar
    transition: {
      type: "spring",
      stiffness: 20,  // Slow expansion due to lower stiffness
    }
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",  // Shrinks the shape to hide the sidebar
    transition: {
      delay: 0.1,  // Delay before shrinking the sidebar
      type: "spring",
      stiffness: 400,  // Fast closing due to higher stiffness
      damping: 40,  // Controls overshooting/bouncing
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);  // Fix the useState initialization

  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
      
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} /> {/* Button to toggle the sidebar */}
    </motion.div>
  );
};

export default Sidebar;

{/* In Framer Motion, when you pass variants to a parent component, the child components can inherit or use those variants as long as they are correctly linked via the variants prop. */ }
// clip path allows to create any custom shape



//Why you cant see the Links when the the sidebar is closed//
//When you apply the clipPath animation to shrink the sidebar (like using "circle(30px at 50px 50px)"), the Links component is still there, but its parent container (.bg) is being clipped down to a tiny area. Since the visible area is reduced to a small circle, any content inside (like the Links) is essentially outside the visible area or so small that you can't see it.//