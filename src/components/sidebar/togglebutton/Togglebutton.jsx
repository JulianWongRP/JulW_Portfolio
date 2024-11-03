import React from 'react';
import { motion } from 'framer-motion';

const ToggleButton = ({ setOpen }) => {
  return (
    // when I click this button, it will toggle the state. "(prev => !prev)" flips the current state.
    <button onClick={() => setOpen(prev => !prev)}>
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" }, // Straight line (closed)
            open: { d: "M 3 16.5 L 17 2.5" }  // Diagonal line (open)
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: {opacity: 1}, // Middle line remains horizontal
            open: { opacity: 0 } // Middle line disappears on open
          }}
          
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" }, // Bottom line (closed)
            open: { d: "M 3 2.5 L 17 16.346" }  // Diagonal line (open)
          }}
        />
      </svg>
    </button>
  )
}

export default ToggleButton;
