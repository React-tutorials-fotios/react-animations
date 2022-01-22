import React from "react";
import { motion } from "framer-motion";
import "../CSS/m-animation.css";

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    x: [0, 0, 22, 42, 42],
    y: [0, -44, -20, -44, 0],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 2,
      },
      y: {
        yoyo: Infinity,
        duration: 2,
        ease: "linear",
      },
      duration: 1,
      delay: 2,
    },
  },
};

const MAnimation = () => {
  return (
    <>
      <motion.div
        className="m-animation"
        variants={variants}
        initial="initial"
        animate="animate"></motion.div>
    </>
  );
};

export default MAnimation;
