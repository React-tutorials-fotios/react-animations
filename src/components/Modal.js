import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/modal.css";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
  exit: { y: "100vh", opacity: 0 },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit">
          <motion.div className="modal" variants={modal}>
            <p>Welcome to our page!</p>
            <p>Please search for a movie.</p>
            <button onClick={() => setShowModal(false)}>OK</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
